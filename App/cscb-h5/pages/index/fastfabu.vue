<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" :isCustom="false" :isBack="true"> <block slot="backText"></block> <block slot="content">快速发布</block> </cu-custom> -->
		<view class="cu-card article no-card margin-sm">
			<view class="cu-item shadow" style="border-radius: 0upx;">
				<view class="cu-bar bg-white " style="min-height:40px;">
					<view class="action ">
						<text>分类</text>
					</view>
				</view>
				<view class="content">
					<view class="">
						<view class="grid margin-bottom text-center col-3">
							<view class="padding-xs " v-for="(item,indexs) in className" :key="indexs">
								<button style="border-radius: 5upx;" @tap="checkClass(indexs)" class="cu-btn block" :class="form.obj_type == item.id?'line-theme btn-selectclass':'line-gray'">{{item.name}}</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<form report-submit="true" @submit="submitForm">
			<view class="cu-card article no-card margin-sm">
				<view class="cu-item shadow" style="border-radius: 0upx;">
					<view class="cu-bar bg-white " style="min-height:40px;">
						<view class="action ">
							<text>描述</text>
						</view>
					</view>
					<view class="content">
						<view style="width: 100%;">
							<!-- #ifdef APP-PLUS||MP-WEIXIN -->
							<editor id="editor" style="width: 100%;" class="ql-container" @input="textareaAInput" :placeholder="'请输入您的需求描述 如：'+desc2"></editor>
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<textarea v-model="form.content" @input="textareaAInput" :placeholder="'请输入您的需求描述 如：'+desc2"></textarea>
							<!-- #endif -->
							<view class="grid col-5 grid-square flex-sub">
								<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
									<image :src="imgList[index]" mode="aspectFill"></image>
									<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
										<text class='cuIcon-close'></text>
									</view>
								</view>
								<view class="solids" @tap="clk(0)" v-if="imgList.length<9">
									<text class='cuIcon-cameraadd'></text>
								</view>
							</view>
							<view @tap="getNowAddress" class="margin-top">
								地址:<text>{{form.address}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-card article no-card margin-sm">
				<view class="cu-form-group ">
					<view class="title">姓名</view>
					<input placeholder="请输入姓名" v-model="form.link_man"></input>
				</view>
			</view>
			<view class="cu-card article no-card margin-top-sm margin-lr-sm">
				<view class="cu-form-group ">
					<view class="title">电话</view>
					<input placeholder="请输入电话" type="number" maxlength="11" v-model="form.link_mobile"></input>
				</view>
			</view>
			<view v-if="form.obj_type!=257" class="cu-card article no-card padding margin-sm bg-white">
				<view>
					<text class="text">接车服务</text>
					<view class="margin-tb-sm flex justify-between flex-wrap">
						<text class="align-self-center">是否需要接车服务</text>
						<switch :checked="switched" @change="SwitchA" />
					</view>
				</view>
				<view v-if="switched">
					<view class="margin-tb-sm solid-top padding-top" @click="show(1)">
						<text class="text-df">接车时间</text>
						<view class="margin-tb-sm flex justify-between flex-wrap">
							<text class="">{{form.car_get_time}}</text>
							<view>
								<text></text><text class="cuIcon-right"></text>
							</view>
						</view>
					</view>
					<view @click="setAdd(1)" class="margin-tb-sm solid-top padding-top">
						<text class="text-df">接车地点</text>
						<view class="margin-tb-sm flex justify-between flex-wrap">
							<text style="width: 90%;">{{form.car_get_address}}</text>
							<view class="flex flex-center">
								<text class="cuIcon-right"></text>
							</view>
						</view>
					</view>
					<view class="margin-tb-sm solid-top padding-top" @click="show(2)">
						<text class="text-df">送车时间</text>
						<view class="margin-tb-sm flex justify-between flex-wrap">
							<text class="">{{form.car_back_time}}</text>
							<view>
								<text></text><text class="cuIcon-right"></text>
							</view>
						</view>
					</view>
					<view @click="setAdd(2)" class="margin-tb-sm solid-top padding-top">
						<text class="text-df">送车地点</text>
						<view class="margin-tb-sm flex justify-between flex-wrap">
							<text style="width: 90%;">{{form.car_back_address}}</text>
							<view class="flex flex-center">
								<text class="cuIcon-right"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor"
			 :color="color" :setDateTime="setDateTime" @confirm="change"></tui-datetime>
			<avatar @upload="doUpload" @avtinit="doBefore" quality="2" ref="avatar"></avatar>
			<view class="cu-bar foot" style="box-shadow: 0 0 0 rgba(0, 0, 0, 0);-webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);margin-bottom: 20rpx">
				<button form-type="submit" class="cu-btn bg-theme text-white lg margin-lr-sm width">确认发布</button>
			</view>
		</form>
	</view>
</template>

<script>
	var that, cos;
	var COS = require('../../utils/cos-wx-sdk-v5')
	// import COS from 'cos-wx-sdk-v5';
	var datetime = require('../../utils/util')
	import tuiDatetime from "@/components/dateTime/dateTime"
	// #ifdef H5
	var jweixin = require('../../utils/wxsdk.js')
	// #endif
	export default {
		components: {
			tuiDatetime
		},
		data() {
			return {
				from: '',
				className: [],
				text: '<div class="text-red">年检代办</div>',
				imgList: [],
				address: '',
				desc2: '',
				form: {
					ordersn: '', //需求订单号，新增时为空
					obj_type: '', //一级服务类型
					content: '', //需求内容
					image: '', //图片，支持多张
					formId: '',
					address: '', //通过地图api获取，可手动修改
					link_man: '', //联系人
					link_mobile: '', //联系电话
					province: '', //通过地图api获取
					city: '',
					district: '',
					district_code: '',
					longitude: '', //通过地图api获取的位置经度
					latitude: '', //通过地图api获取的位置纬度
					pickup_service: 0, //是否需要接车
					car_get_longitude: '', //接车经度
					car_get_latitude: '',
					car_get_time: '', //接车时间
					car_get_address: '', //接车地点
					car_back_longitude: '', //送车经度
					car_back_latitude: '',
					car_back_time: '', //送车时间
					car_back_address: '', //送车地点
				},
				switched: false,
				datapic: false,
				currentDate: new Date().getTime(),
				timetype: 1,
				addressType: 1,
				type: 1,
				startYear: 1980,
				endYear: 2030,
				cancelColor: "#888",
				color: "#5677fc",
				setDateTime: "",
				result: ""
			}
		},
		onLoad(e) {
			that = this;
			this.from = e.from;
			that.initCOS();
			// #ifdef H5
			jweixin.config({
				debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: 'wxf9651f8626d421a9', // 必填，公众号的唯一标识
				timestamp: '1572053883', // 必填，生成签名的时间戳
				nonceStr: '5395yodg0r2k2mvm', // 必填，生成签名的随机串
				signature: 'a2b6b3892ac372b5c8db1252781251d82ace4a62', // 必填，签名
				jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表
			});
			jweixin.ready(function() {
				jweixin.getLocation({
					type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					success: function(res) {
						console.log(res);
						var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
						var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
						var speed = res.speed; // 速度，以米/每秒计
						var accuracy = res.accuracy; // 位置精度
						//TODO 请求后台接口
					}
				});
			});
			// #endif
			uni.getLocation({
				type: 'wgs84',
				altitude: true,
				geocode: true,
				success(res) {
					console.log(res);
					that.form.latitude = res.latitude
					that.form.longitude = res.longitude
					that.$api.get('https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location=' +res.latitude + ',' + res.longitude,
						function callbacks(res) {
							that.form.address = res.result.formatted_address
							that.form.province = res.result.addressComponent.province;
							that.form.city = res.result.addressComponent.city;
							that.form.district = res.result.addressComponent.district;
							that.form.district_code = res.result.addressComponent.adcode;
						})
				}
			})
			//获取服务类型
			this.$api.postWithData(this.api.bidCategoryList, {
					pid: 0,
					has_child: 1
				},
				function callbacks(res) {
					that.className = res.data
					if (e.type == 0) { //添加
						that.form.obj_type = that.className[0].id
						that.desc2 = that.className[0].desc2
					} else { //编辑
						that.$api.postWithData(that.api.taskDetail, {
								task_id: e.task_id
							},
							function callbacks(res) {
								that.form = res.data
								that.onEditorReady()
								let images = that.form.image.split(",")
								if (images[0] != '') {
									for (let i = 0; i < images.length; i++) {
										that.imgList.push(images[i])
									}
								}
								if (that.form.pickup_service == 0) {
									that.switched = false
								} else {
									that.switched = true
								}
							})
					}
				})
		},
		methods: {
			show: function(type) {
				this.timetype = type
				this.cancelColor = "#888";
				this.color = "#5677fc";
				this.startYear = 1980;
				this.endYear = 2030;
				this.type = 1;
				this.setDateTime = datetime.formatDate(new Date().getTime(), 'YY-MM-DD hh-mm');
				this.$refs.dateTime.show()
			},
			change: function(res) {
				console.log(res)
				var data = res.result
				// console.log(data);
				if (this.timetype == 1) { //接车
					this.form.car_get_time = res.result
				} else {
					this.form.car_back_time = res.result
				}
			},
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					// console.log(res.context);
					this.editorCtx = res.context
					this.editorCtx.insertText({
						text: that.form.content
					})
				}).exec()
			},
			setAdd(index) {
				uni.chooseLocation({
					success(e) {
						// console.log(e)
						if (index == 1) {
							that.form.car_get_latitude = e.latitude
							that.form.car_get_longitude = e.longitude
							that.form.car_get_address = e.address;
						} else if (index == 2) {
							that.form.car_back_latitude = e.latitude
							that.form.car_back_longitude = e.longitude
							that.form.car_back_address = e.address;
						} else if (index == 3) {
							that.form.latitude = e.latitude
							that.form.longitude = e.longitude
							that.form.address = e.address;
						}
					}
				})
			},
			SwitchA(e) {
				this.switched = e.detail.value
				if (this.switched) {
					this.form.pickup_service = 1;
				} else {
					this.form.pickup_service = 0;
				}
			},
			initCOS() {
				cos = new COS({
					Bucket: that.api.Bucket,
					Region: that.api.Region,
					getAuthorization: function(options, callback) {
						console.log(options);
						that.$api.postWithData(that.api.qcloud_key, {
								bucket: options.Bucket,
								region: options.Region,
							},
							function callbacks(res) {
								var credentials = res.credentials;
								callback({
									TmpSecretId: credentials.tmpSecretId,
									TmpSecretKey: credentials.tmpSecretKey,
									XCosSecurityToken: credentials.sessionToken,
									ExpiredTime: res.expiredTime,
								});
							})
					}
				});
			},
			submitForm(e) { //提交表单
				this.form.formId = e.detail.formId
				let content = that.form.content;
				var result = content.replace('\n', ""); //把'↵'替换为空字符串
				this.form.content = result
				// console.log(this.form)
				if (this.form.content == '') {
					this.$api.msg("请填写描述内容")
					return;
				}
				if (this.form.address == '') {
					this.$api.msg("请选择地址")
					return;
				}
				if (this.form.link_man == '') {
					this.$api.msg("请填写联系人")
					return;
				}
				if (this.form.link_mobile == '') {
					this.$api.msg("请填写联系电话")
					return;
				}
				var images = '';
				for (var i = 0; i < this.imgList.length; i++) {
					if (i < (this.imgList.length - 1)) {
						images += this.imgList[i] + ",";
					} else {
						images += this.imgList[i];
					}
				}
				this.form.image = images;
				// console.log(this.form)
				this.$api.postWithData(this.api.publishbid, this.form,
					function callbacks(res) {
						console.log(res);
						if (res.code == 1) {
							that.$api.msg(res.msg)
							setTimeout(function() {
								if (that.from == 'home') {
									uni.redirectTo({
										url: '../mine/publishbid'
									})
								} else {
									that.$eventBus.$emit('myTaskList');
									uni.navigateBack()
								}
							}, 3000);
						}
					})
			},
			checkClass(index) {
				this.form.obj_type = this.className[index].id
				this.desc2 = this.className[index].desc2
			},
			textareaAInput(e) {
				// console.log(e);
				this.form.content = e.detail.text
			},
			getNowAddress() {
				uni.chooseLocation({
					success(e) {
						that.form.longitude = e.longitude
						that.form.latitude = e.latitude
						that.form.address = e.address
						console.log(e.address)
					}
				})
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '温馨提示！',
					content: '确定要删除吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			doBefore() {
				console.log('doBefore');
			},
			clk(index) {
				const {
					windowWidth,
					windowHeight
				} = uni.getSystemInfoSync();
				this.$refs.avatar.fChooseImg(index, {
					selWidth: windowWidth - 50 + "px",
					selHeight: windowWidth - 50 + "px",
					expWidth: "800px",
					expHeight: "800px",
					inner: index ? 'true' : 'true',
					canRotate: "false"
				});
			},
			doUpload(rsp) {
				console.log(rsp.path);
				var filePath = rsp.path;
				var date = new Date(),
					year = date.getFullYear() + "",
					month = (date.getMonth() + 1) + "",
					day = date.getDate() + "",
					getNowFormatDate = year + month + day,
					filename = date.getTime() + ".png",
					fileKey = 'uploads/' + getNowFormatDate + '/' + filename;
				console.log(fileKey);
				cos.postObject({
					Bucket: that.api.Bucket,
					Region: that.api.Region,
					Key: fileKey,
					FilePath: filePath,
					onProgress: function(info) {
						console.log(JSON.stringify(info));
					}
				}, function(err, data) {
					console.log(err || data);
					console.log(that.api.UPLOAD_HOST + fileKey);
					that.imgList.push(that.api.UPLOAD_HOST + fileKey)
					console.log(that.imgList)
				});
				// this.$set(this.urls, rsp.index, rsp.path);
			}
		}
	}
</script>

<style lang="scss">
	.width {
		width: 100%;

	}

	.clear-shadow {
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		-webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
	}

	.ql-container {
		height: 100px;
		min-height: 100px;
		margin-bottom: 20px;
	}

	.btn-selectclass {
		color: $uni-color-primary;
		background-color: transparent;
		background-image: url('../../static/selected.png');
		background-repeat: no-repeat;
		background-size: 60upx 60upx;
		background-position: 100% 100%;
	}
</style>
