<!-- 商品列表组件 <pd-list :list="xx"></pd-list> -->
<template>
	<view class="pd-list">
		<view class="cu-list menu-avatar" style="margin-top:0;">
			<view @tap="navigator(item.id)" class="cu-item" style="height:200rpx"  v-for="(item,index) in list" :key="index">
				<image lazy-load="true" class="cu-avatar radius xl" :src="item.logo" mode="aspectFit"></image>
				<view class="content" style="line-height:3em;left:180upx;width:350upx">
					<view class="text-bold">
						<view class="text-cut" v-html="item.title"></view>
					</view>
					<view class="text-bold flex">
						<view class="text-cut">
							<text>人气:{{item.views}}</text>
						</view>
						<view class="text-cut" v-if="item.is_stock == 1">
							<text class="margin-left">仅剩:{{item.stock}}</text>
						</view>
					</view>
				</view>
				<view class="action flex flex-direction align-end justify-between margin-right-sm" style="width: 130upx;height: 65%;">
					<text class="text-price text-red text-lg text-bold">{{item.price_3}}</text>
					<text class="text-price text-red text-sm" style="text-decoration: line-through;">{{item.price}}</text>
					<button class="cu-btn sm radius bg-theme" style="font-size: 24upx;height: 48upx;">立即抢</button>
				</view>
			</view>
		</view>
		<!-- <view class="pd-li" v-for="pd in list" :key="pd.id">
			<image class="pd-img" :src="pd.pdImg" mode="widthFix"/>
			<view class="pd-name">{{pd.pdName}}</view>
			<text class="pd-price">{{pd.pdPrice}} 元</text>
			<text class="pd-sold">已售{{pd.pdSold}}件</text>
		</view> -->
	</view>
</template>

<script>
	export default {
		props:{
			list: { // 数据列表
				type: Array,
				default(){
					return []
				}
			},
			index:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		methods:{
			navigator(id){
				console.log(this.index);
				if(this.index==0){
					uni.navigateTo({
						url:'project_detail?id='+id
					})
				}else{
					location.href="http://cscb2.kelinteng.com/index/mall/details.html?id="+id
				}
			},
		}
	}
</script>

<style>
	/*数据列表*/
	.pd-li{
		position: relative;
		height: 160upx;
		padding: 20upx 16upx 20upx 240upx;
		border-bottom: 1upx solid #eee;
	}
	.pd-li .pd-img{
		position: absolute !important; /*编译到H5,在list-mescroll-more的案例中需加上!important,解决tab切换过快定位失效的问题*/
		left: 36upx;
		top: 20upx;
		width: 160upx;
		height: 160upx;
	}
	.pd-li .pd-name{
		font-size: 26upx;
		line-height: 40upx;
		height: 80upx;
		margin-bottom: 20upx;
		overflow: hidden;
	}
	.pd-li .pd-price{
		font-size: 26upx;
		color: red;
	}
	.pd-li .pd-sold{
		font-size: 24upx;
		margin-left: 16upx;
		color: gray;
	}
</style>
