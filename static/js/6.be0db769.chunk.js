(this.webpackJsonpwebshop=this.webpackJsonpwebshop||[]).push([[6],{343:function(t,e,r){"use strict";r.r(e);var n=r(73),a=r.n(n),c=r(74),o=r(63),i=r(76),s=r(0),l=r(64),u=r(4),h=r(59),d=r(21),b=r(2);e.default=function(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),r=e[0],n=e[1],j=Object(s.useState)([]),f=Object(i.a)(j,2),p=f[0],m=f[1],v=Object(s.useState)(""),O=Object(i.a)(v,2),x=O[0],g=O[1],y=Object(s.useState)(""),N=Object(i.a)(y,2),w=N[0],L=N[1],E=Object(s.useState)(""),S=Object(i.a)(E,2),C=S[0],k=S[1],P=Object(s.useState)(""),T=Object(i.a)(P,2),_=T[0],F=T[1],G=Object(s.useState)(""),q=Object(i.a)(G,2),D=q[0],I=q[1],A=Object(s.useState)(""),V=Object(i.a)(A,2),B=V[0],M=V[1],R=Object(s.useState)(!1),z=Object(i.a)(R,2),H=z[0],J=z[1],K=Object(u.f)(),W=Object(u.e)();Object(s.useEffect)((function(){var t;t=K.id,h.a.database().ref("test").child(t).on("value",(function(t){var e=t.val();n(e)})),function(t){h.a.database().ref("question").orderByChild("iddethi").equalTo(t).on("value",(function(t){var e=t.val(),r=[];for(var n in e)r.push(Object(o.a)({id:n},e[n]));m(r)}))}(K.id)}),[]);var X=function(){var t=Object(c.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=new Date,r={iddethi:K.id,idcauhoi:e.getTime(),cauhoi:x,as1:w,as2:C,as3:_,as4:D,true:B},!H){t.next=9;break}return t.next=5,h.a.database().ref("question/"+K.id).update(r);case 5:return t.sent,t.abrupt("return",window.location.href="/question/"+K.id);case 9:return t.next=11,h.a.database().ref("question").push(r);case 11:return t.sent,L(""),k(""),F(""),I(""),M(""),g(""),t.abrupt("return",W.push("/question/"+K.id));case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(l.a,{children:[Object(b.jsxs)("h3",{children:["C\xe2u h\u1ecfi b\xe0i thi: ",r.baithi]}),Object(b.jsxs)("h5",{children:["H\xecnh th\u1ee9c thi: ","TN"===r.loai?"Tr\u1eafc nghi\u1ec7m":"T\u1ef1 lu\u1eadn"]}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"button","data-toggle":"modal","data-target":"#myModal",children:"Th\xeam c\xe2u h\u1ecfi"})}),Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"C\xe2u h\u1ecfi"}),Object(b.jsx)("th",{children:"\u0110\xe1p \xe1n A"}),Object(b.jsx)("th",{children:"\u0110\xe1p \xe1n B"}),Object(b.jsx)("th",{children:"\u0110\xe1p \xe1n C"}),Object(b.jsx)("th",{children:"\u0110\xe1p \xe1n D"}),Object(b.jsx)("th",{children:"#"})]})}),Object(b.jsx)("tbody",{children:p?p.map((function(t,e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.cauhoi}),Object(b.jsx)("td",{children:t.as1}),Object(b.jsx)("td",{children:t.as2}),Object(b.jsx)("td",{children:t.as3}),Object(b.jsx)("td",{children:t.as4}),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.b,{to:"#",children:Object(b.jsx)("button",{className:"btn btn-secondary","data-toggle":"modal","data-target":"#myModal",onClick:function(){return function(t){console.log(t),g(t.cauhoi),L(t.as1),k(t.as2),F(t.as3),I(t.as4),M(t.true),J(!0)}(t)},children:"S\u1eeda"})}),Object(b.jsx)(d.b,{to:"#",children:Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return e=t.id,void h.a.database().ref("question/"+e).remove();var e},children:"X\xf3a"})})]})]})})):null})]}),Object(b.jsx)("div",{id:"myModal",className:"modal fade",role:"dialog",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"}),Object(b.jsx)("h4",{className:"modal-title",children:"c\xe2u h\u1ecfi"})]}),Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usr",children:"C\xe2u h\u1ecfi:"}),Object(b.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return g(t.target.value)},defaultValue:x})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usr",children:"\u0110\xe1p \xe1n A:"}),Object(b.jsx)("input",{type:"text",className:"form-control",defaultValue:w,onChange:function(t){return L(t.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usr",children:"\u0110\xe1p \xe1n B:"}),Object(b.jsx)("input",{type:"text",className:"form-control",defaultValue:C,onChange:function(t){return k(t.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usr",children:"\u0110\xe1p \xe1n C:"}),Object(b.jsx)("input",{type:"text",className:"form-control",defaultValue:_,onChange:function(t){return F(t.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usr",children:"\u0110\xe1p \xe1n D:"}),Object(b.jsx)("input",{type:"text",className:"form-control",defaultValue:D,onChange:function(t){return I(t.target.value)}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"usr",children:"\u0110\xe1p \xe1n \u0111\xfang:"}),Object(b.jsx)("input",{type:"text",className:"form-control",defaultValue:B,onChange:function(t){return M(t.target.value)}})]})]}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-default","data-dismiss":"modal",children:"Close"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:X,children:"L\u01b0u l\u1ea1i"})]})]})})})]})}},59:function(t,e,r){"use strict";var n=r(71);r(78),r(77),r(72);n.a.initializeApp({apiKey:"AIzaSyCwPtJTNRKzmp6eLwDGgRRA0vMsWoQW1hg",authDomain:"phuong-f6d83.firebaseapp.com",projectId:"phuong-f6d83",storageBucket:"phuong-f6d83.appspot.com",messagingSenderId:"848745336320",appId:"1:848745336320:web:c436f66c44f317bd34d2e5",measurementId:"G-7V4WC826HX"}),n.a.analytics(),e.a=n.a},60:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},62:function(t,e,r){},63:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(60);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},64:function(t,e,r){"use strict";r(0);var n=r(21),a=r(2),c=function(){return Object(a.jsx)("div",{className:"col-md-2 sidebar",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"absolute-wrapper",children:" "}),Object(a.jsx)("div",{className:"side-menu",children:Object(a.jsx)("nav",{className:"navbar navbar-default",role:"navigation",children:Object(a.jsx)("div",{className:"side-menu-container",children:Object(a.jsxs)("ul",{className:"nav navbar-nav",children:[Object(a.jsx)("li",{className:"active",children:Object(a.jsxs)(n.b,{to:"/",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-dashboard"})," Trang ch\u1ee7"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(n.b,{to:"/test",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-plane"})," B\xe0i Thi"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(n.b,{to:"/student",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-user"})," Th\xed sinh"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(n.b,{to:"",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-cloud"})," Ch\u1ea5m thi t\u1ef1 lu\u1eadn"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(n.b,{to:"/result",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-signal"})," K\u1ebft qu\u1ea3 thi"]})})]})})})})]})})},o=function(){return Object(a.jsxs)("footer",{className:"pull-left footer",children:[Object(a.jsx)("p",{className:"col-md-12"}),Object(a.jsx)("hr",{className:"divider"}),"Copyright \xa9 2015 ",Object(a.jsx)("a",{href:"http://www.pingpong-labs.com",children:"Gravitano"}),Object(a.jsx)("p",{})]})},i=function(){return Object(a.jsx)("nav",{className:"navbar navbar-default navbar-static-top",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("div",{className:"navbar-header",children:[Object(a.jsx)("button",{type:"button",className:"navbar-toggle navbar-toggle-sidebar collapsed",children:"MENU"}),Object(a.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[Object(a.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"}),Object(a.jsx)("span",{className:"icon-bar"})]}),Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Huha Test"})]}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:[Object(a.jsxs)("form",{className:"navbar-form navbar-left",method:"GET",role:"search",children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",name:"q",className:"form-control",placeholder:"Search"})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-default",children:Object(a.jsx)("i",{className:"glyphicon glyphicon-search"})})]}),Object(a.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",target:"_blank",children:"Xin ch\xe0o, "})}),Object(a.jsx)("li",{className:"dropdown ",children:Object(a.jsx)("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-expanded":"false",children:"\u0110\u0103ng xu\u1ea5t"})})]})]})]})})};r(62),e.a=function(t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i,{}),Object(a.jsxs)("div",{className:"container-fluid main-container",children:[Object(a.jsx)(c,{}),Object(a.jsx)("div",{className:"col-md-10 content",children:t.children}),Object(a.jsx)(o,{})]})]})}},68:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,c=Object.create(a.prototype),o=new C(n||[]);return c._invoke=function(t,e,r){var n=h;return function(a,c){if(n===b)throw new Error("Generator is already running");if(n===j){if("throw"===a)throw c;return P()}for(r.method=a,r.arg=c;;){var o=r.delegate;if(o){var i=L(o,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=j,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=b;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?j:d,s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=j,r.method="throw",r.arg=s.arg)}}}(t,r,o),c}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h="suspendedStart",d="suspendedYield",b="executing",j="completed",f={};function p(){}function m(){}function v(){}var O={};O[c]=function(){return this};var x=Object.getPrototypeOf,g=x&&x(x(k([])));g&&g!==r&&n.call(g,c)&&(O=g);var y=v.prototype=p.prototype=Object.create(O);function N(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(a,c,o,i){var s=u(t[a],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,i)}),(function(t){r("throw",t,o,i)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,i)}))}i(s.arg)}var a;this._invoke=function(t,n){function c(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(c,c):c()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,f;var c=a.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,f):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var r=t[c];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=y.constructor=v,v.constructor=m,m.displayName=s(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},N(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,a,c){void 0===c&&(c=Promise);var o=new w(l(e,r,n,a),c);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},N(y),s(y,i,"Generator"),y[c]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=t,o.arg=e,c?(this.method="next",this.next=c.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},73:function(t,e,r){t.exports=r(68)},74:function(t,e,r){"use strict";function n(t,e,r,n,a,c,o){try{var i=t[c](o),s=i.value}catch(l){return void r(l)}i.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,c){var o=t.apply(e,r);function i(t){n(o,a,c,i,s,"next",t)}function s(t){n(o,a,c,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=6.be0db769.chunk.js.map