<template>
	<view>
		<view v-for="(item,index) in carList" :key="index"  class="padding flex bg-white align-center justify-between margin-top-sm margin-lr-sm">
			<view class="flex">
				<image src="../../static/logo.jpg" mode="widthFix" style="width:130upx;height: 130upx;"></image>
				<view class="flex flex-direction justify-around margin-left text-sm">
					<text>车牌号:贵G123456</text>
					<text>保险:2019.10.10-2020.01.01</text>
					<text>创建时间:2019.10.10 20:15</text>
				</view>
			</view>
			<view class="bg-gray" style="height:100upx;width: 2upx;"></view>
			<view @tap="navigator('mycar')">
				<button style="font-size:24upx;" class="cu-btn sm bg-theme">修改</button>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<view class="cu-tabbar-height"></view>
		<view class="cu-bar foot block margin-bottom">
			<button class="cu-btn lg bg-theme block" style="width:90%;margin: 0 auto;">新增爱车</button>
		</view>
	</view>
</template>

<script>
	var that,cos;
	export default {
		data() {
			return {
				radio: 'A',
				carList:['','','','','','']
			}
		},
		methods: {
			navigator(url){
				uni.navigateTo({
					url:url
				})
			}
		},
		onLoad() {
			that = this;
		},
	}
</script>

<style>
	.cu-bar.foot{
		-webkit-box-shadow: 0 0.5px 3px rgba(0, 0, 0, 0);
		box-shadow: 0 0.5px 3px rgba(0, 0, 0, 0);
	}
</style>
