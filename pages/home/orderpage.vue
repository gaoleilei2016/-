<template>
	<view class="bg-white page">
		<view class="solid"></view>
		<view class="flex padding-tb">
			<view class="cu-avatar xl round margin-left" :style="'background-image:url('+orderInfo.brand_logo+');'"></view>
			<view class="flex flex-direction justify-around margin-left-sm">
				<text class="text-lg">{{orderInfo.stitle}}</text>
				<text class="text-sm">{{orderInfo.saddress}}</text>
			</view>
		</view>
		<view class="cu-bar ">
			<view class="action">订单标题</view>
		</view>
		<view class="padding-lr  margin-bottom-sm radius">
			<view class="padding-tb padding-lr solid">{{orderInfo.title}}</view>
		</view>
		<view class="cu-bar ">
			<view class="action">支付金额</view>
		</view>
		<view class="padding-lr  text-center margin-bottom-sm">
			<view class="padding-tb padding-lr solid flex justify-between">
				<text>付款金额 :</text>
				<text class="text-price text-orange" >{{orderInfo.price}}</text>
			</view>
		</view>
		<view class="cu-bar ">
			<view class="action">支付方式</view>
		</view>
		<view class="padding-lr  text-center">
			<view class="padding-tb padding-lr solid flex justify-between align-center">
				<view class="flex align-center">
					<image src="../../static/success51.png" mode="aspectFit" style="width: 50upx;height: 50upx;"></image>
					<text class="margin-left-sm">微信支付</text>
				</view>
				<text class="text-gray">默认</text>
			</view>
		</view>
		<view class="cu-bar foot" style="box-shadow: 0 0 0 rgba(0, 0, 0, 0);-webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);margin-bottom: 40rpx">
			<button @tap="orderInfoPay" class="cu-btn bg-theme text-white lg margin-lr-sm view-width" :loading="loading">立即支付</button>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				loading:false,
				orderInfo: {},
				form:{
					task_id: 0,
					seller_id: 0,
					unionid:'',
					paymodel:'1'
				}
			};
		},
		onShow() {
			that=this;
			//获取订单信息
		},
		onLoad(e){
			this.$api.postWithData(this.api.sureorder,{task_id:e.task_id,seller_id:e.seller_id},
				function callbacks(res){
				if(res.code==1){
					that.orderInfo=res.data
				}
			})
		},
		methods: {
			orderInfoPay(){//支付订单
				this.loading=true;
				this.form.task_id=this.orderInfo.task_id
				this.form.seller_id=this.orderInfo.seller_id
				this.form.unionid=uni.getStorageSync("unionid")
				console.log(this.form.unionid);
				this.$api.postWithData(this.api.postOrder,this.form,
					function callbacks(res){
						if(res.code==1){
							if(res.data.status==1){
								uni.requestPayment({
									provider:'wxpay',
									signType:res.data.signType,
									timeStamp:res.data.timeStamp,
									nonceStr:res.data.nonceStr,
									package:res.data.package,
									paySign:res.data.paySign,
									orderInfo:res.data.out_trade_no,
									success: (data) => {
										console.log(data)
										that.payResult(res.data.task_ordersn)
									},
									fail: (data) => {
										that.payResult(res.data.task_ordersn)
										that.loading=false;
									}
								})
							}
						}else{
							that.$api.msg(res.msg)
							that.loading=false;
						}
					})
			},
			payResult(ordersn){//支付结果
				this.$api.postWithData(this.api.payResult,{ordersn:ordersn},
					function callbacks(res){
						if(res.code==0){
							that.loading=false;
							that.$api.msg(res.msg)
						}else{
							uni.redirectTo({url:'paysuccess?data='+JSON.stringify(res.data)})
						}
				})
			}
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
