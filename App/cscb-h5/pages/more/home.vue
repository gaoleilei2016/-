<template name="components">
	<view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm3"></mpvue-city-picker>
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
		<view :class="isfixed==false?'tui-header-screen':'tui-header-screen1'" :style="[{top:isfixed==false?'0px':CustomBar + 'px'}]">
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
				<view v-if="false" class="tui-dropdownlist" :class="[selectH1>0?'tui-dropdownlist-show':'']">
					<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in dropdownList1"
					 :key="index" @tap="dropdownItem2" :data-index="index" :data-name="item.name" :data-value="item.value">
						<view class="margin-tb-sm">
							<text class="text-theme">{{item.name}}</text>
						</view>
						<text class="cuIcon-check" v-if="item.selected"></text>
					</view>
				</view>
				<view class="tui-dropdownlist solid-bottom" :class="[selectH2>0?'tui-dropdownlist-show':'']">
					<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in dropdownList2"
					 :key="index" @tap="dropdownItem4" :data-index="index" :data-name="item.name" :data-value="item.value">
						<view class="margin-tb-sm">
							<text class="text-theme">{{item.name}}</text>
						</view>
						<text class="cuIcon-check" v-if="item.selected"></text>
					</view>
				</view>
				<view class="tui-dropdownlist solid-bottom" :class="[selectH3>0?'tui-dropdownlist-show':'']">
					<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in gettypelist"
					 :key="index" @tap="dropdownItem5" :data-index="index" :data-name="item.name" :data-value="item.id">
						<view class="margin-tb-sm">
							<text class="text-theme">{{item.name}}</text>
						</view>
						<text class="cuIcon-check" v-if="item.selected"></text>
					</view>
					<view class="flex justify-center" @tap="getCondition">确定</view>
				</view>
				<view class="tui-dropdownlist-mask" :class="[selectH1>0?'':'']" @tap.stop="hideDropdownList"></view>
				<view class="tui-dropdownlist-mask" :class="[selectH2>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
				<view class="tui-dropdownlist-mask" :class="[selectH3>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
			</view>
		</view>

		<view class="cu-card article no-card margin-bottom-sm" v-if="getSellerList.length>0" v-for="(item,index) in getSellerList"
		 :key="index">
			<view class="cu-item shadow" style="border-radius: 0upx;">
				<view @tap="navigateTo('../more/nearby_merchants?id='+item.id)" class="content margin-top">
					<image lazy-load="true" style="width: 180upx;" :src="item.brand_logo==''||item.brand_logo==null?'http://cscbnew.kelinteng.com/uploads/20191011/b6374b5b92af069b58b13e0e0bf98090.png':item.brand_logo"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-df flex justify-between align-center">
							<text style="width: 75%;">{{item.title}}</text><text class="text-grays text-sm">{{item.distance==null?0:item.distance|km}}</text>
						</view>
						<view class="text-sm text-grays"><text>人气:{{item.view|views}}</text><text class="margin-left">评论:{{item.commit_count|views}}</text></view>
						<view @tap.stop="openLocation(item)" class="text-sm text-grays"><text class="cuIcon-location"></text><text>{{item.address==null?'':item.address}}</text></view>
					</view>
				</view>
			</view>
		</view>
		<load-tip :visible="isLoad"></load-tip>
	</view>
</template>

