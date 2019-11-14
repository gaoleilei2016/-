<template>
	<view class="container">
		<scroll-view scroll-x scroll-with-animation class="tab-view" :scroll-left="scrollLeft">
			<view v-for="(item,index) in tabbar" :key="index" class="tab-bar-item" :class="[currentTab==index ? 'active' : '']"
			 :data-current="index" @tap.stop="swichNav">
				<text class="tab-bar-title">{{item}}</text>
			</view>
		</scroll-view>
		<swiper class="tab-content" :current="currentTab" duration="300" @change="switchTab" :style="{height:winHeight+'px'}">
			<swiper-item v-for="(item,index) in tabbar" :key="index">
				<scroll-view @scrolltolower="ScrollDown" scroll-y class="scoll-y">
					<view class="list-view">
						<view  @tap="navigator('order_detail')" v-for="(item,index) in list1" :key="index" class="list-cell list-item" hover-class="hover" :hover-stay-time="150">
							 <view class="bg-white">
							 	<view class="solid-bottom padding-right flex justify-between">
							 		<view class="flex align-center">
							 			<image src="../../static/bm.png" mode="aspectFit" style="width:80upx;height:80upx;"></image>
										<text class="self-center text-black text-bold">创世车宝自营店</text>
							 		</view>
									<view v-if="item.state==0" class="flex align-center">
										交易关闭
									</view>
									<view v-if="item.state==1" class="flex align-center">
										交易成功
									</view>
									<view v-if="item.state==2" class="flex align-center">
										待付款
									</view>
							 	</view>
								<view class="flex padding-top">
									<image class="margin-lr-sm" src="../../static/gg.png" mode="aspectFill" style="width: 150upx;height: 150upx;"></image>
									<text>描述</text>
								</view>
								<view class="flex flex-direction align-end padding-right padding-bottom">
									<text>共一件商品 实付款:<text class="text-price">268.00</text></text>
									<view class="flex margin-top-sm">
										<button style="font-size: 24upx;" class="cu-btn line-gray sm margin-right-xs">联系卖家</button>
										<button style="font-size: 24upx;" v-if="item.state==0" class="cu-btn line-gray sm text-black">查看退款原因</button>
										<button style="font-size: 24upx;" v-if="item.state==1" class="cu-btn line-gray sm text-black">查看评价</button>
										<button style="font-size: 24upx;" v-if="item.state==2" class="cu-btn line-gray sm text-black">去付款</button>
									</view>
								</view>
							 </view>
						</view>
					</view>
					<!--加载loadding-->
					<load-tip :visible="loadding"></load-tip>
					<tui-tips v-if="list1.length<=0" :fixed="true" imgUrl="../../static/img_noorder.png">您暂时没有可用的优惠券</tui-tips>
					<!--加载loadding-->
				</scroll-view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import tuiTips from "@/components/tips/tips"
	export default {
		components: {
			tuiTips
		},
		data() {
			return {
				loadding:false,
				tabbar: ["全部", "待付款", "待发货", "待收货", "待评价", "退款/售后"],
				winHeight: "", //窗口高度
				currentTab: 0, //预设当前项的值
				scrollLeft: 0 ,//tab标题的滚动条位置
				list1:
				[{"state":0},{"state":1},{"state":2},{"state":0},{"state":0},{"state":0}],
			}
		},
		onLoad: function() {
			let that = this;
			//  高度自适应
			uni.getSystemInfo({
				success: function(res) {
					let calc = res.windowHeight;
					that.winHeight = calc;
				}
			});
			this.loadding=true;
			if(this.list1.length<=0){
				this.loadding=false;
			}
		},
		methods: {
			// 滚动切换标签样式
			switchTab: function(e) {
				let that = this;
				this.currentTab = e.detail.current;
				this.checkCor();
			},
			// 点击标题切换当前页时改变样式
			swichNav: function(e) {
				let cur = e.currentTarget.dataset.current;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur
				}
			},
			//判断当前滚动超过一屏时，设置tab标题滚动条。
			checkCor: function() {
				if (this.currentTab > 3) {
					//这里距离按实际计算
					this.scrollLeft = 300
				} else {
					this.scrollLeft = 0
				}
			},
			ScrollDown(){
				this.$api.msg("ScrollDown")
			},
			navigator(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}	

	.tab-bar-item {
		padding: 0;
		height: 100upx;
		min-width: 80upx;
		line-height: 100upx;
		margin: 0 28upx;
		display: inline-block;
		text-align: center;
		box-sizing: border-box;
	}
	
</style>
