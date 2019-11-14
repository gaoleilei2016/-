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
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	let r = window.location.search.substr(1).match(reg);
	console.log(reg);
	console.log(r);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}
const login=(api,datas,callbacks)=>{
	let params={};
	let data={};
	// #ifdef H5	
	//wx0f540572b7afe6af
	//wxf9651f8626d421a9
	let appid = "wx0f540572b7afe6af"; //为测试号id
	let code = getUrlParam("code"); //是否存在code
	let local = window.location.href;
	console.log(isLogin);
	if (!isLogin) {
		//不存在就打开上面的地址进行授权
		window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
		uni.setStorageSync("isLogin",true)
	} else {
		//存在则通过code传向后台调用接口返回微信的个人信息
		console.log(code);
		data={code:code},
		console.log("请求地址: "+test.config.baseUrl+API.login)
		// uni.showToast({icon:"loading",mask:true,duration:60000,title:"加载中..."})
		test.post(API.login,data,params)
			.then(res => {
				console.log(res);
				if(res.data.code==1){//登陆成功
					test.setConfig((config) => {
					  config.header = {
						...config.header,
						'cscb-login-token':res.data.data.login_token
					  }
					  return config
					})
					uni.setStorageSync("unionid",res.data.data.member.unionid)
					uni.setStorageSync("openid",res.data.data.member.openid)
					uni.setStorageSync("seller_id",res.data.data.seller_manager.seller_id)
					uni.setStorageSync("uid",res.data.data.member.uid)
					uni.setStorageSync("nickname",res.data.data.member.nickname)
					uni.setStorageSync("headimg",res.data.data.member.headimg)
					uni.setStorageSync("isLogin",true)
					test.post(api,datas,params)
						.then(res => {
							callbacks(res.data)
							// uni.hideToast();
						})
						.catch(err => {
						  // uni.hideToast();
						  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
					});
					return;
				}
				if(res.data.code==-1)//新用户注册
				{
					callbacks(res.data.code)
					// uni.hideToast();
					// uni.showToast({icon:"none",mask:false,title:"新用户注册"})
					return;
				}
				if(res.data.code==0)//登陆失败
				{
					callbacks(res.data.code)
					// uni.hideToast();
					uni.showToast({icon:"none",mask:false,title:"登陆失败"})
					return;
				}
			})
			.catch(err => {
			  console.log(test.config.header)
			  // uni.hideToast();
			  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
		});
	}
	
	// #endif
	// #ifdef MP-WEIXIN
	uni.login({
		provider:'weixin',
		fail(res) {
			uni.showToast({icon:"none",mask:true,title:res.errMsg})
		},
		success: (res) => {
			console.log(res);
			data={code:res.code},
			console.log("请求地址: "+test.config.baseUrl+API.login)
			// uni.showToast({icon:"loading",mask:true,duration:60000,title:"加载中..."})
			test.post(API.login,data,params)
				.then(res => {
					if(res.data.code==1){//登陆成功
						test.setConfig((config) => {
						  config.header = {
							...config.header,
							'cscb-login-token':res.data.data.login_token
						  }
						  return config
						})
						uni.setStorageSync("unionid",res.data.data.member.unionid)
						uni.setStorageSync("openid",res.data.data.member.openid)
						uni.setStorageSync("seller_id",res.data.data.seller_manager.seller_id)
						uni.setStorageSync("uid",res.data.data.member.uid)
						uni.setStorageSync("nickname",res.data.data.member.nickname)
						uni.setStorageSync("headimg",res.data.data.member.headimg)
						test.post(api,datas,params)
							.then(res => {
								callbacks(res.data)
								// uni.hideToast();
							})
							.catch(err => {
							  // uni.hideToast();
							  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
						});
						return;
					}
					if(res.data.code==-1)//新用户注册
					{
						callbacks(res.data.code)
						// uni.hideToast();
						// uni.showToast({icon:"none",mask:false,title:"新用户注册"})
						return;
					}
					if(res.data.code==0)//登陆失败
					{
						callbacks(res.data.code)
						console.log(res.data);
						// uni.hideToast();
						uni.showToast({icon:"none",mask:false,title:"登陆失败"})
						return;
					}
				})
				.catch(err => {
				  console.log(test.config.header)
				  // uni.hideToast();
				  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
			});
		}
	})	
	// #endif
	// #ifdef APP-PLUS
	
		var all;
		var Service;
		// 1.发送请求获取code
		plus.oauth.getServices((Services)=>{
			all = Services
			Object.keys(all).some((key)=>{
				if(all[key].id=='weixin'){
					Service = all[key]
				}
			})
			Service.authorize((e)=>{
				plus.nativeUI.alert("获取code成功："+JSON.stringify(e));
				// 文档： https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317853&lang=zh_CN
				data={code:e.code},
				console.log("请求地址: "+test.config.baseUrl+API.login)
				// uni.showToast({icon:"loading",mask:true,duration:60000,title:"加载中..."})
				test.post(API.login,data,params)
					.then(res => {
						if(res.data.code==1){//登陆成功
							test.setConfig((config) => {
							  config.header = {
								...config.header,
								'cscb-login-token':res.data.data.login_token
							  }
							  return config
							})
							uni.setStorageSync("unionid",res.data.data.member.unionid)
							uni.setStorageSync("openid",res.data.data.member.openid)
							uni.setStorageSync("seller_id",res.data.data.seller_manager.seller_id)
							uni.setStorageSync("uid",res.data.data.member.uid)
							uni.setStorageSync("nickname",res.data.data.member.nickname)
							uni.setStorageSync("headimg",res.data.data.member.headimg)
							test.post(api,datas,params)
								.then(res => {
									callbacks(res.data)
									// uni.hideToast();
								})
								.catch(err => {
								  // uni.hideToast();
								  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
							});
							return;
						}
						if(res.data.code==-1)//新用户注册
						{
							callbacks(res.data.code)
							// uni.hideToast();
							// uni.showToast({icon:"none",mask:false,title:"新用户注册"})
							return;
						}
						if(res.data.code==0)//登陆失败
						{
							callbacks(res.data.code)
							console.log(res.data);
							// uni.hideToast();
							uni.showToast({icon:"none",mask:false,title:"登陆失败"})
							return;
						}
					})
					.catch(err => {
					  console.log(test.config.header)
					  // uni.hideToast();
					  uni.showToast({icon:"none",mask:false,title:"请求错误，请稍后重试"})
				});
			}, function(e){
				console.log(e);
			});
		},function(err){
			console.log(err);
		});
		
	
	
	
	// #endif
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
Vue.prototype.$api = {isLogin,msg,test,post,get,login,postWithData};
// Vue.prototype.$http =http;
Vue.prototype.api=API;
Vue.prototype.$eventBus = new Vue();
const app = new Vue({
    ...App
})
app.$mount()

 



