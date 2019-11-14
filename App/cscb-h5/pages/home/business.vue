<template>
	<view>
		<view style="position: fixed;">
			<image src="../../static/bb.png" mode="widthFix" style="width: 100vw;"></image>
		</view>
		<view style="position: absolute;top:30upx;z-index: 1000;width: 100%;" class="align-center text-center">
			<image class="round" mode="aspectFill" src="http://mistra.beijing-hyundai.com.cn/pc/images/waiguan0.jpg" style="width: 150upx;height: 150upx;position: relative;z-index: 2;"></image>
			<view class="bg-white align-center text-center padding-tb" style="position: relative;top: -80upx;width: 95%;z-index: 1;margin: 0 auto;padding-top:90upx ;">
				<view class="text-lg">贵州市泰森修理维修厂</view>
				<view class="padding text-gray solid-bottom">商家地址:贵阳市南明区花果园起义路1709</view>
				<view class="flex justify-around padding">
					<view class="flex flex-direction">
						<text>886</text>
						<text class="text-theme margin-top-xs">竞标记录</text>
					</view>
					<view class="flex flex-direction justify-end">
						<text class="text-theme">|</text>
					</view>
					<view class="flex flex-direction">
						<text>55</text>
						<text class="text-theme margin-top-xs">我的服务</text>
					</view>
					<view class="flex flex-direction justify-end">
						<text class="text-theme">|</text>
					</view>
					<view class="flex flex-direction">
						<text class="text-price">998.00</text>
						<text class="text-theme margin-top-xs">我的受益</text>
					</view>
				</view>
				<view class="bar padding-xs"> </view>
				<view class="cu-bar bg-white solid-bottom" style="min-height:40px;">
					<view class="action ">
						<text class="text-df text-black text-bold">服务记录</text>
					</view>
				</view>
				<view class="text-left cu-card article no-card  solid-bottom" v-for="(item,index) in 5" :key="index">
					<view class="cu-item shadow" style="border-radius: 0upx;">
						<view class="cu-bar bg-white " style="min-height:80upx;">
							<view class="action ">
								<text class="text-df">服务单号:20190616112278945612</text>
							</view>
							<view class="action text-theme text-bold">
							</view>
						</view>
						<view @tap="navigateTo('../tab1/shopselect')" open-type="navigate"  class="content">
							<image style="width: 180upx;" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2876485953,1402376593&fm=26&gp=0.jpg" mode="aspectFill"></image>
							<view class="desc">
								<view class="text-df flex justify-between align-center"> 
								 <text>折磨生出苦难，苦难又会加</text>
								</view>
								<view class="text-sm text-gray"><text>希望能找到合适价位前轮左侧轮胎</text></view>
								<view class="text-sm text-gray">车型:<text>奥迪A8</text></view>
								<view class="text-sm text-gray">服务类型:<text>轮胎更换</text></view>
								<view class="text-sm text-orange">我的报价:<text class="text-price">899.00</text></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.bar{
		background: #EEE;
		height: 10upx;
		width: 100%;
	}
</style>
