(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/myinfo"],{"13ec":function(e,t,n){"use strict";var i=n("efb8"),o=n.n(i);o.a},"471b":function(e,t,n){"use strict";(function(e){n("2899"),n("921b");i(n("66fd"));var t=i(n("f65f"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7dd1":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"884c":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,u=c(n("eeb8"));function c(e){return e&&e.__esModule?e:{default:e}}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-citypicker/mpvueCityPicker")]).then(n.bind(null,"6699"))},s=n("5771"),l={components:{mpvueCityPicker:r},data:function(){return{radio:"A",imgList:[],themeColor:"#007AFF",addressResult:{label:"请选择",value:[0,0,0],cityCode:"110101"},mulLinkageTwoPicker:u.default,cityPickerValueDefault:[0,0,1]}},methods:{navigator:function(t){e.navigateTo({url:t})},showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onCancel:function(e){console.log(i(e," at pages\\mine\\myinfo.vue:131"))},onConfirm3:function(e){this.addressResult=e},initCOS:function(){a=new s({Bucket:o.api.Bucket,Region:o.api.Region,getAuthorization:function(e,t){console.log(i(e," at pages\\mine\\myinfo.vue:141")),o.$api.postWithData(o.api.qcloud_key,{bucket:e.Bucket,region:e.Region},function(e){var n=e.credentials;t({TmpSecretId:n.tmpSecretId,TmpSecretKey:n.tmpSecretKey,XCosSecurityToken:n.sessionToken,ExpiredTime:e.expiredTime})})}})},RadioChange:function(e){this.radio=e.detail.value},clk:function(t){var n=e.getSystemInfoSync(),i=n.windowWidth;n.windowHeight;this.$refs.avatar.fChooseImg(t,{selWidth:i-50+"px",selHeight:i-50+"px",expWidth:i-50+"px",expHeight:i-50+"px",inner:"true",canRotate:"false"})},doUpload:function(e){console.log(i(e.path," at pages\\mine\\myinfo.vue:173"));var t=e.path,n=new Date,u=n.getFullYear()+"",c=n.getMonth()+1+"",r=n.getDate()+"",s=u+c+r,l=n.getTime()+".png",f="uploads/"+s+"/"+l;console.log(i(f," at pages\\mine\\myinfo.vue:182")),a.postObject({Bucket:o.api.Bucket,Region:o.api.Region,Key:f,FilePath:t,onProgress:function(e){console.log(i(JSON.stringify(e)," at pages\\mine\\myinfo.vue:189"))}},function(e,t){console.log(i(e||t," at pages\\mine\\myinfo.vue:192")),console.log(i(o.api.UPLOAD_HOST+f," at pages\\mine\\myinfo.vue:193")),o.imgList.push(o.api.UPLOAD_HOST+f),console.log(i(o.imgList," at pages\\mine\\myinfo.vue:195"))})},DelImg:function(t){var n=this;e.showModal({title:"温馨提示！",content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(e){e.confirm&&n.imgList.splice(t.currentTarget.dataset.index,1)}})},doBefore:function(){console.log(i("doBefore"," at pages\\mine\\myinfo.vue:213"))},ViewImage:function(t){e.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})}},onLoad:function(){o=this,this.initCOS()}};t.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},d5fd:function(e,t,n){"use strict";n.r(t);var i=n("884c"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},efb8:function(e,t,n){},f65f:function(e,t,n){"use strict";n.r(t);var i=n("7dd1"),o=n("d5fd");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("13ec");var u=n("2877"),c=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports}},[["471b","common/runtime","common/vendor"]]]);