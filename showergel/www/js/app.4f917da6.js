(function(e){function t(t){for(var r,a,o=t[0],u=t[1],s=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i={app:0},c=[];function o(e){return u.p+"js/"+({about:"about","playout_history~schedule":"playout_history~schedule",playout_history:"playout_history",schedule:"schedule",users:"users"}[e]||e)+"."+{about:"055d58a2","playout_history~schedule":"c8e95f6e",playout_history:"8e9c35e7",schedule:"840cae4f",users:"b1963e30"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={playout_history:1,schedule:1,users:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about","playout_history~schedule":"playout_history~schedule",playout_history:"playout_history",schedule:"schedule",users:"users"}[e]||e)+"."+{about:"31d6cfe0","playout_history~schedule":"31d6cfe0",playout_history:"a95e7105",schedule:"ba45e7ed",users:"18190e52"}[e]+".css",i=u.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],l=s.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0398":function(e,t,n){},"3d4d":function(e,t,n){},"41cd":function(e,t,n){"use strict";n("3d4d")},5588:function(e,t,n){"use strict";n("0398")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("b0c0"),{id:"app",class:"columns"}),i={class:"column container is-fluid"};function c(e,t,n,c,o,u){var s=Object(r["y"])("Sidebar"),l=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["g"])(s,{title:e.parameters.name},null,8,["title"]),Object(r["g"])("div",i,[Object(r["g"])(l,{parameters:e.parameters},null,8,["parameters"])])])}var o=n("ba6a"),u=Object(r["M"])("data-v-636a8698");Object(r["t"])("data-v-636a8698");var s={id:"sidebar",class:"column is-narrow"},l={class:"header"},d=Object(r["g"])("p",{class:"logo"},"🧴",-1),p={class:"title"},h={class:"menu"},m={class:"menu-list"},f=Object(r["g"])("span",{class:"icon is-medium"},[Object(r["g"])("i",{class:"mdi mdi-play-box-outline"})],-1),b=Object(r["g"])("span",null,"Now playing",-1),g=Object(r["g"])("span",{class:"icon is-medium"},[Object(r["g"])("i",{class:"mdi mdi-history"})],-1),O=Object(r["g"])("span",null,"Playout History",-1),v=Object(r["g"])("span",{class:"icon is-medium"},[Object(r["g"])("i",{class:"mdi mdi-account-group"})],-1),y=Object(r["g"])("span",null,"Users",-1),j=Object(r["g"])("span",{class:"icon is-medium"},[Object(r["g"])("i",{class:"mdi mdi-calendar-clock"})],-1),_=Object(r["g"])("span",null,"Schedule",-1),S=Object(r["g"])("span",{class:"icon is-medium"},[Object(r["g"])("i",{class:"mdi mdi-information"})],-1),w=Object(r["g"])("span",null,"About",-1);Object(r["r"])();var T=u((function(e,t,n,a,i,c){var o=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])("div",s,[Object(r["g"])("div",l,[d,Object(r["g"])("h1",p,Object(r["B"])(n.title),1)]),Object(r["g"])("aside",h,[Object(r["g"])("ul",m,[Object(r["g"])("li",null,[Object(r["g"])(o,{to:"/","active-class":"is-active"},{default:u((function(){return[f,b]})),_:1})]),Object(r["g"])("li",null,[Object(r["g"])(o,{to:"/playout_history","active-class":"is-active"},{default:u((function(){return[g,O]})),_:1})]),Object(r["g"])("li",null,[Object(r["g"])(o,{to:"/users","active-class":"is-active"},{default:u((function(){return[v,y]})),_:1})]),Object(r["g"])("li",null,[Object(r["g"])(o,{to:"/schedule","active-class":"is-active"},{default:u((function(){return[j,_]})),_:1})]),Object(r["g"])("li",null,[Object(r["g"])(o,{to:"/about","active-class":"is-active"},{default:u((function(){return[S,w]})),_:1})])])])])})),k={props:["title"]};n("5588");k.render=T,k.__scopeId="data-v-636a8698";var A=k,P=Object(r["u"])({parameters:{name:"Showergel",version:"",commands:Array()}}),L={name:"Showergel",components:{Sidebar:A},data:function(){return P},methods:{onParametersResponse:function(e){this.parameters=e.data}},mounted:function(){o["a"].get("/parameters").then(this.onParametersResponse).catch((function(e){console.log(e)}))}};n("dd71");L.render=c;var B=L,D=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),x=Object(r["M"])("data-v-6f729d48");Object(r["t"])("data-v-6f729d48");var C={class:"content is-large"},E={id:"servertime"},q={id:"currentTrack"},I={key:0};Object(r["r"])();var M=x((function(e,t,n,a,i,c){return Object(r["q"])(),Object(r["d"])("div",C,[Object(r["g"])("p",E,Object(r["B"])(c.formattedServerTime),1),Object(r["g"])("h1",q,Object(r["B"])(c.currentTrack),1),i.remaining?(Object(r["q"])(),Object(r["d"])("h2",I," Remaining time (estimated): "+Object(r["B"])(i.remaining)+"s. ",1)):Object(r["e"])("",!0),Object(r["g"])("h2",null,"Since "+Object(r["B"])(c.currentOnAirTime)+" from "+Object(r["B"])(i.currentSource)+"["+Object(r["B"])(i.currentStatus)+"]",1),Object(r["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(e){return c.confirmSkip()})},"Skip")])})),N={data:function(){return{serverTime:new Date,currentArtist:"",currentTitle:"",currentSource:"",currentStatus:"connecting to Liquidsoap",currentOnAir:new Date,remaining:null,timeoutID:null}},computed:{formattedServerTime:function(){return this.serverTime.toLocaleTimeString()},currentTrack:function(){return this.currentArtist+" - "+this.currentTitle},currentOnAirTime:function(){return this.currentOnAir.toLocaleTimeString()}},methods:{getLive:function(){o["a"].get("/live").then(this.onLiveResponse).catch((function(e){console.log(e)}))},onLiveResponse:function(e){self.timeoutID=setTimeout(this.getLive,1e3),this.currentArtist=e.data.artist||"",this.currentTitle=e.data.title||"",this.currentSource=e.data.source||"",this.currentStatus=e.data.status||"",this.serverTime=new Date(e.data.server_time),this.currentOnAir=new Date(e.data.on_air),e.data.remaining?this.remaining=Math.round(e.data.remaining):this.remaining=null},skip:function(){o["a"].delete("/live").then(this.getLive).catch((function(e){console.log(e)}))},confirmSkip:function(){confirm("Skip current track ?")&&this.skip()}},mounted:function(){this.getLive()},unmounted:function(){self.timeoutID&&clearTimeout(self.timeoutID)}};n("41cd");N.render=M,N.__scopeId="data-v-6f729d48";var R=N,H=[{path:"/",alias:"/index.html",name:"NowPlaying",component:R},{path:"/playout_history",name:"Playout History",component:function(){return Promise.all([n.e("playout_history~schedule"),n.e("playout_history")]).then(n.bind(null,"90f8"))}},{path:"/users",name:"Users",component:function(){return n.e("users").then(n.bind(null,"ed81"))}},{path:"/schedule",name:"Schedule",component:function(){return Promise.all([n.e("playout_history~schedule"),n.e("schedule")]).then(n.bind(null,"6b7b"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],U=Object(D["a"])({history:Object(D["b"])("/#/"),routes:H}),J=U;n("eb46"),n("41e6");Object(r["c"])(B).use(J).mount("#app")},ba6a:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r);t["a"]=a.a.create({headers:{"Content-type":"application/json"}})},dd71:function(e,t,n){"use strict";n("f463")},f463:function(e,t,n){}});
//# sourceMappingURL=app.4f917da6.js.map