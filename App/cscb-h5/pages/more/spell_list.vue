<template>
	<view class="padding-bottom-xl">
		<image style="width: 100%;position: fixed;z-index: -1;" mode="widthFix" src="http://www.05sun.com/up/1910/201910071349266156.png"></image>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed bg-white" :style="style">
				<navigator url="home" class="action">
					<text class="cuIcon-homefill padding-left"></text>
				</navigator>
				<view class="content text-bold">
					好友邀请拼单
				</view>
			</view>
		</view>
		<view class="flex justify-between padding-tb-lg">
				<swiper vertical autoplay circular interval="3000" class="tui-swiper margin-left-lg">
					<swiper-item v-for="(item,index) in ceaDeail.orderList" :key="index" class="tui-swiper-item">
						<view class="tui-news-item text-sm margin-left text-white" @tap='detail'>{{item.sm_nickname}} 刚刚拼单成功</view>
					</swiper-item>
				</swiper>
			<view @tap="dialog=true" class='cu-tag' style="color:#FFF;background: #FE9639; border-top-left-radius: 5000upx;border-bottom-left-radius: 5000upx;">
				规则
			</view>
		</view>
		<view class="bg-white radius margin flex flex-direction align-center">
			<view style="margin-top: -70upx;" class="flex flex-direction justify-center align-center">
				<image class="round" style="width: 140upx;height: 140upx;" src="http://img.tukexw.com/img/2c99a00e77f69be1.jpg"
				 mode="aspectFit"></image>
				<view class="flex align-center padding-tb-sm">
					<view class="margin-right-sm">助力倒计时</view>
					<tui-countdown :isColon="false" :days="true" color="#fff" bcolor="#000" bgcolor="#000" colonColor="#000" :time="timeList"
					 :height="35" :width="35" :size="26" :colonsize="32"></tui-countdown>
				</view>
			</view>
			<view class="flex justify-between self-start margin-lr-sm" style="min-height: 80upx;line-height: 80upx;width: 90%;">
				<view class="flex align-center justify-between">
					<image src="../../static/bm.png" mode="aspectFit" style="width:80upx;height:80upx;"></image>
					<view class="text-black text-bold">{{good.s_title}}</view>
					<view class="cuIcon-right align-center"></view>
				</view>
				<view @tap="openLocation" class="text-lg">
					<text class="cuIcon-locationfill"></text>
				</view>
			</view>
			<view class="flex padding-tb-sm align-center bg-gray">
				<image class="margin-lr radius" :src="good.s_brand_logo" mode="aspectFill" style="width: 160upx;height: 160upx;"></image>
				<view class="flex flex-direction justify-start text-sm">
					<view style="width:430upx;" class="text-df text-black text-cut text-bold">{{good.objTitle}}</view>
					<view>规格：<text>4L</text> </view>
					<view>级别：<text>SN</text> </view>
					<view>粘度：<text>ow-40</text> </view>
					<view class="text-df text-bold text-black"><text class="text-price">{{good.price}}</text>/件</view>
				</view>
			</view>
			<view class="text-sm margin-tb-sm">
				我在参与好友助力，0元拿券活动快来祝我一臂之力吧
			</view>
			<view class="margin-bottom flex padding-lr" style="width: 100%;">
				<button @tap="navigator" style="color: #EA440B;background: #FBDB6F;width: 100%;" class="margin-lr text-bold cu-btn round lg block">帮我助力</button>
			</view>
			<view style="background: #FDF6F0;width: 100%;" class="radius  solid-bottom flex flex-direction justify-center">
				<view class="text-center padding-tb-sm">需邀请{{good.o_type}}人助力</view>
				<view class="flex justify-center padding-tb-xl">
					<view @tap="share" class="text-center" v-for="(item,index) in ceaDeail.orderList" :key="index">
						<image class="round" style="width: 80upx;height: 80upx;" :src="item.sm_headimg" mode="aspectFit"></image>
						<view style="width:100upx;" class="text-cut text-sm">{{item.sm_nickname}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white radius margin-top-xl margin-lr flex flex-direction align-center">
			<view class="padding-tb-sm">{{ceaDeail.title}}</view>
			<image style="width: 100%;" src="https://img.51miz.com/preview/muban/00/00/33/02/M-330290-93DA5F00.jpg!/quality/90/unsharp/true/compress/true/fw/840" mode="widthFix"></image>
		</view>
		<view class="cu-modal" :class="dialog?'show':''">
			<view class="cu-dialog" style="background-color:transparent;width: 600upx;">
				<view class="bg-white" style="border-radius: 10upx;">
					<view class="cu-bar text-black text-bold">
						<view class="content">活动规则</view>
					</view>
					<view class="flex text-black text-left flex-direction padding-lr-lg padding-bottom">
						<view style="line-height: 45upx;">
							1.每位用户当天尽可参加活动6次(含发起4次与参与2次)；其中面单券活动期间内仅限领1次， [仅限邀请新用户助力]活动，参与者成功参与1次，如参与的助力活动失效后才可参与其他助力活动；
						</view>
						<view style="line-height: 45upx;">
							2.规定时间内，邀请好友助力成功。发起者可以得到对应的优惠券，可在我的-优惠券中查看；助力失败，不会得到优惠券；
						</view>
						<view style="line-height: 45upx;">
							3.优惠券在活动期间库存有限，以每个团助力成功的前后顺序发放优惠券先到先得；若优惠券数量不足，进行中的助力活动提示该优惠券已抢光，助力活动则终止。助力成功
						</view>
					</view>
				</view>
				<view class="text-white text-sl margin-top">
					<text @tap="dialog=false" class="cuIcon-roundclose"></text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	var that;
	// #ifdef H5
	var jweixin = require('../../utils/wxsdk.js')
	// #endif
	import tuiCountdown from "@/components/countdown/countdown"
	export default {
		components: {
			tuiCountdown
		},
		computed: {
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		onLoad(e) {
			that = this;
			this.initData();
			this.getPayResult()
			// #ifdef H5
			jweixin.config({
				debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: 'wxf9651f8626d421a9', // 必填，公众号的唯一标识
				timestamp: '1573616116', // 必填，生成签名的时间戳
				nonceStr: '093bd45e4bpo8gln', // 必填，生成签名的随机串
				signature: '8b0d8b99af0a751af31c981cb8720240a1cc38bd', // 必填，签名
				jsApiList: ['checkJsApi', 'translateVoice', 'scanQRCode', 'updateAppMessageShareData'] // 必填，需要使用的JS接口列表
			});
			// #endif
		},
		data() {
			return {
				timeList: 0, //倒计时24小时
				dialog: false,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				good:{},
				ceaDeail:{
					"id": 1,
					"title": "机油特惠",
					"desc": "机油年终特惠",
					"content": "机油年终特惠",
					"image": "\/\/cscb2.kelinteng.com\/static\/upload\/667e3cf3b76fd7aa\/547542f4c760ae7d.jpg",
					"status": 1,
					"seller_get_price": "65.00",
					"seller_get_rate": 0,
					"create_time": "2019-11-13 14:48:53",
					"orderNum": 4,
					"orderList": [{
						"id": 1314,
						"ordersn": "CEA20191113175741506666",
						"uid": 2207,
						"price": "358.00",
						"sm_nickname": "王子术",
						"sm_headimg": "http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eqkiawz4tGORxDjO3COoGpA6ItxJ0xswicplmmAicOgkMv37ibtP3OiaBPClbwbTw23nweGXS7lZNMZScQ\/132"
					}, {
						"id": 1315,
						"ordersn": "CEA20191113175934566930",
						"uid": 2207,
						"price": "358.00",
						"sm_nickname": "王子术",
						"sm_headimg": "http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eqkiawz4tGORxDjO3COoGpA6ItxJ0xswicplmmAicOgkMv37ibtP3OiaBPClbwbTw23nweGXS7lZNMZScQ\/132"
					}, {
						"id": 1316,
						"ordersn": "CEA20191113180126231344",
						"uid": 2207,
						"price": "358.00",
						"sm_nickname": "王子术",
						"sm_headimg": "http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eqkiawz4tGORxDjO3COoGpA6ItxJ0xswicplmmAicOgkMv37ibtP3OiaBPClbwbTw23nweGXS7lZNMZScQ\/132"
					}, {
						"id": 1317,
						"ordersn": "CEA20191113180533129845",
						"uid": 2207,
						"price": "358.00",
						"sm_nickname": "王子术",
						"sm_headimg": "http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eqkiawz4tGORxDjO3COoGpA6ItxJ0xswicplmmAicOgkMv37ibtP3OiaBPClbwbTw23nweGXS7lZNMZScQ\/132"
					}],
					"countDown": 1573540411
				}

			}
		},
		methods: {
			getPayResult(){
				this.$api.postWithData(this.api.payResult,
				{
					ordersn: 'CEA20191113175741506666',
					sl_ordersn: 'CEA20191113175741506666'
				},
				function callbacks(res)
				{
					if(res.code==1&&res.data!=null){
						that.good=res.data
					}
					console.log(res);
				})
			},
			initData() {
				this.$api.postWithData(this.api.ceaDetail, {
						cea_id: 1,
						ordersn: 'CEA20191113175741506666',
						sl_ordersn: 'CEA20191113175741506666'
					},
					function callbacks(res) {
						that.ceaDeail = res.data
						//应返回开始时间和结束时间
						that.timeList = that.ceaDeail.countDown
					})
			},
			navigator(){
				uni.navigateTo({
					url:'pin_order'
				})
			},
			share() {
				// #ifdef H5
				jweixin.ready(function() {
					jweixin.updateAppMessageShareData({
						title: '标题', // 分享标题
						desc: '分享描述', // 分享描述
						link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: '', // 分享图标
						success: function() {
							// 设置成功
						}
					})
				});
				// #endif
			},
			openLocation(){
				uni.openLocation({
					latitude:Number(this.good.s_latitude),
					longitude:Number(this.good.s_longitude),
					address:this.good.s_address,
					name:this.good.s_title
				})
			},
		}
	}
</script>

<style>
	.tui-swiper {
		font-size: 28upx;
		height: 50upx;
		flex: 1;
	}
	.tui-swiper-item {
		display: flex;
		align-items: center
	}
	.tui-news-item {
		line-height: 28upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
