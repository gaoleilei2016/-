<template>
	<view>
		<view style="position: fixed;top: 0; left: 0;right: 0;z-index: 1001;" class=" top-modal" :class="modalName=='topModal'?'show':''">
			<view style="background-color: rgba(0, 0, 0, 0.5);border-radius:0;width: 100%;" class="cu-dialog">
				<view v-if="isSeller==1" class="padding-tb-xs text-white flex justify-between">
					<view class="flex justify-between w100 align-center" v-if="seller">
						<text class="margin-sm text-df" @tap="navigateTo('quotedprice?task_id='+task_id+'&type=0')">非会员只能查看最近三家报价哦~</text>
						<view class="margin-sm ">
							<text class="text-lg flex align-center justify-center" @tap="navigateTo('quotedprice?task_id='+task_id+'&type=0')"
							 v-if="bidding">
								<text class="text-df">修改报价</text>
								<text class="margin-left-sm  cuIcon-roundrightfill"></text>
							</text>
							<text class="text-lg flex align-center justify-center" @tap="navigateTo('quotedprice?task_id='+task_id+'&type=1')"
							 v-else>
								<text class="text-df">立即报价</text>
								<text class="margin-left-sm cuIcon-roundrightfill"></text>
							</text>
						</view>
					</view>
					<view class="flex justify-between w100 align-center" v-else>
						<text class="margin-sm text-df">您还未绑定商家账号，报价请先绑定~</text>
						<view class="margin-sm" @tap="showModalMP()">
							<text class="text-lg flex align-center justify-center">
								<text class="text-df">立即绑定</text>
								<text class="margin-left-sm cuIcon-roundrightfill"></text>
							</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-modal bottom-modal" style="text-align:left" :class="baojiaPop?'show':''">
			<scroll-view scroll-y class="cu-dialog" style="height: 60%;">
				<view class="padding text-center flex justify-between align-center self-center text-xl">
					<text></text>
					<text class="text-df text-bold">报价明细</text>
					<text @click="baojiaPop=false" class="cuIcon-roundclose"></text>
				</view>
				<view class="solid-bottom"></view>
				<view class="margin">
					<view>商家:{{baojiao.seller_title}}</view>
					<view class="margin-top-sm">报价项目:</view>
					<view v-if="baojiao.items.length>0" style="height:380upx;overflow: scroll;">
						<view v-show="true" class="margin-tb m-l margin solid padding-sm line-height" v-if="baojiao.items.length>0" v-for="(itemx,indexs) in baojiao.items"
						 :key="indexs">
							<view v-if="orderInfo.obj_type == 257">保险名称:{{itemx.name}}</view>
							<view v-else>项目名称:{{itemx.name}}</view>
							<view v-if="orderInfo.obj_type != 257">维修工时:{{itemx.wxgs}}</view>
							<view v-if="orderInfo.obj_type == 257">保险价格:{{itemx.pjjg}}</view>
							<view v-else>材料价格:{{itemx.pjjg}}</view>
							<view v-if="orderInfo.obj_type == 257">保险公司:{{itemx.pjpp}}</view>
							<view v-else>材料品牌:{{itemx.pjpp}}</view>
							<view v-if="orderInfo.obj_type != 257">维修时间:{{itemx.wxsj}}</view>
							<view v-if="orderInfo.obj_type == 257">保险有效期:{{itemx.zbsj}}</view>
							<view v-else>质保时间:{{itemx.zbsj}}</view>
						</view>
					</view>
					<view v-if="baojiao.items.length==0" class="margin-tb margin-left text-center margin text-gray">暂无报价信息</view>
					<view class="margin-top-sm">报价合计</view>
					<view class="margin-top-sm margin-left text-red">{{baojiao.price}}</view>
					<view class="margin-top-sm">维修建议</view>
					<view class="margin-top-sm margin-left">{{baojiao.desc}}</view>
					<view class="margin-top-sm" v-if="orderInfo.obj_type == 257">
						<swiper style="height: 300upx;" class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true"
						 :circular="true" :autoplay="true" interval="5000" duration="500">
							<swiper-item @tap="previewImage(files,index)" v-for="(item,index) in files" :key="index">
								<image :src="item" mode="aspectFill"></image>
								<!-- <video :src="item" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
							</swiper-item>
						</swiper>
					</view>
				</view>
				<view class="boeonbtn" v-if="baojiao.items.length>0 && orderInfo.status == 1 && uid == orderInfo.uid" @click="submitorder(items)">
					<span>选定此报价(托管资金)</span>
				</view>
				<view class="boeonbtn" v-else>
					<span v-if="orderInfo.status == 0">当前挂单：待审核</span>
					<span v-else-if="orderInfo.status == 1">当前挂单：报价中</span>
					<span v-else-if="orderInfo.status == 2">当前挂单：服务中</span>
					<span v-else-if="orderInfo.status == 3">当前挂单：已完成</span>
					<span v-else-if="orderInfo.status == 4">当前挂单：已关闭</span>
					<span v-else-if="orderInfo.status == 5">当前挂单：平台关闭</span>
					<span v-else-if="orderInfo.status == 6">当前挂单：售后中</span>
				</view>
			</scroll-view>
		</view>
		<view>
			<swiper style="height: 700upx;" class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true"
			 :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item @tap="previewImage(images,index)" v-for="(item,index) in images" :key="index">
					<image :src="item" mode="aspectFill"></image>
					<!-- <video :src="item" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
				</swiper-item>
			</swiper>
		</view>
		<view class="padding-sm  bg-white">
			<view class="text-lg text-bold text-theme">{{orderInfo.title}}</view>
			<view class="margin-top-sm">下单时间：{{orderInfo.create_at}}</view>
			<view class="margin-tb-sm">订单单号：{{orderInfo.ordersn}}</view>
		</view>
		<scroll-view scroll-x scroll-with-animation class="tab-view" :scroll-left="scrollLeft">
			<view v-for="(item,index) in tabbar" :key="index" class="tab-bar-item" :class="[currentTab==index ? 'active' : '']"
			 :data-current="index" @tap.stop="swichNav">
				<text class="tab-bar-title">{{item}}</text>
			</view>
		</scroll-view>
		<swiper class="tab-content" :current="currentTab" duration="300" @change="switchTab" :style="{height:winHeight+'px'}">
			<swiper-item v-for="(item,index) in tabbar" :key="index">
				<scroll-view scroll-y class="scoll-y bg-white">
					<view v-if="currentTab==0" class="padding">
						<view class="text-df">基本信息</view>
						<!-- <view class="margin-left ">车型:{{orderInfo.carbrand}}<text v-if="orderInfo.carbrand!=null&&orderInfo.carbrand!=''">/</text>{{orderInfo.carmodel}}</view> -->
						<view class="margin-left ">服务类型:{{orderInfo.obj_type_name}}</view>
						<view class="margin-left">服务项目:
							<view class="flex justify-between flex-wrap margin-left">
								<text style="width: 50%;" v-for="(obj_type3_item,indexs) in orderInfo.obj_type3_name" :key="indexs">{{obj_type3_item.name}}</text>
							</view>
						</view>
						<view class="margin-top-sm text-df">描述说明</view>
						<view class="margin-left" v-if="orderInfo.content != '' && orderInfo.content != null" v-html="orderInfo.content"></view>
						<view class="margin-left" v-else>暂无描述说明</view>

						<view class="margin-top-sm text-df">其他</view>
						<view @tap="navigateToMap(1,orderInfo)" class="margin-left" v-if="orderInfo.address != '' && orderInfo.address != null">
							地址:<text v-text="orderInfo.address"></text><text class="navigatorTextColor">(导航)</text></view>
						<view class="margin-top-sm text-df">接车服务</view>
						<view class="margin-left">
							<view>状态:<text v-if="orderInfo.pickup_service==1">需要</text><text v-else>暂不需要</text></view>
							<view v-if="orderInfo.pickup_service==1">接车时间:<text>{{orderInfo.car_get_time}}</text></view>
							<view v-if="orderInfo.pickup_service==1" @tap="navigateToMap(2,orderInfo)">接车地点:<text>{{orderInfo.car_get_address}}</text><text
								 class="navigatorTextColor">(导航)</text></view>
							<view v-if="orderInfo.pickup_service==1">送车时间:<text>{{orderInfo.car_back_time}}</text></view>
							<view v-if="orderInfo.pickup_service==1" @tap="navigateToMap(3,orderInfo)">送车地点:<text>{{orderInfo.car_back_address}}</text><text
								 class="navigatorTextColor">(导航)</text></view>
						</view>
					</view>
					<block v-if="currentTab==1">
						<view v-if="bidshop.length>0" v-for="(item,index) in bidshop" :key="index">
							<view class="flex justify-between padding">
								<view class="flex flex-direction align-self-center margin-right">
									<image v-if="item.brand_logo != '' && item.brand_logo != null" :src="item.brand_logo" style="width:130upx;height: 130upx;" />
									<image v-else src="../../static/logo.jpg" style="width:130upx;height:130upx;" />
								</view>
								<view @click="entershop(item)" class="flex align-self-center flex-direction" style="line-height:45upx;width: 60%;">
									<text class="text-bold">{{item.seller_title}}</text>
									<text v-if="false">联系人</text>
									<text>联系方式 {{item.seller_phone}}</text>
									<text>报价时间 {{item.create_time.substr(0,10)}}</text>
								</view>
								<view class="flex flex-direction align-self-center text-red" style="width:23%;">
									<text v-if="(uid == orderInfo.uid || seller_id== item.seller_id) && (item.price !='' && item.price !=null)">￥{{item.price}}</text>
									<text v-else>￥****</text>
									<view v-if="uid == orderInfo.uid || seller_id== item.seller_id" @click="lookdetail(item)">查看报价
										<text class="cuIcon-right"></text>
									</view>
								</view>
							</view>
							<view style="width: 100%;height:0.1rem;background: #F4F4F4;"></view>
						</view>
						<view class="padding text-center" v-if="bidshop.length==0">
							<text>暂无报价商家</text>
						</view>
					</block>
					<block v-if="currentTab==2">
						<view class="margin-lr" v-if="orderprogress.length > 0">
							<ul class="time-verticals">
								<li><b></b><text></text>
									<a href="javascript:void(0)">
									</a>
								</li>
							</ul>
							<ul class="time-vertical" v-for="(vl,indexs) in orderprogress" :key="indexs">
								<li><b></b><text></text>
									<a href="javascript:void(0)">
										<view class="flex flex-direction bg-thame text-theme" style="width: 100%;padding:8px;">
											<view>{{vl.title}}</view>
											<view>{{vl.create_time}}</view>
										</view>
									</a>
								</li>
							</ul>
						</view>
						<view class="padding text-center" v-if="orderprogress.length == 0">
							<text>暂无进程</text>
						</view>
					</block>
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="cu-modal bg-modal" :class="modalMPShow==1?'show':''">
			<view class="cu-dialog ">
				<view class="cu-bar bg-white justify-end">
					<view class="content">关注公众号</view>
					<view class="action" @tap="showModalMP">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl modal-content" style="line-height: 50upx;">
					<image src="http://txcos.kelinteng.com/uploads/20191014/qrcode.png" mode="widthFix" style="width: 60vw;"></image>
					<view class="mc-tips">
						<view class="mct-title">怎么找到公众号?</view>
						<view class="mct-txt">
							1.截屏保存，打开微信扫一扫识别二维码并关注
						</view>
						<view class="mct-txt">
							2.微信搜索“创世车宝公众服务号”关注即可
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				modalName: 'topModal',
				imagePreview: false,
				totalprice: 0,
				isSeller: 1,
				uid: 0,
				seller_id: 0,
				task_id: 0,
				title: '',
				isMember: 0,
				modalMPShow: 0,
				baojiaNow: {
					desc: '维修建议会啊实打实'
				},
				files: [],
				baojiao: [],
				seller: false,
				bidding: false,
				baojiaPop: false,
				tabbar: ["描述详情", "报价商家", "服务进程"],
				scrollLeft: 0, //tab标题的滚动条位置
				winHeight: "", //窗口高度
				currentTab: 0, //预设当前项的值
				active: 0,
				orderInfo: {
					address: "",
					audit_reason: "",
					car_back_address: "",
					car_back_time: "",
					car_get_address: "",
					car_get_time: "",
					car_id: 0,
					car_info: "",
					city: "",
					city_code: 110100,
					comment: 0,
					content: "",
					create_at: "",
					customer_reason: "",
					district: "",
					district_code: 110101,
					experss_no: "",
					from_type: 1,
					id: 0,
					image: "",
					is_push: 0,
					latitude: "",
					link_man: "",
					link_mobile: "",
					longitude: "",
					obj_type: 0,
					obj_type2: 0,
					obj_type2_name: "",
					obj_type3: "",
					obj_type3_name: [],
					obj_type_name: "",
					ordersn: "",
					pickup_service: 0,
					predict_price: "",
					predict_time: "0",
					price: "0.00",
					province: "",
					province_code: 110000,
					remark: null,
					seller_id: 0,
					sid_task: 0,
					sort: 0,
					status: 0,
					time: "0",
					title: "",
					uid: 0,
					views: 0
				},
				bidshop: [],
				lookbidlog: {},
				orderprogress: [],
				areaPopshow: true,
				cardCur: 0,
				images: [],
				dotStyle: false,
				towerStart: 0,
				topPop: true,
				height: this.CustomBar,
				items: {}

			}
		},
		onShow() {
			this.isSellers(); //判断是否是商家
			this.isBidding(); //判断是否已报价
		},
		onLoad(e) {
			that = this;
			//  高度自适应
			uni.getSystemInfo({
				success: function(res) {
					let calc = res.windowHeight;
					that.winHeight = calc-100;
				}
			});
			// console.log(e.task_id);
			that.task_id = e.task_id;
			this.seller_id = uni.getStorageSync("seller_id")
			this.uid = uni.getStorageSync("uid")
			let data = {
				task_id: e.task_id
			};
			this.$api.postWithData(this.api.taskDetail, data,
				function callbacks(res) {
					if (res.code == 0) {
						that.$api.msg("当前挂单已关闭或不存在")
						setTimeout(function() {
							uni.navigateBack()
						}, 2000);
						return;
					}
					that.orderInfo = res.data;
					that.images = that.orderInfo.image.split(',');
					that.$api.postWithData(that.api.taskDetailLog, data,
						function callbacks(res) {
							that.bidshop = res.data
							that.$api.postWithData(that.api.taskDetailTimeLine, data,
								function callbacks(res) {
									that.orderprogress = res.data;
								})
						})
				})
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
			showModalMP() {
				// console.log(that.modalMPShow);
				if (that.modalMPShow == 1) {
					that.modalMPShow = 0;
				} else {
					that.modalMPShow = 1;
				}
				// console.log(that.modalMPShow);
			},
			isSellers() {
				this.$api.post(this.api.isSeller,
					function callbacks(res) {
						// if(res.code==1){
						// 	that.isSeller = 1;
						// }else{
						// 	that.isSeller = 0;
						// }
						if (res.code == 2) {
							that.seller = true
						} else {
							that.seller = false
						}
					})
			},
			isBidding() {
				this.$api.postWithData(this.api.isBidding, {
						task_id: that.task_id
					},
					function callbacks(res) {
						// console.log(res.code);
						if (res.code == 0) {
							that.bidding = false
						} else {
							that.bidding = true
						}
					})
			},
			previewImage(images, index) {
				// console.log(images);
				// 预览图片
				uni.previewImage({
					current: index,
					urls: images,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			lookdetail(item) { //查看报价
				this.items = item;
				let data = {
					task_id: item.task_id,
					seller_id: item.seller_id
				};
				this.$api.postWithData(this.api.lookbidlog, data,
					function callbacks(res) {
						that.baojiao = res.data;
						that.baojiao.items = JSON.parse(res.data.items)
						that.baojiaPop = true
						if (res.data.files != null && res.data.files != '') {
							that.files = res.data.files.split(",")
						} else {
							that.files = [];
						}
					})
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			bidlogin() {
				uni.navigateTo({
					url: '../mine/h5?url=/index/shop/login'
				})
			},
			navigateTo(page) {
				uni.navigateTo({
					url: page
				})
			},
			navigateToMap(index, info) {
				let latitude, longitude, name, address;
				if (index == 1) {
					latitude = Number(info.latitude)
					longitude = Number(info.longitude)
					name = '位置'
					address = info.address
				} else if (index == 2) {
					latitude = Number(info.car_get_latitude)
					longitude = Number(info.car_get_longitude)
					name = '位置'
					address = info.car_get_address
				} else if (index == 3) {
					latitude = Number(info.car_back_latitude)
					longitude = Number(info.car_back_longitude)
					name = '位置'
					address = info.car_back_address
				}
				uni.openLocation({
					latitude: latitude,
					longitude: longitude,
					name: name,
					address: address,
				})
			},
			activeTab(res) {
				this.active = res.detail.index;
				// console.log(res.detail.index)
				// console.log(res.detail.title)
			},
			submitorder(items) {
				that.baojiaPop = false
				uni.navigateTo({
					url: 'orderpage?task_id=' + items.task_id + '&seller_id=' + items.seller_id
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

	.tab-view::before {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tab-view {
		width: 100%;
		height: 100upx;
		overflow: hidden;
		box-sizing: border-box;
		position: relative;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		left: 0;
		z-index: 99;
		background: #fff;
		white-space: nowrap;
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

	.tab-bar-title {
		height: 100upx;
		line-height: 100upx;
		font-size: 32upx;
		color: #999;
		font-weight: 400;
	}

	.active {
		border-bottom: 6upx solid #5677fc;
	}

	.active .tab-bar-title {
		color: #5677fc !important;
		font-size: 32upx;
		font-weight: bold;
	}

	/*tabbar end*/
	.scoll-y {
		height: 100%;
	}

	.line-height {
		line-height: 50upx;
	}

	.time-verticals {
		z-index: 1000;
		margin-left: 70upx;
		list-style-type: none;
		border-left: 1px solid transparent;
		padding: 0px;
		height: auto;
	}

	.time-verticals li {
		height: 32px;
		position: relative;
		display: flex;
		justify-content: flex-start;
	}

	.time-verticals li a {
		display: inline-block;
		margin-left: 20px;
		text-decoration: none;
		align-self: center;
		color: #000;
		width: 85%;
	}

	.time-verticals li b:before {
		content: '';
		position: absolute;
		left: -6px;
		width: 1px;
		height: 7px;
		border-top: 13px transparent dashed;
		border-left: 5px transparent dashed;
		border-right: 5px transparent dashed;
		border-bottom: 12px #707070 solid;
	}

	.time-verticals li span {
		position: absolute;
		color: #fff;
		left: -6px;
	}

	/*纵向时间轴*/
	.time-vertical {
		margin-left: 70upx;
		list-style-type: none;
		border-left: 0.1px solid #707070;
		padding: 0px;
		height: auto;
	}

	.time-vertical li {
		height: 70px;
		position: relative;
		display: flex;
		justify-content: flex-start;
	}

	.time-vertical li a {
		display: inline-block;
		margin-left: 20px;
		text-decoration: none;
		align-self: center;
		color: #000;
		width: 85%;
	}

	.time-vertical li b:before {
		content: '';
		position: absolute;
		top: 25px;
		left: -3px;
		width: 7px;
		height: 7px;
		border-radius: 10px;
		background: #182E6C;
	}

	.time-vertical li span {
		position: absolute;
		color: #fff;
		left: -6px;
	}

	.time-line {
		color: #707070;
	}

	.bg-thame {
		background: #F0F3F6;
	}

	.colors-blue {
		color: #182C69;
	}

	.demo {
		text-align: center;
		background-color: rgba(0, 0, 0, 0.8);
	}

	.w100 {
		width: 100%;
	}

	.boeonbtn {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background: #0c4879;
		color: #fff;
		text-align: center;
	}

	.navigatorTextColor {
		color: #1c4fa5;
	}

	.modal-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.mc-tips {
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>
