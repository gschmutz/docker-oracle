"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(a,f){a.Oa("oj.ojCheckboxset",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:null,value:void 0},refresh:function(){this._super();this.Yf.each(function(){var a=void 0!==f(this).attr("disabled")?!!f(this).prop("disabled"):!1;f(this)._ojRadioCheckbox("option","disabled",a)});this.Yf=this.tq().filter(".oj-checkbox")._ojRadioCheckbox("refresh").end().not(".oj-checkbox")._ojRadioCheckbox().end();
this.sb()},widget:function(){return this.tJ},_InitOptions:function(c,b){var d,e=[];this._super(c,b);a.td.Ki([{attribute:"disabled",defaultOptionValue:!1,validateOption:!0},{attribute:"title",defaultOptionValue:""},{attribute:"placeholder",defaultOptionValue:""},{attribute:"required",defaultOptionValue:!1,coerceDomValue:!0,validateOption:!0}],b,this);void 0===b.value&&(d=this.tq(),d=d.filter(":checked"),0<d.length&&(d.each(function(){e.push(f(this).val())}),d=this.options.value,this.ht("value",d),
this.options.value=e),void 0===this.options.value&&(this.options.value=[]))},_ComponentCreate:function(){this._super();if(this.element.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");this.Yf=this.tq()._ojRadioCheckbox();this.tJ=this.element.addClass("oj-checkboxset oj-component").attr("role","group");this._on(this.Jf);this.sb()},Focus:function(){this.Ae().first().focus();return!0},tq:function(){var c=this.element.find("input[type\x3dcheckbox]:first");
0===c.length&&a.D.warn("Could not find any input type\x3dcheckbox within this element");c=c.attr("name");return void 0===c?(c=this.element.find("input[type\x3dcheckbox]"),c.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+c+"]")},_OpenContextMenu:function(a,b){var d=this.element.find("input[type\x3dcheckbox]:tabbable").first();a.open(b,{launcher:d,initialFocus:"menu"})},sb:function(){this.options.disabled?this.disable():!1===this.options.disabled&&this.enable()},Jf:{change:function(a){this.rp(a)}},
rp:function(a){this._super(a)},Yg:function(){return this.sk()},ig:function(a){var b;this.Yf._ojRadioCheckbox("option","checked",!1);if(null!=a)for(var d=0;d<a.length;d++)b=a[d],b="[value\x3d'"+b+"']",b=this.Yf.filter(b),void 0!==b&&0<b.length&&(b.prop("checked")||b._ojRadioCheckbox("option","checked",!0))},sk:function(){var a=[],b=this.Yf.filter(":checked");if(0===b.length)return[];b.each(function(){a.push(f(this).val())});return a},_GetDefaultStyleClass:function(){return"oj-checkboxset"},Ae:function(){return this.tq()},
tt:function(a){var b=this.tJ;(a=a?!0:!1)&&b?b.attr("aria-required",a):b.removeAttr("aria-required")},_setOption:function(a,b,d){this._super(a,b,d);"disabled"===a&&(this.Yf.each(function(){f(this).data("oj-_ojRadioCheckbox").Dm(b)}),this.Yf._ojRadioCheckbox("refresh"))},getNodeBySubId:function(a){var b=this._super(a);return b||(a=a.subId,"oj-checkboxset-inputs"!==a)?b||null:this.Yf},_destroy:function(){this.Yf&&this.Yf._ojRadioCheckbox("destroy");this.vk();return this._super()}})});
//# sourceMappingURL=oj-modular.map