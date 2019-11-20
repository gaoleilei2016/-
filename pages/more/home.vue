<template name="components">
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<cu-custom bgColor="bg-white" :isCustom="true">
			<block slot="content">
				<view class="cu-bar search bg-white">
					<view class="search-form round" style="width:480upx;">
						<text class="cuIcon-search"></text>
						<input @confirm="searchBykeywords" :adjust-position="false" type="text" placeholder="请输入要搜索的商家名称" confirm-type="search"></input>
					</view>
				</view>
			</block>
		</cu-custom>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS||H5 -->
		<cu-custom bgColor="bg-white">
			<block slot="content">
				<view class="cu-bar search" style="height: 100%;">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input @confirm="searchBykeywords" :adjust-position="false" type="text" placeholder="请输入要搜索的商家名称" confirm-type="search"></input></input>
					</view>
				</view>
			</block>
		</cu-custom>
		<!-- #endif -->
		<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image lazy-load="true" :src="item.image" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<pd-list :list="listData" :index="0"></pd-list>
		<load-tip :visible="isLoad"></load-tip>
	</view>
</template>

<script>
	var that;
	import PdList from "@/components/other/pd-list.vue";
	import mockData from "@/utils/pdlist.js"; // 模拟数据
	export default {
		name: "components",
		components: {
			PdList
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				loading: true,
				swiperList: [],
				isLoad: true,
				cardCur: 0,
				tabIndex: 1, //顶部筛选索引
				form: {
					page: 1,
					size: 10
				},
				listData: []
			};
		},
		onPullDownRefresh() {
			this.isOpenRefresh(true);
		},
		methods: {
			searchBykeywords(event) {
				this.form.keywords = event.detail.value;
				this.isOpenRefresh(true)
			},
			isOpenRefresh(isSupport) {
				this.isLoad = true;
				if (isSupport) {
					this.listData = [];
					this.form.page = 1;
				}
				this.$api.postWithData(this.api.goodsListCEA, {
						page: this.form.page,
						size: this.form.size,
						cea_id: 1
					},
					function callbacks(res) {
						console.log(res);
						if(isSupport){
							uni.stopPullDownRefresh()
						}
						if(res.data==null){
							that.isLoad = false;
							res.data=[]
							return;
						}
						if (res.data.length > 0) {
							that.isLoad = true;
						} else {
							that.isLoad = false;
						}
						for (let i = 0; i < res.data.length; i++) {
							that.listData.push(res.data[i]);
						}
						if (that.listData.length <= 4) {
							that.isLoad = false;
						}
					})
			},
			ScrollB() {
				this.form.page++;
				this.isOpenRefresh(false);
			},
			navigateTo(page) {
				uni.navigateTo({
					url: page
				})
			},
			onReachBottom() {
				this.form.page++;
				this.isOpenRefresh(false);
			},

		},
		mounted() {
			that = this;
			this.$api.postWithData(this.api.adlist, {
					type: 3
				},
				function callbacks(res) {
					console.log(res);
					that.swiperList = res.data;
				})
			that.isOpenRefresh(true);
			uni.setNavigationBarColor({
				frontColor: '#000000',
				backgroundColor: '#ff0000'
			})
		},
		onShow() {},
		onHide() {}
	}
</script>

<style>

</style>
