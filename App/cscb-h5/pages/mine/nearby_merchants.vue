<template>
	<view v-once>
		<view>
			<swiper style="height: 700upx;" class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true"
			 :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item @tap="previewImage(images,index)" v-for="(item,index) in images" :key="index">
					<image :src="item" mode="aspectFill"></image>
					<!-- <video :src="item" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
				</swiper-item>
			</swiper>
		</view>
		<view class="padding bg-white">
			<view class="text-lg text-bold text-theme">{{seller.title}}</view>
			<view class="margin-top-sm"><text class="cuIcon-phone"></text> {{seller.phone}}</view>
			<view class="margin-tb-sm"><text class="cuIcon-location"></text>{{seller.address}}</view>
			<view class="margin-tb-sm">{{seller.seller_desc}}</view>
		</view>
		<van-tabs color="#ee0a24" custom-class="bg-white" class="margin-top-sm bg-white" v-model="active" sticky swipeable
		 @change="activeTab">
			<van-tab v-for="(item,index) in tabs" :key="index" :title="item">
				<view v-show="active==0" class="padding-lr line-height">
					<view class="cu-list menu-avatar" style="margin-top:0;" >
						<view class="cu-item " style="height:200rpx" v-if="seller.projectsList.length>0" v-for="(item,index) in seller.projectsList"
				 :key="index">
							<view class="cu-avatar radius xl" :style="'background-image:url('+item.logo+');'"></view>
							<view class="content" style="line-height:3em;left:180upx;width: calc(100% - 96rpx - 60rpx - 140rpx - 20rpx)">
								<view>
									<view class="text-cut">{{item.title}}</view>
								</view>
								<view class="text-gray text-sm flex">
									<view class="text-cut">
										<text>人气:{{item.views}}</text>
									</view> 
									<view class="text-cut">
										<text class="margin-left">仅剩:{{item.stock}}</text>
									</view> 
								</view>
							</view>
							<view class="action flex flex-direction justify-center" style="width: 120rpx;">
								<text class="text-price text-red text-lg text-bold">{{item.price}}</text>
								<text class="text-price text-red ">{{item.market_price}}</text>
								<button class="cu-btn sm radius bg-theme">立即抢</button>
							</view>
						</view>
					</view>
				</view>
				<view v-show="active==1" class="padding line-height">

				</view>
			</van-tab>
		</van-tabs>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				tabs: ["商家项目", "商家商品"],
				active: 0,
				images: [],
				dotStyle: false,
				seller: {
					"id": 4,
					"create_at": "2018-11-22 11:23:54",
					"title": "贵阳市云岩区车友之家汽车服务中心",
					"sub_title": "车友之家",
					"phone": "18785112813",
					"user_pass": "e10adc3949ba59abbe56e057f20f883e",
					"openid": null,
					"address": "贵阳市云岩区野鸭塘\t",
					"licenseUrl": null,
					"brand_logo": "\/\/cscb2.kelinteng.com\/static\/upload\/9da5be9f618a7e60\/55dac4b6744bf580.jpg",
					"zizhiUrl": null,
					"f_cardUrl": null,
					"z_cardUrl": null,
					"brand_cover": "\/\/cscb2.kelinteng.com\/static\/upload\/d57df93946370d25\/d94630b2e6f618e4.jpg",
					"seller_desc": "创世车宝车联网服务平台提供，油卡，车险，机油，洗车，保养等服务，可享受加油最低7.99折，洗车一元，保养两元，具体详情请咨询客户热线：177 8581 7551，快来成为创世车宝会员吧！",
					"status": 1,
					"view": 271,
					"longitude": "106.628821",
					"latitude": "26.599907",
					"store_name": "黄大丽",
					"store_phone": "18785112813",
					"store_pass": "d41d8cd98f00b204e9800998ecf8427e",
					"price": "522.00",
					"is_seller": 0,
					"type": "0",
					"purchase_rate": 100,
					"is_complete": 1,
					"staff_code": "0",
					"staff_name": "",
					"province": "贵州省",
					"city": "贵阳市",
					"district": "云岩区",
					"province_code": 520000,
					"city_code": 520100,
					"district_code": 520103,
					"wechat_qr_ticket": null,
					"wechat_qr_url": null,
					"qrcode": null,
					"agent_id": 32,
					"get_rate": 101,
					"account_type": 0,
					"last_js_time": "2019-10-11 12:07:58",
					"projectsList": []
				}

			}
		},
		onShow() {},
		onLoad(e) {
			that = this;

		},
		methods: {
			openLocation() {
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
		}
	}
</script>

<style>
	.van-tabs__line {
		background-color: #182E6C
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
</style>
