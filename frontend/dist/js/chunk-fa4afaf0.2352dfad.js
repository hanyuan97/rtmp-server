(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa4afaf0"],{1:function(e,t){},"2e59":function(e,t,n){"use strict";n.r(t);var i=n("0334"),r=n.n(i),o=n("ef34"),a=n.n(o);
/*! @name videojs-contrib-quality-levels @version 2.1.0 @license Apache-2.0 */
function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function e(t){var n=this;if(r.a.browser.IS_IE8)for(var i in n=a.a.createElement("custom"),e.prototype)"constructor"!==i&&(n[i]=e.prototype[i]);return n.id=t.id,n.label=n.id,n.width=t.width,n.height=t.height,n.bitrate=t.bandwidth,n.enabled_=t.enabled,Object.defineProperty(n,"enabled",{get:function(){return n.enabled_()},set:function(e){n.enabled_(e)}}),n},c=function(e){function t(){var n;n=e.call(this)||this;var i=u(u(n));if(r.a.browser.IS_IE8)for(var o in i=a.a.createElement("custom"),t.prototype)"constructor"!==o&&(i[o]=t.prototype[o]);return i.levels_=[],i.selectedIndex_=-1,Object.defineProperty(i,"selectedIndex",{get:function(){return i.selectedIndex_}}),Object.defineProperty(i,"length",{get:function(){return i.levels_.length}}),i||u(n)}s(t,e);var n=t.prototype;return n.addQualityLevel=function(e){var t=this.getQualityLevelById(e.id);if(t)return t;var n=this.levels_.length;return t=new l(e),""+n in this||Object.defineProperty(this,n,{get:function(){return this.levels_[n]}}),this.levels_.push(t),this.trigger({qualityLevel:t,type:"addqualitylevel"}),t},n.removeQualityLevel=function(e){for(var t=null,n=0,i=this.length;n<i;n++)if(this[n]===e){t=this.levels_.splice(n,1)[0],this.selectedIndex_===n?this.selectedIndex_=-1:this.selectedIndex_>n&&this.selectedIndex_--;break}return t&&this.trigger({qualityLevel:e,type:"removequalitylevel"}),t},n.getQualityLevelById=function(e){for(var t=0,n=this.length;t<n;t++){var i=this[t];if(i.id===e)return i}return null},n.dispose=function(){this.selectedIndex_=-1,this.levels_.length=0},t}(r.a.EventTarget);for(var h in c.prototype.allowedEvents_={change:"change",addqualitylevel:"addqualitylevel",removequalitylevel:"removequalitylevel"},c.prototype.allowedEvents_)c.prototype["on"+h]=null;var p="2.1.0",d=r.a.registerPlugin||r.a.plugin,f=function(e,t){var n=e.qualityLevels,i=new c,r=function t(){i.dispose(),e.qualityLevels=n,e.off("dispose",t)};return e.on("dispose",r),e.qualityLevels=function(){return i},e.qualityLevels.VERSION=p,i},y=function(e){return f(this,r.a.mergeOptions({},e))};d("qualityLevels",y),y.VERSION=p,t["default"]=y},5044:function(e,t,n){"use strict";n("e3d6")},bd6c:function(e,t,n){"use strict";n.r(t);var i=n("0334"),r=n.n(i),o="1.1.4",a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=(function(){function e(e){this.value=e}function t(t){var n,i;function r(e,t){return new Promise((function(r,a){var s={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=s:(n=i=s,o(e,t))}))}function o(n,i){try{var r=t[n](i),s=r.value;s instanceof e?Promise.resolve(s.value).then((function(e){o("next",e)}),(function(e){o("throw",e)})):a(r.done?"return":"normal",r.value)}catch(u){a("throw",u)}}function a(e,t){switch(e){case"return":n.resolve({value:t,done:!0});break;case"throw":n.reject(t);break;default:n.resolve({value:t,done:!1});break}n=n.next,n?o(n.key,n.arg):i=null}this._invoke=r,"function"!==typeof t.return&&(this.return=void 0)}"function"===typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),u=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},c=r.a.getComponent("MenuButton"),h=r.a.getComponent("Menu"),p=r.a.getComponent("Component"),d=r.a.dom;function f(e){return"string"!==typeof e?e:e.charAt(0).toUpperCase()+e.slice(1)}var y=function(e){function t(n){return s(this,t),l(this,e.call(this,n,{title:n.localize("Quality"),name:"QualityButton"}))}return u(t,e),t.prototype.createItems=function(){return[]},t.prototype.createMenu=function(){var e=new h(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var t=d.createEl("li",{className:"vjs-menu-title",innerHTML:f(this.options_.title),tabIndex:-1}),n=new p(this.player_,{el:t});this.hideThreshold_+=1,e.addItem(n)}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)e.addItem(this.items[i]);return e},t}(c),v=r.a.getComponent("MenuItem"),m=function(e){function t(n,i,r,o){s(this,t);var a=l(this,e.call(this,n,{label:i.label,selectable:!0,selected:i.selected||!1}));return a.item=i,a.qualityButton=r,a.plugin=o,a}return u(t,e),t.prototype.handleClick=function(){for(var e=0;e<this.qualityButton.items.length;++e)this.qualityButton.items[e].selected(!1);this.plugin.setQuality(this.item.value),this.selected(!0)},t}(v),g={},b=r.a.registerPlugin||r.a.plugin,_=function(){function e(t,n){s(this,e),this.player=t,this.config=n,this.player.qualityLevels&&this.getHls()&&(this.createQualityButton(),this.bindPlayerEvents())}return e.prototype.getHls=function(){return this.player.tech({IWillNotUseThisInPlugins:!0}).hls},e.prototype.bindPlayerEvents=function(){this.player.qualityLevels().on("addqualitylevel",this.onAddQualityLevel.bind(this))},e.prototype.createQualityButton=function(){var e=this.player;this._qualityButton=new y(e);var t=e.controlBar.children().length-2,n=e.controlBar.addChild(this._qualityButton,{componentClass:"qualitySelector"},this.config.placementIndex||t);if(n.addClass("vjs-quality-selector"),this.config.displayCurrentQuality)this.setButtonInnerText("auto");else{var i=" "+(this.config.vjsIconClass||"vjs-icon-hd");n.menuButton_.$(".vjs-icon-placeholder").className+=i}n.removeClass("vjs-hidden")},e.prototype.setButtonInnerText=function(e){this._qualityButton.menuButton_.$(".vjs-icon-placeholder").innerHTML=e},e.prototype.getQualityMenuItem=function(e){var t=this.player;return new m(t,e,this._qualityButton,this)},e.prototype.onAddQualityLevel=function(){for(var e=this,t=this.player,n=t.qualityLevels(),i=n.levels_||[],r=[],o=function(t){if(!r.filter((function(e){return e.item&&e.item.value===i[t].height})).length){var n=e.getQualityMenuItem.call(e,{label:i[t].height+"p",value:i[t].height});r.push(n)}},s=0;s<i.length;++s)o(s);r.sort((function(e,t){return"object"!==("undefined"===typeof e?"undefined":a(e))||"object"!==("undefined"===typeof t?"undefined":a(t))||e.item.value<t.item.value?-1:e.item.value>t.item.value?1:0})),r.push(this.getQualityMenuItem.call(this,{label:t.localize("Auto"),value:"auto",selected:!0})),this._qualityButton&&(this._qualityButton.createItems=function(){return r},this._qualityButton.update())},e.prototype.setQuality=function(e){var t=this.player.qualityLevels();this._currentQuality=e,this.config.displayCurrentQuality&&this.setButtonInnerText("auto"===e?e:e+"p");for(var n=0;n<t.length;++n){var i=t[n];i.enabled=i.height===e||"auto"===e}this._qualityButton.unpressButton()},e.prototype.getCurrentQuality=function(){return this._currentQuality||"auto"},e}(),w=function(e,t){e.addClass("vjs-hls-quality-selector"),e.hlsQualitySelector=new _(e,t)},x=function(e){var t=this;this.ready((function(){w(t,r.a.mergeOptions(g,e))}))};b("hlsQualitySelector",x),x.VERSION=o,t["default"]=x},c638:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex align-center justify-center pt-5 flex-column"},[n("h1",{staticClass:"mb-2",class:{"zoom-in-out":e.drug>=2}},[n("span",{class:{"ranbow-text":e.drug>=1}},[e._v(e._s(e.$route.params.id))]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.exist,expression:"!exist"}],class:{"ranbow-text":e.drug>=1}},[e._v(" 無此串流")])]),n("v-responsive",{directives:[{name:"show",rawName:"v-show",value:e.exist,expression:"exist"}],staticClass:"player",class:{"dvd-move":e.drug>=2},attrs:{"aspect-ratio":16/9}},[n("video",{ref:"videoPlayer",staticClass:"video-js vjs-big-play-centered",attrs:{controls:"",muted:""},domProps:{muted:!0}})])],1)},r=[],o=n("1da1"),a=n("5530"),s=(n("c740"),n("99af"),n("96cf"),n("5880")),u=n("0334"),l=n.n(u);n("fda2");n("2e59"),n("bd6c");var c={data:function(){return{player:null,exist:!1,url:"",options:{autoplay:!0,controls:!0,sources:[]}}},computed:Object(a["a"])({},Object(s["mapState"])(["drug"])),watch:{$route:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkStreamPath();case 2:e.player.src({src:e.url,type:"application/vnd.apple.mpegurl"});case 3:case"end":return t.stop()}}),t)})))()}},methods:{resizeWindow:function(){this.$refs.videoPlayer},checkStreamPath:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("stream");case 2:n=t.sent,i=n.data,e.exist=-1!==i.findIndex((function(t){return t===e.$route.params.id})),e.url="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_VIDEO_URL||"/live","/").concat(e.$route.params.id,".m3u8");case 6:case"end":return t.stop()}}),t)})))()},loadVideo:function(){var e=this;this.exist&&(this.player=l()(this.$refs.videoPlayer,this.options,(function(){e.player.src({src:e.url,type:"application/x-mpegurl"}),e.player.hlsQualitySelector({displayCurrentQuality:!0}),e.resizeWindow()})))},disposePlayer:function(){this.player&&(this.player.dispose(),this.player=null,window.removeEventListener("resize",this.resizeWindow))}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkStreamPath();case 2:e.loadVideo(),window.addEventListener("resize",e.resizeWindow);case 4:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.disposePlayer()}},h=c,p=(n("5044"),n("2877")),d=n("6544"),f=n.n(d),y=n("6b53"),v=Object(p["a"])(h,i,r,!1,null,"74da38f4",null);t["default"]=v.exports;f()(v,{VResponsive:y["a"]})},e3d6:function(e,t,n){},ef34:function(e,t,n){(function(t){var i,r="undefined"!==typeof t?t:"undefined"!==typeof window?window:{},o=n(1);"undefined"!==typeof document?i=document:(i=r["__GLOBAL_DOCUMENT_CACHE@4"],i||(i=r["__GLOBAL_DOCUMENT_CACHE@4"]=o)),e.exports=i}).call(this,n("c8ba"))},fda2:function(e,t,n){}}]);
//# sourceMappingURL=chunk-fa4afaf0.2352dfad.js.map