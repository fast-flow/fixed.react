webpackJsonp([4],{144:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.FixedRight=t.FixedLeft=t.FixedCnt=t.FixedFoot=t.FixedHead=t.Fixed=void 0;var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(145);var l=r(149),u=r(161),p=n(u),f=r(163),d=n(f),h=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){return r(149).createElement("div",{className:this.props.className,style:this.props.style},this.props.children)}}]),t}(l.Component),m=t.Fixed=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e,t=this,n=t.props.prefixClassName,a=t.props,i=r(149).createElement("div",{className:n+"-space"},t.props.children),s=[];return a.spaceClassName.forEach(function(e,t){s[t]=s[t]||{},s[t].className=e}),a.spaceStyle.forEach(function(e,t){s[t]=s[t]||{},s[t].style=e}),s.forEach(function(e){e.className=e.className||"",i=r(149).createElement(h,{className:e.className+" "+n+"-space",style:e.style},i)}),r(149).createElement("div",{className:(0,d.default)((e={},o(e,""+n,!0),o(e,""+t.props.className,t.props.className),e))},i)}}]),t}(l.Component);(0,p.default)(m);var y={};(0,p.default)(y);var v=y.defaultProps;t.FixedHead=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e;return r(149).createElement("div",{className:(0,d.default)((e={},o(e,v.prefixClassName+"-head",!0),o(e,this.props.className,this.props.className),e))},this.props.children)}}]),t}(l.Component),t.FixedFoot=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e;return r(149).createElement("div",{className:(0,d.default)((e={},o(e,v.prefixClassName+"-foot",!0),o(e,this.props.className,this.props.className),e))},this.props.children)}}]),t}(l.Component),t.FixedCnt=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e;return r(149).createElement("div",{className:(0,d.default)((e={},o(e,v.prefixClassName+"-cnt",!0),o(e,this.props.className,this.props.className),e))},this.props.children)}}]),t}(l.Component),t.FixedLeft=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e;return r(149).createElement("div",{className:(0,d.default)((e={},o(e,v.prefixClassName+"-left",!0),o(e,this.props.className,this.props.className),e))},this.props.children)}}]),t}(l.Component),t.FixedRight=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e;return r(149).createElement("div",{className:(0,d.default)((e={},o(e,v.prefixClassName+"-right",!0),o(e,this.props.className,this.props.className),e))},this.props.children)}}]),t}(l.Component)},145:function(e,t,r){var n=r(146);"string"==typeof n&&(n=[[e.id,n,""]]);r(148)(n,{});n.locals&&(e.exports=n.locals)},146:function(e,t,r){t=e.exports=r(147)(),t.push([e.id,"html .r-fixed--fixed{position:fixed;top:0;left:0}html .r-fixed--absolute{position:absolute;left:0;top:0}.r-fixed{position:relative;width:100%;height:100%}.r-fixed-head{top:0}.r-fixed-foot,.r-fixed-head{position:absolute;left:0;width:100%}.r-fixed-foot{bottom:0}.r-fixed-left{left:0}.r-fixed-left,.r-fixed-right{position:absolute;top:0;height:100%}.r-fixed-right{right:0}.r-fixed-cnt{height:100%;overflow:auto}.r-fixed-space{height:100%;box-sizing:border-box}",""])},147:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},148:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(l(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(l(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],s=o[2],c=o[3],l={css:i,media:s,sourceMap:c};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function a(e,t){var r=y(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function l(e,t){var r,n,o;if(t.singleton){var a=g++;r=v||(v=s(t)),n=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(t),n=f.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=p.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function u(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function f(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],c=d[s.id];c.refs--,a.push(c)}if(e){var l=o(e);n(l,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},149:function(e,t,r){"use strict";e.exports=r(150)},150:function(e,t,r){"use strict";var n=r(3),o=r(151),a=r(155),i=r(38),s=r(160),c={};i(c,a),i(c,{findDOMNode:s("findDOMNode","ReactDOM","react-dom",n,n.findDOMNode),render:s("render","ReactDOM","react-dom",n,n.render),unmountComponentAtNode:s("unmountComponentAtNode","ReactDOM","react-dom",n,n.unmountComponentAtNode),renderToString:s("renderToString","ReactDOMServer","react-dom/server",o,o.renderToString),renderToStaticMarkup:s("renderToStaticMarkup","ReactDOMServer","react-dom/server",o,o.renderToStaticMarkup)}),c.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n,c.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o,e.exports=c},151:function(e,t,r){"use strict";var n=r(70),o=r(152),a=r(141);n.inject();var i={renderToString:o.renderToString,renderToStaticMarkup:o.renderToStaticMarkup,version:a};e.exports=i},152:function(e,t,r){"use strict";function n(e){i.isValidElement(e)?void 0:h(!1);var t;try{p.injection.injectBatchingStrategy(l);var r=s.createReactRootID();return t=u.getPooled(!1),t.perform(function(){var n=d(e,null),o=n.mountComponent(r,t,f);return c.addChecksumToMarkup(o)},null)}finally{u.release(t),p.injection.injectBatchingStrategy(a)}}function o(e){i.isValidElement(e)?void 0:h(!1);var t;try{p.injection.injectBatchingStrategy(l);var r=s.createReactRootID();return t=u.getPooled(!0),t.perform(function(){var n=d(e,null);return n.mountComponent(r,t,f)},null)}finally{u.release(t),p.injection.injectBatchingStrategy(a)}}var a=r(91),i=r(41),s=r(44),c=r(47),l=r(153),u=r(154),p=r(53),f=r(57),d=r(61),h=r(12);e.exports={renderToString:n,renderToStaticMarkup:o}},153:function(e,t){"use strict";var r={isBatchingUpdates:!1,batchedUpdates:function(e){}};e.exports=r},154:function(e,t,r){"use strict";function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=a.getPooled(null),this.useCreateElement=!1}var o=r(55),a=r(54),i=r(56),s=r(38),c=r(14),l={initialize:function(){this.reactMountReady.reset()},close:c},u=[l],p={getTransactionWrappers:function(){return u},getReactMountReady:function(){return this.reactMountReady},destructor:function(){a.release(this.reactMountReady),this.reactMountReady=null}};s(n.prototype,i.Mixin,p),o.addPoolingTo(n),e.exports=n},155:function(e,t,r){"use strict";var n=r(109),o=r(122),a=r(121),i=r(156),s=r(41),c=(r(157),r(106)),l=r(141),u=r(38),p=r(159),f=s.createElement,d=s.createFactory,h=s.cloneElement,m={Children:{map:n.map,forEach:n.forEach,count:n.count,toArray:n.toArray,only:p},Component:o,createElement:f,cloneElement:h,isValidElement:s.isValidElement,PropTypes:c,createClass:a.createClass,createFactory:d,createMixin:function(e){return e},DOM:i,version:l,__spread:u};e.exports=m},156:function(e,t,r){"use strict";function n(e){return o.createFactory(e)}var o=r(41),a=(r(157),r(158)),i=a({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul",var:"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",image:"image",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},n);e.exports=i},157:function(e,t,r){"use strict";function n(){if(p.current){var e=p.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;a("uniqueKey",e,t)}}function a(e,t,r){var o=n();if(!o){var a="string"==typeof r?r:r.displayName||r.name;a&&(o=" Check the top-level render call using <"+a+">.")}var i=h[e]||(h[e]={});if(i[o])return null;i[o]=!0;var s={parentOrOwner:o,url:" See https://fb.me/react-warning-keys for more information.",childOwner:null};return t&&t._owner&&t._owner!==p.current&&(s.childOwner=" It was passed a child from "+t._owner.getName()+"."),s}function i(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];l.isValidElement(n)&&o(n,t)}else if(l.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var a=f(e);if(a&&a!==e.entries)for(var i,s=a.call(e);!(i=s.next()).done;)l.isValidElement(i.value)&&o(i.value,t)}}function s(e,t,r,o){for(var a in t)if(t.hasOwnProperty(a)){var i;try{"function"!=typeof t[a]?d(!1):void 0,i=t[a](r,a,e,o)}catch(e){i=e}if(i instanceof Error&&!(i.message in m)){m[i.message]=!0;n()}}}function c(e){var t=e.type;if("function"==typeof t){var r=t.displayName||t.name;t.propTypes&&s(r,t.propTypes,e.props,u.prop),"function"==typeof t.getDefaultProps}}var l=r(41),u=r(64),p=(r(65),r(4)),f=(r(42),r(107)),d=r(12),h=(r(24),{}),m={},y={createElement:function(e,t,r){var n="string"==typeof e||"function"==typeof e,o=l.createElement.apply(this,arguments);if(null==o)return o;if(n)for(var a=2;a<arguments.length;a++)i(arguments[a],e);return c(o),o},createFactory:function(e){var t=y.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,r){for(var n=l.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)i(arguments[o],n.type);return c(n),n}};e.exports=y},158:function(e,t){"use strict";function r(e,t,r){if(!e)return null;var o={};for(var a in e)n.call(e,a)&&(o[a]=t.call(r,e[a],a,e));return o}var n=Object.prototype.hasOwnProperty;e.exports=r},159:function(e,t,r){"use strict";function n(e){return o.isValidElement(e)?void 0:a(!1),e}var o=r(41),a=r(12);e.exports=n},160:function(e,t,r){"use strict";function n(e,t,r,n,o){return o}r(38),r(24);e.exports=n},161:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,i.default)(!0,e,{defaultProps:{prefixClassName:"r-fixed",className:"",spaceClassName:[],spaceStyle:[]},propTypes:{prefixClassName:o.PropTypes.string,className:o.PropTypes.string,spaceClassName:o.PropTypes.array,spaceStyle:o.PropTypes.array}})};var o=r(149),a=r(162),i=n(a)},162:function(e,t){"use strict";var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},a=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var t=r.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&r.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!o)return!1;var a;for(a in e);return"undefined"==typeof a||r.call(e,a)};e.exports=function e(){var t,r,n,i,s,c,l=arguments[0],u=1,p=arguments.length,f=!1;for("boolean"==typeof l?(f=l,l=arguments[1]||{},u=2):("object"!=typeof l&&"function"!=typeof l||null==l)&&(l={});u<p;++u)if(t=arguments[u],null!=t)for(r in t)n=l[r],i=t[r],l!==i&&(f&&i&&(a(i)||(s=o(i)))?(s?(s=!1,c=n&&o(n)?n:[]):c=n&&a(n)?n:{},l[r]=e(f,c,i)):"undefined"!=typeof i&&(l[r]=i));return l}},163:function(e,t,r){var n,o;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(r.apply(null,n));else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(n=[],o=function(){return r}.apply(t,n),!(void 0!==o&&(e.exports=o)))}()},166:function(e,t,r){"use strict";var n=r(144),o=r(149),a=o.createClass({displayName:"App",render:function(){return r(149).createElement(n.Fixed,{className:"mockWindow",spaceClassName:["m-sidebar-space","m-nav-space"]},r(149).createElement(n.FixedLeft,null,r(149).createElement("div",{className:"m-sidebar"},"sidebar")),r(149).createElement(n.FixedCnt,{className:"horizontal-scroll"},r(149).createElement("div",{style:{overflowX:"auto",whiteSpace:"nowrap",height:"100px"}},"a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z")),r(149).createElement(n.FixedRight,null,r(149).createElement("div",{className:"m-nav"},"sidebar")))}});e.exports=a}});
//# sourceMappingURL=4-4-9fccea1215185c6e83ab.js.map