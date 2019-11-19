<template>
	<view>
		<swiper :style="'height:'+screenWidth+'px;'" class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="false"
		 :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item @tap="previewImage(images,index)" v-for="(item,index) in images" :key="index">
				<image :src="good.logo==null||good.logo==''?'http://cscbnew.kelinteng.com/uploads/20191011/b6374b5b92af069b58b13e0e0bf98090.png':good.logo"
				 mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="padding bg-white solid-bottom ">
			<view class="text-lg text-bold text-black">{{good.title}}</view>
			<view class="margin-top-sm" style="line-height: 40upx;">
				<view class="text-df">{{good.good_desc}}</view>
			</view>
			<view class="margin-top-xs">
				<text class="text-red text-price text-xxl text-bold">{{good.price}}</text>
				<text class="margin-left">门市价:<text class="text-price margin-left-sm"></text>{{good.market_price}}</text>
			</view>
			<view class="margin-top-sm flex justify-between align-center">
				<text>商家:<text>{{seller.title==null?'':seller.title}}</text></text>
				<text>1.31km</text>
			</view>
			<view class="margin-top-sm align-center" @tap="openLocation(seller)">
				<text>地址:</text>
				<text>{{seller.address==null?'':seller.address}}</text>
			</view>
			<view class="margin-tb flex justify-around align-center">
				<text>人气:{{good.views}}</text>
				<text>已售:{{good.stock}}</text>
			</view>
		</view>
		<view class="padding bg-white">
			<view class="text-lg text-black text-bold">
				<text class="cuIcon-hot"></text>
				<text class="margin-left text-df ">项目详情</text>
			</view>
			<view class="flex justify-center padding-xl">
				<view v-if="good.content==null">暂无详情</view>
				<view v-else v-html="good.content"></view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<view class="cu-bar foot bg-white tabbar border shop bg-color-left">
			<navigator url="home" class="action">
				<view class="cuIcon-home"> </view> 首页
			</navigator>
			<navigator @tap="goBack" class="action">
				<view class="cuIcon-shop"> </view> 商家
			</navigator>
			<navigator :url="'sure_order?good='+JSON.stringify(good)+'&isone=1'" class="bg-red-center submit flex text-lg flex-direction justify-center align-center">
				<text class="text-price text-bold">{{good.price}}</text>
				<text class="text-df">单独购买</text>
			</navigator>
			<navigator :url="'sure_order?good='+JSON.stringify(good)+'&isone=3'" class="bg-red submit flex flex-direction justify-center align-center text-lg">
				<text class="text-price text-bold">{{good.price_3}}<text class="text-sm">起</text> </text>
				<text class="text-df">发起拼单</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				id:null,
				images: [''],
				dotStyle: false,
				good: {},
				seller: {},
			}
		},
		onShow() {},
		onLoad(e) {
			that = this;
			this.id=e.id
			console.log(e.id);
			this.getGoodDetail(e.id)
			this.sellerinfo()
		},
		methods: {
			sellerinfo() {
				this.$api.postWithData(this.api.seller, {id: this.seller_id},
					function callbacks(res) {
						if(res.code==1&&res.data!=null){
							that.seller = res.data;
						}else{
							this.$api.msg(res.msg)
							setTimeout(function() {
								uni.navigateBack()
							}, 2000);
						}
						// console.log(that.good);
					})
			},
			goBack(){
				uni.navigateBack()
			},
			getGoodDetail(id){
				this.$api.postWithData(this.api.good, {id: this.id},
					function callbacks(res) {
						that.good=res.data
						console.log(res);
					})
			},
			openLocation(seller) {
				uni.openLocation({
					latitude: Number(seller.latitude),
					longitude: Number(seller.longitude),
					name: seller.title,
					address: seller.address,
				})
			},
		}
	}
</script>

<style>
	.text-red {
		color: #C31717;
	}
	.bg-red{
		background:#C31717 ;
		color: #FFFFFF;
	}
	.bg-red-center{
		background:#F46C6C;
		color: #FFFFFF;
	}
	.bg-color-left{
		background:#1A58A4;
		color: #FFFFFF;
	}
</style>
