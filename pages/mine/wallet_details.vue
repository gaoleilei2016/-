<template>
	<view class="">
		<view class="bg-white text-center text-black flex flex-direction min-height justify-center">
			<text class="text-lg text-bold">退款</text>
			<text class="text-xxxl margin-top">+20.00</text>
		</view>
		<view class="dashed margin-lr"></view>
		<view class="bg-white padding-lr padding-tb-xl lineHeight">
			<view class="flex">
				<view class="text-gray minWidth">类型</view>
				<text class="text-black">退款</text>
			</view>
			<view class="flex">
				<view class="text-gray minWidth">时间</view>
				<text class="text-black">2019-10-22 12:29:01</text>
			</view>
			<view class="flex">
				<view class="text-gray minWidth">支付方式</view>
				<text class="text-black">创世车宝商户退款</text>
			</view>
			<view class="flex">
				<view class="text-gray minWidth">商户单号</view>
				<text class="text-black">10000039501100006612222272</text>
			</view>
			<view class="flex">
				<view class="text-gray minWidth">订单编号</view>
				<text class="text-black">2019102212290161619521</text>
			</view>
		</view>
		<view class="text-center padding text-sm text-gray">
			贵州柯林腾网络科技有限公司版权所有
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0
			}
		},
		methods: {
			
		},
	}
</script>

<style>
	.min-height{
		min-height: 260upx;
	}
	.lineHeight{
		line-height: 80upx;
	}
	.minWidth{
		width: 200upx;
	}
</style>
