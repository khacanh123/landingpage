(this.webpackJsonpwebshop=this.webpackJsonpwebshop||[]).push([[8],{348:function(e,t,c){"use strict";c.r(t);var a=c(63),s=c(76),n=c(0),i=c(64),l=c(59),r=c(21),j=c(2);t.default=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],b=t[1],d=Object(n.useState)([]),o=Object(s.a)(d,2),h=o[0],O=o[1],u=Object(n.useState)({}),m=Object(s.a)(u,2),p=m[0],x=m[1];Object(n.useEffect)((function(){l.a.database().ref("test").on("value",(function(e){var t=e.val(),c=[];for(var s in t)c.push(Object(a.a)({id:s},t[s]));b(c)}))}),[]);return Object(j.jsxs)(i.a,{children:[Object(j.jsx)("h3",{children:"K\u1ebft qu\u1ea3 b\xe0i thi"}),Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"T\xean b\xe0i thi"}),Object(j.jsx)("th",{children:"S\u1ed1 c\xe2u h\u1ecfi"}),Object(j.jsx)("th",{children:"#"})]})}),Object(j.jsx)("tbody",{children:c?c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.baithi}),Object(j.jsx)("td",{children:e.socauhoi}),Object(j.jsx)("td",{children:Object(j.jsx)(r.b,{to:"#",children:Object(j.jsx)("button",{className:"btn btn-secondary","data-toggle":"modal","data-target":"#myModal",onClick:function(){return function(e){var t={baithi:e.baithi,socauhoi:e.socauhoi};x(t),l.a.database().ref("result").orderByChild("idbaithi").equalTo(e.id).on("value",(function(e){var t=e.val(),c=[];for(var s in t)c.push(Object(a.a)({id:s},t[s]));O(c)}))}(e)},children:"\u0110i\u1ec3m thi"})})})]})})):null})]}),Object(j.jsx)("div",{id:"myModal",className:"modal fade",role:"dialog",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"}),Object(j.jsxs)("h4",{className:"modal-title",children:["\u0110i\u1ec3m b\xe0i thi: ",p.baithi]})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"MSSV"}),Object(j.jsx)("th",{children:"H\u1ecd t\xean"}),Object(j.jsx)("th",{children:"S\u1ed1 c\xe2u \u0111\xfang"}),Object(j.jsx)("th",{children:"\u0110i\u1ec3m "})]})}),Object(j.jsx)("tbody",{children:h?h.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.mssv}),Object(j.jsx)("td",{children:e.hoten}),Object(j.jsx)("td",{children:e.dung+"/"+p.socauhoi}),Object(j.jsx)("td",{children:e.diem})]})})):null})]})}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",children:"\u0110\xf3ng l\u1ea1i"})})]})})})]})}},59:function(e,t,c){"use strict";var a=c(71);c(78),c(77),c(72);a.a.initializeApp({apiKey:"AIzaSyCwPtJTNRKzmp6eLwDGgRRA0vMsWoQW1hg",authDomain:"phuong-f6d83.firebaseapp.com",projectId:"phuong-f6d83",storageBucket:"phuong-f6d83.appspot.com",messagingSenderId:"848745336320",appId:"1:848745336320:web:c436f66c44f317bd34d2e5",measurementId:"G-7V4WC826HX"}),a.a.analytics(),t.a=a.a},60:function(e,t,c){"use strict";function a(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return a}))},62:function(e,t,c){},63:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var a=c(60);function s(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,a)}return c}function n(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?s(Object(c),!0).forEach((function(t){Object(a.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):s(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},64:function(e,t,c){"use strict";c(0);var a=c(21),s=c(2),n=function(){return Object(s.jsx)("div",{className:"col-md-2 sidebar",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"absolute-wrapper",children:" "}),Object(s.jsx)("div",{className:"side-menu",children:Object(s.jsx)("nav",{className:"navbar navbar-default",role:"navigation",children:Object(s.jsx)("div",{className:"side-menu-container",children:Object(s.jsxs)("ul",{className:"nav navbar-nav",children:[Object(s.jsx)("li",{className:"active",children:Object(s.jsxs)(a.b,{to:"/",children:[Object(s.jsx)("span",{className:"glyphicon glyphicon-dashboard"})," Trang ch\u1ee7"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(a.b,{to:"/test",children:[Object(s.jsx)("span",{className:"glyphicon glyphicon-plane"})," B\xe0i Thi"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(a.b,{to:"/student",children:[Object(s.jsx)("span",{className:"glyphicon glyphicon-user"})," Th\xed sinh"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(a.b,{to:"",children:[Object(s.jsx)("span",{className:"glyphicon glyphicon-cloud"})," Ch\u1ea5m thi t\u1ef1 lu\u1eadn"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(a.b,{to:"/result",children:[Object(s.jsx)("span",{className:"glyphicon glyphicon-signal"})," K\u1ebft qu\u1ea3 thi"]})})]})})})})]})})},i=function(){return Object(s.jsxs)("footer",{className:"pull-left footer",children:[Object(s.jsx)("p",{className:"col-md-12"}),Object(s.jsx)("hr",{className:"divider"}),"Copyright \xa9 2015 ",Object(s.jsx)("a",{href:"http://www.pingpong-labs.com",children:"Gravitano"}),Object(s.jsx)("p",{})]})},l=function(){return Object(s.jsx)("nav",{className:"navbar navbar-default navbar-static-top",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsxs)("div",{className:"navbar-header",children:[Object(s.jsx)("button",{type:"button",className:"navbar-toggle navbar-toggle-sidebar collapsed",children:"MENU"}),Object(s.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[Object(s.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(s.jsx)("span",{className:"icon-bar"}),Object(s.jsx)("span",{className:"icon-bar"}),Object(s.jsx)("span",{className:"icon-bar"})]}),Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:"Huha Test"})]}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:[Object(s.jsxs)("form",{className:"navbar-form navbar-left",method:"GET",role:"search",children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"text",name:"q",className:"form-control",placeholder:"Search"})}),Object(s.jsx)("button",{type:"submit",className:"btn btn-default",children:Object(s.jsx)("i",{className:"glyphicon glyphicon-search"})})]}),Object(s.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#",target:"_blank",children:"Xin ch\xe0o, "})}),Object(s.jsx)("li",{className:"dropdown ",children:Object(s.jsx)("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-expanded":"false",children:"\u0110\u0103ng xu\u1ea5t"})})]})]})]})})};c(62),t.a=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsxs)("div",{className:"container-fluid main-container",children:[Object(s.jsx)(n,{}),Object(s.jsx)("div",{className:"col-md-10 content",children:e.children}),Object(s.jsx)(i,{})]})]})}}}]);
//# sourceMappingURL=8.0d821deb.chunk.js.map