<template>
	<view class="page solid-top">
		<view class="padding bg-white solid-bottom">
			<view class="flex justify-center align-center margin-top">
				<view>
					<image style="width:80upx; height:60upx;" mode="aspectFit" src="../../static/success51.png"></image>
				</view>
				<text>{{info.statusText}}</text>
			</view>
			<view class="flex justify-center align-center margin-top">
				<text class="text-price text-xxxl text-black">0.01</text>
			</view>
		</view>
		<view v-if="pindan" style="background: #FDF6F0;" class="padding-tb-xl solid-bottom flex justify-center">
			<view class="text-center" v-for="(item,index) in info.slList" :key="index">
				<image class="round" style="width: 80upx;height: 80upx;" :src="item.sm_headimg" mode="aspectFit"></image>
				<view style="width:100upx;" class="text-cut text-sm">{{item.sm_nickname}}</view>
			</view>
			<view @tap="share()" v-if="!info.slList.length>=info.o_type" class="text-center">
				<image style="width: 80upx;height: 80upx;" src="../../static/fabu.png" mode="aspectFit"></image>
				<view class="text-sm">邀请好友</view>
			</view>
		</view>
		<view class="padding-tb bg-white">
			<view class="padding-lr-sm">
				<view class="flex justify-between margin-top-sm">
					<text>商品名称</text>
					<text>{{info.objTitle}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>支付金额</text>
					<text>{{info.price}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>交易时间</text>
					<text>{{info.create_at}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>支付方式</text>
					<text>微信支付</text>
				</view>
				<view class="flex justify-between margin-tb-sm">
					<text>交易单号</text>
					<text>{{info.ordersn}}</text>
				</view>
				<view v-if="!pindan" class="flex justify-between margin-tb-sm">
					<text>核销状态</text>
					<!-- <text>{{info.vip_coupon.status==0?'未使用':info.vip_coupon.status==1?'已核销':'已使用'}}</text> -->
				</view>
				<view v-if="pindan" class="flex justify-between margin-tb-sm">
					<text>拼单状态</text>
					<text v-if="info.slList.length<info.o_type">拼单中(还差{{info.o_type-info.slList.length}}人)</text>
					<text v-else>拼单成功</text>
				</view>
			</view>
		</view>
		<view class="bg-white flex justify-between padding-lr-sm margin-tb-sm padding-tb">
			<view style="width: 15%;">
				<image class="round bg-black" :src="info.s_brand_logo" style="width: 90upx;height: 90upx;" mode="aspectFit"></image>
			</view>
			<view style="width: 60%;" class="flex flex-direction  justify-around">
				<text>{{info.s_title}}</text>
				<text class="">联系电话:<text>{{info.s_phone}}</text></text>
				<text @tap="navigationTo(info)">地址:<text>{{info.s_address}}</text><text class="text-theme"> (导航到店)</text></text>
			</view>
			<view style="width:20%;" class="">
				<image src="http://txcos.kelinteng.com/uploads/20191014/qrcode.png" mode="widthFix" style="width:130upx;height: 130upx;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	// #ifdef H5
	var jweixin = require('../../utils/wxsdk.js')
	// #endif
	export default {
		data() {
			return {
				type: 1,
				pindan: false,
				info: {},
				imgList: [],
				tsDetail: {}
			}
		},
		onLoad(res) {
			that = this;
			console.log(res);
			//res.ordersn
			//res.sl_ordersn
			this.getPayResult(res.ordersn)
			// #ifdef H5
			let wxConfig=JSON.parse(uni.getStorageSync("wxConfig"))
			console.log(wxConfig);
			jweixin.config({
				appId:wxConfig.appId,
				debug: true,
				jsApiList:wxConfig.jsApiList,
				nonceStr: wxConfig.nonceStr,
				signature: wxConfig.signature,
				timestamp: wxConfig.timestamp
			});
			// #endif
		},

		methods: {
			
			getPayResult(ordersn) {
				//sl_ordersn:'CEA20191113175741506666'
				this.$api.postWithData(this.api.payResult, {
						ordersn: 'CEA20191113175741506666'
					},
					function callbacks(res) {
						console.log(res);
						if (res.code == 1 && res.data != null) {
							that.info = res.data
							if (that.info.o_type > 1) {
								that.pindan = true
							}
							if (that.info.status == 1) { //支付成功
								that.info.status = '支付成功'
							} else if (that.info.status == 2) { //已取消
								that.info.status = '已取消'
							} else { //未支付
								that.info.status = '未支付'
							}
						}
					})
			},
			navigationTo(info) {
				uni.openLocation({
					name: info.s_title,
					address: info.s_address,
					latitude: Number(info.s_latitude),
					longitude: Number(info.s_longitude),
				})
			},
			share() {
				// #ifdef H5
				jweixin.ready(function() {
					jweixin.updateAppMessageShareData({
						title: '标题', // 分享标题
						desc: '分享描述', // 分享描述
						link: 'https://cscbnew.kelinteng.com/h5/#/pages/more/spell_list', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'https://cscbnew.kelinteng.com/h5/#/pages/more/spell_list', // 分享图标
						success: function(res) {
							// 设置成功
							that.$api.msg(res)
						}
					})
				});
				// #endif
			},
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
