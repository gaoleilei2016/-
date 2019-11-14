<template name="basics">
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<cu-custom bgColor="bg-white" :isCustom="true">
			<block slot="content">
				<view class="cu-bar search bg-white">
					<view v-if="false" class="cu-avatar round" style="background-image:url(http://mistra.beijing-hyundai.com.cn/pc/images/waiguan0.jpg)"></view>
					<view class="action text-black" style="width:110upx;">
						<text class="text-cut">{{city}}</text>
					</view>
					<view class="search-form round" style="margin:0;">
						<text class="cuIcon-search"></text>
						<input @tap="cutTab" disabled="false" :adjust-position="false" type="text" placeholder="输入搜索关键词" confirm-type="search"></input>
					</view>
				</view>
			</block>
		</cu-custom>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS||H5 -->
		<cu-custom bgColor="bg-white">
			<block slot="content">
				<view class="cu-bar search">
					<view class="action">
						<text>{{city}}</text>
					</view>
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input @tap="cutTab" disabled="false" :adjust-position="false" type="text" placeholder="输入搜索关键词" confirm-type="search"></input>
					</view>
				</view>
			</block>
		</cu-custom>
		<!-- #endif -->
		<swiper class="card-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<!-- @tap="navigateTo('../../pages/more/shop?url='+item.url)" -->
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image v-once lazy-load="true" :src="item.image" mode="aspectFill"></image>
					<!-- <video :src="item.image" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"></video> -->
				</view>
			</swiper-item>
		</swiper>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="text-black text-bold">挂单推荐</text>
			</view>
			<view @tap="more" class="action">
				<text>更多<text class="cuIcon-right"></text></text>
			</view>
		</view>
		<list-item ref="listItem" :showkm="false" :mylist="getTaskList" @navigateTo="navigate"></list-item>
		<load-tip :visible="isLoad"></load-tip>
		<!-- <view class="cu-load margin-bottom" :class="isLoad?'loading':'over'"></view> -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="cu-modal" :class="modalName?'show':''">
			<view class="cu-dialog bg-white padding" style="width: 600upx;">
				<view class="margin">
					<image src="http://txcos.kelinteng.com/uploads/20191014/logo-img.png" class="cu-avatar xxl round" mode="aspectFill"></image>
					<view class="text-black text-lg text-bold margin-top">贵州柯林腾网络科技有限公司</view>
					<view class="text-black margin-top-sm padding-lr">您暂未授权创世车宝小程序获取您的信息,为了能正常使用小程序的功能,请开始「安全授权」并于稍后的弹框中点击「允许」</view>
					<button lang="zh_CN" open-type="getUserInfo" @getuserinfo="getUserInfo"  class="cu-btn block bg-green margin-top" >安全授权</button>
					<button @tap="modalName=false" style="background: #EEEEEE;" class="cu-btn block margin-top">残忍取消</button>
				</view>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import listItem from "@/colorui/components/listitem"
	var that;
	export default {
		components:{
			listItem
		},
		data() {
			return {
				modalName:false,
				myList: [],
				isLoad: true,
				cardCur: 0,
				swiperList: [],
				getTaskList: [],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				form: {
					sort_1: 0,
					sort_2: 0,
					page: 1,
					size: 5
				},
				city: '定位中',
				latitude: '',
				longitude: '',
				seller: false
			};
		},
		filters: {
			km: function(val) {
				if (val != null) {
					return (Number(val) / 1000).toFixed(2) + 'km';
				} else {
					return "";
				}
			}
		},
		onPullDownRefresh() {
			this.getLocation();
		},
		methods: {
			getUserInfo(res){
				console.log(res)
				uni.login({
					provider:'weixin',
					success(login) {
						if(res.detail.iv==undefined){
							uni.showToast({icon:"none",mask:true,title:"授权失败！"})
							that.modalName=true;
							return;
						}
						let data={iv:res.detail.iv,code:login.code,encryptedData:res.detail.encryptedData}
						that.$api.postWithData(that.api.register,data,
							function callbacks(res){
							if(res.code==0){
								that.modalName=true;
								uni.showToast({icon:"none",mask:true,title:"注册失败"})
							}else{
								that.modalName=false;
								uni.setStorageSync("unionid",res.data.member.unionid)
								uni.setStorageSync("openid",res.data.member.openid)
								uni.setStorageSync("seller_id",res.data.seller_manager.seller_id)
								uni.setStorageSync("uid",res.data.member.uid)
								uni.setStorageSync("nickname",res.data.member.nickname)
								uni.setStorageSync("headimg",res.data.member.headimg)
								uni.setStorageSync("isLogin",true)
								// that.$eventBus.$emit('initData');
							}
						})
					}
				})
			},
			sendRequest: function() {
				this.$http.get(this.api.getAreaData).then((res) => {
					// console.log('request success', res)
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true
					});
				}).catch((err) => {
					console.log('request fail', err);
				})
			},
			async sendRequest1() {
				let res = await this.$http.post(this.api.getAreaData);
				// console.log(res)
				uni.showToast({
					title: '请求成功',
					icon: 'success',
					mask: true
				});
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			cutTab() {
				// this.$eventBus.$emit('cutTab', 'market');
				uni.switchTab({url:'../market/home'})
			},
			more() {
				this.$api.post(this.api.getCarNew, function callbacks(res) {
					if (res == -1) {
						that.modalName=true;
					} else {
						uni.navigateTo({
							url: '/pages/market/more'
						})
					}
				})
			},
			navigate(item) {
				this.$api.post(this.api.getCarNew, function callbacks(res) {
					if (res == -1) {
						that.modalName=true;
					} else {
						let uid = uni.getStorageSync("uid");
						that.$api.post(that.api.isSeller,
							function callbacks(res) {
								if (res.code == 2) {
									that.seller = true
								} else {
									that.seller = false
								}
								if (item.uid == uid || that.seller) {
									// console.log(item.uid);
									uni.navigateTo({
										url: '../home/shopselect?task_id='+item.id
									})
								} else {
									that.$api.msg("仅限发布者和商家可查看详情")
								}
							})
					}
				})
			},
			getLocation() {
				// uni.showLoading({mask:true,title:"加载中..."})
				this.isLoad = true;
				console.log(this.long);
				console.log(this.lat);
				let data = {
					sort_1: 0,
					sort_2: 0,
					page: 1,
					size: 5,
					longitude: this.long,
					latitude: this.lat
				};
				this.$api.postWithData(this.api.getTaskList, data,
					function callbacks(res) {
						// uni.hideLoading();
						that.getTaskList = res.data;
						for (var i = 0; i < that.getTaskList.length; i++) {
							that.getTaskList[i].image = that.getTaskList[i].image == '' ? '../../static/logo.jpg' : that.getTaskList[i].image
								.split(",")[0]
						}
						if (res.data.length > 0) {
							that.isLoad = true;
						} else {
							that.isLoad = false;
						}
						uni.stopPullDownRefresh()
					})
				if (this.lat != 0) {
					this.$api.get(
						'https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location=' +
						this.lat + ',' + this.long,
						function callbacks(res) {
							that.city = res.result.addressComponent.city;
						})
				}
			}
		},
		onReachBottom() {
			this.isLoad = false;
		},
		onTabItemTap(e) {
			console.log(e);
		},
		mounted() {
			console.log(this.$api.isLogin);
			that = this;
			this.$api.post(this.api.adlist,
				function callbacks(res) {
					console.log(res);
					that.swiperList = res.data;
				})
			this.getLocation();
			this.$eventBus.$on('initData', function(data1) {
				that.getLocation();
			});
			this.$eventBus.$on('register', function(data1) {
				that.modalName=true;
			});
			uni.setNavigationBarColor({frontColor: '#000000',backgroundColor: '#ff0000'})
		},
		onLoad() {
		},
	}
</script>

<style>
	.logo-copy {
		position: relative;
		left: -200upx;
	}
</style>
