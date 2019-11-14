<template>
	<view>
		<view class="bg-gradual-blue" style="height: 300upx;">
			<view class="flex justify-between padding-tb padding-left">
				<text @tap="show"><text>{{month}}</text>月/<text>{{year}}</text>年 <text class="cuIcon-triangledownfill"></text></text>
				<text class="cu-tag tui-tag-fillet-left" style="background-color: rgba(0, 0, 0, 0.5);">积分明细</text>
			</view>
			<view class="flex flex-direction text-center align-center">
				<text >可用积分</text>
				<text class="text-sl ">344</text>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white">
			<view class="flex text-center ">
				<view class="cu-item flex-five margin-lr-xl" :class="0==TabCur?'text-black text-bold solids-b':''" @tap="tabSelect" data-id="0">
					<view class="flex flex-direction padding-tb-sm">
						<text>+125</text>
						<text>积分获取</text>
					</view>
				</view>
				<view class="cu-item flex-sub padding-tb" >|</view>
				<view class="cu-item flex-five margin-lr-xl" :class="1==TabCur?'text-black text-bold solids-b':''" @tap="tabSelect" data-id="1">
					<view class="flex flex-direction padding-tb-sm">
						<text>-144</text>
						<text>积分支出</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<swiper class="tab-content" :current="TabCur" duration="300" @change="switchTab" :style="{height:winHeight+'px'}">
			<swiper-item v-for="(item,index) in 2" :key="index">
				<scroll-view scroll-y class="scoll-y bg-white">
					<view v-if="TabCur==0" v-for="(item,index) in 5" :key="index" class="flex justify-between padding-tb margin-lr solid-top align-center">
						<view class="flex flex-direction">
							<text>额外领积分_门店买单积分奖励</text>
							<text>2019-06-18</text>
						</view>
						<view>
							<text>+20</text>
						</view>
					</view>
					<view v-if="TabCur==1" v-for="(item,index) in 5" :key="index" class="flex justify-between padding-tb margin-lr solid-top align-center">
						<view class="flex flex-direction">
							<text>额外领积分_门店买单积分奖励</text>
							<text>2019-06-18</text>
						</view>
						<view>
							<text>-20</text>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" @confirm="change"></tui-datetime>
	</view>
</template>

<script>
	import tuiDatetime from "@/components/dateTime/dateTime"
	var COS =require('../../utils/cos-wx-sdk-v5')
	export default {
		components: {
			tuiDatetime,
		},
		data() {
			return {
				TabCur: 0,
				winHeight: "", //窗口高度
				currentTab: 0, //预设当前项的值
				type: 1,
				startYear: 1980,
				endYear: 2030,
				cancelColor: "#888",
				color: "#5677fc",
				setDateTime: "",
				year:new Date().getFullYear(),
				month:new Date().getMonth()+1
			}
		},
		onLoad() {
			let that = this;
			//  高度自适应
			uni.getSystemInfo({
				success: function(res) {
					let calc = res.windowHeight;
					that.winHeight = calc;
				}
			});
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 10
			},
			// 滚动切换标签样式
			switchTab: function(e) {
				let that = this;
				this.TabCur = e.detail.current;
			},
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
				this.year=e.year
				this.month=e.month
			},
		},
	}
</script>

<style>
	
	.solids-b{
		border-bottom: 6upx solid;
	}
	.tui-tag-fillet-left {
		border-radius: 50rpx 0 0 50rpx;
	}
	.tui-tag,
	.tui-tag-small,
	.tui-mrbtm {
		margin-bottom: 26upx;
		margin-right: 20upx
	}
</style>
