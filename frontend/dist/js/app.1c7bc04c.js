(function(t){function e(e){for(var a,n,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-30eaeb0e":"be74142c","chunk-fa4afaf0":"2352dfad"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-30eaeb0e":1,"chunk-fa4afaf0":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-30eaeb0e":"5115a1d8","chunk-fa4afaf0":"e520b75f"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0334":function(t,e){t.exports=videojs},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("8bbf"),n=r.n(a),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{class:{rotate:t.drug>=3}},[r("Header"),r("v-main",[r("v-fade-transition",[t.drug>=1?r("div",{staticClass:"d-flex cat-div"},[r("div",[r("img",{staticClass:"ranbow-cat",class:{move:t.drug>=2},attrs:{width:"250px",src:"/images/nyan_cat.gif"}})]),r("v-spacer"),r("div",{staticClass:"align-self-end"},[r("img",{staticClass:"ranbow-cat reverse",class:{move:t.drug>=2},attrs:{width:"250px",src:"/images/nyan_cat.gif"}})])],1):t._e()]),r("router-view")],1),r("Footer")],1)},i=[],s=r("5530"),c=r("5880"),u=r.n(c),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{tile:"",width:"100%"}},[r("v-toolbar",{attrs:{color:"light-blue",dark:""}},[r("v-app-bar-nav-icon",{on:{click:t.getStreamTitle}}),r("v-toolbar-title",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/")}}},[r("strong",[t._v("Lab7 - Live Streaming via srsLTE")])]),r("v-spacer"),r("v-btn",{staticClass:"mr-2 btn-drug",attrs:{text:""},on:{click:t.more}},[0===t.drug?r("span",[t._v("drug")]):1===t.drug?r("span",[t._v("more")]):2===t.drug?r("span",[t._v("heaven")]):t._e()]),t.drug>=3?r("v-btn",{attrs:{text:""}},[t._v("all pass!!!")]):t._e()],1)],1),r("v-navigation-drawer",{staticClass:"pt-8",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h5"},[r("strong",[t._v("串流清單")])]),r("v-list-item-subtitle",[t._v(" Streaming list ")])],1)],1),r("v-divider"),r("v-list",[r("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.streams,(function(e,a){return r("v-list-item",{key:"stream"+a,attrs:{link:"",to:"/"+e}},[r("v-list-item-icon",[r("v-icon",{class:{"ranbow-text":t.drug>=1}},[t._v("mdi-video-outline")])],1),r("v-list-item-content",[r("v-list-item-title",{class:{"ranbow-text":t.drug>=1}},[t._v(t._s(e))])],1)],1)})),1),0===t.streams.length?r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v("目前無串流影像")])],1)],1):t._e()],1)],1)],1)},d=[],f=r("1da1"),p=(r("96cf"),{data:function(){return{drawer:!1,streams:[],group:null}},watch:{group:function(){this.drawer=!1}},computed:Object(s["a"])({},Object(c["mapState"])(["drug"])),methods:Object(s["a"])(Object(s["a"])({},Object(c["mapMutations"])(["more","less"])),{},{getStreamTitle:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("stream");case 2:r=e.sent,t.streams=r.data,t.drawer=!t.drawer;case 5:case"end":return e.stop()}}),e)})))()}})}),v=p,m=r("2877"),g=r("6544"),b=r.n(g),h=r("5bc1"),w=r("8336"),_=r("b0af"),y=r("ce7e"),x=r("132d"),V=r("8860"),k=r("da13"),O=r("5d23"),j=r("1baa"),C=r("34c3"),S=r("f774"),L=r("2fa4"),E=r("71d9"),T=r("2a7f"),A=Object(m["a"])(v,l,d,!1,null,null,null),P=A.exports;b()(A,{VAppBarNavIcon:h["a"],VBtn:w["a"],VCard:_["a"],VDivider:y["a"],VIcon:x["a"],VList:V["a"],VListItem:k["a"],VListItemContent:O["a"],VListItemGroup:j["a"],VListItemIcon:C["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VNavigationDrawer:S["a"],VSpacer:L["a"],VToolbar:E["a"],VToolbarTitle:T["a"]});var I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{padless:"",dark:""}},[r("v-card",{staticClass:"indigo lighten-1 text-center w-100",attrs:{tile:"",flat:""}},[r("v-divider"),r("v-card-text",{staticClass:"white--text"},[t._v(" 2021 — "),r("strong",[t._v("HanYuan@NFU_MNLAB")])])],1)],1)},N=[],M=r("99d9"),B=r("553a"),$={},D=Object(m["a"])($,I,N,!1,null,null,null),F=D.exports;b()(D,{VCard:_["a"],VCardText:M["a"],VDivider:y["a"],VFooter:B["a"]});var R={name:"App",components:{Header:P,Footer:F},computed:Object(s["a"])({},Object(c["mapState"])(["drug"]))},U=R,H=(r("c882"),r("7496")),q=r("0789"),J=r("f6c4"),G=Object(m["a"])(U,o,i,!1,null,"0212df2b",null),K=G.exports;b()(G,{VApp:H["a"],VFadeTransition:q["b"],VMain:J["a"],VSpacer:L["a"]});r("d3b7"),r("3ca3"),r("ddb0");var Y=r("6389"),z=r.n(Y);n.a.use(z.a);var Q=[{path:"/",name:"Main",component:function(){return r.e("chunk-30eaeb0e").then(r.bind(null,"cd56"))}},{path:"/:id",name:"Live",component:function(){return r.e("chunk-fa4afaf0").then(r.bind(null,"c638"))}}],W=new z.a({mode:"history",base:"/",routes:Q}),X=W,Z=r("f309");n.a.use(Z["a"]);var tt=new Z["a"]({theme:{dark:!1}}),et=r("cebe"),rt=r.n(et),at=rt.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/api"}),nt=at;r("6418");n.a.use(u.a);var ot=new u.a.Store({state:{drug:0},mutations:{more:function(t){t.drug+=1},less:function(t){t.drug-=1}},actions:{},modules:{}});n.a.config.productionTip=!1,n.a.prototype.$http=nt,new n.a({router:X,vuetify:tt,store:ot,render:function(t){return t(K)}}).$mount("#app")},5880:function(t,e){t.exports=Vuex},6389:function(t,e){t.exports=VueRouter},6418:function(t,e,r){},"8bbf":function(t,e){t.exports=Vue},c882:function(t,e,r){"use strict";r("dfc3")},cebe:function(t,e){t.exports=axios},dfc3:function(t,e,r){}});
//# sourceMappingURL=app.1c7bc04c.js.map