<template name="components">
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<cu-custom bgColor="bg-white" :isCustom="true">
			<block slot="content">
				<view class="cu-bar search bg-white">
					<view v-if="false" class="cu-avatar round"></view>
					<view class="search-form round" style="width:480upx">
						<text class="cuIcon-search"></text>
						<input @confirm="searchBykeywords" :adjust-position="false" type="text" placeholder="输入搜索关键词" confirm-type="search"></input>
					</view>
					<view v-if="false" class="action">
						<text>贵阳</text>
						<text class="cuIcon-triangledownfill"></text>
					</view>
				</view>
			</block>
		</cu-custom>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS||H5 -->
		<cu-custom bgColor="bg-white">
			<block slot="content">
				<view class="cu-bar search align-center flex justify-center" style="height: 100%;">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input @confirm="searchBykeywords" :adjust-position="false" type="text" placeholder="输入搜索关键词" confirm-type="search"></input>
					</view>
				</view>
			</block>
		</cu-custom>
		<!-- #endif -->
		<view class="tui-header-screen" :style="[{top:CustomBar + 'px'}]" >
			<view class="tui-screen-top solid-bottom">
				<view class="tui-top-item tui-icon-ml " :class="[tabIndex==1?'tui-active tui-bold':'']" data-index="1" @tap="screen">
					<view class="text-lg"><text class="text-df">{{selectedName[0]}}</text><text :class="selectH1>0?'cuIcon-triangleupfill':'cuIcon-triangledownfill'"></text></view>
				</view>
				<view class="tui-top-item tui-icon-ml" :class="[tabIndex==2?'tui-active tui-bold':'']" data-index="2" @tap="screen">
					<view class="text-lg"><text class="text-df">{{selectedName[1]}}</text><text :class="selectH2>0?'cuIcon-triangleupfill':'cuIcon-triangledownfill'"></text></view>
				</view>
				<view class="tui-top-item tui-icon-ml" :class="[tabIndex==3?'tui-active tui-bold':'']" data-index="3" @tap="screen">
					<view class="text-lg"><text class="text-df">{{selectedName[2]}}</text><text :class="selectH3>0?'cuIcon-triangleupfill':'cuIcon-triangledownfill'"></text></view>
				</view>
				<!--下拉选择列表 综合-->
				<view class="tui-dropdownlist" :class="[selectH1>0?'tui-dropdownlist-show':'']">
					<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in dropdownList1"
					 :key="index" @tap="dropdownItem2" :data-index="index" :data-name="item.name" :data-value="item.value">
						<view class="margin-tb-sm">
							<text class="text-theme">{{item.name}}</text>
						</view>
						<text class="cuIcon-check" v-if="item.selected"></text>
					</view>
				</view>
				<view class="tui-dropdownlist" :class="[selectH2>0?'tui-dropdownlist-show':'']">
					<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in dropdownList2"
					 :key="index" @tap="dropdownItem4" :data-index="index" :data-name="item.name" :data-value="item.value">
						<view class="margin-tb-sm">
							<text class="text-theme">{{item.name}}</text>
						</view>
						<text class="cuIcon-check" v-if="item.selected"></text>
					</view>
				</view>
				<view class="tui-dropdownlist" :class="[selectH3>0?'tui-dropdownlist-show':'']">
					<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in getTaskCategoryList"
					 :key="index" @tap="dropdownItem5" :data-index="index" :data-name="item.name" :data-value="item.id">
						<view class="margin-tb-sm">
							<text class="text-theme">{{item.name}}</text>
						</view>
						<text class="cuIcon-check" v-if="item.selected"></text>
					</view>
				</view>
				<view class="tui-dropdownlist-mask" :class="[selectH1>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
				<view class="tui-dropdownlist-mask" :class="[selectH2>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
				<view class="tui-dropdownlist-mask" :class="[selectH3>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
			</view>
		</view>
		<view style="margin-top:105upx;">
			<list-item  ref="listItem" :showkm="true" :mylist="getTaskList" @navigateTo="navigate"></list-item>
		</view>
		<load-tip :visible="isLoad"></load-tip>
	</view>
</template>

