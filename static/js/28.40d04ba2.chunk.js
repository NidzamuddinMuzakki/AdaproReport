(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1032:function(e,t,a){"use strict";a.d(t,"a",function(){return G});var n=a(1),r=a(493),l=a(111),c=a(505),i=a(748),o=a(0),d=a.n(o),u=a(733),m=a(354),s=a(737),p=a(740),g=a(1800),h=a(1756),b=a(1091),E=a.n(b),f=a(1092),_=a.n(f),y=a(741),v=a(1786),O=a(752),k=a(1173),C=a(1783),S=a(1784),j=a(1785),x=a(735),N=a(494),A=a(1093),w=a.n(A),D=a(734),R=(a(175),a(998),a(110)),I=a(1094),M=a.n(I),L=(a(46),E.a,_.a,Object(u.a)(function(e){return{root:{},back:{background:"#ebeff1"},paper:{height:140,width:100},control:{padding:e.spacing(2)},popup:{"&:hover":{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}}})),U=Object(m.a)(function(e){return{root:{margin:0},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})(function(e){var t=e.children,a=e.classes,n=e.onClose,r=Object(i.a)(e,["children","classes","onClose"]);return d.a.createElement(C.a,Object.assign({disableTypography:!0,className:a.root},r),d.a.createElement(D.a,{variant:"h6"},t),n?d.a.createElement(x.a,{"aria-label":"close",className:a.closeButton,onClick:n},d.a.createElement(w.a,null)):null)}),B=Object(m.a)(function(e){return{root:{padding:e.spacing(2)}}})(S.a),P=Object(m.a)(function(e){return{root:{margin:0,padding:e.spacing(1)}}})(j.a);function G(e){var t,a=L(),i=d.a.useState(!1),u=Object(c.a)(i,2),m=u[0],b=u[1],E=d.a.useState([]),f=Object(c.a)(E,2);f[0],f[1];Date.prototype.toDateInputValue=function(){var e=new Date(this);return e.setMinutes(this.getMinutes()-this.getTimezoneOffset()),e.toJSON().slice(0,10)};Object(R.useSelector)(function(e){return e.userSettingSelected});var _=Object(R.useSelector)(function(e){return e.menupilihan.menu}),C=d.a.useState([]),S=Object(c.a)(C,2),j=(S[0],S[1],d.a.useState([])),x=Object(c.a)(j,2),A=x[0],w=x[1],D=d.a.useState((t={dept_name:"",dept_id:"",role_name:"",role_id:"",group_name:"",group_id:"",branch_id:"",branch_name:"",menu_id:"",report_id:"",module_id:"",menu_url:""},Object(l.a)(t,"menu_id",""),Object(l.a)(t,"menu_desc",""),Object(l.a)(t,"menu",_),t)),I=Object(c.a)(D,2),G=I[0],T=I[1],F=e.actionForm,H=(Object(R.useSelector)(function(e){return e.popupDepart.isOpen}),Object(R.useSelector)(function(e){return e.popupGroup.isOpen}),Object(R.useSelector)(function(e){return e.userSettingSelected})),z=d.a.useCallback(function(e){var t=localStorage.getItem("id_token");N.a.post("get_department",{key:t,dept_id:e,info_data:"detail"}).then(function(t){var a=t.data.data;T({dept_name:a["Department Name"],dept_id:e,group_id:a["Group Name"].length?a["Group Name"][0].group_id:""})})},[T]),q=d.a.useCallback(function(e){localStorage.getItem("id_token")},[T]);Object(o.useEffect)(function(){console.log(G.menu),console.log(e.dataMenuAction)},[_]);var J=d.a.useCallback(function(e){var t=localStorage.getItem("id_token");N.a.post("get_group",{key:t,group_id:e,info_data:"detail"}).then(function(e){var t=e.data.data;console.log(t["Group Name"]),T({group_name:t["Group Name"],group_id:t["Group Id"]})})},[T]),V=d.a.useCallback(function(e){localStorage.getItem("id_token")},[T]),W=d.a.useCallback(function(e){var t=localStorage.getItem("id_token");N.a.post("get_role",{key:t,role_id:e,info_data:"detail"}).then(function(t){t.data.data;var a=[];console.log(t.data.data);var n,l=Object(r.a)(t.data.data.Menu);try{for(l.s();!(n=l.n()).done;){var c=n.value;console.log(G.menu[0]),console.log(c.Name);var i,o=Object(r.a)(G.menu);try{for(o.s();!(i=o.n()).done;){i.value.Name==c.Name&&a.push(c)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){l.e(d)}finally{l.f()}0==a.length&&(a=G.menu),T({role_name:t.data.data["Role Name"],role_id:e,menu:a})})},[T]),$=d.a.useCallback(function(){var e=localStorage.getItem("id_token");N.a.post("get_group",{key:e,info_data:"all"}).then(function(e){e.data.data;w(e.data.data)})},[w]),K=function(e,t){return{type:"SELECTEDUSER",payload:{selectedUser:e,selectedId:t}}},Q=Object(R.useDispatch)(),X=function(e,t){return{type:t,payload:{isOpen:e}}},Y=function(e,t){return{target:{name:e,value:t}}},Z=d.a.useCallback(function(e){T(Object(n.a)(Object(n.a)({},G),{},Object(l.a)({},e.target.name,e.target.value)))},[G]),ee=d.a.useCallback(function(){var e;T((e={dept_name:"",dept_id:"",role_name:"",role_id:"",group_name:"",group_id:"",branch_id:"",branch_name:"",menu_id:"",report_id:"",module_id:"",menu_url:""},Object(l.a)(e,"menu_id",""),Object(l.a)(e,"menu_desc",""),Object(l.a)(e,"menu",_),e)),Q(K(0,[]))},[T]),te=(d.a.memo(function(e){return d.a.createElement("div",null)}),d.a.useCallback(function(){Q(K(0,[])),"Add Department"==e.actionForm||"Edit Department"==e.actionForm?Q(X(!1,"CLOSEDEPART")):"Add Group"==e.actionForm||"Edit Group"==e.actionForm?Q(X(!1,"CLOSEGROUP")):"Add Branch"==e.actionForm||"Edit Branch"==e.actionForm?Q(X(!1,"CLOSEBRANCH")):"Add Role"==e.actionForm||"Edit Role"==e.actionForm?Q(X(!1,"CLOSEROLE")):"Add Menu"!=e.actionForm&&"Edit Menu"!=e.actionForm||Q(X(!1,"CLOSEMENU")),b(!1),ee()},[m]));Object(o.useEffect)(function(){b(e.open),"Edit Department"==F||"Add Department"==F?($(),"Add Department"==F?ee():"Edit Department"==F&&1==H.selectedUser&&z(H.selectedId[0])):"Edit Group"==F||"Add Group"==F?"Add Group"==F?ee():"Edit Group"==F&&1==H.selectedUser&&J(H.selectedId[0]):"Edit Branch"==F||"Add Branch"==F?"Add Branch"==F?ee():"Edit Branch"==F&&1==H.selectedUser&&q(H.selectedId[0]):"Edit Role"==F||"Add Role"==F?"Add Role"==F?ee():"Edit Role"==F&&1==H.selectedUser&&W(H.selectedId[0]):"Edit Menu"!=F&&"Add Menu"!=F||("Add Menu"==F?ee():"Edit Menu"==F&&(ee(),1==H.selectedUser&&V(H.selectedId[0])))},[e.open]);return d.a.createElement("div",null,d.a.createElement(g.a,{fullWidth:!0,maxWidth:"Edit Role"==F||"Add Role"==F?"lg":"sm",style:{},onClose:te,"aria-labelledby":"customized-dialog-title",open:m},d.a.createElement(U,{style:{},id:"customized-dialog-title",onClose:te},d.a.createElement("div",{style:{display:"flex"}},d.a.createElement(h.a,{style:{width:"50px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"}},d.a.createElement(M.a,null)),d.a.createElement("div",{style:{width:"300px",height:"50px",marginLeft:"10px",alignItems:"center",justifyContent:"center"}},d.a.createElement("span",{color:"primary",style:{display:"flex",lineHeight:"50px",fontFamily:"revert",color:"primary"}},e.actionForm)))),d.a.createElement(B,{className:a.root},d.a.createElement(p.a,{container:!0,spacing:1,style:{display:"flex",justifyContent:"center",alignItems:"center"}},d.a.createElement(p.a,{item:!0,xs:"Edit Role"==F||"Add Role"==F?12:8,style:{width:"100%",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px"}},"Edit Department"==F||"Add Department"==F?d.a.createElement("div",null,d.a.createElement(O.a,{style:{width:"100%",marginTop:"10px"},label:"Department Name",onChange:Z,variant:"outlined",name:"dept_name",value:G.dept_name}),d.a.createElement(k.a,{options:A,value:G.group_id?A.find(function(e){return e.group_id==G.group_id}):"",getOptionLabel:function(e){return e["Group Name"]?e["Group Name"]:""},onChange:function(e,t){return Z(Y("group_id",t?t.group_id:""))},renderInput:function(e){return d.a.createElement(O.a,Object.assign({name:"depart",style:{marginTop:"10px"}},e,{label:"Group",variant:"outlined"}))}})):"Edit Group"==F||"Add Group"==F?d.a.createElement("div",null,d.a.createElement(O.a,{style:{width:"100%"},label:"Group ID",onChange:Z,variant:"outlined",name:"group_id",type:"number",value:G.group_id}),d.a.createElement(O.a,{style:{width:"100%",marginTop:"10px"},label:"Group Name",onChange:Z,variant:"outlined",name:"group_name",value:G.group_name})):"Edit Branch"==F||"Add Branch"==F?d.a.createElement("div",null,d.a.createElement(O.a,{style:{width:"100%"},label:"Branch ID",onChange:Z,variant:"outlined",name:"branch_id",type:"number",value:G.branch_id}),d.a.createElement(O.a,{style:{width:"100%",marginTop:"10px"},label:"Branch Name",onChange:Z,variant:"outlined",name:"branch_name",value:G.branch_name})):"Edit Role"==F||"Add Role"==F?d.a.createElement("div",null,d.a.createElement(p.a,{container:!0},d.a.createElement(p.a,{item:!0,xs:12,sm:6,md:3},d.a.createElement(p.a,{item:!0},d.a.createElement(O.a,{style:{width:"100%",marginTop:"10px"},label:"Role Name",onChange:Z,variant:"outlined",name:"role_name",value:G.role_name}))),d.a.createElement(p.a,{container:!0,xs:12,sm:6,md:9},G.menu?G.menu.map(function(e,t){return d.a.createElement(p.a,{container:!0},d.a.createElement(p.a,{item:!0,xs:6,sm:3,md:4,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80px"}},d.a.createElement(v.a,{styles:{width:"100%"}},e.Name)),d.a.createElement(p.a,{item:!0,xs:6,sm:3,md:5},d.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",direction:"row",width:"100%",height:"80px"}},d.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},d.a.createElement(y.a,{checked:"true"==e.View,onChange:function(e){return Z(Y(e.target.name,e.target.checked))},name:"view",color:"primary"}),d.a.createElement("br",null),d.a.createElement(v.a,null,"View")),d.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},d.a.createElement(y.a,{checked:"true"==e.Create,onChange:function(e){return Z(Y(e.target.name,e.target.checked))},name:"create",color:"primary"}),d.a.createElement("br",null),d.a.createElement(v.a,null,"Create")),d.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},d.a.createElement(y.a,{checked:"true"==e.Update,onChange:function(e){return Z(Y(e.target.name,e.target.checked))},name:"update",color:"primary"}),d.a.createElement("br",null),d.a.createElement(v.a,null,"Update")),d.a.createElement("div",{style:{margin:"10px",textAlign:"center"}},d.a.createElement(y.a,{checked:"true"==e.Delete,onChange:function(e){return Z(Y(e.target.name,e.target.checked))},name:"delete",color:"primary"}),d.a.createElement("br",null),d.a.createElement(v.a,null,"Delete")))))}):""))):"Edit Menu"==F||"Add Menu"==F?d.a.createElement("div",null,d.a.createElement(O.a,{style:{width:"100%",marginTop:"10px"},label:"Menu ID",onChange:Z,variant:"outlined",name:"menu_id",type:"number",value:G.menu_id}),d.a.createElement(O.a,{style:{width:"100%",marginTop:"10px"},label:"Menu Description",onChange:Z,variant:"outlined",name:"menu_desc",type:"text",value:G.menu_desc}),d.a.createElement(O.a,{style:{width:"100%",marginTop:"10px"},label:"Menu Url",onChange:Z,variant:"outlined",name:"menu_url",type:"text",value:G.menu_url})):""))),d.a.createElement(P,{style:{}},d.a.createElement(s.a,{className:a.popup,autoFocus:!0,onClick:function(e){var t=localStorage.getItem("id_token");"Edit Department"==F?N.a.post("update_department",{key:t,dept_id:G.dept_id,dept_name:G.dept_name,group_id:G.group_id}).then(function(e){alert("berhasil Mengubah"),b(!1),Q(X(!1,"CLOSEDEPART")),ee()}).catch(function(e){alert("Anda Bukan Admin"),b(!1),Q(X(!1,"CLOSEDEPART")),ee()}):"Add Department"==F?N.a.post("create_department",{key:t,dept_id:G.dept_id,dept_name:G.dept_name,group_id:G.group_id}).then(function(e){alert("berhasil menambah"),b(!1),Q(X(!1,"CLOSEDEPART")),ee()}):"Add Branch"==F?N.a.post("create_branch",{key:t,branch_id:G.branch_id,branch_name:G.branch_name}).then(function(e){alert("berhasil menambah"),b(!1),Q(X(!1,"CLOSEBRANCH")),ee()}):"Add Role"==F?N.a.post("create_role",{key:t,role_id:G.role_id,role_name:G.role_name,menu_id:G.menu_id,report_id:G.report_id,module_id:G.module_id}).then(function(e){alert("berhasil menambah"),b(!1),Q(X(!1,"CLOSEROLE")),ee()}):"Edit Role"==F?N.a.post("update_role",{key:t,role_id:G.role_id,role_name:G.role_name,menu_id:G.menu_id,report_id:G.report_id,module_id:G.module_id}).then(function(e){alert("berhasil Mengubah"),b(!1),Q(X(!1,"CLOSEROLE")),ee()}).catch(function(e){alert("Anda Bukan Admin"),b(!1),Q(X(!1,"CLOSEROLE")),ee()}):"Add Group"==F?N.a.post("create_group",{key:t,group_name:G.group_name,group_id:G.group_id}).then(function(e){alert("berhasil menambah"),b(!1),Q(X(!1,"CLOSEGROUP")),ee()}):"Add Menu"==F?N.a.post("create_menu",{key:t,menu_id:G.menu_id,menu_desc:G.menu_desc,menu_url:G.menu_url}).then(function(e){alert("berhasil menambah"),b(!1),Q(X(!1,"CLOSEMENU")),ee()}):"Edit Menu"==F?N.a.post("update_menu",{key:t,menu_id:G.menu_id,menu_desc:G.menu_desc,menu_url:G.menu_url}).then(function(e){alert("berhasil Mengubah"),b(!1),Q(X(!1,"CLOSEMENU")),ee()}).catch(function(e){alert("Anda Bukan Admin"),b(!1),Q(X(!1,"CLOSEMENU")),ee()}):"Edit Group"==F?N.a.post("update_group",{key:t,group_name:G.group_name,group_id:G.group_id}).then(function(e){alert("berhasil Mengubah"),b(!1),Q(X(!1,"CLOSEGROUP")),ee()}).catch(function(e){alert("Anda Bukan Admin"),b(!1),Q(X(!1,"CLOSEGROUP")),ee()}):"Edit Branch"==F&&N.a.post("update_branch",{key:t,branch_name:G.branch_name,branch_id:G.branch_id}).then(function(e){alert("berhasil Mengubah"),b(!1),Q(X(!1,"CLOSEBRANCH")),ee()}).catch(function(e){alert("Anda Bukan Admin"),b(!1),Q(X(!1,"CLOSEBRANCH")),ee()})}},"Save"))))}},1806:function(e,t,a){"use strict";a.r(t);var n=a(505),r=a(0),l=a.n(r),c=a(494),i=a(111),o=a(348),d=a(733),u=a(1778),m=a(1779),s=a(1775),p=a(1777),g=a(1773),h=a(1808),b=a(1774),E=a(1776),f=a(734),_=a(1756),y=a(747),v=a(743),O=a(741),k=(a(175),a(110)),C=(a(706),a(712)),S=a.n(C),j=a(711),x=a.n(j),N=a(710),A=a.n(N);function w(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function D(e){e.classes;var t=e.onSelectAllClick,a=e.order,n=e.orderBy,r=e.numSelected,c=e.rowCount;e.onRequestSort;return l.a.createElement(g.a,null,l.a.createElement(b.a,null,l.a.createElement(s.a,{padding:"checkbox"},l.a.createElement(y.a,{color:"primary",indeterminateIcon:l.a.createElement(A.a,null),icon:l.a.createElement(x.a,null),checkedIcon:l.a.createElement(S.a,null),indeterminate:r>0&&r<c,checked:c>0&&r===c,onChange:t,inputProps:{"aria-label":"select all desserts"}})),[{id:"no",numeric:!0,disablePadding:!0,label:"No"},{id:"menu_id",numeric:!1,disablePadding:!1,label:"Menu ID"},{id:"description",numeric:!1,disablePadding:!1,label:"Description"},{id:"url",numeric:!1,disablePadding:!1,label:"URL"},{id:"created_time",numeric:!1,disablePadding:!1,label:"Created Time"},{id:"updated_time",numeric:!1,disablePadding:!1,label:"Updated Time"}].map(function(e){return l.a.createElement(s.a,{key:e.id,padding:"default",sortDirection:n===e.id&&a},e.label)})))}var R=Object(d.a)(function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:"#0078d4",backgroundColor:"#c7e0f4"}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}}),I=function(e){var t=R(),a=e.numSelected;return l.a.createElement(E.a,{className:Object(o.a)(t.root,Object(i.a)({},t.highlight,a>0))},a>0?l.a.createElement(f.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div"},a," selected"):l.a.createElement(f.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},e.name))},M=Object(d.a)(function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},tableRow:{"&$selected,&$hover:hover":{backgroundColor:"#c7e0f4"}},hover:{},selected:{},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}});function L(e){var t=M(),a=(Object(k.useSelector)(function(e){return e.userSettingSelected}),Object(k.useDispatch)()),c=l.a.useState("none"),i=Object(n.a)(c,2),o=i[0],d=i[1],g=l.a.useState("asc"),E=Object(n.a)(g,2),f=E[0],C=E[1],j=l.a.useState("calories"),N=Object(n.a)(j,2),A=N[0],R=N[1],L=l.a.useState([]),U=Object(n.a)(L,2),B=U[0],P=U[1],G=l.a.useState(0),T=Object(n.a)(G,2),F=T[0],H=T[1],z=l.a.useState(!1),q=Object(n.a)(z,2),J=q[0],V=q[1],W=l.a.useState(5),$=Object(n.a)(W,2),K=$[0],Q=$[1];for(var X,Y,Z,ee,te,ae,ne=[],re=e.data,le=0;le<re.length;le++)ne[le]=(X=re[le].menu_id,Y=le+1,Z=re[le].menu_desc,ee=re[le].menu_url,te=re[le].created_time,ae=re[le].updated_time,{id:X,no:Y,menuDesc:Z,menuUrl:ee,crtDate:te,updDate:ae});var ce=function(e,t){return{type:"SELECTEDUSER",payload:{selectedUser:e,selectedId:t}}},ie=function(e){"INPUT"==e.target.nodeName?e.target.parentNode.parentNode.style.display="none":null==e.target.parentNode||null==e.target.parentNode.children[0]||null==e.target.parentNode.children[0].children[0]||(e.target.parentNode.children[0].children[0].style.display="none")},oe=function(e){null==e.target.parentNode||null==e.target.parentNode.children[0]||null==e.target.parentNode.children[0].children[0]||(e.target.parentNode.children[0].children[0].style.display="block")};Object(r.useEffect)(function(){B.length>0?d("block"):d("none")},[B]),Object(r.useEffect)(function(){P([])},[e.data]);Math.min(K,ne.length-F*K);return l.a.createElement("div",{className:t.root},l.a.createElement(_.a,{className:t.paper},l.a.createElement(I,{numSelected:B.length}),l.a.createElement(p.a,null,l.a.createElement(u.a,{className:t.table,"aria-labelledby":"tableTitle",size:J?"small":"medium","aria-label":"enhanced table"},l.a.createElement(D,{classes:t,numSelected:B.length,order:f,orderBy:A,onSelectAllClick:function(e){if(B.length>0)a(ce(0,[])),P([]);else if(e.target.checked){var t=ne.map(function(e){return e.id}),n=t.length;return a(ce(n,t)),void P(t)}a(ce(0,[])),P([])},onRequestSort:function(e,t){C(A===t&&"asc"===f?"desc":"asc"),R(t)},rowCount:ne.length}),l.a.createElement(m.a,null,function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(ne,function(e,t){return"desc"===e?function(e,a){return w(e,a,t)}:function(e,a){return-w(e,a,t)}}(f,A)).slice(F*K,F*K+K).map(function(e,n){var r,c=(r=e.id,-1!==B.indexOf(r)),i="enhanced-table-checkbox-".concat(e.id);return l.a.createElement(b.a,{id:"rowcheck",hover:!0,className:t.tableRow,classes:{hover:t.hover,selected:t.selected},style:{cursor:"pointer"},onMouseEnter:0==B.length?oe:null,onMouseLeave:0==B.length?ie:null,onClick:function(t){return function(e,t){var n=B.indexOf(t),r=[];-1===n?r=r.concat(B,t):0===n?r=r.concat(B.slice(1)):n===B.length-1?r=r.concat(B.slice(0,-1)):n>0&&(r=r.concat(B.slice(0,n),B.slice(n+1)));var l=r.length;a(ce(l,r)),P(r)}(0,e.id)},role:"checkbox","aria-checked":c,tabIndex:1,key:e.id,selected:c},l.a.createElement(s.a,{padding:"checkbox"},l.a.createElement(y.a,{style:{display:o},checked:c,icon:l.a.createElement(x.a,null),checkedIcon:l.a.createElement(S.a,null),color:"primary",inputProps:{"aria-labelledby":i}})),l.a.createElement(s.a,null,e.no),l.a.createElement(s.a,null,e.id),l.a.createElement(s.a,null,e.menuDesc),l.a.createElement(s.a,null,e.menuUrl),l.a.createElement(s.a,null,e.crtDate),l.a.createElement(s.a,null,e.updDate))})))),l.a.createElement(h.a,{rowsPerPageOptions:[5,10,25],component:"div",count:ne.length,rowsPerPage:K,page:F,onChangePage:function(e,t){H(t)},onChangeRowsPerPage:function(e){Q(parseInt(e.target.value,10)),H(0)}})),l.a.createElement(v.a,{control:l.a.createElement(O.a,{checked:J,onChange:function(e){V(e.target.checked)}}),label:"Dense padding"}))}var U=a(1177),B=a(1032),P=l.a.memo(function(){var e=localStorage.getItem("id_token"),t=Object(r.useState)([]),a=Object(n.a)(t,2),i=a[0],o=a[1],d=Object(r.useState)(!1),u=Object(n.a)(d,2),m=u[0],s=u[1],p=Object(r.useState)(""),g=Object(n.a)(p,2),h=g[0],b=g[1],E=Object(r.useState)(0),f=Object(n.a)(E,2),_=f[0],y=f[1],v=Object(k.useSelector)(function(e){return e.userSettingSelected}),O=Object(k.useSelector)(function(e){return e.popupMenu.isOpen}),C=Object(k.useSelector)(function(e){return e.rowperpageMenu}),S=Object(k.useDispatch)(),j=function(e){return{type:"OPENMENU",payload:{isOpen:e}}},x=function(e,t){return{type:"SELECTEDUSER",payload:{selectedUser:e,selectedId:t}}};Object(r.useEffect)(function(){S(x(0,[]))},[]);var N=l.a.useCallback(function(){S(j(!0)),s(!0),b("Add Menu")},[v]),A=l.a.useCallback(function(){0==v.selectedUser?alert("no item selected"):(S(j(!0)),s(!0),b("Edit Menu"))},[v]),w=l.a.useCallback(function(){var e;0==v.selectedUser?alert("no item selected"):function(){var t="";e=[];for(var a=function(a){var n=localStorage.getItem("id_token");e.push(c.a.post("/credential_service/delete_menu",{key:n,menu_id:v.selectedId[a]}).then(function(e){t=t+"Menu ID "+v.selectedId[a]+" "+e.data.data+"\n"}).catch(function(e){alert(e)}))},n=0;n<v.selectedId.length;n++)a(n);Promise.all(e).then(function(){alert(t),D(),S(x(0,[]))})}()},[v]),D=l.a.useCallback(function(t,a){c.a.post("/credential_service/get_menu",{key:e,info_data:"all",per_page:t,page:a}).then(function(e){o(e.data.data),y(e.data.count_data)})},[o]);return Object(r.useEffect)(function(){D(C.jumlah,C.halaman),s(O)},[O,C.jumlah,C.halaman]),l.a.createElement("div",null,l.a.createElement(U.a,{id:"btnRowAdd",className:"btn-pill btn-outline-dark btn-m",onClick:N},"\xa0\xa0",l.a.createElement("i",{className:"fa fa-plus-square"}),"\xa0",l.a.createElement("span",null,"Add\xa0\xa0")),v.selectedUser>0?l.a.createElement(U.a,{id:"btnRowDelete",className:"btn-pill btn-outline-danger btn-m",onClick:w},l.a.createElement("i",{className:"fa fa-window-close"}),"\xa0",l.a.createElement("span",null,"Delete")):"",1==v.selectedUser?l.a.createElement(U.a,{color:"warning",id:"btnTableEdit",className:"btn-pill btn-m",onClick:A},"\xa0\xa0\xa0\xa0\xa0",l.a.createElement("i",{className:"fa fa-edit"}),"\xa0",l.a.createElement("span",null,"Edit\xa0\xa0\xa0\xa0\xa0")):null,l.a.createElement(L,{data:i,jumlahdata:_,groupName:""}),l.a.createElement(B.a,{open:m,actionForm:h}))});t.default=P},706:function(e,t,a){"use strict";a(1041),a(1037),a(0),a(1038)},998:function(e,t,a){"use strict";a(505),a(0),a(740),a(1e3),a(431),a(626),a(627)}}]);
//# sourceMappingURL=28.40d04ba2.chunk.js.map