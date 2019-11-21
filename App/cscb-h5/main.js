import Vue from 'vue'
import App from './App'
// import http from '@/utils/http/interface.js'
import {test} from '@/utils/index.js'
import API from '@/utils/API.js'
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({title,duration,mask,icon});
}
const isLogin=uni.getStorageSync("isLogin") ? true : false;
// 判断公众号截取code
const getUrlParam = (name) => {
	let reg = new RegExp("(^|/?)" + name + "=([^&]*)(&|$|/?)");
	// let r = window.location.search.substr(1).match(reg);
	let r = (window.location.hash || window.location.search).substr(1).match(reg);//包含hash[#]和search[?]两种通用
	console.log(reg);
	console.log(r);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

const post=(api,callbacks)=>{
	if(Boolean(api) === false){
		console.log("请求地址为空")
		return;
	}
	let data={};
	let params={};
	console.log("请求地址: "+test.config.baseUrl+api)
	// uni.showToast({icon:"loading",mask:true,duration:60000,title:"加载中..."})
	test.post(api,data,params)
		.then(res => {
		  console.log(res)
		  if(res.data.code==-1){//未登录或登陆已过期
			  login(api,data,callbacks)
			  return;
		  }
		  // uni.hideToast();
		  callbacks(res.data)
		})
		.catch(err => {
		  console.log(err)
		  // uni.hideToast();
		  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
	});
}

const postWithData=(api,data,callbacks)=>{
	let appid = "wx0f540572b7afe6af"; //为测试号id
	let uid = getUrlParam("uid"); //是否存在code
	let local = window.location.href;
	console.log(window.location);
	if(uid!=null&&uid!=undefined&&uid!=""){
		uni.setStorageSync("uid",uid)
	}
	if (uni.getStorageSync("uid")==''||uni.getStorageSync("uid")==null) {
		//不存在就打开上面的地址进行授权
		window.location.href = `https://cscbnew.kelinteng.com/index/index/oauth?url=${encodeURIComponent(local)}`;
		return
	} else {
		console.log(uid);
		if(uni.getStorageSync("uid")==''||uni.getStorageSync("uid")==null){
			uni.setStorageSync("uid",uid)
		}
		if(Boolean(api) === false){
			console.log("请求地址为空")
			return;
		}
		let params={};
		if(data==null||data==undefined||data==''){
			data={};
		}
		console.log("请求地址: "+test.config.baseUrl+api)
		// uni.showToast({icon:"loading",mask:true,duration:60000,title:"加载中..."})
		test.post(api,data,{params:params})
			.then(res => {
			  if(res.data.code==-1){//未登录或登陆已过期
				  login(api,data,callbacks)
				  return;
			  }
			  console.log(res)
			  // uni.hideToast();
			  callbacks(res.data)
			})
			.catch(err => {
			  console.log(err)
			  // uni.hideToast();
			  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
		});
	}
}
const get=(api,callbacks)=>{
	if(Boolean(api) === false){
		console.log("请求地址为空")
		return;
	}
	console.log("请求地址: "+test.config.baseUrl+api)
	// uni.showToast({icon:"loading",mask:true,duration:60000,title:"加载中..."})
	test.get(api)
		.then(res => {
		  console.log(res)
		  callbacks(res.data)
		  // uni.hideToast();
		})
		.catch(err => {
		  console.log(err)
		  // uni.hideToast();
		  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
	});
}
import home from './pages/home/home.vue'
Vue.component('home',home)
import market from './pages/market/home.vue'
Vue.component('market',market)
import more from './pages/more/home.vue'
Vue.component('more',more)
import mine from './pages/mine/home.vue'
Vue.component('mine',mine)
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
import avatar from "./components/yq-avatar/yq-avatar.vue";
Vue.component('avatar',avatar)

import loadTip from "@/colorui/components/loadtip"
Vue.component('load-tip',loadTip)
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$api = {isLogin,msg,test,post,get,postWithData};
// Vue.prototype.$http =http;
Vue.prototype.api=API;
Vue.prototype.$eventBus = new Vue();
const app = new Vue({
    ...App
})
app.$mount()