<script>
	import listItem from "@/colorui/components/listitem"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	var that;
	export default {
		components: {
			tuiTopDropdown,
			listItem
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
		data() {
			return {
				CustomBar: this.CustomBar,
				seller: false,
				isLoad: true,
				cardCur: 0,
				tabIndex: 1, //顶部筛选索引
				selectedName: ['报价中', '距离', '服务类型'],
				selectH1: 0,
				selectH2: 0,
				selectH3: 0,
				dropdownList1: [{
					value: 1,
					name: "报价中",
					selected: false
				}, {
					value: 2,
					name: "服务中",
					selected: false
				}, {
					value: 3,
					name: "服务完成",
					selected: false
				}],
				dropdownList2: [{
					value: 0,
					name: "距离",
					selected: false
				}, {
					value: 1,
					name: "距离最近",
					selected: false
				}, {
					value: 2,
					name: "距离最远",
					selected: false
				}],
				getTaskCategoryList: [],
				getTaskList: [],
				form: {
					latitude: 0, //纬度
					longitude: 0, //经度
					keywords: '', //搜索关键词
					sort_1: 0, //综合排序：0默认1人气最高2最新上架
					sort_2: 0, //距离排序：0默认 1距离最近 2距离最远
					sort_3: 0, //类型筛选：0默认 ,分类对应的id
					page: 1,
					size: 10
				}
			};
		},
		onPullDownRefresh() {
			this.isOpenRefresh(true)
		},
		methods: {
			searchBykeywords(event) {
				this.form.keywords = event.detail.value;
				this.isOpenRefresh(true)
			},
			checked(item, child) {
				let items = item;
				console.log(item)
				for (var i = 0; i < items.length; i++) {
					if (child == i) {
						items[i].selected = true;
					} else {
						items[i].selected = false;
					}
				}
			},
			px(num) {
				return uni.upx2px(num) + "px"
			},
			showDropdownList: function() {
				if (this.tabIndex == 1) {
					this.selectH1 = 400;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 2) {
					this.selectH1 = 0;
					this.selectH2 = 400;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 3) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 300;
				}
			},
			hideDropdownList: function() {
				if (this.tabIndex == 1) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 2) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 3) {
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
			},
			dropdownItem2: function(e) {
				// console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.selectedName[0] = data.name
				for (let i = 0; i < this.dropdownList1.length; i++) {
					this.dropdownList1[i].selected = false;
				}
				this.dropdownList1[data.index].selected = true;
				this.form.sort_1 = data.value
				this.selectH1 = 0
				this.isOpenRefresh(true);
			},
			dropdownItem4: function(e) {
				// console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.selectedName[1] = data.name
				for (let i = 0; i < this.dropdownList2.length; i++) {
					this.dropdownList2[i].selected = false;
				}
				this.dropdownList2[data.index].selected = true;
				this.form.sort_2 = data.value
				this.selectH2 = 0
				this.isOpenRefresh(true);
			},
			dropdownItem5: function(e) {
				// console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.selectedName[2] = data.name
				for (let i = 0; i < this.getTaskCategoryList.length; i++) {
					this.getTaskCategoryList[i].selected = false;
				}
				this.getTaskCategoryList[data.index].selected = true;
				this.form.sort_3 = data.value
				this.selectH3 = 0
				this.isOpenRefresh(true);
			},
			screen: function(e) {
				let index = e.currentTarget.dataset.index;
				// console.log(index)
				this.tabIndex = index;
				if (index == 1) {
					if (this.selectH1 == 0) {
						this.showDropdownList();
					} else {
						this.hideDropdownList();
					}
				}
				if (index == 2) {
					if (this.selectH2 == 0) {
						this.showDropdownList();
					} else {
						this.hideDropdownList();
					}
				}
				if (index == 3) {
					if (this.selectH3 == 0) {
						this.showDropdownList();
					} else {
						this.hideDropdownList();
					}
				}
			},
			isOpenRefresh(isSupport) {
				this.isLoad = true;
				if (isSupport) {
					this.getTaskList = [];
					this.form.page = 1;
				}
				this.form.longitude = this.long
				this.form.latitude = this.lat
				let data = {
					keywords: this.form.keywords,
					latitude: this.form.latitude,
					longitude: this.form.longitude,
					sort_1: this.form.sort_1,
					sort_2: this.form.sort_2,
					sort_3: this.form.sort_3,
					page: this.form.page,
					size: this.form.size
				}
				this.$api.postWithData(this.api.getTaskList, data,
					function callbacks(res) {
						if(isSupport){
							uni.stopPullDownRefresh()
						}
						if (res.data.length > 0) {
							that.isLoad = true;
						} else {
							that.isLoad = false;
						}
						for (let i = 0; i < res.data.length; i++) {
							that.getTaskList.push(res.data[i]);
						}
						for (var i = 0; i < that.getTaskList.length; i++) {
							that.getTaskList[i].image = that.getTaskList[i].image == '' ? '../../static/logo.jpg' : that.getTaskList[i].image
								.split(",")[0]
						}
						if (that.getTaskList.length <= 5) {
							that.isLoad = false;
						}
					})
				// const pages = getCurrentPages();
				// const page = pages[pages.length - 1];
				// const currentWebview = page.$getAppWebview()
				// currentWebview.setStyle({
				// 	pullToRefresh: {
				// 		support: isSupport,
				// 		style: plus.os.name === 'Android' ? 'circle' : 'default'
				// 	}
				// });
			},
			ScrollB() {
				this.form.page++;
				this.isOpenRefresh(false);
			},
			navigate(item){
				this.$api.post(this.api.getCarNew, function callbacks(res) {
					if (res == -1) {
						that.$eventBus.$emit('register');
						uni.switchTab({url:'../home/home'})
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
									console.log(item.uid);
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
			navigateTo(page, item) {
				this.$api.post(this.api.getCarNew, function callbacks(res) {
					if (res == -1) {
						that.$eventBus.$emit('register');
						uni.switchTab({url:'../home/home'})
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
									console.log(item.uid);
									uni.navigateTo({
										url: page
									})
								} else {
									that.$api.msg("仅限发布者和商家可查看详情")
								}
							})
					}
				})
			}
		},
		onReachBottom() {
			this.form.page++;
			this.isOpenRefresh(false);
		},
		mounted() {
			that = this;
			// uni.pageScrollTo({
			// 	scrollTop: 0
			// })
			this.dropdownList1[0].selected = true;
			this.dropdownList2[0].selected = true;
			this.$api.post(this.api.getTaskCategoryList,
				function callbacks(res) {
					that.getTaskCategoryList = res.data;
					for (let i = 0; i < that.getTaskCategoryList.length; i++) {
						that.$set(that.getTaskCategoryList[i], 'selected', false)
					}
				})
			this.isOpenRefresh(true);
		}
	}
