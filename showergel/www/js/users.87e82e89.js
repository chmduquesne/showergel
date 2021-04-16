(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"92a9":function(e,t,s){"use strict";s("f001")},ed81:function(e,t,s){"use strict";s.r(t);var a=s("7a23"),n=Object(a["M"])("data-v-65266e4f");Object(a["t"])("data-v-65266e4f");var r={id:"playout_history",class:"content"},c=Object(a["g"])("h1",null,"Users",-1),o=Object(a["g"])("p",null,[Object(a["f"])(" From here you can edit usernames and passwords that will be allowed to stream, if "),Object(a["g"])("code",null,"harbor"),Object(a["f"])(" authentication "),Object(a["g"])("a",{href:"https://showergel.readthedocs.io/en/latest/liquidsoap.html#authenticating-users-on-harbor",target:"_blank"}," is set up "),Object(a["f"])(". ")],-1),d=Object(a["g"])("div",{class:"modal-background"},null,-1),l={class:"modal-card"},i={class:"modal-card-head"},u=Object(a["g"])("p",{class:"modal-card-title"},"Create user account",-1),b={class:"modal-card-body"},h=Object(a["g"])("p",null," Avoid special characters (even spaces) in usernames. ",-1),j={class:"field"},O=Object(a["g"])("label",{class:"label",for:"username"},"Username",-1),g={class:"control"},f={class:"field"},m=Object(a["g"])("label",{class:"label",for:"password"},"Pass phrase",-1),p={class:"control"},w={class:"field"},v=Object(a["g"])("label",{class:"label",for:"password_confirmation"},"Confirm pass phrase",-1),U={class:"control"},P={class:"help is-danger"},C={class:"modal-card-foot"},_=Object(a["g"])("button",{class:"button is-success",type:"submit",form:"addUser"},"Create account",-1),k={class:"table-container"},A={class:"table is-striped"},y=Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[Object(a["g"])("th",null,"Username"),Object(a["g"])("th",null,"Created"),Object(a["g"])("th",null,"Modified"),Object(a["g"])("th",null,"Actions")])],-1),M=Object(a["g"])("i",{class:"mdi mdi-lock-reset"},null,-1),q=Object(a["g"])("i",{class:"mdi mdi-account-off"},null,-1);Object(a["r"])();var F=n((function(e,t,s,n,F,K){return Object(a["q"])(),Object(a["d"])("div",r,[c,o,Object(a["g"])("button",{class:"button block is-primary is-rounded",onClick:t[1]||(t[1]=function(e){return F.showUserAdd=!0})},"Add"),Object(a["g"])("div",{class:["modal",{"is-active":F.showUserAdd}]},[d,Object(a["g"])("div",l,[Object(a["g"])("header",i,[u,Object(a["g"])("button",{class:"delete","aria-label":"close",onClick:t[2]||(t[2]=function(e){return K.resetAdd()})})]),Object(a["g"])("section",b,[Object(a["g"])("form",{onSubmit:t[6]||(t[6]=Object(a["L"])((function(e){return K.addUser()}),["prevent"])),class:"box",id:"addUser"},[h,Object(a["g"])("div",j,[O,Object(a["g"])("div",g,[Object(a["K"])(Object(a["g"])("input",{class:"input",id:"username","onUpdate:modelValue":t[3]||(t[3]=function(e){return F.addUsername=e})},null,512),[[a["F"],F.addUsername]])])]),Object(a["g"])("div",f,[m,Object(a["g"])("div",p,[Object(a["K"])(Object(a["g"])("input",{class:"input",type:"password",id:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return F.addPassword=e})},null,512),[[a["F"],F.addPassword]])])]),Object(a["g"])("div",w,[v,Object(a["g"])("div",U,[Object(a["K"])(Object(a["g"])("input",{class:"input",type:"password",id:"password_confirmation","onUpdate:modelValue":t[5]||(t[5]=function(e){return F.addPasswordConfirmation=e})},null,512),[[a["F"],F.addPasswordConfirmation]])]),Object(a["K"])(Object(a["g"])("p",P," Pass phrases don't match ",512),[[a["G"],K.addPasswordsMismatch]])])],32)]),Object(a["g"])("footer",C,[_,Object(a["g"])("button",{class:"button",onClick:t[7]||(t[7]=function(e){return K.resetAdd()})},"Cancel")])])],2),Object(a["g"])("div",k,[Object(a["g"])("table",A,[y,Object(a["g"])("tbody",null,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(F.users,(function(e){return Object(a["q"])(),Object(a["d"])("tr",{key:e.username},[Object(a["g"])("td",null,Object(a["B"])(e.username),1),Object(a["g"])("td",null,Object(a["B"])(new Date(e.created_at).toLocaleString()),1),Object(a["g"])("td",null,Object(a["B"])(new Date(e.modified_at).toLocaleString()),1),Object(a["g"])("td",null,[Object(a["g"])("button",{class:"button is-warning icon",onClick:function(t){return K.changePassword(e.username)},title:"Change pass phrase"},[M],8,["onClick"]),Object(a["g"])("button",{class:"button is-danger icon",onClick:function(t){return K.deleteUser(e.username)},title:"Remove user account"},[q],8,["onClick"])])])})),128))])])])])})),K=s("ba6a"),R={error_handler:function(e){e.response&&e.response.data.message?this.error(e.response.data.message):console.log(e)},error:function(e){alert(e)},success_handler:function(e){return function(){alert(e)}},success:function(e){alert(e)}},B={data:function(){return{addUsername:"",addPassword:"",addPasswordConfirmation:"",showUserAdd:!1,users:[]}},computed:{addPasswordsMismatch:function(){return this.addPassword!=this.addPasswordConfirmation}},methods:{getUsers:function(){K["a"].get("/users").then(this.onResults).catch(R.error_handler)},onResults:function(e){this.users=e.data.users},resetAdd:function(){this.showUserAdd=!1,this.addUsername="",this.addPassword="",this.addPasswordConfirmation=""},addUser:function(){this.addPasswordsMismatch||K["a"].put("/users",{username:this.addUsername,password:this.addPassword}).then(this.resetAdd).then(this.getUsers).catch(R.error_handler)},changePassword:function(e){var t=prompt("Please enter a new pass phrase for ".concat(e));if(t){var s=prompt("Please confirm ".concat(e,"'s new pass phrase"));s&&(s==t?K["a"].post("/users/".concat(e),{password:t}).then(R.success_handler("Pass phrase updated")).catch(R.error_handler):R.error("Pass phrases don't match !"))}},deleteUser:function(e){confirm("Really remove ".concat(e,"'s account ? All related data will be removed too."))&&K["a"].delete("/users/"+e).then(this.getUsers).catch(R.error_handler)}},mounted:function(){this.getUsers()}};s("92a9");B.render=F,B.__scopeId="data-v-65266e4f";t["default"]=B},f001:function(e,t,s){}}]);
//# sourceMappingURL=users.87e82e89.js.map