<template>
	<view class="bg-white">
		<view class="flex align-center padding-top margin-bottom margin-left-lg">
			<view class="cu-avatar xl round margin-left" style="background-image:url(http://mistra.beijing-hyundai.com.cn/pc/images/waiguan0.jpg);"></view>
			<text class="text-bold margin-left-lg text-lg">开红午夜机修店</text>
		</view>
		<view>
			<view class="gray margin-left-lg flex align-center">
				<text class="cuIcon-phone "></text><text class="margin-left ">(+91) 999-915-365</text>
			</view>
			<view class="gray margin-left-lg margin-top flex align-center">
				<text class="cuIcon-location"></text><text class="margin-left ">贵阳市观山湖区金融城MAX D坐1709</text>
			</view>
			<view class="margin-top-lg"></view>
			<view style="border-top: 1px solid rgba(0, 0, 0, .1);" class="cu-list grid flex justify-between">
				<navigator open-type="navigate" :url="item.url" style="width: 25%;" class="cu-item" v-for="(item,index) in List1"
				 :key="index">
					<text class="text-theme text-bold">{{item.num}}</text>
					<text class="gray">{{item.name}}</text>
				</navigator>
			</view>
			<view class="margin-top-lg">
				<text class="text-theme text-bold margin-lg">推荐管理</text>
				<view class="cu-list grid no-border flex justify-between flex-wrap">
					<navigator open-type="navigate" :url="item.url" style="width: 25%;" class="cu-item" v-for="(item,index) in List2"
					 :key="index">
						<text class="margin-tb icon-color" :class="['cuIcon-' + item.cuIcon]"></text>
						<text>{{item.name}}</text>
					</navigator>
				</view>
			</view>
			<view class="border-line"></view>
			<view class="margin-top-lg">
				<text class="text-theme text-bold margin-lg">热门设置</text>
				<view class="cu-list grid no-border flex justify-between flex-wrap">
					<navigator open-type="navigate" :url="item.url" style="width: 25%;" class="cu-item" v-for="(item,index) in List3"
					 :key="index">
						<text class="margin-tb icon-color" :class="['cuIcon-' + item.cuIcon]"></text>
						<text>{{item.name}}</text>
					</navigator>
				</view>
			</view>
			<image src="../../static/gg.png" style="width: 100%;" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List1: [{
						url: 'test?name=余额',
						num: '140.00',
						name: '余额'
					}, {
						url: 'test?name=订单',
						num: '56',
						name: '订单'
					},
					{
						url: 'test?name=项目',
						num: '94',
						name: '项目'
					}, {
						url: 'test?name=商品',
						num: '35',
						name: '商品'
					}
				],
				List2: [{
						url: 'test?name=商品管理',
						cuIcon: 'goods',
						name: '商品管理'
					}, {
						url: 'test?name=订单管理',
						cuIcon: 'baby',
						name: '订单管理'
					},
					{
						url: 'test?name=项目管理',
						cuIcon: 'edit',
						name: '项目管理'
					}, {
						url: 'test?name=信息管理',
						cuIcon: 'message',
						name: '信息管理'
					},
					{
						url: 'test?name=预约管理',
						cuIcon: 'calendar',
						name: '预约管理'
					}, {
						url: 'test?name=活动管理',
						cuIcon: 'hot',
						name: '活动管理'
					},
					{
						url: 'test?name=人员管理',
						cuIcon: 'peoplelist',
						name: '人员管理'
					},
					{
						url: 'test?name=人员管理',
						cuIcon: 'peoplelist',
						name: '人员管理'
					}
				],
				List3: [{
						url: 'test?name=提现设置',
						cuIcon: 'pay',
						name: '提现设置'
					}, {
						url: 'test?name=扫码核销',
						cuIcon: 'scan',
						name: '扫码核销'
					},
					{
						url: 'test?name=运费设置',
						cuIcon: 'deliver',
						name: '运费设置'
					}, {
						url: 'test?name=供应商城',
						cuIcon: 'cart',
						name: '供应商城'
					},
					{
						url: 'test?name=康普顿专区',
						cuIcon: 'cardboardfill',
						name: '康普顿专区'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	
	page {
		background:$uni-text-color-inverse;
	}
	.margin-top-x-lg{
		margin-top: 50rpx;
	}
	.margin-left-lg{
		margin-left: 40rpx;
	}
	.margin-top-lg{
		margin-top: 30rpx;
	}
	.border-line{
		height:10rpx;background: #F1F1F1;
	}
</style>