</script>

<style>
	.page {
		/* height: 100vh; */
	}

	.container {
		/* padding-bottom: env(safe-area-inset-bottom); */
	}

	/* 隐藏scroll-view滚动条*/

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.tui-header-box {
		width: 100%;
		background: #fff;
		position: fixed;
		z-index: 99998;
		left: 0;
		top: 0;
	}

	.tui-header {
		display: flex;
		align-items: flex-start;
	}

	/*screen*/

	.tui-header-screen {
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		position: fixed;
		z-index: 1000;
	}

	.tui-screen-top,
	.tui-screen-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #333;
	}

	.tui-screen-top {
		height: 88upx;
		position: relative;
		background: #fff;
	}

	.tui-top-item {
		height: 88upx;
		line-height: 88upx;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-bottom-text {
		line-height: 24upx;
		max-width: 82%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-active {
		color: #182E6C;
	}

	.tui-icon-ml .tui-icon-class {
		margin-left: 6upx;
	}

	.tui-icon-middle .tui-icon-class {
		vertical-align: middle;
	}

	.tui-middle {
		vertical-align: middle;
	}

	/*顶部下拉选择 综合*/

	.tui-dropdownlist {
		width: 100%;
		position: absolute;
		background: #fff;
		overflow: hidden;
		box-sizing: border-box;
		padding-top: 10upx;
		padding-bottom: 26upx;
		left: 0;
		top: 88upx;
		visibility: hidden;
		z-index: 999;
	}

	.tui-dropdownlist-show {
		visibility: visible;

	}

	.tui-dropdownlist-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: -1;
		/* transition: all 0.2s ease-in-out; */
		opacity: 0;
		visibility: hidden;
	}

	.tui-mask-show {
		opacity: 1;
		visibility: visible;
	}

	.tui-dropdownlist-item {
		color: #333;
		font-size: 28upx;
		padding: 0 40upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
