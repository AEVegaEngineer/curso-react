(this["webpackJsonp09-calendar-app"]=this["webpackJsonp09-calendar-app"]||[]).push([[0],{121:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(30),i=n(5),l="[ui] Open modal",u="[ui] Close modal",j="[event] Add new event",d="[event] Set active event",b="[event] Clear active event",m="[event] Updated event",f="[event] Deleted event",v="[event] Load events",p="[event] Unload events",O="[auth] Finish checking login state",h="[auth] Login",x="[auth] Logout",g={modalOpen:!1},y=n(64),N=n(51),w={events:[],activeEvent:null},E={checking:!0},k="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,S=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case p:return Object(i.a)(Object(i.a)({},e),{},{events:[],activeEvent:null});case m:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(i.a)(Object(i.a)({},e),{},{events:Object(N.a)(t.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(i.a)(Object(i.a)({},e),{},{checking:!1},t.payload);case O:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case x:return{checking:!1};default:return e}}}),C=Object(s.d)(S,k(Object(s.a)(y.a))),D=n(33),T=n(10),P=n(18),A=n(16),I=n.n(A),_=n(12),L=n.n(_),R=n(21),G="https://curso-mern-calendar.herokuapp.com/api",V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"X-Authorization":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","X-Authorization":r},body:JSON.stringify(t)})},U=n(17),H=n.n(U),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:H()(e.end).toDate(),start:H()(e.start).toDate()})}))},M=function(e){return{type:j,payload:e}},X=function(){return{type:b}},z=function(e){return{type:m,payload:e}},B=function(){return{type:f}},q=function(e){return{type:v,payload:e}},K=function(){return{type:O}},Q=function(e){return{type:h,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:p}),e(Y())}},Y=function(){return{type:x}},Z=n(25),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(P.a)(t,2),r=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},s=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(Z.a)({},t.name,t.value)))};return[r,s,o]},ee=(n(88),n(2)),te=function(){var e=Object(o.b)(),t=$({lEmail:"fernando@gmail.com",lPassword:"123456"}),n=Object(P.a)(t,2),a=n[0],r=n[1],c=$({rName:"fernando",rEmail:"fernando@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(P.a)(c,2),i=s[0],l=s[1],u=i.rName,j=i.rEmail,d=i.rPassword1,b=i.rPassword2,m=a.lEmail,f=a.lPassword;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=m,a=f,function(){var e=Object(R.a)(L.a.mark((function e(t){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:c.uid,name:c.name}))):I.a.fire("Error",void 0!==c.msg?c.msg:c.errors.title.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:f,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),d!==b)return I.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=j,a=d,r=u,function(){var e=Object(R.a)(L.a.mark((function e(t){var c,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:o.uid,name:o.name}))):I.a.fire("Error",void 0!==o.msg?o.msg:o.errors.title.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:u,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:j,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:d,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(50),ae=(n(90),function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:e}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(W())},children:[Object(ee.jsx)("i",{className:"fa fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})}),re={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ce=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsx)("br",{}),Object(ee.jsxs)("span",{children:["- ",a.name]})]})},oe=n(46),se=n.n(oe),ie=n(47),le=n.n(ie),ue=function(){return{type:l}},je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=H()().minutes(0).seconds(0).add(1,"hour"),be=de.clone().add(1,"hour"),me={title:"Evento",notes:"",start:de.toDate(),end:be.toDate()},fe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(!0),c=Object(P.a)(r,2),s=c[0],l=c[1],j=Object(a.useState)(me),d=Object(P.a)(j,2),b=d[0],m=d[1],f=b.notes,v=b.title,p=b.start,O=b.end;Object(a.useEffect)((function(){m(n||me)}),[n]);var h=function(e){var t=e.target;m(Object(i.a)(Object(i.a)({},b),{},Object(Z.a)({},t.name,t.value)))},x=function(){e({type:u}),e(X()),m(me)};return Object(ee.jsxs)(se.a,{isOpen:t,onRequestClose:x,style:je,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(ee.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{name:"myform",noValidate:!0,className:"container",onSubmit:function(t){t.preventDefault();var a,r=H()(p),c=H()(O);if(r.isSameOrAfter(c))return I.a.fire("Error","La fecha fin debe ser mayor a la fecha de incio","error");v.trim().length<2&&l(!1),e(n?(a=b,function(){var e=Object(R.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(z(a)):I.a.fire("Error",void 0!==r.msg?r.msg:r.errors.title.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(R.a)(L.a.mark((function t(n,a){var r,c,o,s,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,F("events/add",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok?(e.id=i.evento.id,e.user={_id:c,name:o},n(M(e))):I.a.fire("Error",void 0!==i.msg?i.msg:i.errors.title.msg,"error"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(b)),l(!0),x()},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(le.a,{name:"dateStart",onChange:function(e){m(Object(i.a)(Object(i.a)({},b),{},{start:e}))},value:p,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(le.a,{name:"dateEnd",onChange:function(e){m(Object(i.a)(Object(i.a)({},b),{},{end:e}))},value:O,minDate:p,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!s&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:v,onChange:h}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:f,onChange:h}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},ve=(n(119),function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(ee.jsx)("i",{className:"fa fa-plus"})})}),pe=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){var t;e(function(){var e=Object(R.a)(L.a.mark((function e(n,a){var r,c,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().calendar.activeEvent.id,e.prev=1,console.log(t),e.next=5,F("events/".concat(r),{},"DELETE");case 5:return c=e.sent,e.next=8,c.json();case 8:(o=e.sent).ok?n(B()):I.a.fire("Error",void 0!==o.msg?o.msg:o.errors.title.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fa fa-trash"}),Object(ee.jsx)("span",{children:" Borrar Evento"})]})};H.a.locale("es");var Oe=Object(ne.b)(H.a),he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(P.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=J(a.eventos),t(q(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ae,{}),Object(ee.jsx)(ne.a,{localizer:Oe,events:n,startAccessor:"start",endAccessor:"end",style:{height:500},messages:re,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:ce},onDoubleClickEvent:function(t){e(ue())},onSelectEvent:function(t){e({type:d,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},view:l,onSelectSlot:function(t){e(X())},selectable:!0}),Object(ee.jsx)(ve,{}),r&&Object(ee.jsx)(pe,{}),Object(ee.jsx)(fe,{})]})},xe=n(36),ge=["isAuthenticated","component"],ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,ge);return Object(ee.jsx)(T.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(T.a,{to:"/"}):Object(ee.jsx)(n,Object(i.a)({},e))}}))},Ne=["isAuthenticated","component"],we=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,Ne);return Object(ee.jsx)(T.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(i.a)({},e)):Object(ee.jsx)(T.a,{to:"/auth"})}}))},Ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:a.uid,name:a.name}))):t(K());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Espere..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(T.d,{children:[Object(ee.jsx)(ye,{exact:!0,path:"/auth",component:te,isAuthenticated:!!r}),Object(ee.jsx)(we,{exact:!0,path:"/",component:he,isAuthenticated:!!r}),Object(ee.jsx)(T.a,{to:"/auth"})]})})})},ke=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(Ee,{})})};n(121);c.a.render(Object(ee.jsx)(ke,{}),document.getElementById("root"))},88:function(e,t,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.a1406569.chunk.js.map