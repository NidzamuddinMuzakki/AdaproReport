(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1819:function(e,t,a){"use strict";a.r(t);var n=a(418),r=a(421),o=a(424),i=a(423),s=(a(500),a(0)),l=a.n(s),c=a(112),u=a(9),d=a(1216),h=a(110),p=a(1215),f=a.n(p),m=a(1167),g=(a(950),a(948)),b=a(1003),v=a.n(b),y=a(402),E=a(1006),k=(a(1184),[]),w=[],x=[],S={items:""};function O(e,t){var a=[];for(var n in e)if(e[n].parent_origin==t&&"false"!=e[n].access_view){var r=O(e,e[n].menu_id);r.length&&""==e[n].url?(e[n].children=r,a.push(e[n])):""!=e[n].url&&a.push(e[n])}return a}var N=function(){var e=Object(E.a)(v.a.mark(function e(){var t,a,n,r,o,i,s,l;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("id_token"),a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({key:t,info_data:"all"})},e.prev=2,e.next=5,fetch("https://adaproregualorapi.herokuapp.com/credential_service/get_menu",a);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,[],r.dataOrigin,S.items=r.dataChanged,k.push(O(r.dataOrigin,"")),O(r.dataOrigin,""),w.push({path:"/",exact:!0,name:"Home"}),w.push({path:"/dashboard",name:"Dashboard"}),o=[],i=Object(y.a)(r.dataOrigin);try{for(i.s();!(s=i.n()).done;)""!=(l=s.value).url&&"false"!=l.access_view&&(w.push({path:l.url,name:l.name}),x.push(l)),""!=l.url&&o.push({Name:l.name,View:"true",Create:"true",Update:"true",Delete:"true"})}catch(c){i.e(c)}finally{i.f()}return k.push(w),k.push(x),k.push(o),e.abrupt("return",k);case 25:return e.prev=25,e.t0=e.catch(2),e.abrupt("return",e.t0);case 28:case"end":return e.stop()}},e,null,[[2,25]])}));return function(){return e.apply(this,arguments)}}(),j=(a(403),localStorage.getItem("id_token"),a(1e3)),_=a(641);a(1013);var I=a(1781),R=a(1782),T=a(1016),A=a(1015),M=a.n(A),P=a(1214),C=a.n(P),z=(a(1207),new(a(1208).w3cwebsocket)("ws://adaproregualorapi.herokuapp.com")),$=function(e){var t=e.treeItems,a=e.create,n=e.update,r=e.delete1,o=e.read;return l.a.createElement(I.a,{style:{height:264,flexGrow:1,maxWidth:400},defaultCollapseIcon:l.a.createElement(M.a,null),defaultExpandIcon:l.a.createElement(C.a,null),defaultEndIcon:l.a.createElement("div",{style:{width:24}})},W(t,a,n,r,o))},L=Object(j.a)(function(e){return{root:{"&:hover > $content":{backgroundColor:"black"},"&:focus > $content, &$selected > $content":{backgroundColor:"black"},"&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":{backgroundColor:"black"}},content:{borderTopRightRadius:e.spacing(2),borderBottomRightRadius:e.spacing(2),paddingRight:e.spacing(1),fontWeight:e.typography.fontWeightMedium,"$expanded > &":{fontWeight:e.typography.fontWeightRegular}},group:{marginLeft:10,borderLeft:"1px dashed white","& $content":{paddingLeft:e.spacing(1),marginLeft:-5}},expanded:{},selected:{},label:{fontWeight:"inherit",color:"inherit"},labelRoot:{display:"flex",alignItems:"center",padding:e.spacing(.5,0)},labelIcon:{marginRight:e.spacing(1)},labelText:{fontWeight:"inherit",flexGrow:1}}});var W=function e(t,a,n,r,o){var i=L();return t.map(function(t){var a=void 0;if(t.children&&t.children.length>0&&(a=e(t.children)),0!=t.length)return l.a.createElement(R.a,{key:t.menu_id,nodeId:t.menu_id,label:l.a.createElement("div",{className:i.labelRoot},""==t.url&&""==t.parent_origin?l.a.createElement(f.a,{className:i.labelIcon}):"",""!=t.url?l.a.createElement(c.b,{style:{textDecoration:"none",color:"white",width:"200%"},to:t.url},l.a.createElement(T.a,{className:i.labelText,variant:"body2"},t.name)):l.a.createElement(T.a,{className:i.labelText,variant:"body2"},t.name)),classes:{root:i.root,content:i.content,expanded:i.expanded,selected:i.selected,group:i.group,label:i.label},children:a})})},D=l.a.lazy(function(){return Promise.all([a.e(1),a.e(4),a.e(10),a.e(16),a.e(35)]).then(a.bind(null,1793))}),J=(l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(10),a.e(15),a.e(28)]).then(a.bind(null,1798))}),l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(14)]).then(a.bind(null,1828))})),U=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(21)]).then(a.bind(null,1829))}),B=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(22)]).then(a.bind(null,1830))}),H=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(20)]).then(a.bind(null,1831))}),G=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(19)]).then(a.bind(null,1832))}),V=l.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(24)]).then(a.bind(null,1824))}),Y=(l.a.lazy(function(){return Promise.all([a.e(0),a.e(2),a.e(25),a.e(29)]).then(a.bind(null,1833))}),l.a.lazy(function(){return Promise.all([a.e(4),a.e(7),a.e(9)]).then(a.bind(null,1790))}),l.a.lazy(function(){return a.e(33).then(a.bind(null,1818))})),q=l.a.lazy(function(){return a.e(34).then(a.bind(null,1816))}),F=l.a.lazy(function(){return Promise.all([a.e(4),a.e(27)]).then(a.bind(null,1817))}),K=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).Auth=new _.a,r.createNotification=function(e){return function(){switch(e){case"info":m.NotificationManager.info("Info message");break;case"success":m.NotificationManager.success("Success message","Title here");break;case"warning":m.NotificationManager.warning("Warning message","Close after 3000ms",3e3);break;case"error":m.NotificationManager.error("Error message","Click me!",5e3,function(){alert("callback")})}}},r.loading=function(){return l.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},r._handleLogout=function(){r.Auth.logout(),r.props.history.replace("/login")},r.state={dataRoutes:[],dataAsidemenu:[],dataAccess:[],create:!1,update:!1,read:!1,delete:!1,coba:[],tanggal:""},r}return Object(r.a)(a,[{key:"componentWillMount",value:function(){var e=this;Promise.resolve(N()).then(function(t){return t.length>0?e.setState({dataAsidemenu:t[0],dataRoutes:t[1],dataAccess:t[2],coba:t[3]}):e._handleLogout()}),console.log(this.state.dataAsidemenu)}},{key:"componentDidUpdate",value:function(e,t,a){console.log(this.props.notif),this.state.tanggal.toString()!=this.props.notif.date.toString()&&(this.setState({tanggal:this.props.notif.date}),"Berhasil Menambah User"==this.props.notif.message&&z.send(JSON.stringify({type:"message",message:"Terdapat Data User Baru, Harap Reload Halaman",variant:"info",date:(new Date).toLocaleString()})),"success"==this.props.notif.variant?m.NotificationManager.success(this.props.notif.message,"Success",3e3):"error"==this.props.notif.variant?m.NotificationManager.error(this.props.notif.message,"Error",3e3):"warning"==this.props.notif.variant?m.NotificationManager.warning(this.props.notif.message,"Warning",3e3):"info"==this.props.notif.variant&&m.NotificationManager.info(this.props.notif.message,"Info",3e3)),z.onmessage=function(e){var t=JSON.parse(e.data);m.NotificationManager.info(t.message,"Info",3e3)},console.log(this.state.dataAsidemenu),console.log(this.state.dataRoutes),console.log(this.state.coba),this.state.dataAccess&&(this.props.MenuAccess(this.state.dataAccess),this.props.MenuPilihan(this.state.coba))}},{key:"signOut",value:function(e){e.preventDefault(),this.props.history.replace("/login")}},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(g.e,{fixed:!0},l.a.createElement(s.Suspense,{fallback:this.loading()},l.a.createElement(F,{onLogout:this._handleLogout}))),l.a.createElement("div",{className:"app-body"},l.a.createElement(m.NotificationContainer,null),l.a.createElement(g.h,{fixed:!0,display:"lg"},l.a.createElement(g.k,null),l.a.createElement(g.j,null),l.a.createElement(s.Suspense,null,this.state.dataAsidemenu.length>0?l.a.createElement($,{treeItems:this.state.dataAsidemenu,create:this.state.create,read:this.state.read,delete1:this.state.delete,update:this.state.update}):""),l.a.createElement(g.i,null)),l.a.createElement("main",{className:"main"},l.a.createElement(g.c,{appRoutes:this.state.dataRoutes?this.state.dataRoutes:""}),l.a.createElement(d.a,{fluid:!0},l.a.createElement(s.Suspense,{fallback:this.loading()},this.state.dataRoutes.length>0?l.a.createElement(u.d,null,this.state.dataRoutes?this.state.dataRoutes.map(function(e,t){return l.a.createElement(u.b,{key:t,path:e.path,exact:e.exact},"Dashboard"==e.name?l.a.createElement(D,null):"user"==e.name?l.a.createElement(J,null):"role"==e.name?l.a.createElement(G,null):"log action"==e.name?l.a.createElement(V,null):"group"==e.name?l.a.createElement(B,null):"department"==e.name?l.a.createElement(U,null):"branch"==e.name?l.a.createElement(H,null):l.a.createElement(D,null))}):"",l.a.createElement(u.a,{from:"/",to:"/dashboard"})):""))),l.a.createElement(g.a,{fixed:!0},l.a.createElement(s.Suspense,{fallback:this.loading()},l.a.createElement(Y,null)))),l.a.createElement(g.d,null,l.a.createElement(s.Suspense,{fallback:this.loading()},l.a.createElement(q,null))))}}]),a}(s.Component),Q=Object(h.connect)(function(e){return{notif:e.Notif}},function(e){return{accessuser:function(t,a,n,r){return e({type:"YES",payload:{accesscreate:t,accessview:a,accessupdate:n,accessdelete:r}})},MenuAccess:function(t){return e({type:"MenuAccess",payload:{data:t}})},MenuPilihan:function(t){return e({type:"MenuPilihan",payload:{data:t}})}}})(K);t.default=function(e){var t=new _.a;return function(a){Object(o.a)(c,a);var s=Object(i.a)(c);function c(){var e;Object(n.a)(this,c);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=s.call.apply(s,[this].concat(a))).state={confirm:null,loaded:!1},e}return Object(r.a)(c,[{key:"componentWillMount",value:function(){if(t.loggedIn())try{var e=t.getConfirm();console.log("confirmation is ",e),this.setState({confirm:e,loaded:!0})}catch(a){console.log(a),t.logout(),this.props.history.replace("/login")}else this.props.history.replace("/login")}},{key:"render",value:function(){return!0===this.state.loaded?this.state.confirm?(console.log("confirmed."),l.a.createElement(e,Object.assign({},this.props,{hisotry:this.props.history,confirm:this.state.confirm}))):(console.log("not confirmed."),null):null}}]),c}(s.Component)}(Q)},403:function(e,t,a){"use strict";var n=a(640),r=a.n(n);t.a=r.a.create({baseURL:"https://adaproregualorapi.herokuapp.com/credential_service"})},641:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(1),r=a(418),o=a(825),i=a.n(o),s=(a(110),function e(){var t=this;Object(r.a)(this,e),this.login=function(e,a){return t.fetch("https://adaproregualorapi.herokuapp.com/credential_service/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:a})}).then(function(e){return t.setToken(e.data),console.log(e.data),e})},this.loggedIn=function(){var e=t.getToken();return!!e&&!t.isTokenExpired(e)},this.isTokenExpired=function(e){try{return i()(e).exp<Date.now()/1e3}catch(t){return console.log("Token expired."),!1}},this.setToken=function(e){localStorage.setItem("id_token",e)},this.getToken=function(){return localStorage.getItem("id_token")},this.logout=function(){localStorage.removeItem("id_token")},this.getConfirm=function(){var e=i()(t.getToken());return console.log("Received answer."),e},this.fetch=function(e,a){var r={Accept:"application/json","Content-Type":"application/json"};return t.loggedIn()&&(r.Authorization="Bearer "+t.getToken()),fetch(e,Object(n.a)({headers:r},a)).then(t._checkStatus).then(function(e){return e.json()})},this._checkStatus=function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}})}}]);
//# sourceMappingURL=30.64381489.chunk.js.map