<script>
	import cityData from '../../utils/city.data.js';
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	var that;
	export default {
		name: "components",
		components: {
			tuiTopDropdown,
			mpvueCityPicker
		},
		filters: {
			views: function(val) {
				if (Number(val) > 999) {
					return '999+';
				} else {
					return val.toFixed(0);
				}
			},
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
				loading: true,
				areaList: {},
				swiperList: [],
				isLoad: true,
				cardCur: 0,
				tabIndex: 1, //顶部筛选索引
				selectedName: ['区域', '距离', '服务类型'],
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
					value: 1,
					name: "距离最近",
					selected: false
				}, {
					value: 2,
					name: "距离最远",
					selected: false
				}],
				gettypelist: [],
				getSellerList: [],
				district_code: '',
				form: {
					latitude: 0, //纬度
					longitude: 0, //经度
					keywords: '', //搜索关键词
					page: 1,
					size: 5,
					condition1: '', //区域筛选 格式如：”贵州省/贵阳市/观山湖区”
					condition2: '1', //距离筛选，1 距离最近 2 距离最远
					condition3: [] //服务类型筛选，格式如：[1,2,3]
				},
				isfixed: false,
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				addressResult: {
					label: "请选择",
					value: [0, 0, 0],
					cityCode: '110101'
				},
			};
		},
		onPullDownRefresh() {
			this.isOpenRefresh(true);
		},
		methods: {
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			hideMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.pickerCancel()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm3(e) {
				console.log(e);
				let labels = e.label.split("-")
				this.form.condition1 = labels[0] + "/" + labels[1] + "/" + labels[2]
				console.log(this.form.condition1)
				this.hideDropdownList();
				this.isOpenRefresh(true);
			},
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
			showDropdownList: function() {
				if (this.tabIndex == 1) {
					this.showMulLinkageThreePicker();
					this.selectH1 = 400;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 2) {
					this.hideMulLinkageThreePicker()
					this.selectH1 = 0;
					this.selectH2 = 400;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 3) {
					this.hideMulLinkageThreePicker()
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 300;
				}
			},
			hideDropdownList: function() {
				if (this.tabIndex == 1) {
					this.hideMulLinkageThreePicker()
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 2) {
					this.hideMulLinkageThreePicker()
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
				if (this.tabIndex == 3) {
					this.hideMulLinkageThreePicker()
					this.selectH1 = 0;
					this.selectH2 = 0;
					this.selectH3 = 0;
				}
			},
			dropdownItem2: function(e) {
				this.selectH1 = 0
				this.isOpenRefresh(true);
			},
			dropdownItem4: function(e) {
				console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.selectedName[1] = data.name
				for (let i = 0; i < this.dropdownList2.length; i++) {
					this.dropdownList2[i].selected = false;
				}
				this.dropdownList2[data.index].selected = true;
				this.form.condition2 = data.value
				this.selectH2 = 0
				this.isOpenRefresh(true);
			},
			dropdownItem5: function(e) {
				console.log(e.currentTarget.dataset)
				let data = e.currentTarget.dataset;
				this.gettypelist[data.index].selected = !this.gettypelist[data.index].selected;
			},
			getCondition() {
				this.selectH3 = 0
				for (let i = 0; i < this.gettypelist.length; i++) {
					if (this.gettypelist[i].selected) {
						this.form.condition3.push(this.gettypelist[i].id)
					}
				}
				// console.log(this.form.condition3);
				this.isOpenRefresh(true);
			},
			screen: function(e) {
				let index = e.currentTarget.dataset.index;
				console.log(index)
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
					this.getSellerList = [];
					this.form.page = 1;
				}
				this.form.latitude=this.lat
				this.form.longitude=this.long
				let data = {
					keywords: this.form.keywords,
					latitude: this.form.latitude,
					longitude: this.form.longitude,
					condition1: this.form.condition1,
					condition2: this.form.condition2,
					condition3: this.form.condition3,
					page: this.form.page,
					size: this.form.size
				};
				this.$api.postWithData(this.api.getSellerList, data,
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
							that.getSellerList.push(res.data[i]);
						}
						if (that.getSellerList.length <= 4) {
							that.isLoad = false;
						}
						that.form.condition3 = [];
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
			openLocation(item) {
				uni.openLocation({
					latitude: Number(item.latitude),
					longitude: Number(item.longitude),
					name: item.title,
					address: item.address,
				})
			},
			px(num) {
				return uni.upx2px(num)
			},
			getY(e) {
				// console.log(e.detail.scrollTop);
				console.log(this.px(375));
				if (e.detail.scrollTop > this.px(375)) {
					this.isfixed = true;
				} else {
					this.isfixed = false
				}
			},
			ScrollB() {
				this.form.page++;
				this.isOpenRefresh(false);
			},
			navigateTo(page) {
				this.$api.post(this.api.getCarNew, function callbacks(res) {
					if (res == -1) {
						that.$eventBus.$emit('register');
						uni.switchTab({url:'../home/home'})
					} else {
						uni.navigateTo({
							url: page
						})
					}
				})
			}
		},
		onReachBottom() {
			this.form.page++;
			this.isOpenRefresh(false);
		},
		onPageScroll(e) {
			if (e.scrollTop > this.px(375)) {
				this.isfixed = true;
			} else {
				this.isfixed = false
			}
		},
		mounted() {
			that = this;
			this.dropdownList1[0].selected = true;
			this.dropdownList2[0].selected = true;
			this.$api.postWithData(this.api.adlist, {
					type: 3
				},
				function callbacks(res) {
					console.log(res);
					that.swiperList = res.data;
				})
			// this.$api.get(this.api.getAreaData, function callbacks(res) {
			// 	that.loading = false
			// 	that.areaList = res.data
			// })
			this.$api.post(this.api.gettypelist,
				function callbacks(res) {
					that.gettypelist = res.data;
					for (let i = 0; i < that.gettypelist.length; i++) {
						that.$set(that.gettypelist[i], 'selected', false)
					}
				})
			// uni.getLocation({altitude: true,geocode: true,
			// 	fail: () => {},
			// 	success: (res) => {
			// 		this.form.longitude = res.longitude
			// 		this.form.latitude = res.latitude
			// console.log(res)
			that.isOpenRefresh(true);
			if (this.lat != 0) {
				this.$api.get(
					'https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location=' +
					this.lat + ',' + this.long,
					function callbacks(res) {
						let province = res.result.addressComponent.province,
							city = res.result.addressComponent.city,
							district = res.result.addressComponent.district;
						that.form.condition1 = province + "/" + city + "/" + district;
						that.district_code = res.result.addressComponent.adcode;
					})
			}
			// uni.request({
			// 	header:{"Content-Type": "application/text"},
			// 	//'http://apis.map.qq.com/ws/geocoder/v1/?location='+latitude+','+longitude+'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35'
			// 	url:'https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location=' +res.latitude + ',' + res.longitude,
			// 	success(res) {
			// 		// console.log(res)	   
			// 		if(res.statusCode===200){
			// 			let province=res.data.result.addressComponent.province;
			// 			let city=res.data.result.addressComponent.city;
			// 			let district=res.data.result.addressComponent.district;
			// 			that.form.condition1=province+"/"+city+"/"+district;
			// 			that.district_code = res.data.result.addressComponent.adcode;
			// 			// console.log(that.district_code);
			// 			console.log("获取中文街道地理位置成功")
			// 		}else{
			// 			console.log("获取信息失败，请重试！")
			// 		}
			// 	 }
			// });
			// 	}
			// })
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
		position: relative;
		z-index: 1000;
	}

	.tui-header-screen1 {
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
		background: rgba(0, 0, 0, 0);
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
