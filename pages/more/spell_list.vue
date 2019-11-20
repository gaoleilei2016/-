<template>
	<view class="padding-bottom-xl">
		<image style="width: 100%;position: fixed;z-index: -1;" mode="widthFix" src="http://txcos.kelinteng.com/uploads/mall/cea_bg.PNG"></image>
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
		<view class="flex justify-between padding-tb-lg " >
				<swiper  vertical autoplay circular interval="3000" class="tui-swiper margin-left-lg">
					<swiper-item v-for="(item,index) in ceaDeail.orderList" :key="index" style="" class="tui-swiper-item">
						<view style="background-color: rgba(255,255,255,0.2);" class="tui-news-item text-sm text-white round padding-tb-xs padding-lr-sm" @tap='detail'>{{item.sm_nickname}} 刚刚拼单成功</view>
					</swiper-item>
				</swiper>
			<view @tap="dialog=true" class='cu-tag' style="color:#FFF;background: #FE9639; border-top-left-radius: 5000upx;border-bottom-left-radius: 5000upx;">
				规则
			</view>
		</view>
		<view class="bg-white radius-lg margin flex flex-direction align-center">
			<view style="margin-top: -70upx;" class="flex flex-direction justify-center align-center">
				<image class="round" style="width: 140upx;height: 140upx;" src="http://img.tukexw.com/img/2c99a00e77f69be1.jpg"
				 mode="aspectFit"></image>
				<view class="flex align-center padding-tb-sm">
					<view class="margin-right-sm text-black text-bold">助力倒计时</view>
					<tui-countdown :isColon="false" :days="true" color="#fff" bcolor="#000" bgcolor="#000" colonColor="#000" :time="timeList"
					 :height="35" :width="35" :size="26" :colonsize="32"></tui-countdown>
				</view>
			</view>
			<view class="flex justify-between self-start margin-lr-sm" style="min-height: 80upx;line-height: 80upx;width: 90%;">
				<view class="flex align-center justify-between">
					<!-- <view class="cu-tag sm text-white margin-lr-sm bg-black"  style="padding-top: 25upx;padding-bottom: 25upx;">
						
					</view> -->
					<image style="width: 40px;height:40px; padding: 15upx;" :src="good.s_brand_logo==null?'../../static/logo.png':good.s_brand_logo" mode="aspectFit"></image>
					<view class="text-black text-bold text-cut">{{good.s_title}}</view>
					<view class="cu-tag sm text-black radius margin-lr-sm"  style="background: #DABB86;padding-top: 20upx;padding-bottom: 20upx;"><text>优选</text></view>
				</view>
				<view @tap="openLocation" class="text-lg">
					<text class="cuIcon-locationfill"></text>
				</view>
			</view>
			<view class="flex padding-tb-sm align-center radius-lg" style="background-image: linear-gradient(to bottom, #ff9847, #fc5a3a);">
				<image class="margin-lr radius" :src="good.objLogo==''||good.objLogo==null?'../../static/logo.png':good.objLogo" mode="aspectFit" style="width: 160upx;height: 160upx;"></image>
				<view class="flex flex-direction justify-start text-sm">
					<view style="width:430upx;" class="text-df text-white text-cut text-bold">{{good.objTitle}}</view>
					<view class="margin-tb-sm"><text class="text-white"></text><text>{{good.objDesc}}</text> </view>
					<view class="text-df text-bold text-white"><text class="text-price">{{good.price}}</text>/件</view>
				</view>
			</view>
			<view class="text-sm margin-tb-sm">
				我在参与好友助力,<text class="text-red text-lg text-bold">底价</text>购买年终保养,快来祝我一臂之力吧
			</view>
			<view class="margin-bottom flex padding-lr" style="width: 100%;">
				<button v-if="timeList>0" @tap="navigator" style="color: #EA440B;background: #FBDB6F;width: 100%;" class="margin-lr text-bold cu-btn round lg block">帮我助力</button>
				<button v-else @tap="navigatorToHome" style="color: #EA440B;background: #FBDB6F;width: 100%;" class="margin-lr text-bold cu-btn round lg block">我要拼单</button>
			</view>
			<view style="background: #f9ecd8;width: 100%;" class="radius-lg solid-bottom flex flex-direction justify-center">
				<view style="background-image: url(../../static/yaoqing.png);background-repeat: no-repeat;background-position-x:50%;margin-top: -20upx;" class="text-center text-white padding-tb-sm">需邀请{{good.o_type}}人助力</view>
				<view class="flex justify-center padding-tb">
					<view @tap="share" class="text-center"  v-for="(item,index) in good.o_type" :key="index">
						<image v-if="index<good.slList.length" class="round" style="width: 80upx;height: 80upx;" :src="good.slList[index].sm_headimg" mode="aspectFit"></image>
						<view v-if="index<good.slList.length" style="width:100upx;" class="text-cut text-sm">{{good.slList[index].sm_nickname}}</view>
						<image v-if="index>=good.slList.length" class="round" style="width: 80upx;height: 80upx;" src="../../static/fabu.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white radius-lg margin-top-xl margin-lr flex flex-direction align-center">
			<view style="background-image: url(../../static/haibao.png);background-size: 100% 100%;width:70%; background-repeat: no-repeat;background-position-x:50%;margin-top: -19upx;" class="text-center text-white padding-tb-sm">{{ceaDeail.title}}</view>
			<image style="width: 100%;" src="http://txcos.kelinteng.com/uploads/mall/%E5%B0%8F%E6%B5%B7%E6%8A%A52.0.jpg" mode="widthFix"></image>
		</view>
		<view class="cu-modal" :class="dialog?'show':''">
			<view class="cu-dialog" style="background-color:transparent;width: 600upx;">
				<view class="bg-white" style="border-radius: 10upx;">
					<view class="cu-bar text-black text-bold">
						<view class="content">活动规则</view>
					</view>
					<view class="flex text-black text-left flex-direction padding-lr-lg padding-bottom">
						<view style="line-height: 45upx;">
							1、关注【创世车宝公众服务号】，参与此次活动可再享受创世车宝10元补贴；
						</view>
						<view style="line-height: 45upx;">
							2、本次活动分一人购买和三人成团购买；
						</view>
						<view style="line-height: 45upx;">
							3、一人购买可直接下单，并根据所在地址选择适合的门店，购买成功后系统将显示相应门店具体地址及核销的二维码，携带二维码到相应门店参与此次活动；
						</view>
						<view style="line-height: 45upx;">
							4、成团购买需邀请好友一起拼单，在三天内邀请到三位好友拼单，并根据各自自身所在地址选择适合的门店，即下单成功，系统将显示相应门店具体地址及核销的二维码，携带二维码到相应门店参与此次活动。
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
			this.sl_ordersn=e.sl_ordersn
			this.initData(this.sl_ordersn);
		},
		data() {
			return {
				timeList: 0, //倒计时24小时
				dialog: false,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				good:{
					objLogo:'',
					objTitle:'暂无标题',
					objDesc:'暂无描述',
					price:'0',
					slList:[]
				},
				ceaDeail:{},
				sl_ordersn:''

			}
		},
		methods: {
			getPayResult(sl_ordersn){
				that.$api.postWithData(that.api.payResult,
				{
					// ordersn: 'CEA20191113175741506666',
					sl_ordersn: sl_ordersn,//'CEA20191113175741506666'
				},
				function callbacks(res)
				{
					if(res.data!=null){
						that.good=res.data
						if(res.data.slList.length>=res.data.o_type){
							that.timeList = 0
						}
					}
					console.log(res);
				})
			},
			initData(sl_ordersn) {
				this.$api.postWithData(this.api.ceaDetail, {
						cea_id: 1,
						// ordersn: 'CEA20191113175741506666',
						sl_ordersn: sl_ordersn,//'CEA20191113175741506666'
					},
					function callbacks(res) {
						that.ceaDeail = res.data
						//应返回开始时间和结束时间
						that.timeList = that.ceaDeail.countDown
						that.getPayResult(sl_ordersn)
					})
			},
			navigator(){
				uni.navigateTo({
					url:'pin_order?ordersn='+that.good.ordersn
				})
			},
			navigatorToHome(){
				uni.redirectTo({
					url:'home'
				})
			},
			share() {
				location.href="http://cscb2.kelinteng.com/index/index/sharecea?spell_list_ordersn="+this.sl_ordersn
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
	uni-swiper .uni-swiper-wrapper{
		width: 50%;
	}
</style>
