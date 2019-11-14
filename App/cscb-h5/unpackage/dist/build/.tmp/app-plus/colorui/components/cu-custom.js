(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"0d36":function(t,n,a){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return u}),a.d(n,"b",function(){return e})},9179:function(t,n,a){"use strict";a.r(n);var u=a("9c5d"),e=a.n(u);for(var o in u)"default"!==o&&function(t){a.d(n,t,function(){return u[t]})}(o);n["default"]=e.a},"9c5d":function(t,n,a){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a=this.bgImage,u="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(u="".concat(u,"background-image:url(").concat(a,");")),u}},onShow:function(){console.log(t("success"," at colorui\\components\\cu-custom.vue:56"))},props:{bgColor:{type:String,default:""},isCustom:{type:[Boolean,String],default:!1},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){a.navigateBack({delta:1})}}};n.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},a90b:function(t,n,a){},ac08:function(t,n,a){"use strict";var u=a("a90b"),e=a.n(u);e.a},f761:function(t,n,a){"use strict";a.r(n);var u=a("0d36"),e=a("9179");for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);a("ac08");var c=a("2877"),r=Object(c["a"])(e["default"],u["a"],u["b"],!1,null,null,null);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("f761"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);                
