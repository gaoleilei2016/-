(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/quotedprice"],{3583:function(t,i,e){"use strict";(function(t,s){var o,a;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("5771"),r={data:function(){return{imgList:[],value:"",list:{},wxgs:0,modalName:null,orderInfo:{},form:{formId:"",task_id:0,price:0,items:[{name:"默认项目(点击可修改)",wxgs:"",pjjg:"",pjpp:"",wxsj:"",zbsj:""}],files:"",desc:""}}},updated:function(){var t=0;this.form.items.forEach(function(i,e){t+=parseFloat(""==i.wxgs?0:i.wxgs)+parseFloat(""==i.pjjg?0:i.pjjg)}),this.form.price=this.toDecimal(t)},onLoad:function(t){o=this,o.initCOS(),this.form.task_id=t.task_id,0==t.type?(this.taskLogDetail(),this.taskDetail()):this.taskDetail()},methods:{clk:function(i){var e=t.getSystemInfoSync(),s=e.windowWidth;e.windowHeight;this.$refs.avatar.fChooseImg(i,{selWidth:s-50+"px",selHeight:s-50+"px",expWidth:"800px",expHeight:"800px",inner:"true",canRotate:"false"})},doBefore:function(){console.log(s("doBefore"," at pages\\home\\quotedprice.vue:172"))},doUpload:function(t){console.log(s(t.path," at pages\\home\\quotedprice.vue:175"));var i=t.path,e=new Date,n=e.getFullYear()+"",r=e.getMonth()+1+"",f=e.getDate()+"",u=n+r+f,m=e.getTime()+".png",c="uploads/"+u+"/"+m;a.postObject({Bucket:o.api.Bucket,Region:o.api.Region,Key:c,FilePath:i,onProgress:function(t){console.log(s(JSON.stringify(t)," at pages\\home\\quotedprice.vue:190"))}},function(t,i){console.log(s(t||i," at pages\\home\\quotedprice.vue:193")),o.imgList.push(o.api.UPLOAD_HOST+c)})},ViewImage:function(i){t.previewImage({urls:this.imgList,current:i.currentTarget.dataset.url})},DelImg:function(i){var e=this;t.showModal({title:"温馨提示！",content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&e.imgList.splice(i.currentTarget.dataset.index,1)}})},initCOS:function(){a=new n({Bucket:o.api.Bucket,Region:o.api.Region,getAuthorization:function(t,i){console.log(s(t," at pages\\home\\quotedprice.vue:224")),o.$api.postWithData(o.api.qcloud_key,{bucket:t.Bucket,region:t.Region},function(t){var e=t.credentials;i({TmpSecretId:e.tmpSecretId,TmpSecretKey:e.tmpSecretKey,XCosSecurityToken:e.sessionToken,ExpiredTime:t.expiredTime})})}})},taskLogDetail:function(){this.$api.postWithData(this.api.taskLogDetail,{task_id:this.form.task_id},function(t){if(o.form.desc=t.data.desc,o.form.items=JSON.parse(t.data.items),null!=t.data.files){var i=t.data.files.split(",");if(""!=i[0]&&null!=i[0])for(var e=0;e<i.length;e++)o.imgList.push(i[e])}})},taskDetail:function(){this.$api.postWithData(this.api.taskDetail,{task_id:this.form.task_id},function(i){if(0==i.code)return o.$api.msg("当前挂单已关闭或不存在"),void setTimeout(function(){t.navigateBack()},2e3);o.orderInfo=i.data})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},openDialog:function(){this.modalName="DialogModal1"},deleteitem:function(t){var i=0;t>-1&&this.form.items.splice(t,1),this.form.items.forEach(function(t,e){i+=parseFloat(""==t.wxgs?0:t.wxgs)+parseFloat(""==t.pjjg?0:t.pjjg)}),this.form.price=this.toDecimal(i)},confirm:function(){if(""!=this.value){var t=this.value;this.list={name:t,wxgs:"",pjjg:"",pjpp:"",wxsj:"",zbsj:""},this.form.items.push(this.list),this.value="",this.modalName=null}else this.$api.msg("请填写项目名称")},submit:function(i){if(console.log(s(i.detail.formId," at pages\\home\\quotedprice.vue:314")),this.form.formId=i.detail.formId,257==this.orderInfo.obj_type){for(var e=0;e<this.form.items.length;e++){if(""==this.form.items[e].name)return void this.$api.msg("第"+(e+1)+"个项目名称不能为空");if(""==this.form.items[e].pjjg)return void this.$api.msg("第"+(e+1)+"个保险价格不能为空");if(""==this.form.items[e].pjpp)return void this.$api.msg("第"+(e+1)+"个保险公司不能为空");if(""==this.form.items[e].zbsj)return void this.$api.msg("第"+(e+1)+"个保险有限期不能为空")}for(var a="",n=0;n<this.imgList.length;n++)n<this.imgList.length-1?a+=this.imgList[n]+",":a+=this.imgList[n];this.form.files=a}else for(var r=0;r<this.form.items.length;r++){if(""==this.form.items[r].name)return void this.$api.msg("第"+(r+1)+"个项目名称不能为空");if(""==this.form.items[r].wxgs)return void this.$api.msg("第"+(r+1)+"个维修工时不能为空");if(""==this.form.items[r].pjjg)return void this.$api.msg("第"+(r+1)+"个材料价格不能为空");if(""==this.form.items[r].pjpp)return void this.$api.msg("第"+(r+1)+"个材料品牌不能为空");if(""==this.form.items[r].wxsj)return void this.$api.msg("第"+(r+1)+"个维修时间不能为空");if(""==this.form.items[r].zbsj)return void this.$api.msg("第"+(r+1)+"个质保时间不能为空")}""!=this.form.desc?(console.log(s(this.form," at pages\\home\\quotedprice.vue:376")),this.$api.postWithData(this.api.bidding,{task_id:this.form.task_id,items:JSON.stringify(this.form.items),price:this.form.price,files:this.form.files,desc:this.form.desc},function(i){1==i.code&&(o.$api.msg(i.msg),t.reLaunch({url:"../index/index"}))})):this.$api.msg("维修建议不能为空")},toDecimal:function(t){var i=parseFloat(t);if(!isNaN(i))return i=Math.round(100*t)/100,i}}};i.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},"5bb8":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return o})},a781:function(t,i,e){"use strict";(function(t){e("2899"),e("921b");s(e("66fd"));var i=s(e("d7e7"));function s(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])},c7b2:function(t,i,e){"use strict";e.r(i);var s=e("3583"),o=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);i["default"]=o.a},d7e7:function(t,i,e){"use strict";e.r(i);var s=e("5bb8"),o=e("c7b2");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);var n=e("2877"),r=Object(n["a"])(o["default"],s["a"],s["b"],!1,null,null,null);i["default"]=r.exports}},[["a781","common/runtime","common/vendor"]]]);