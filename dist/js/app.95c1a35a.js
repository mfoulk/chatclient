(function(e){function t(t){for(var r,s,o=t[0],i=t[1],u=t[2],d=0,v=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(v.length)v.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/REPO_NAME/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"4f54":function(e,t,n){"use strict";n("d36f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,s){var o=Object(r["k"])("Chat");return Object(r["g"])(),Object(r["c"])(o)}n("b0c0");var c=Object(r["p"])("data-v-075a9b8c");Object(r["i"])("data-v-075a9b8c");var s={id:"chat"},o=Object(r["e"])("Welcome to the Vue chat app"),i={key:0},u=Object(r["e"])("!"),l={key:0},d={key:1};Object(r["h"])();var v=c((function(e,t,n,a,c,v){var f=Object(r["k"])("Conversation");return Object(r["g"])(),Object(r["c"])("div",s,[Object(r["f"])("h1",null,[o,c.nameRegistered?(Object(r["g"])(),Object(r["c"])("span",i,", "+Object(r["l"])(c.name),1)):Object(r["d"])("",!0),u]),Object(r["f"])("p",null,Object(r["l"])(c.statusString),1),c.nameRegistered?Object(r["d"])("",!0):(Object(r["g"])(),Object(r["c"])("div",l,[Object(r["n"])(Object(r["f"])("input",{onKeyup:t[1]||(t[1]=Object(r["o"])((function(){return v.registerName&&v.registerName.apply(v,arguments)}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.name=e}),placeholder:"Enter your name"},null,544),[[r["m"],c.name]]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(){return v.registerName&&v.registerName.apply(v,arguments)})},"Register name")])),c.nameRegistered&&!c.activeConversation&&c.isConnected?(Object(r["g"])(),Object(r["c"])("div",d,[Object(r["f"])("button",{onClick:t[4]||(t[4]=function(){return v.createConversation&&v.createConversation.apply(v,arguments)})},"Join chat")])):Object(r["d"])("",!0),c.activeConversation?(Object(r["g"])(),Object(r["c"])(f,{key:2,"active-conversation":c.activeConversation,name:c.name},null,8,["active-conversation","name"])):Object(r["d"])("",!0)])})),f=n("1da1"),b=(n("96cf"),n("d3b7"),n("a15b"),n("9969")),p=Object(r["p"])("data-v-6fbdd291");Object(r["i"])("data-v-6fbdd291");var g={id:"conversation"},h={class:"conversation-container"},m={class:"bubble"},j={class:"name"},O={class:"message"},C={class:"input-container"};Object(r["h"])();var y=p((function(e,t,n,a,c,s){return Object(r["g"])(),Object(r["c"])("div",g,[Object(r["f"])("div",h,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(c.messages,(function(e){var t,a,c;return Object(r["g"])(),Object(r["c"])("div",{key:e.index,class:["bubble-container",{myMessage:(null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.author)===n.name}]},[Object(r["f"])("div",m,[Object(r["f"])("div",j,Object(r["l"])(null===e||void 0===e||null===(a=e.state)||void 0===a?void 0:a.author)+":",1),Object(r["f"])("div",O,Object(r["l"])(null===e||void 0===e||null===(c=e.state)||void 0===c?void 0:c.body),1)])],2)})),128))]),Object(r["f"])("div",C,[Object(r["n"])(Object(r["f"])("input",{onKeyup:t[1]||(t[1]=Object(r["o"])((function(){return s.sendMessage&&s.sendMessage.apply(s,arguments)}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.messageText=e}),placeholder:"Enter your message"},null,544),[[r["m"],c.messageText]]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(){return s.sendMessage&&s.sendMessage.apply(s,arguments)})},"Send message")])])})),x=n("2909"),w=(n("99af"),{props:["activeConversation","name"],data:function(){return{messages:[],messageText:"",isSignedInUser:!1}},mounted:function(){var e=this;this.activeConversation.getMessages().then((function(t){e.messages=[].concat(Object(x["a"])(e.messages),Object(x["a"])(t.items))})),this.activeConversation.on("messageAdded",(function(t){e.messages=[].concat(Object(x["a"])(e.messages),[t])}))},methods:{sendMessage:function(){var e=this;this.activeConversation.sendMessage(this.messageText).then((function(){e.messageText=""}))}}});n("4f54");w.render=y,w.__scopeId="data-v-6fbdd291";var k=w,R={components:{Conversation:k},mounted:function(){this.test()},data:function(){return{statusString:"",activeConversation:null,name:"",nameRegistered:!1,isConnected:!1}},methods:{test:function(){fetch("https://apidev.loanscience.com/twilio/config").then((function(e){return console.dir(e.json())}))},initConversationsClient:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window.conversationsClient=b["Client"],e.next=3,this.getToken(this.name);case 3:return t=e.sent,e.next=6,b["Client"].create(t);case 6:this.conversationsClient=e.sent,this.statusString="Connecting to Twilio…",this.conversationsClient.on("connectionStateChanged",(function(e){switch(e){case"connected":n.statusString="You are connected.",n.isConnected=!0;break;case"disconnecting":n.statusString="Disconnecting from Twilio…";break;case"disconnected":n.statusString="Disconnected.";break;case"denied":n.statusString="Failed to connect.";break}}));case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getToken:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5001/auth/user/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.token);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),registerName:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.nameRegistered=!0,e.next=3,this.initConversationsClient();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createConversation:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.conversationsClient.getUser("User1");case 3:return e.next=5,this.conversationsClient.getUser("User2");case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e["catch"](0),console.error("Waiting for User1 and User2 client sessions"),e.abrupt("return");case 11:return e.prev=11,e.next=14,this.conversationsClient.createConversation({uniqueName:"chat"});case 14:return t=e.sent,e.next=17,t.join().catch((function(e){return console.log(e)}));case 17:return n=e.sent,e.next=20,n.add("User1").catch((function(e){return console.log("error: ",e)}));case 20:return e.next=22,n.add("User2").catch((function(e){return console.log("error: ",e)}));case 22:this.activeConversation=n,e.next=30;break;case 25:return e.prev=25,e.t1=e["catch"](11),e.next=29,this.conversationsClient.getConversationByUniqueName("chat");case 29:this.activeConversation=e.sent;case 30:case"end":return e.stop()}}),e,this,[[0,7],[11,25]])})));function t(){return e.apply(this,arguments)}return t}()}};n("5a3a");R.render=v,R.__scopeId="data-v-075a9b8c";var S=R,M={name:"App",components:{Chat:S}};n("64e9");M.render=a;var U=M;Object(r["b"])(U).mount("#app")},"5a3a":function(e,t,n){"use strict";n("5aa3")},"5aa3":function(e,t,n){},"64e9":function(e,t,n){"use strict";n("ba66")},ba66:function(e,t,n){},d36f:function(e,t,n){}});
//# sourceMappingURL=app.95c1a35a.js.map