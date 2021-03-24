import logging
import re
from typing import Type, Optional
from datetime import timedelta
from threading import RLock
from telnetlib import Telnet

from showergel.metadata import to_datetime, FieldFilter

log = logging.getLogger(__name__)


class TelnetConnector:
    """
    Connects Showergel to Liquidsoap over Telnet. All method calls are thread-safe.

    This requires the Liquidsoap script to enable ``server.telnet``, with
    settings matching Showergel's configuration. For example, if the ``.liq`` sets

    .. code-block:: ocaml
        set("server.telnet",true)
        set("server.telnet.bind_addr","192.168.1.10")
        set("server.telnet.port",4444)
    
    Then Showergel configuration should contain:

    .. code-block:: ini
        [liquidsoap]
        method = telnet
        host = 192.168.1.10
        port = 4444
    
    You can also set ``timeout``, in seconds (defaults to 10).
    """
    
    UPTIME_PATTERN = re.compile(r"([0-9]+)d ([0-9]+)h ([0-9]+)m ([0-9]+)s")
    METADATA_PATTERN = re.compile(r"^([^=]+)=\"(.*)\"$")

    def __init__(self, config:dict):
        self._lock = RLock()
        self.host = config['liquidsoap']['host']
        self.port = config['liquidsoap']['port']
        if 'timeout' in config['liquidsoap']:
            self.timeout = int(config['liquidsoap']['timeout'])
        else:
            self.timeout = 10
        FieldFilter.setup(config)

        self._connection = Telnet()
        self._reconnect()

        self.soap_objects = {}
        self._soaps_updated_at = None
        self.uptime()
        self._latest_active_source = None

    def _reconnect(self):
        self._lock.acquire()
        log.info("Attempting to contact Liquidsoap over telnet @%s:%s",
            self.host, self.port)
        self._connection.open(
            host=self.host,
            port=self.port,
            timeout=self.timeout
        )
        log.info("Connected.")
        self._lock.release()

    def _command(self, command:str) -> str:
        self._lock.acquire()
        response = None
        remaining_attempts = 2
        while remaining_attempts > 0:
            # log.debug("Telnet command: %s", command)
            remaining_attempts -= 1
            try:
                self._connection.write(command.encode('utf8') + b'\n')
                line = self._connection.read_until(b'END').decode('utf8')
                response = line.rstrip("END").strip("\r\n")
                # log.debug("Telnet response: %r", response)
                return response
            except EOFError:
                if remaining_attempts:
                    self._reconnect()
                else:
                    log.critical("Failed to open connection to %s:%d", self.host, self.port)
        self._lock.release()
        return response

    def uptime(self) -> Type[timedelta]:
        """
        Observing a decreasing uptime is interpreted as an instance reboot ;
        in that case we update the list of soap objects cached internally.

        :return timedelta: the connected Liquidsoap instance's uptime
        """
        self._lock.acquire()
        parsed = self.UPTIME_PATTERN.match(self._command("uptime"))
        uptime = timedelta(
            days    = int(parsed.group(1)),
            hours   = int(parsed.group(2)),
            minutes = int(parsed.group(3)),
            seconds = int(parsed.group(4)),
        )
        if not self._soaps_updated_at or uptime < self._soaps_updated_at:
            self.soap_objects = {}
            raw = self._command("list")
            for line in raw.split("\r\n"):
                splitted = line.split(" : ")
                self.soap_objects[splitted[0]] = splitted[1]
            self._soaps_updated_at = uptime

        self._lock.release()
        return uptime

    def current(self) -> dict:
        """
        :return dict: metadata of what's currently playing
        """
        uptime = self.uptime()
        current_rid = self._command("request.on_air")
        if current_rid:
            raw = self._command("request.metadata " + current_rid)
            metadata = self._metadata_to_dict(raw)
        else:
            metadata = self._find_active_source()
            metadata.update(self._read_output_metadata())

        metadata = dict(FieldFilter.filter(metadata, filter_extra=False))

        if 'on_air' in metadata:
            metadata['on_air'] = to_datetime(metadata['on_air']).isoformat()

        metadata['uptime'] = str(uptime)
        return metadata

    @classmethod
    def _metadata_to_dict(cls, raw) -> dict:
        metadata = {}
        for line in raw.split("\n"):
            parsed = cls.METADATA_PATTERN.match(line)
            if parsed:
                metadata[parsed.group(1)] = parsed.group(2)
            else:
                log.warning("Can't parse metadata item: %r", line)
        return metadata

    def _find_active_source(self) -> dict:
        """
        May return an empty dict when nothing is found
        """
        metadata = {}
        active_source = None
        status = None
        self._lock.acquire()
        if self._latest_active_source:
            # the most common case: it's still playing
            status = self._get_active_status(self._latest_active_source)
            if status:
                active_source = self._latest_active_source
                log.debug("re-using _latest_active_source")
        if not active_source:
            for src in self.soap_objects:
                status = self._get_active_status(src)
                if status:
                    active_source = src
                    break
        if active_source:
            self._latest_active_source = active_source
            metadata['source'] = active_source
            metadata['status'] = status

        self._lock.release()
        return metadata

    STATUS_CHECK = {
        'input.http': lambda s: s.startswith("connected"),
        'input.https': lambda s: s.startswith("connected"),
        'input.harbor': lambda s: s.startswith("source client connected"),
        'input.harbor.ssl': lambda s: s.startswith("source client connected"),
    }

    def _get_active_status(self, source:str) -> Optional[str]:
        """
        :param source:str: source name
        :return str: result of source's ``status`` command / ``None`` if source is not active.
        """
        source_type = self.soap_objects[source]
        if source_type in self.STATUS_CHECK:
            status = self._command(source + ".status")
            if self.STATUS_CHECK[source_type](status):
                return status
            else:
                return None
        else:
            log.debug("Don't know how to check %s", source_type)
        return None

    def _read_output_metadata(self) -> dict:
        """
        Some inputs don't have a ``.metadata`` command. When they're playing,
        the only way to fetch current metadata is to ask an output.
        """
        for soap_name, soap_type in self.soap_objects.items():
            if soap_type.startswith('output.'):
                all_metadata = self._command(soap_name + '.metadata')
                separator = "--- 1 ---\n"
                index = all_metadata.find(separator)
                if index >= 0:
                    index += len(separator)
                    return self._metadata_to_dict(all_metadata[index:])
        return {}


# test tool against a real Liquidsoap instance:
if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    conn = TelnetConnector({
        "liquidsoap": {
            "host": "192.168.1.33",
            "port": "1234",
        },
        'metadata_log': {
            'ignore_fields': "lyrics,musicbrainz*,r128*",
        }
    })
    import time
    while True:
        print(conn.current())
        time.sleep(1.)
