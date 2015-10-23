/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","jqueryui","ojs/ojmessaging"],function(a,f){function c(a,b){f(a).find("."+k).each(function(a,c){var d=f(c),e=d.data(h);if(null!=e)for(var g=0;g<e.length;g++){var l=d.data("oj-"+e[g]);null!=l&&b(l)}})}function b(a){this.bW=function(){return a}}function d(a,b,c,d,g,l,f){var h=c,m=!1,k={};delete d[g];Object.defineProperty(d,g,{get:function(){if(m||null!=a.ll)return h;var c=l(f?f():g);return e([b,c,h],k)},set:function(b){h=b;null!=a.ll?k[a.ll]=!0:m=!0},enumerable:!0})}function e(a,
b){for(var c=void 0,d=0;d<a.length;d++){var e=a[d];void 0!==e&&(c=f.isPlainObject(e)?g(f.isPlainObject(c)?[c,e]:[e],d==a.length-1?null:b,null):e)}return c}function g(a,b,c){for(var d={},e=a.length,l=0;l<e;l++)for(var h=a[l],m=Object.keys(h),k=0;k<m.length;k++){var w=m[k],y=null==b?null:null==c?w:c+"."+w;if(null==b||!b[y]){var H=h[w];void 0!==H&&(d[w]=f.isPlainObject(H)?g(f.isPlainObject(d[w])?[d[w],H]:[H],b,y):H)}}return d}a.Components={};o_("Components",a.Components,a);a.Components.Cy=function(b){a.Components.NB=
f.widget.extend(a.Components.NB||{},b)};o_("Components.setDefaultOptions",a.Components.Cy,a);a.Components.RH=function(){return a.Components.NB||{}};o_("Components.getDefaultOptions",a.Components.RH,a);a.Components.Uj=function(a){return new b(a)};o_("Components.createDynamicPropertyGetter",a.Components.Uj,a);a.Components.rs=function(a,b){var c=f(a);if(null==b){var d=c.data(h);d&&(b=d[0])}return null!=b&&(d=c[b],"function"===typeof d)?d.bind(c):null};o_("Components.getWidgetConstructor",a.Components.rs,
a);a.Components.xX=function(b){a.ba.FH(b);c(b,function(a){a.pL()})};o_("Components.subtreeAttached",a.Components.xX,a);a.Components.yX=function(a){c(a,function(a){a.bA()})};o_("Components.subtreeDetached",a.Components.yX,a);a.Components.Jy=function(b){a.ba.FH(b);c(b,function(){})};o_("Components.subtreeShown",a.Components.Jy,a);a.Components.Iy=function(a){c(a,function(){})};o_("Components.subtreeHidden",a.Components.Iy,a);a.Components.Bp="data-oj-container";var h="oj-component-names",k="oj-component-initnode";
f.widget("oj.baseComponent",{options:{contextMenu:null,rootAttributes:void 0},refresh:function(){this.On=null},_createWidget:function(a,b){this.FE=this.options||{};this.xB=a||{};this._super(a,b)},aM:function(){var a=this.options.rootAttributes;if(a){var b=this.widget();if(null!=b){var c=a["class"];c&&b.addClass(c);if(c=a.style){var d=b.attr("style");d?b.attr("style",d+";"+c):b.attr("style",c)}a=f.extend({},a);delete a["class"];delete a.style;b.attr(a);delete a.id;a=Object.keys(a);if(a.length)throw Error("Unsupported values passed to rootAttributes option: "+
a.toString());}}},_create:function(){this.sA(this.element);this._InitOptions(this.FE,this.xB);delete this.FE;delete this.xB;this._ComponentCreate();this.Rh()},_InitOptions:function(a,b){this.oU(a,b)},_ComponentCreate:function(){this.activeable=f();this.element.addClass(k);var a=this.element,b=this.widgetName,c=a.data(h);c||(c=[],a.data(h,c));0>c.indexOf(b)&&c.push(b)},Rh:function(){this.aM();this.zx=this.eventNamespace+"contextMenu";this.iG()},sA:function(a){var b=this;this.Iw=[];f.each(a,function(a,
c){var d={},e=c.attributes;b.Iw.push({element:c,attributes:d});f.each(e,function(a,b){var e=b.name;d[e]={attr:b.value,prop:f(c).prop(e)}})})},gt:function(a){var b=this.Iw;a=a[0];for(var c=0,d=b.length;c<d;c++){var e=b[c];if(e.element===a)return e.attributes}return{}},vk:function(){f.each(this.Iw,function(a,b){var c=f(b.element),d=b.attributes;if(1===c.length){for(var e=b.element.attributes,g=[],l=0,h=e.length;l<h;l++)e[l].name in d||g.push(e[l].name);l=0;for(h=g.length;l<h;l++)c.removeAttr(g[l]);
for(var m in d)c.attr(m,d[m].attr)}})},Kz:function(){return this.widgetFullName},O:function(b,c){var d={},e;2<arguments.length?d=Array.prototype.slice.call(arguments,1):2==arguments.length&&(d=arguments[1],"object"===typeof d||d instanceof Array||(d=[d]));e=this.option(m+b);return null==e?b:a.ea.ub(e.toString(),d)},getNodeBySubId:function(a){return null==a||null==a.subId?this.element?this.element[0]:null:null},getSubIdByNode:function(){return null},destroy:function(){this.MG();this._super();this.element.removeClass(k);
this.widget().removeClass("oj-disabled");this.hoverable.removeClass("oj-hover");this.focusable.removeClass("oj-focus");this.activeable.removeClass("oj-active");var a=this.element,b=this.widgetName,c=a.data(h);c&&(b=c.indexOf(b),0<=b&&(c.splice(b,1),0===c.length&&a.removeData(h)))},option:function(a,b){if(0===arguments.length)return f.widget.extend({},this.options);var c=arguments[0],d=c,e=null,g={};if("string"===typeof c){var d={},l=c.split("."),c=l.shift();if(l.length){var e=l.join("."),h;try{1<
arguments.length&&(this.ll=e),h=d[c]=f.widget.extend({},this.options[c])}finally{this.ll=null}for(c=0;c<l.length-1;c++)h[l[c]]=h[l[c]]||{},h=h[l[c]];c=l.pop();if(1===arguments.length)return void 0===h[c]?null:h[c];h[c]=b}else{if(1===arguments.length)return void 0===this.options[c]?null:this.options[c];d[c]=b}g=arguments[2]||g}else g=arguments[1]||g;null!=e&&(g=f.widget.extend({},g,{subkey:e}));this._setOptions(d,g);return this},_setOptions:function(a,b){for(var c in a)this._setOption(c,a[c],b);return this},
_setOption:function(a,b,c){if("disabled"===a)this.options[a]=b,this.widget().toggleClass("oj-disabled",!!b).attr("aria-disabled",b),b&&(this.hoverable.removeClass("oj-hover"),this.focusable.removeClass("oj-focus"),this.activeable||(this.activeable=f()),this.activeable.removeClass("oj-active"));else{try{var d=null==c?null:c.subkey;null!=d&&(this.ll=d);this._super(a,b)}finally{this.ll=null}"contextMenu"===a&&this.iG()}return this},iG:function(){this.MG();var a=this.options.contextMenu;a||(a=this.element.attr("contextmenu"))&&
(a="#"+a);a&&(a=f(a).data("oj-ojMenu"));if(a){var b=this,c=this.widget();c&&c.on("keydown"+this.zx+" contextmenu"+this.zx,function(c){return"contextmenu"===c.type||121==c.which&&c.shiftKey?(b._OpenContextMenu(a,c),!1):!0})}},MG:function(){var a=this.widget();a&&a.off(this.zx)},_OpenContextMenu:function(a,b){a.open(b,{launcher:this.element,initialFocus:"menu"})},_hoverable:function(a){this.hoverable=this.hoverable.add(a);this._on(a,{mouseenter:function(a){f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){f(a.currentTarget).removeClass("oj-hover")}})},
_focusable:function(a){this.focusable=this.focusable.add(a);this._on(a,{focusin:function(a){f(a.currentTarget).addClass("oj-focus")},focusout:function(a){f(a.currentTarget).removeClass("oj-focus")}})},Lp:function(a){this.activeable=this.activeable.add(a);this._on(a,{mousedown:function(a){f(a.currentTarget).addClass("oj-active")},mouseup:function(a){f(a.currentTarget).removeClass("oj-active")}})},Gc:function(a){return this.option(m+a)},Ec:function(){var a=document.documentElement.getAttribute("dir");
a&&(a=a.toLowerCase());return"rtl"===a?"rtl":"ltr"},pL:function(){this.On=null},bA:function(){this.On=null},SX:function(){},RX:function(){},ed:function(){return this.options.disabled||this.OA?!0:!1},Dm:function(a){this.OA=a},iQ:function(){var b=[],c=this,d=0;this.KG(function(e){e=0==d?c.Kz():e.widgetFullName;d++;var g=a.ea.ms(e);null==g||f.isEmptyObject(g)||b.push(e)});var e=b.length;return 0<e?function(){if(1==e)return a.ea.ms(b[0]);for(var c={},d=e-1;0<=d;d--)f.widget.extend(c,a.ea.ms(b[d]));return c}:
null},wP:function(){if(!this.On){var b={};this.On=b;for(var c=this.element[0],d=[];c;){var e=c.getAttribute,e=e?e.call(c,a.Components.Bp):null;null!=e&&d.push(e);c=c.parentNode}b.containers=d}return this.On},oU:function(a,b){var c=this.options,e=this.iQ(),g=b[l];null==e||void 0!==g&&!f.isPlainObject(g)||d(this,void 0,b[l],c,l,e);this.TR(a,b)},TR:function(c,g){var l=this.options,h={},p=[];this.KG(function(a){p.push(a.widgetName)});var m=a.Components.RH();p.push("default");for(var k=p.length-1;0<=k;k--){var v=
m[p[k]];void 0!==v&&(h=f.widget.extend(h,v))}if(!f.isEmptyObject(h)){var z=this,m=function(){return z.wP()},w;for(w in h)if(k=g[w],void 0===k||f.isPlainObject(k))v=h[w],null!=v&&v instanceof b?(v=v.bW(),f.isFunction(v)?d(this,c[w],k,l,w,v,m):a.D.error("Dynamic getter for property %s is not a function",w)):l[w]=e([c[w],v,k])}},KG:function(a){for(var b=this.constructor.prototype;null!=b&&"oj"===b.namespace;)a(b),b=Object.getPrototypeOf(b)}});a.Oa=function(a,b,c){f.widget(a,b,c);if("oj.oj"===a.substring(0,
5)||"oj._oj"===a.substring(0,6)){b=a.split(".");a=b[0];b=b[1];var d=a+"-"+b;f.expr[":"][("_"===b.substring(0,1)?"_"+a+"-"+b.substring(3):a+"-"+b.substring(2)).toLowerCase()]=function(a){return!!f.data(a,d)}}};var l="translations",m=l+".";a.ba={};a.ba.LK="\x3chtml\x3e";a.ba.JK="\x3c/html\x3e";a.ba.fL={SPAN:1,B:1,A:1,I:1,EM:1,BR:1,HR:1,LI:1,OL:1,UL:1,P:1,TT:1,BIG:1,SMALL:1,PRE:1};a.ba.eL={"class":1,style:1,href:1};a.ba.dg="data-oj-surrogateid";a.ba.HW=function(b){return 0===b.indexOf(a.ba.LK)&&b.lastIndexOf(a.ba.JK)===
b.length-7?!0:!1};a.ba.AV=function(b){var c=f(document.createElement("span")).get(0);(c.innerHTML=b)&&0<=b.indexOf("\x3c")&&a.ba.oB(c);return c};a.ba.oB=function(b){for(var c=b.childNodes,d,e,g,l,h,m=c.length-1;0<=m;){if((d=c.item(m))&&1===d.nodeType)if(a.ba.fL[d.nodeName]){e=d.attributes;for(h=e.length-1;0<=h;h--)g=e[h],(l=void 0!==f(d).attr(g.name))&&(a.ba.eL[g.name]||d.removeAttribute(g.nodeName));a.ba.oB(d)}else d&&b.removeChild(d);m--}};a.ba.GW=function(b,c){a.i.kf(b);a.i.kf(c);var d,e;1===c.nodeType&&
c.hasAttribute(a.ba.dg)?(d=c.getAttribute(a.ba.dg),d=f("#"+d),e=0<d.length?d[0]:c.parentNode):e=c.parentNode;for(;e;){if(e==b)return!0;1===e.nodeType&&e.hasAttribute(a.ba.dg)?(d=e.getAttribute(a.ba.dg),d=f("#"+d),e=0<d.length?d[0]:e.parentNode):e=e.parentNode}return!1};a.ba.Co=function(b,c){a.i.kf(b);a.i.kf(c);return c==b?!0:a.ba.GW(b,c)};a.ba.ug=function(b,c){var d=f(b),e=d.data(a.ba.zm);null==e&&(e=new a.ba.KL(b),d.data(a.ba.zm,e),e.start());e.addListener(c)};a.ba.Ti=function(b,c){var d=f(b),e=
d.data(a.ba.zm);null!=e&&(e.removeListener(c),e.isEmpty()&&(e.stop(),d.removeData(a.ba.zm)))};a.ba.FH=function(b){f(b).find(".oj-helper-detect-expansion").parent().each(function(b,c){var d=f(c).data(a.ba.zm);null!=d&&d.nH(!1)})};a.ba.Ho=function(b){void 0===a.ba.SD&&(a.ba.SD=navigator&&navigator.userAgent?0<=navigator.userAgent.toLowerCase().indexOf("mac os"):!1);return a.ba.SD?b.metaKey:b.ctrlKey};a.ba.vR=(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||
function(a){return window.setTimeout(a,0)}).bind(window);a.ba.qN=(window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||function(a){return window.clearTimeout(a)}).bind(window);a.ba.KL=function(b){this.An=f.Callbacks();this.addListener=function(a){this.An.add(a)};this.removeListener=function(a){this.An.remove(a)};this.isEmpty=function(){return this.An.empty()};this.start=function(){this.yr=this.Kv.bind(this);if(b.attachEvent)this.EF=this.He.bind(this),b.attachEvent("onresize",
this.EF);else{var a=b.childNodes[0],c=this.pj=document.createElement("div");c.className="oj-helper-detect-expansion";var d=document.createElement("div");c.appendChild(d);b.insertBefore(c,a);c.addEventListener("scroll",this.yr,!1);d=this.mq=document.createElement("div");d.className="oj-helper-detect-contraction";var e=document.createElement("div");e.style.width="200%";e.style.height="200%";d.appendChild(e);b.insertBefore(d,a);d.addEventListener("scroll",this.yr,!1);null!=c.offsetParent&&this.Ft(c.offsetWidth,
c.offsetHeight)}};this.stop=function(){null!=this.pj?(this.pj.removeEventListener("scroll",this.yr),this.mq.removeEventListener("scroll",this.yr),b.removeChild(this.pj),b.removeChild(this.mq)):b.detachEvent("onresize",this.EF)};this.nH=function(b){var c=this.pj;if(null!=c.offsetParent){var d=c.offsetWidth,e=c.offsetHeight;if(this.vS!==d||this.uS!==e){this.KF=2;this.Ft(d,e);void 0!==this.Vv&&a.ba.qN(this.Vv);var g=this,l=this.An;this.Vv=a.ba.vR(function(){g.Vv=void 0;l.fire(d,e)})}else b&&0<this.KF&&
(0==c.scrollLeft||0==c.scrollTop)&&(this.KF--,this.Ft(d,e))}};this.Kv=function(a){a.stopPropagation();this.nH(!0)};this.He=function(){this.An.fire(b.offsetWidth,b.offsetHeight)};this.Ft=function(a,b){this.vS=a;this.uS=b;var c=this.pj.firstChild;c.style.width=a+1+"px";c.style.height=b+1+"px";this.pj.scrollLeft=1;this.pj.scrollTop=1;this.mq.scrollLeft=a;this.mq.scrollTop=b}};a.ba.zm="_ojResizeTracker";a.Xa=function(a){this.Init(a)};a.b.sa(a.Xa,a.b,"oj.ComponentMessaging");a.Xa.bd={NONE:"none",jp:"notewindow",
jm:"placeholder"};a.Xa.dt={};a.Xa.uy=function(b,c){b&&"function"===typeof c&&(a.Xa.dt[b]=c)};a.Xa.prototype.Init=function(b){a.Xa.t.Init.call(this);this.Va=b;this.Em=!1;this.tR()};a.Xa.prototype.wi=function(b,c){var d=this;a.i.oe(c);this.Nb=b;this.hr=a.ec.Ne(this.hr||{},c);this.Em?this.YS():(f.each(this.Oj,function(a,b){b.wi(d)}),this.Em=!0)};a.Xa.prototype.update=function(b){a.i.oe(b);a.i.gH(this.Em);this.hr=a.ec.Ne(this.hr||{},b);this.Em&&f.each(this.Oj,function(a,b){b.update()})};a.Xa.prototype.zg=
function(){f.each(this.Oj,function(a,b){b.zg()});this.Em=!1;this.Nb=this.Va=null;this.Oj={}};a.Xa.prototype.iq=function(b,c){return new (a.Xa.dt[b]||a.Xa.dt[a.Xa.bd.NONE])(c)};a.Xa.prototype.qP=function(){return this.Va||null};a.Xa.prototype.IP=function(){return this.Nb||null};a.Xa.prototype.ff=function(){return this.hr||{}};a.Xa.prototype.XC=function(){var b={},c=!1,d,e,g=this.Va.options.placeholder,l,h,m,k,w=this.Va.options.displayOptions||{},y={};h=Object.keys(w);for(m=0;m<h.length;m++){e=h[m];
d=w[e];c=!1;l=e+"";if(Array.isArray(d))for(k=0;k<d.length;k++)e=d[k],c||(c=this.FF(l,e,g,y));else"string"===typeof d&&(c||(c=this.FF(l,d,g,y)));c||(y[l]=a.Xa.bd.NONE)}f.each(a.Xa.bd,function(a,c){b[c]=[]});f.each(y,function(a,c){b[c].push(a)});return b};a.Xa.prototype.FF=function(b,c,d,e){var g=!1;switch(c){case a.Xa.bd.jm:"converterHint"!==b||g||d||(e[b]=c,g=!0);break;default:g||(e[b]=c,g=!0)}return g};a.Xa.prototype.tR=function(){var b=this.XC(),c=b[a.Xa.bd.jp],d=b[a.Xa.bd.NONE],b=b[a.Xa.bd.jm],
e={};0<c.length&&(e[a.Xa.bd.jp]=this.iq(a.Xa.bd.jp,c));0<b.length&&(e[a.Xa.bd.jm]=this.iq(a.Xa.bd.jm,b));e[a.Xa.bd.NONE]=this.iq(a.Xa.bd.NONE,d);this.Oj=e};a.Xa.prototype.YS=function(){var b=this.XC(),c,d=this;f.each(b,function(b,e){b+="";c=d.Oj[b];e&&0<e.length?c?c&&c.Wo(e):(c=d.iq(b,e),d.Oj[b]=c,c.wi(d)):c&&a.Xa.bd.NONE!==b&&(c.zg(),delete d.Oj[b])})};a.Sb=function(a){this.Init(a)};a.b.sa(a.Sb,a.b,"oj.MessagingStrategy");a.Sb.prototype.Init=function(b){a.i.Yr(b);a.Sb.t.Init.call(this);this.nq=b};
a.Sb.prototype.wi=function(a){this.jj=a};a.Sb.prototype.update=function(){};a.Sb.prototype.zg=function(){};a.Sb.prototype.Wo=function(a){this.Init(a)};a.Sb.prototype.fe=function(){return this.jj.IP()};a.Sb.prototype.Ze=function(){return this.jj.qP()};a.Sb.prototype.$y=function(){return this.Ps().En};a.Sb.prototype.Zy=function(){return this.Ps().El()};a.Sb.prototype.Yy=function(){var a=[],b=this.ff().converterHint;b&&a.push(b);return a};a.Sb.prototype.PJ=function(){var a=[],b=this.ff().validatorHint||
[];f.each(b,function(b,c){a.push(c)});return a};a.Sb.prototype.OJ=function(){return this.ff().title||""};a.Sb.prototype.Ps=function(){return this.ff().validityState};a.Sb.prototype.az=function(){var a=this.$y();return a&&0<a.length?!0:!1};a.Sb.prototype.fK=function(){return-1!==this.nq.indexOf("messages")?!0:!1};a.Sb.prototype.Vs=function(){return-1!==this.nq.indexOf("converterHint")?!0:!1};a.Sb.prototype.kz=function(){return-1!==this.nq.indexOf("validatorHint")?!0:!1};a.Sb.prototype.jz=function(){return-1!==
this.nq.indexOf("title")?!0:!1};a.Sb.prototype.QJ=function(){return this.Ps().$x()};a.Sb.prototype.ff=function(){return this.jj?this.jj.ff():{}};a.sd=function(a){this.Init(a)};a.Xa.uy(a.Xa.bd.NONE,a.sd);a.sd.Dp="oj-invalid";a.sd.Ep="oj-warning";a.b.sa(a.sd,a.Sb,"oj.DefaultMessagingStrategy");a.sd.prototype.update=function(){a.sd.t.update.call(this);var b=this.fe(),c=this.Zy(),d=[],e=[],g=!1,l=this.Ze().widget();b&&(this.QJ()?(d.push(a.sd.Ep),e.push(a.sd.Dp),g=!0):this.az()&&c===a.U.Mb.WARNING?(d.push(a.sd.Dp),
e.push(a.sd.Ep)):(d.push(a.sd.Dp),d.push(a.sd.Ep)),l.removeClass(d.join(" ")).addClass(e.join(" ")),b.attr({"aria-invalid":g}))};a.sd.prototype.zg=function(){this.Ze().widget().removeClass(a.sd.Dp).removeClass(a.sd.Ep);this.fe().removeAttr("aria-invalid");a.sd.t.zg.call(this)};a.af=function(a){this.Init(a)};a.Xa.uy(a.Xa.bd.jm,a.af);a.b.sa(a.af,a.Sb,"oj.PlaceholderMessagingStrategy");a.af.prototype.Init=function(b){a.af.t.Init.call(this,b)};a.af.prototype.wi=function(b){a.af.t.wi.call(this,b);this.eF()};
a.af.prototype.Wo=function(b){a.af.t.Wo.call(this,b);this.eF()};a.af.prototype.zg=function(){a.af.t.zg.call(this)};a.af.prototype.eF=function(){var a=this.fe();this.Ze().widget();if(this.gK()&&a&&(a=this.Yy(),a=a.length?a[0]:"")){var b={},c={};b.placeholder=a;c._oj_messaging_update=!0;this.Ze().option(b,c)}};a.af.prototype.gK=function(){return this.Vs()};a.Bf=function(a,b){this.Init(a,b)};a.Bf.$x=function(b){return a.U.El(b)>=a.U.Mb.ERROR?!0:!1};a.b.sa(a.Bf,a.b,"oj.ComponentValidity");a.Bf.prototype.Init=
function(b,c){a.Bf.t.Init.call(this);this.FD(c)};a.Bf.prototype.$x=function(){return this.fi};a.Bf.prototype.El=function(){return this.cS};a.Bf.prototype.update=function(a,b){this.FD(b)};a.Bf.prototype.FD=function(b){this.DN=b;this.En=this.EP();this.cS=a.U.El(this.En);this.fi=a.Bf.$x(this.En)};a.Bf.prototype.EP=function(){var b=this.DN||[],c=[],d,e;for(e in b)d=b[e],d instanceof a.Rb&&!d.mH()||c.push(d);return c};a.nm={};o_("Test",a.nm,a);a.nm.ready=!1;o_("Test.ready",a.nm.ready,a);a.nm.TV=function(b){var c=
b;if(a.fb.pd(b))try{c=f.parseJSON(b)}catch(d){return null}return c&&c.element&&(b=f(c.element))?a.Components.rs(b[0],c.component)("getNodeBySubId",{subId:c.subId}):null};o_("Test.domNodeForLocator",a.nm.TV,a);f(document).ready(function(){var a=f("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"),b;a.appendTo("body");b=a.css("backgroundImage");
a.css("borderTopColor")!=a.css("borderRightColor")&&(null==b||"none"!=b&&"url (invalid-url:)"!=b)||f("body").addClass("oj-hicontrast");a.remove()});f(document).ready(function(){"Microsoft Internet Explorer"==navigator.appName&&f("html").addClass("oj-slow-borderradius oj-slow-cssgradients oj-slow-boxshadow")});a.he={};a.he.Jg=function(b,c){a.i.oe(b,"position");for(var d=f.extend({},b),e=0;e<a.he.rz.length;e++){var g=a.he.rz[e],l=d[g];l&&(d[g]=l.replace("start",c?"right":"left").replace("end",c?"left":
"right"))}return d};a.he.rz=["my","at"]});
//# sourceMappingURL=oj-modular.map