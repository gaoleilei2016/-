<template>
	<view class="">
		<view class="bg-white padding-right flex justify-between" style="min-height: 80upx;line-height: 80upx;">
			<view class="flex align-center">
				<image src="../../static/bm.png" mode="aspectFit" style="width:80upx;height:80upx;"></image>
				<view class="text-black text-bold">创世车宝自营店</view>
				<view class="cuIcon-right align-center"></view>
			</view>
			<view class="text-xl">
				<text class="cuIcon-locationfill"></text>
			</view>
		</view>
		<view class="flex padding-tb-sm align-center">
			<image class="margin-lr radius" src="../../static/gg.png" mode="aspectFill" style="width: 165upx;height: 165upx;"></image>
			<view class="flex flex-direction justify-between text-sm">
				<view style="width:500upx;" class="text-df text-black text-cut text-bold">{{good.title}}</view>
				<view>规格：<text>4L</text> </view>
				<view>级别：<text>SN</text> </view>
				<view>粘度：<text>ow-40</text> </view>
				<view class="text-df text-bold text-black"><text class="text-price">{{goodprice}}</text>/件</view>
			</view>
		</view>
		<view class="flex bg-white justify-between padding-lr percent100-100">
			<text class="text-black text-bold">购买数量</text>
			<tui-numberbox :min="1" :max="100" :value="value" @change="change"></tui-numberbox>
		</view>
		<view class="flex bg-white justify-between align-center padding-lr percent100-100 margin-top-sm">
			<text class="text-black text-bold">购买类型</text>
			<tui-dropdown-list :show="dropdownShow" :top="65" :height="400">
				<template v-slot:selectionbox>
					<view  @click="dropDownList(-1)" style="width: 200upx;height: 60upx;line-height: 60upx;" class="solid text-center bg-white padding-lr-xs">
						{{dropdownlistData[selectIndex].name}}<text class="cuIcon-triangledownfill"></text>
					</view>
				</template>
				<template v-slot:dropdownbox>
					<view class="tui-selected-list solid">
						<scroll-view scroll-y class="tui-dropdown-scroll">
							<block v-for="(item,index) in dropdownlistData" :key="index">
								<view :class="selectIndex==index?'bg-cyan':'bg-white'" @click="dropDownList(index)" class=" padding-left-sm percent100" >
									{{item.name}}
								</view>
							</block>
						</scroll-view>
					</view>
				</template>
			</tui-dropdown-list>
		</view>
		<view class="flex bg-white justify-between padding-lr percent100-100 margin-top-sm">
			<text class="text-black text-bold">支付类型</text>
			<view class="flex align-center">
				<image style="width:48upx;height:38upx;" src="../../static/success51.png" mode="aspectFit"></image>
				<text>微信支付</text>
			</view>
		</view>
		<view class="cu-bar foot bg-white tabbar border shop">
			<view class="submit flex align-center">
				<text class="text-black text-bold">实付款:</text>
				<view class="text-lg margin-left-sm">
					<text class="text-price text-red margin-right-xs">{{price}}</text>
					<text class="text-red text-df">免运费</text>
				</view>
			</view>
			<view @tap="goPay" class="bg-red submit ">
				<text>立即支付</text>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import tuiDropdownList from "@/components/dropdown-list/dropdown-list"
	// #ifdef H5
	var jweixin = require('../../utils/wxsdk.js')
	// #endif
	export default {
		components:{
			tuiNumberbox,
			tuiDropdownList
		},
		data() {
			return {
				value: 1,
				dropdownShow: false,
				selectIndex:0,
				dropdownlistData: [{
					name: "请选择类型",
					value : 0,
				},{
					name: "单独购买",
					value : 1,
				}, {
					name: "3人拼单",
					value : 3,
				}, {
					name: "5人拼单",
					value : 5,
				}],
				form:{
					id:0,
					uid:0,
					seller_id:0,
					o_type:0,
					num:0,
					redids:0
				},
				price:0,
				good:{},
				goodprice:0
			}
		},
		onLoad(e) {
			// #ifdef H5
			console.log(JSON.parse(this.wxConfig));
			jweixin.config(JSON.parse(this.wxConfig));
			// #endif
			this.good=JSON.parse(e.good)
			console.log(e.good);
			console.log(e.isone);
			if(e.isone==1){
				this.goodprice=this.good.price;
				this.price=this.goodprice
				this.selectIndex=1
			}
			if(e.isone==5){
				this.goodprice=this.good.price_5;
				this.price=this.goodprice
				this.selectIndex=3
			}
		},
		updated() {
			if(this.selectIndex==0){
				this.price=0;
			}
			if(this.selectIndex==1){
				this.price=(this.good.price*this.value)+".00";
			}
			if(this.selectIndex==2){
				this.price=(this.good.price_3*this.value)+".00";
			}
			if(this.selectIndex==3){
				this.price=(this.good.price_5*this.value)+".00";
			}
		},
		methods: {
			goPay(){
				let that=this;
				if(this.dropdownlistData[this.selectIndex].value==0){
					this.$api.msg("请选择购买类型")
					return ;
				}
				this.form.id=this.good.id
				this.form.uid=this.uid
				this.form.seller_id=this.seller_id
				this.form.o_type=this.dropdownlistData[this.selectIndex].value
				this.form.num=this.value
				this.form.redids=0
				this.$api.postWithData(this.api.orderpay,this.form,
					function callbacks(res){
						console.log(res);
						that.payment(res.data)
						// uni.navigateTo({
						// 	url:'paysuccess?type='+that.dropdownlistData[that.selectIndex].value
						// })
					})
				
			},
			payment(data){
				jweixin.ready(function(){
					jweixin.chooseWXPay({
					  timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
					  nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
					  package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
					  signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					  paySign: data.paySign, // 支付签名
					  out_trade_no:data.out_trade_no,
					  success: function (res) {
						  console.log(res);
						// 支付成功后的回调函数
						uni.showModal({
							content:JSON.stringify(res)
						})
					  }
					});
				})
			},
			change: function(e) {
				this.value = e.value
			},
			dropDownList(index) {
				if (index !== -1) {
					this.selectIndex=index;
					// this.$api.msg("name：" + this.dropdownlistData[index].name)
				}
				this.dropdownShow = !this.dropdownShow
			},
			payments: function(data, callback_succ_func, callback_error_func) {
				if (!this.isWechat()) {
					return;
				}
				if (typeof WeixinJSBridge == "undefined") {
					if (document.addEventListener) {
						document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
					} else if (document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
						document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
					}
				} else {
					this.jsApiCall(data, callback_succ_func, callback_error_func);
				}
			},
			isWechat: function() {
				var ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/micromessenger/i) == 'micromessenger') {
					return true;
				} else {
					return false;
				}
			},
			jsApiCall(data, callback_succ_func, callback_error_func) {
				//使用原生的，避免初始化appid问题  
				WeixinJSBridge.invoke('getBrandWCPayRequest', {
						appId: 'wxf9651f8626d421a9',
						timeStamp: data.timeStamp,
						nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位  
						package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）  
						signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'  
						paySign: data.paySign, // 支付签名  
						out_trade_no:data.out_trade_no
					},
					function(res) {
						var msg = res.err_msg ? res.err_msg : res.errMsg;
						//WeixinJSBridge.log(msg);  
						switch (msg) {
							case 'get_brand_wcpay_request:ok': //支付成功时  
								if (callback_succ_func) {
									callback_succ_func(res);
								}
								break;
							default: //支付失败时  
								WeixinJSBridge.log('支付失败!' + msg + ',请返回重试.');
								if (callback_error_func) {
									callback_error_func({
										msg: msg
									});
								}
								break;
						}
					})
			},
		},
	}
</script>

<style>
	.lineHeight {
		line-height: 50upx;
	}
	
	.minWidth {
		min-width: 200upx;
	}
</style>
