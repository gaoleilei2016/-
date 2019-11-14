<template>
	<view class="">
		<view class="bg-white">
			<view class="padding-right flex justify-between" style="min-height: 80upx;line-height: 80upx;">
				<view class="flex align-center">
					<image src="../../static/bm.png" mode="aspectFit" style="width:80upx;height:80upx;"></image>
					<view class="text-black text-bold">创世车宝自营店</view>
					<view class="cuIcon-right align-center"></view>
				</view>
			</view>
			<view class="flex padding-top-sm lineHeight">
				<image class="margin-lr radius" src="../../static/gg.png" mode="aspectFill" style="width: 150upx;height: 150upx;"></image>
				<view class="flex flex-direction">
					<view style="width:500upx;" class="text-black text-cut ">康普顿GT950,合成型机油 便宜卖</view>
					<view>数量：<text>1</text>规格：<text>4L</text> </view>
				</view>
			</view>
			<view class="flex flex-direction align-end padding-right padding-bottom">
				<text>共一件商品 实付款:<text class="text-price">268.00</text></text>
				<view class="flex margin-top-sm">
					<button style="font-size: 24upx;" :loading="item.loading" v-for="(item,index) in providerList" :key="index" @tap="requestPayment(item,index)"
					 class="cu-btn line-gray sm text-black margin-right-xs">申请售后</button>
					<button @tap="fenzhuangH5pay" style="font-size: 24upx;" class="cu-btn line-gray sm text-black">加入购物车</button>
					<button style="font-size: 24upx;" v-if="false" class="cu-btn line-gray sm text-black">查看评价</button>
					<button style="font-size: 24upx;" v-if="false" class="cu-btn line-gray sm text-black">去付款</button>
				</view>
			</view>
			<view class="margin-lr lineHeight">
				<view class="flex justify-between">
					<text>商品总价</text>
					<text class="text-price">49.62</text>
				</view>
				<view class="flex justify-between">
					<text>运费</text>
					<text class="text-price">0.00</text>
				</view>
				<view class="flex justify-between padding-bottom-sm">
					<text>订单总价</text>
					<text class="text-price">268.00</text>
				</view>
				<view class="solid"></view>
				<view class="flex justify-between padding-tb-sm">
					<text>实付款</text>
					<text class="text-price text-orange">268.00</text>
				</view>
			</view>
		</view>
		<view class="bg-white solid-bottom margin-top-sm padding-tb-sm padding-left-xs">
			<text class="cuIcon-titles text-black"></text> 订单信息
		</view>
		<view class="bg-white lineHeight padding solid-bottom">
			<view class="flex">
				<text class="minWidth">订单单号:</text>
				<text>20191023000111222333</text>
			</view>
			<view class="flex">
				<text class="minWidth">下单时间:</text>
				<text>2019-10-23 07:41:02</text>
			</view>
			<view class="flex">
				<text class="minWidth">支付方式:</text>
				<text>余额支付</text>
			</view>
			<view class="flex">
				<text class="minWidth">支付时间:</text>
				<text>2019-10-23 22:22:22</text>
			</view>
		</view>
		<view class="bg-white lineHeight padding">
			<button style="font-size: 24upx;" class="cu-btn line-gray sm text-black margin-right-xs">联系卖家</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'request-payment',
				loading: false,
				price: 1,
				providerList: []
			}
		},
		methods: {
			fenzhuangH5pay(){
				wx.chooseWXPay({
				  timestamp: 1414561699, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				  nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS', // 支付签名随机串，不长于 32 位
				  package: 'prepay_id=123456789', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
				  signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				  paySign: 'C380BEC2BFD727A4B6845133519F3AD6', // 支付签名
				  success: function (res) {
				    // 支付成功后的回调函数
				  }
				});
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
						appId: 'wx0f540572b7afe6af',
						timeStamp: '',
						nonceStr: '', // 支付签名随机串，不长于 32 位  
						package: 'prepay_id=', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）  
						signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'  
						paySign: '', // 支付签名  
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
			payment: function(data, callback_succ_func, callback_error_func) {
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
			PayH5() {
				this.payment();
			},
			async requestPayment(e, index) {
				this.providerList[index].loading = true;
				let orderInfo = await this.getOrderInfo(e.id);
				console.log("得到订单信息", orderInfo);
				if (orderInfo.statusCode !== 200) {
					console.log("获得订单信息失败", orderInfo);
					uni.showModal({
						content: "获得订单信息失败",
						showCancel: false
					})
					return;
				}
				//let orderInfo = 'app_id=2016091654625569&biz_content=shike&charset=utf-8&method=alipay.trade.app.pay&notify_url=http%3A%2F%2F112.74.68.252%3A9200%2Fcssd%2Fapi%2Falipay_notify&out_trade_no=2019052456194799&product_code=QUICK_MSECURITY_PAY&sign_type=RSA2&subject=LV%E5%8C%85%E5%A5%B3%E6%80%A7%E5%A5%A2%E4%BE%88%E5%8C%85&timestamp=2019-05-24+16%3A32%3A27&total_amount=1770.0&version=1.0&sign=R5dwr0XAX42jocM86fIZFTIX5HzzE4U2xBvhU5qWo8hjAO%2F%2FNH4u3XF%2FeCjxtXOVPRTUgPGMbkPBj1pDA2QMmdZk55nBhjb%2FJ0H9kmBFPBek7AwuANZNbU3Lc0keMGxlxJDAadzgaMckiuNXLSkHDAPeI7glR7Yx86FVyqM88V9bEHjIY7e5kfS7f2phU8VmJrAdda32aW49ETgmBMtxPzo1DmzP8r7ovqFu9IAl7MDXYlsUUR4z9%2B9puEtZUe81QI895HD%2FnKN5JiwKhTAcsOXar752NI1j7rJlp%2BVrqejjuXXfvxFmMkWNUXjXWKPGgbQf7uiRJhgfuJp5mJzsEA%3D%3D'
				uni.requestPayment({
					provider: e.id,
					orderInfo: orderInfo.data,
					success: (e) => {
						console.log("success", e);
						uni.showToast({
							title: "感谢您的赞助!"
						})
					},
					fail: (e) => {
						console.log("fail", e);
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						this.providerList[index].loading = false;
					}
				})
			},
			getOrderInfo(e) {
				let appid = "";
				// #ifdef APP-PLUS
				appid = plus.runtime.appid;
				console.log(appid);
				// #endif
				let url = 'https://demo.dcloud.net.cn/payment/?payid=' + e + '&appid=' + appid + '&total=' + this.price;
				return new Promise((res) => {
					uni.request({
						url: url,
						success: (result) => {
							res(result);
						},
						fail: (e) => {
							res(e);
						}
					})
				})
			},
		},
		onLoad() {
			// #ifdef APP-PLUS
			uni.getProvider({
				service: "payment",
				success: (e) => {
					console.log("payment success:" + JSON.stringify(e));
					let providerList = [];
					e.provider.map((value) => {
						switch (value) {
							case 'alipay':
								providerList.push({
									name: '支付宝',
									id: value,
									loading: false
								});
								break;
							case 'wxpay':
								providerList.push({
									name: '微信',
									id: value,
									loading: false
								});
								break;
							default:
								break;
						}
					})
					this.providerList = providerList;
				},
				fail: (e) => {
					console.log("获取支付通道失败：", e);
				}
			});
			// #endif
		}
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
