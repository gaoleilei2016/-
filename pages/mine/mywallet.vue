<template>
	<view class="bg-white ">
		<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" @confirm="change"></tui-datetime>
		<view class="cu-bar bg-white search margin-lr-xl">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="请输入和账单相关信息" confirm-type="search"></input>
			</view>
		</view>
		<view class=" text-center text-black flex flex-direction min-height justify-center">
			<text class="text-lg text-bold">账户余额</text>
			<text class="text-xxxl margin-top text-price">20.00</text>
			<view class="margin-top">
				<button style="font-size:24upx;" class="cu-btn sm bg-theme">提现</button>
			</view>
		</view>
		<view class="dashed margin-lr"></view>
		<view class="padding-lr padding-tb">
			<view class="flex justify-between">
				<view class="text-black">近7天</view>
				<view @tap="show()" class="text-xl">
					<text class="cuIcon-sort text-black"></text>
				</view>
			</view>
		</view>
		<view class="padding-lr">
			<view @tap="navigator('wallet_details')" class="flex justify-between solid-bottom padding-tb-sm">
				<view class="flex flex-direction">
					<text class="text-black">退款</text>
					<text class="margin-top-xs text-gray">10月21日 12:29</text>
				</view>
				<view class="flex flex-direction justify-center">
					<text>+20.00</text>
				</view>
			</view>
			<view class="flex justify-between solid-bottom padding-tb-sm">
				<view class="flex flex-direction">
					<text class="text-black">企业付款:提现到零钱</text>
					<text class="margin-top-xs text-gray">10月21日 12:29</text>
				</view>
				<view class="flex flex-direction justify-center">
					<text class="text-orange">+20.00</text>
				</view>
			</view>
			<view class="flex justify-between solid-bottom padding-tb-sm">
				<view class="flex flex-direction">
					<text class="text-black">扫码核销</text>
					<text class="margin-top-xs text-gray">10月21日 12:29</text>
				</view>
				<view class="flex flex-direction justify-center">
					<text >-29.00</text>
				</view>
			</view>
			<view class="flex justify-between solid-bottom padding-tb-sm">
				<view class="flex flex-direction">
					<text class="text-black">扫码核销</text>
					<text class="margin-top-xs text-gray">10月21日 12:29</text>
				</view>
				<view class="flex flex-direction justify-center">
					<text >-29.00</text>
				</view>
			</view>
			<view class="flex justify-between solid-bottom padding-tb-sm">
				<view class="flex flex-direction">
					<text class="text-black">扫码核销</text>
					<text class="margin-top-xs text-gray">10月21日 12:29</text>
				</view>
				<view class="flex flex-direction justify-center">
					<text >-29.00</text>
				</view>
			</view>
			<view class="flex justify-between solid-bottom padding-tb-sm">
				<view class="flex flex-direction">
					<text class="text-black">扫码核销</text>
					<text class="margin-top-xs text-gray">10月21日 12:29</text>
				</view>
				<view class="flex flex-direction justify-center">
					<text >-29.00</text>
				</view>
			</view>
			<view class="flex justify-between solid-bottom padding-tb-sm">
				<view class="flex flex-direction">
					<text class="text-black">扫码核销</text>
					<text class="margin-top-xs text-gray">10月21日 12:29</text>
				</view>
				<view class="flex flex-direction justify-center">
					<text >-29.00</text>
				</view>
			</view>
		</view>
		<view style="position: relative;bottom: 0;width: 100%;" class="text-center padding text-sm text-gray">
			贵州柯林腾网络科技有限公司版权所有
		</view>
	</view>
</template>

<script>
	import tuiDatetime from "@/components/dateTime/dateTime"
	export default {
		components: {
			tuiDatetime,
		},
		data() {
			return {
				type: 1,
				startYear: 1980,
				endYear: 2030,
				cancelColor: "#888",
				color: "#5677fc",
				setDateTime: "",
				result: "",
				scrollTop: 0
			}
		},
		methods: {
			show: function() {
				this.cancelColor = "#888";
				this.color = "#5677fc";
				this.setDateTime = "";
				this.startYear = 1980;
				this.endYear = 2030;
				this.type = 3;
				this.$refs.dateTime.show()
			},
			change: function(e) {
				console.log(e)
				this.result = e.result
			},
			navigator(url){
				uni.navigateTo({
					url:url
				})
			}
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
	.page{
		height: 100vh;
	}
</style>
