"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,f){window.adf||(window.adf={});var c=window.adf;c.R=c.R||{};c.R.T=c.R.T||{};c.R.T.V=c.R.T.V||{};c.R.T.V.W=function(a,c,e,f,h,k){this.$h=a;this.wS=c;this.Pm=e;this.Sp=f;h&&(h.XW&&(this.JS=h.XW),h.QW&&(this.sS=h.QW),h.WI&&(this.KS=h.WI),h.NI&&(this.tS=h.NI),h.VI&&(this.IS=h.VI),h.MI&&(this.rS=h.MI));k&&(k.cJ&&(this.NF=k.cJ),k.XV&&(this.Mu=k.XV),k.uV&&(this.hj=k.uV),k.ug&&(this.Op=k.ug),k.Ti&&(this.xr=k.Ti));this.It=!0;this.Kk=0;a=navigator.userAgent.toLowerCase();
if(-1!==a.indexOf("gecko/"))this.VM=!0;else if(-1!==a.indexOf("opera"))this.WM=!0;else if(-1!==a.indexOf("applewebkit")||-1!==a.indexOf("safari"))this.XM=!0};c.R.T.V.W.prototype.qX=function(a){var d=this,e=c.R.T.V.W;if(a){this.QN();this.fO(this.JS,this.KS,this.IS);this.SN(this.sS,this.tS,this.rS);var f=this.nr,h=this.Lr;h?(this.Vp=h.offsetWidth,this.Up=f.offsetHeight):(h=this.Xr,this.Vp=f.offsetWidth,this.Up=h.offsetHeight);this.Vq();this.Uq();this.Hn=function(a){d.NQ(a)};e.ah(this.$h,"mousewheel",
this.Hn);e.ah(this.$h,"wheel",this.Hn);this.ax=function(a){d.XQ(a)};e.ah(this.Fc,"touchstart",this.ax);this.$w=function(a){d.WQ(a)};e.ah(this.Fc,"touchmove",this.$w);this.bo=function(){d.VQ()};e.ah(this.Fc,"touchend",this.bo);e.ah(this.Fc,"touchcancel",this.bo);this.qw=0}else this.qF();this.gu();this.NA(a);this.He(!0);a&&this.Op&&(this.Sk=function(){d.He(!1)},this.Op.call(this.hj,this.$h,this.Sk),this.Op.call(this.hj,this.Yh,this.Sk))};c.R.T.V.W.prototype.destroy=function(){var a=this.$h,d=c.R.T.V.W;
d.hl(a,"mousewheel",this.Hn);d.hl(a,"wheel",this.Hn);d.hl(this.Fc,"touchstart",this.ax);d.hl(this.Fc,"touchmove",this.$w);d.hl(this.Fc,"touchend",this.bo);d.hl(this.Fc,"touchcancel",this.bo);this.bo=this.$w=this.ax=this.Hn=null;this.xr&&this.Sk&&(this.xr.call(this.hj,a,this.Sk),this.xr.call(this.hj,this.Yh,this.Sk));this.Sk=null;d.BT(this.lu,a);this.VA=null;this.Xw?a.removeChild(this.Xw):(a.removeChild(this.Fc),a.removeChild(this.Xr),a.removeChild(this.mx));this.Xr=this.mx=this.lw=this.uw=this.Lr=
this.Ww=this.Xw=this.lu=this.Fc=this.Yh=this.tw=this.nr=null;this.gu();this.hj=this.xr=this.Op=this.Mu=this.NF=this.$h=null};c.R.T.V.W.CT=function(a,d,e){var f=c.R.T.V.W,h=null;e&&(h=f.ru(),d.appendChild(h));var k=null;for(a=a.childNodes;0<a.length;){k||(k=[]);var l=a[0];if(1===l.nodeType){e||(h=f.ru(),d.appendChild(h));var m=f.jq();m.appendChild(l);h.appendChild(m);k.push(l)}else e?h.appendChild(l):d.appendChild(l)}return k};c.R.T.V.W.BT=function(a,c){if(a)for(var e=a.childNodes;0<e.length;){var f=
e[0];if(1===f.nodeType){for(var h=f.childNodes;0<h.length;){var k=h[0];1===k.nodeType?(c.appendChild(k.firstChild),f.removeChild(k)):c.appendChild(k)}a.removeChild(f)}else c.appendChild(f)}};c.R.T.V.W.AC=function(a){var c=a.ownerDocument.defaultView,e=null;return e=c?c.getComputedStyle(a,null):a.currentStyle};c.R.T.V.W.yP=function(a){var d=c.R.T.V.W;a=d.AC(a);return d.vC(a.width)};c.R.T.V.W.xP=function(a){var d=c.R.T.V.W;a=d.AC(a);return d.vC(a.height)};c.R.T.V.W.vC=function(a){return 0<a.length&&
"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};c.R.T.V.W.ah=function(a,c,e){a.addEventListener?a.addEventListener(c,e,!1):a.attachEvent&&a.attachEvent("on"+c,e)};c.R.T.V.W.hl=function(a,c,e){a.removeEventListener?a.removeEventListener(c,e,!1):a.detachEvent&&a.detachEvent("on"+c,e)};c.R.T.V.W.jQ=function(a){var c=0;return c=null!=a.wheelDelta?a.wheelDelta:null!=a.deltaY?-a.deltaY:-a.detail};c.R.T.V.W.EB=function(){var a=document.createElement("div");a.style.display="table";return a};c.R.T.V.W.ru=
function(){var a=document.createElement("div");a.style.display="table-row";return a};c.R.T.V.W.jq=function(){var a=document.createElement("div");a.style.display="table-cell";return a};c.R.T.V.W.cH=function(a,c,e,f){var h=document.createElement("div"),k=h.style;k.display="inline-block";h.appendChild(a);c.appendChild(h);e&&(k.maxWidth=h.offsetWidth+"px");f&&(k.maxHeight=h.offsetHeight+"px");return h};c.R.T.V.W.prototype.kd=function(){return"horizontal"===this.wS};c.R.T.V.W.prototype.AR=function(){return!this.BC().hasChildNodes()};
c.R.T.V.W.prototype.qF=function(){this.qw=this.De();this.tB();this.Mw(0);this.Vq();this.Uq()};c.R.T.V.W.prototype.gu=function(){this.Hr=this.Mf=null};c.R.T.V.W.prototype.He=function(a){a||this.qF();this.gu();this.Mf&&this.Hr||(this.Mf=this.lE());a||this.NA();a=this.Mf;this.FM(a.Vc,a.Gh)};c.R.T.V.W.prototype.FM=function(a,c){var e=this.nr.style,f=this.tw.style;if(this.kd()){var h=.5*(c-this.Up);e.top=h+"px";f.top=h+"px"}else h=.5*(a-this.Vp),this.Sp?(e.left=-h+"px",f.left=-h+"px"):(e.left=h+"px",f.left=
h+"px")};c.R.T.V.W.prototype.NA=function(a){var d=this.Yh,e=this.kd(),f=c.R.T.V.W,f=e?f.yP(this.$h):f.xP(this.$h);(e?d.offsetWidth:d.offsetHeight)>f&&this.fG(f);this.Gn=0;this.Dn=e?d.offsetWidth-f+this.Vp:d.offsetHeight-f+this.Up;0>this.Dn&&(this.Dn=0);this.Vq();this.Uq();this.jl(a?this.Gn:this.qw,!0);this.qw=0};c.R.T.V.W.prototype.QN=function(){var a=this,d=this.kd(),e=document.createElement("div");this.Fc=e;var f=e.style;f.overflow="hidden";f.display=this.an();f.position="relative";d&&(f.verticalAlign=
"top");var h=this.$h,k=c.R.T.V.W,l=document.createElement("div");this.Yh=l;var m=l.style;m.position="relative";d&&(m.display="inline-block");e.appendChild(l);m=null;if(d){this.Xw=m=k.EB();var n=k.ru(),q=k.jq();this.Ww=q;var r=k.jq(),t=k.jq();this.Lr=t;var p=t.style;q.style.verticalAlign="top";p.verticalAlign="top";r.appendChild(e);n.appendChild(q);n.appendChild(r);n.appendChild(t);m.appendChild(n)}n=k.EB();q=k.CT(h,n,d);if(this.Pm)for(q=[],r=this.Pm.children,t=r.length,p=0;p<t;p++){var u=r[p];1===
u.nodeType&&q.push(u)}(this.VA=q)&&0<q.length&&(this.lu=n,l.appendChild(n));m?h.appendChild(m):(this.mx=m=document.createElement("div"),this.Xr=n=document.createElement("div"),h.appendChild(m),h.appendChild(e),h.appendChild(n));d&&(d=e.offsetHeight,l=l.offsetHeight,d>l&&(f.marginBottom=l-d+"px"));k.ah(e,"scroll",function(c){a.Kv(c)})};c.R.T.V.W.prototype.an=function(){return this.kd()?"inline-block":"block"};c.R.T.V.W.prototype.fO=function(a,d,e){var f=this,h=document.createElement("div");this.tw=
h;a&&h.setAttribute("id",a);h.setAttribute("class",d);h.setAttribute("aria-hidden","true");d=h.style;d.display=this.an();d.position="relative";if(a=this.kd())d.verticalAlign="top";d=c.R.T.V.W;d.ah(h,"click",function(){f.PF()});this.Ww?this.uw=d.cH(h,this.Ww,a,!a):this.mx.appendChild(h);e&&h.appendChild(e)};c.R.T.V.W.prototype.SN=function(a,d,e){var f=this,h=document.createElement("div");this.nr=h;a&&h.setAttribute("id",a);h.setAttribute("class",d);h.setAttribute("aria-hidden","true");d=h.style;d.display=
this.an();d.position="relative";if(a=this.kd())d.verticalAlign="top";d=c.R.T.V.W;d.ah(h,"click",function(){f.OF()});this.Lr?this.lw=d.cH(h,this.Lr,a,!a):this.Xr.appendChild(h);e&&h.appendChild(e)};c.R.T.V.W.prototype.BC=function(){var a=this.Pm;a||(a=this.Yh);return a};c.R.T.V.W.prototype.lE=function(){var a=this.lu,c=this.VA,e={Vc:0,Gh:0},f=[];if(this.BC().hasChildNodes()&&a&&c&&0<c.length)for(var a=this.kd(),h=0,h=this.Yh.offsetWidth,k=0,l=null,m=0;m<c.length;m++){var n=c[m];if(1===n.nodeType){var q=
n.offsetWidth,r=n.offsetHeight,t={Vc:q,Gh:r,id:n.id};if(a){var p=n.offsetLeft;this.Pm||0!==p||(n=n.parentNode,p=n.offsetLeft);t.start=this.Sp?h-(p+q):p;0===m&&(k=t.start);t.start-=k;e.Vc=t.start+q;e.Gh=Math.max(e.Gh,r);t.end=e.Vc-1}else p=n.offsetTop,this.Pm||0!==p||(n=n.parentNode,p=n.offsetTop),t.start=p,e.Vc=Math.max(e.Vc,q),e.Gh=t.start+r,t.end=e.Gh-1;l&&l.end>=t.start&&(q=l.end-(t.start-1),l.end-=q,a?l.Vc-=q:l.Gh-=q);f.push(t);l=t}}this.Hr=f;return e};c.R.T.V.W.prototype.Pk=function(){if(!this.Hr){var a=
this.lE();this.Mf||(this.Mf=a)}return this.Hr};c.R.T.V.W.prototype.kv=function(){return this.lw?this.lw:this.nr};c.R.T.V.W.prototype.pv=function(){return this.uw?this.uw:this.tw};c.R.T.V.W.prototype.qU=function(){this.kv().style.display=this.an()};c.R.T.V.W.prototype.sU=function(){this.pv().style.display=this.an()};c.R.T.V.W.prototype.Uq=function(){this.kv().style.display="none"};c.R.T.V.W.prototype.Vq=function(){this.pv().style.display="none"};c.R.T.V.W.prototype.cr=function(){return"none"!==this.kv().style.display};
c.R.T.V.W.prototype.Xv=function(){return"none"!==this.pv().style.display};c.R.T.V.W.prototype.Pu=function(){return this.kd()?this.Vp:this.Up};c.R.T.V.W.prototype.QU=function(a){var c=this.Pu(),e=this.De(),f=this.Mk(),h=this.mr();a<=this.Gn?(this.Xv()&&(f+=c,e-=c),this.Vq()):h&&(this.Xv()||(f-=c,e+=c),this.sU());a>=this.Dn?(this.cr()&&(f+=c),this.Uq()):h&&(this.cr()||(f-=c),this.qU());this.Mw(e);h?this.fG(f):this.tB()};c.R.T.V.W.prototype.fG=function(a){var c=this.Fc.style;a+="px";this.kd()?c.maxWidth=
a:c.maxHeight=a};c.R.T.V.W.prototype.tB=function(){var a=this.Fc.style;this.kd()?a.maxWidth="":a.maxHeight=""};c.R.T.V.W.prototype.Mw=function(a){var c=this.Fc;this.kd()?c.scrollLeft=this.mu(a):c.scrollTop=a};c.R.T.V.W.prototype.Mk=function(){var a=this.Fc;return this.kd()?a.offsetWidth:a.offsetHeight};c.R.T.V.W.prototype.jl=function(a,c){this.Wh||(this.It=!1,this.YF(a,c))};c.R.T.V.W.prototype.YF=function(a,d){if(!this.AR()){this.Wh=!0;a=this.FN(a);this.QU(a);var e=this.NF;if(d||!e||a===this.De())this.zE(a);
else{var f=this;e.call(this.hj,this.Fc,this.mu(a),Math.abs(this.De()-a)/c.R.T.V.W.ML,function(){f.zE(a)})}}};c.R.T.V.W.prototype.De=function(){var a=this.Fc;return this.kd()?this.LN(a.scrollLeft):a.scrollTop};c.R.T.V.W.prototype.mr=function(){var a=this.Yh,c=this.Fc;return this.kd()?a.offsetWidth>c.offsetWidth:a.offsetHeight>c.offsetHeight};c.R.T.V.W.prototype.FN=function(a){!this.mr()||a<this.Gn?a=this.Gn:a>this.Dn&&(a=this.Dn);return a};c.R.T.V.W.prototype.NQ=function(a){var d=this.Wh;if(this.mr()&&
!this.Wh){var e=c.R.T.V.W.jQ(a);0>e&&this.cr()?(d=!0,this.OF()):0<e&&this.Xv()&&(d=!0,this.PF())}d&&(a.preventDefault(),a.stopPropagation())};c.R.T.V.W.prototype.XQ=function(a){a=a.touches;this.mr()&&!this.Wh&&1===a.length&&(this.Tp=!0,a=a[0],this.HU=this.kd()?a.pageX:a.pageY,this.JG=this.De(),this.IU=this.hB(),this.JU=this.iB())};c.R.T.V.W.prototype.WQ=function(a){if(this.Tp){var d=this.kd();a=a.touches[0];a=(d?a.pageX:a.pageY)-this.HU;var e=this.Fc;Math.abs(a)<c.R.T.V.W.$L*(d?e.offsetWidth:e.offsetHeight)?
this.jl(this.JG-a,!0):(this.jl((d&&this.Sp?0<a:0>a)?this.IU:this.JU),this.Tp=!1)}};c.R.T.V.W.prototype.VQ=function(){this.Tp&&this.jl(this.JG);this.Tp=!1};c.R.T.V.W.prototype.Kv=function(){this.It&&!this.Wh&&this.YF(this.De(),!0)};c.R.T.V.W.prototype.zE=function(a){this.Mw(a);this.YT();this.Wh=!1;if(this.Mu){this.Kk=this.fB();a=this.gB();var c=this.Pk(),e=c[this.Kk];this.Kk!==a&&this.De()>e.start&&this.Kk<c.length-2&&(this.Kk++,e=c[this.Kk]);this.cP=e.id;this.Mu.call(this.hj,this.cP)}};c.R.T.V.W.prototype.YT=
function(){var a=this;window.setTimeout(function(){a&&(a.It=!0)},0)};c.R.T.V.W.prototype.OF=function(){this.Wh||this.jl(this.hB())};c.R.T.V.W.prototype.PF=function(){this.Wh||this.jl(this.iB())};c.R.T.V.W.prototype.hB=function(){var a=this.jN(),c=0;return c=a===this.fB()?this.De()+this.Mk():this.lN(a)};c.R.T.V.W.prototype.iB=function(){var a=this.kN(),c=0,c=a===this.gB()?this.De()-this.Mk():this.iN(a);this.cr()||(c+=this.Pu());c<this.Pu()&&(c=this.Gn);return c};c.R.T.V.W.prototype.lN=function(a){return this.Pk()[a].start};
c.R.T.V.W.prototype.iN=function(a){return this.Pk()[a].end-this.Mk()+1};c.R.T.V.W.prototype.fB=function(){var a=this.Xp(this.De());return 0>a?0:a};c.R.T.V.W.prototype.gB=function(){var a=this.Xp(this.De()+this.Mk()-1),c=this.Pk();return 0>a?c.length-1:a};c.R.T.V.W.prototype.kN=function(){var a=this.Xp(this.De()-1);return 0>a?0:a};c.R.T.V.W.prototype.jN=function(){var a=this.Xp(this.De()+this.Mk()),c=this.Pk();return 0>a?c.length-1:a};c.R.T.V.W.prototype.Xp=function(a){for(var c=this.Pk(),e=0;e<c.length;e++)if(a<=
c[e].end)return e;return-1};c.R.T.V.W.prototype.mu=function(a){var c=a;if(this.Sp&&this.kd())if(this.VM)c=-a;else if(this.XM||this.WM)c=this.Yh.offsetWidth-this.Fc.offsetWidth-a;return c};c.R.T.V.W.prototype.LN=function(a){return this.mu(a)};c.R.T.V.W.ML=1.1;c.R.T.V.W.$L=.33;(function(){a.Oa("oj.ojConveyorBelt",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{orientation:"horizontal",contentParent:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-conveyorbelt oj-component");
this.options.disabled&&a.D.warn(b)},_init:function(){this.sb(!0)},refresh:function(){this._super();var a="rtl"===this.Ec()!==this.YA;a&&this.yu();this.sb(a)},sb:function(b){this.YA="rtl"===this.Ec();var c=this.element,g=this.options;if(b&&!this.Yp){var h=g.orientation,k=null,l=null,m=null,n=null,q=null;"vertical"!==h?(k="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",l="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",m=this.hq("oj-conveyorbelt-overflow-icon oj-start"),
n=this.hq("oj-conveyorbelt-overflow-icon oj-end"),q=this.KM):(k="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",l="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",m=this.hq("oj-conveyorbelt-overflow-icon oj-top"),n=this.hq("oj-conveyorbelt-overflow-icon oj-bottom"),q=this.LM);var r={};r.WI=k;r.NI=l;r.VI=m;r.MI=n;k={};k.ug=a.ba.ug;k.Ti=a.ba.Ti;"enabled"!==a.ia.NH()&&(k.cJ=q);q=null;g.contentParent&&(q=f(g.contentParent)[0]);this.Yp=new window.adf.R.T.V.W(c[0],
h,q,this.YA,r,k)}this.Yp.qX(b);if(b)for(b=c.find(".oj-conveyorbelt-overflow-indicator"),c=b.size(),g=0;g<c;g++)h=b.get(g),this.nU(h)},_destroy:function(){this.yu();this.element.removeClass("oj-conveyorbelt oj-component");this._super()},_setOption:function(c,e,f){var h=!1;switch(c){case "containerParent":case "orientation":h=!0;break;case "disabled":a.D.warn(b)}h&&this.yu();this._super(c,e,f);h&&this.sb(!0)},yu:function(){var a=this.Yp;a&&a.destroy();this.Yp=null},nU:function(a){this._on(a,{mousedown:function(a){f(a.currentTarget).addClass("oj-active")},
mouseup:function(a){f(a.currentTarget).removeClass("oj-active")},mouseenter:function(a){a=a.currentTarget;f(a).addClass("oj-hover");f(a).removeClass("oj-default")},mouseleave:function(a){a=a.currentTarget;f(a).removeClass("oj-hover");f(a).removeClass("oj-active");f(a).addClass("oj-default")}})},hq:function(a){var b=document.createElement("span");b.setAttribute("class","oj-component-icon oj-clickable-icon "+a);return b},KM:function(a,b,c,h){var k={};k.scrollLeft=b;f(a).animate(k,c,"swing",h)},LM:function(a,
b,c,h){var k={};k.scrollTop=b;f(a).animate(k,c,"swing",h)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-conveyorbelt-start-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:"oj-conveyorbelt-end-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:"oj-conveyorbelt-bottom-overflow-indicator"===
a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null}});var b="JET ConveyorBelt: 'disabled' option not supported"})()});
//# sourceMappingURL=oj-modular.map