<template>
	<view>
		<swiper :style="'height:'+screenWidth+'px;'" class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="false"
		 :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item @tap="previewImage(images,index)" v-for="(item,index) in images" :key="index">
				<image :src="seller.logo==null||seller.logo==''?'http://cscbnew.kelinteng.com/uploads/20191011/b6374b5b92af069b58b13e0e0bf98090.png':seller.logo"
				 mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="padding bg-white solid-bottom ">
			<view class="text-lg text-bold text-black">{{seller.title}}</view>
			<view class="margin-top-sm" style="line-height: 40upx;">
				<view class="text-df">{{seller.seller_desc}}</view>
			</view>
			<view class="margin-top-xs">
				<text class="text-red text-price text-xxl text-bold">{{seller.price}}</text>
				<text class="margin-left">门市价:<text class="text-price margin-left-sm"></text>{{seller.market_price}}</text>
			</view>
			<view class="margin-top-sm flex justify-between align-center">
				<text>商家:<text>{{seller.shop==null?'':seller.shop}}</text></text>
				<text>1.31km</text>
			</view>
			<view class="margin-top-sm align-center" @tap="openLocation(seller)">
				<text>地址:</text>
				<text>{{seller.address==null?'':seller.address}}</text>
			</view>
			<view class="margin-tb flex justify-around align-center">
				<text>人气:{{seller.views}}</text>
				<text>已售:{{seller.stock}}</text>
			</view>
		</view>
		<view class="padding bg-white">
			<view class="text-lg text-black text-bold">
				<text class="cuIcon-hot"></text>
				<text class="margin-left text-df ">项目详情</text>
			</view>
			<view class="flex justify-center padding-xl">
				<text>暂无详情</text>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<view class="cu-bar foot bg-white tabbar border shop bg-color-left">
			<navigator url="home" class="action">
				<view class="cuIcon-home"> </view> 首页
			</navigator>
			<navigator :url="'nearby_merchants?id='+sid" class="action">
				<view class="cuIcon-shop"> </view> 商家
			</navigator>
			<navigator :url="'sure_order?good='+JSON.stringify(seller)+'&isone=1'" class="bg-red-center submit flex text-lg flex-direction justify-center align-center">
				<text class="text-price text-bold">{{seller.price}}</text>
				<text class="text-df">单独购买</text>
			</navigator>
			<navigator :url="'sure_order?good='+JSON.stringify(seller)+'&isone=5'" class="bg-red submit flex flex-direction justify-center align-center text-lg">
				<text class="text-price text-bold">{{seller.price_5}}<text class="text-sm">起</text> </text>
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
				sid:this.seller_id,
				id:null,
				images: [''],
				dotStyle: false,
				seller: {
					id:null,
					logo:'',
					title: '',
					phone: '',
					shop: '',
					address: '',
					seller_desc: "",
					price: '',
					price_3:'',
					price_5:'',
					market_price: '',
					views: '',
					stock: ''
				},
			}
		},
		onShow() {},
		onLoad(e) {
			that = this;
			this.id=e.id
			console.log(e.id);
			this.getGoodDetail(e.id)
		},
		methods: {
			getGoodDetail(id){
				this.$api.postWithData(this.api.good, {id: this.id},
					function callbacks(res) {
						that.seller=res.data
						console.log(res);
					})
			},
			openLocation(seller) {
				uni.openLocation({
					latitude: Number(seller.seller.latitude),
					longitude: Number(seller.seller.longitude),
					name: seller.seller.title,
					address: seller.seller.address,
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
