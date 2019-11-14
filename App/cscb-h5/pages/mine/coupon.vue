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
				<scroll-view scroll-y class="scoll-y">
					<view class="list-view" v-if="currentTab==0">
						<view v-if="item.state==0" v-for="(item,index) in list1" :key="index" class="list-cell list-item" hover-class="hover" :hover-stay-time="150" @tap="detail">
							 <view class="flex padding justify-between" style="background-image:url('static/coupon.png'); background-size: 100% 100%;background-repeat: no-repeat;height:200upx;">
								<view class="flex flex-direction justify-between">
									<text class="cuIcon-ticket text-orange"><text>{{item.name}}</text></text>
									<text>有限期至：{{item.data}}</text>
								</view>
								<view class="flex flex-direction justify-between">
									<text class="text-center">{{item.price}}</text>
									<button style="width: 145upx;font-size:24upx;" class="cu-btn bg-theme round sm">立即使用</button>
								</view>
							 </view>
						</view>
					</view>
					<view class="list-view" v-if="currentTab==1">
						<view v-if="item.state==1" v-for="(item,index) in list1" :key="index" class="list-cell list-item" hover-class="hover" :hover-stay-time="150" @tap="detail">
							 <view class="flex padding justify-between" style="background-image:url('static/coupon.png'); background-size: 100% 100%;background-repeat: no-repeat;height:200upx;">
								<view class="flex flex-direction justify-between">
									<text class="cuIcon-ticket text-orange"><text>{{item.name}}</text></text>
									<text>有限期至：{{item.data}}</text>
								</view>
								<view class="flex flex-direction justify-between">
									<text class="text-center">{{item.price}}</text>
									<button style="width: 145upx;font-size:24upx;" class="cu-btn text-gray line-gray round sm">已使用</button>
								</view>
							 </view>
						</view>
					</view>
					<view class="list-view" v-if="currentTab==2">
						<view v-if="item.state==2" v-for="(item,index) in list1" :key="index"  class="list-cell list-item" hover-class="hover" :hover-stay-time="150" @tap="detail">
							 <view class="flex padding justify-between" style="background-image:url('static/coupon.png'); background-size: 100% 100%;background-repeat: no-repeat;height:200upx;">
								<view class="flex flex-direction justify-between">
									<text class="cuIcon-ticket text-orange"><text>{{item.name}}</text></text>
									<text>有限期至：{{item.data}}</text>
								</view>
								<view class="flex flex-direction justify-between">
									<text class="text-center">{{item.price}}</text>
									<button style="width: 145upx;font-size:24upx;" class="cu-btn text-gray line-gray round sm">已过期</button>
								</view>
							 </view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<tui-tips v-if="false" :fixed="true" imgUrl="../../static/img_noorder.png">您暂时没有可用的优惠券</tui-tips>
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
				tabbar: ["待使用", "已使用", "已过期"],
				winHeight: "", //窗口高度
				currentTab: 0, //预设当前项的值
				scrollLeft: 0 ,//tab标题的滚动条位置
				list1:
				[{"data":"2019-10-15","name":"优惠券1","price":"5元洗车","state":0},
				{"data":"2019-10-15","name":"优惠券2","price":"5元洗车","state":0},
				{"data":"2019-10-15","name":"优惠券3","price":"5元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券4","price":"5元洗车","state":2},
				{"data":"2019-10-15","name":"优惠券5","price":"5元洗车","state":0},
				{"data":"2019-10-15","name":"优惠券11","price":"51元洗车","state":0},
				{"data":"2019-10-15","name":"优惠券12","price":"50元洗车","state":0},
				{"data":"2019-10-15","name":"优惠券13","price":"52元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券14","price":"15元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券15","price":"15元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券16","price":"25元洗车","state":2},
				{"data":"2019-10-15","name":"优惠券17","price":"35元洗车","state":2},
				{"data":"2019-10-15","name":"优惠券18","price":"45元洗车","state":2},
				{"data":"2019-10-15","name":"优惠券19","price":"55元洗车","state":2},
				{"data":"2019-10-15","name":"优惠券20","price":"5元洗车","state":0},
				{"data":"2019-10-15","name":"优惠券6","price":"5元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券7","price":"5元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券8","price":"5元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券9","price":"5元洗车","state":1},
				{"data":"2019-10-15","name":"优惠券10","price":"5元洗车","state":1}],
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
			detail(e) {
				uni.navigateTo({
					url: '../extend-view/newsDetail/newsDetail'
				})
			}
		}
	}
</script>

<style>
	/*tabbar start*/
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.tab-bar-item {
		padding: 0;
		height: 100upx;
		min-width: 197upx;
		line-height: 100upx;
		margin: 0 28upx;
		display: inline-block;
		text-align: center;
		box-sizing: border-box;
	}
</style>
