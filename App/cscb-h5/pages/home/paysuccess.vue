<template>
	<view class="bg-white page solid-top">
		<view class="padding">
			<view class="flex justify-center align-center margin-top">
				<view>
					<image style="width:80upx; height:60upx;" mode="aspectFit" src="../../static/success51.png"></image>
				</view>
				<text>{{info.status}}</text>
			</view>
			<view class="flex justify-center align-center margin-top">
				<text class="text-price text-xxxl text-black">{{info.price}}</text>
			</view>
		</view>
		<view class="solid-top padding-tb margin-top">
			<view class="padding-lr-sm">
				<view class="flex justify-between margin-top-sm">
					<text>商品</text>
					<text>{{info.tp_title}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>交易时间</text>
					<text>{{info.payTime}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>支付方式</text>
					<text>微信支付</text>
				</view>
				<view class="flex justify-between margin-tb-sm">
					<text>交易单号</text>
					<text>{{info.ordersn}}</text>
				</view>
				<view class="flex justify-between margin-tb-sm">
					<text>核销状态</text>
					<text>{{info.vip_coupon.status==0?'未使用':info.vip_coupon.status==1?'已核销':'已使用'}}</text>
				</view>
			</view>
			<view v-if="tsDetail.obj_type==257" class="padding flex justify-between bg-white solid-bottom">
				<view class="flex-sub " style="width: 40%;">
					<text class="text-black">保单凭证</text>
				</view>
				<view class="flex-twice" style="width: 50%;height: 200upx;">
					<view class="grid col-1 grid-square" style="height: 200upx;">
						<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
							<image style="height: 200upx;" v-if="item.indexOf('png')!=-1" :src="imgList[index]" mode="aspectFill"></image>
							<image style="height: 200upx;" v-if="item.indexOf('jpg')!=-1" :src="imgList[index]" mode="aspectFill"></image>
							<image style="height: 200upx;" v-if="item.indexOf('jpeg')!=-1" :src="imgList[index]" mode="aspectFill"></image>
							<view v-if="item.indexOf('pdf')!=-1" style="width: 100%;height: 200upx;" >{{item}}</view>
							<view v-if="item.indexOf('doc')!=-1" style="width: 100%;height: 200upx;" >{{item}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex justify-between margin-lr-sm margin-tb padding-top">
					<view style="width: 15%;">
						<image class="round bg-black" :src="info.brand_logo" style="width: 90upx;height: 90upx;" mode="aspectFit"></image>
					</view>
					<view style="width: 60%;" class="flex flex-direction justify-around">
						<text class="text-bold text-lg">{{info.seller_title}}</text>
						<text class="">联系电话:<text>{{info.seller_phone}}</text></text>
						<text @tap="navigationTo(info)">地址:<text>{{info.seller_address}}</text><text class="text-theme"> (导航到店)</text></text>
					</view>
					<view style="width:25%;" class="">
						<canvas :style="{width:qrcode_w+'px', height:qrcode_w+'px'}" canvas-id="couponQrcode0"></canvas>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	const qrCode = require('../../utils/weapp-qrcode.js');
	export default {
		data() {
			return {
				info: {},
				imgList:[],
				qrcode_w: uni.upx2px(150),
				tsDetail:{}
			}
		},
		onLoad(res) {
			let orderInfo=JSON.parse(res.data);
			console.log(orderInfo)
			this.info=orderInfo;
			if(this.info.status==1){//支付成功
				this.info.status='支付成功'
			}else if(this.info.status==2){//已取消
				this.info.status='已取消'
			}else{//未支付
				this.info.status='未支付'
			}
			this.couponQrCode(orderInfo.vip_coupon.id, "couponQrcode0")
			this.taskServiceDetail()
		},
		
		methods: {
			taskServiceDetail(){
				let that=this;
				this.$api.postWithData(this.api.taskServiceDetail,
				{seller_id:this.info.seller_id, task_id: this.info.task_id},
					function callbacks(res){
						if(res.code==1){
							that.tsDetail=res.data;
							that.imgList.push(that.tsDetail.insurance_policy_file)
						}
				})
			},
			navigationTo(info) {
				uni.openLocation({
					name: info.seller_address,
					address: info.seller_address,
					latitude: Number(info.seller_latitude),
					longitude: Number(info.seller_longitude),
				})
			},
			// 二维码生成工具
			couponQrCode(text, canvasId) {
				new qrCode(canvasId, {
					text: text,
					width: this.qrcode_w,
					height: this.qrcode_w,
					colorDark: "#333333",
					colorLight: "#FFFFFF",
					correctLevel: qrCode.CorrectLevel.H
				});
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
