<template>
	<view>
		<!-- <cu-custom bgColor="bg-white" :isCustom="false" :isBack="true"> <block slot="backText"></block> <block slot="content">精准发布</block> </cu-custom> -->
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
							<view class="padding-xs" v-for="(item,indexs) in classItem" :key="indexs">
								<button style="border-radius: 5upx;" @tap="checkClass1(indexs)" class="cu-btn block" :class="item.id==form.obj_type?'line-theme btn-selectclass':'line-gray'">{{item.name}}</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article no-card margin-sm">
			<view class="cu-item shadow" style="border-radius: 0upx;">
				<view class="cu-bar bg-white " style="min-height:40px;">
					<view class="action ">
						<text>选项维修</text>
					</view>
				</view>
				<view class="content">
					<view class="">
						<view class="grid margin-bottom text-center">
							<view class="padding-xs " v-for="(item,indexs) in chooceItem" :key="indexs">
								<button style="border-radius: 5upx;" @tap="checkClass2(indexs)" class="cu-btn" :class="item.id==form.obj_type2?'line-theme btn-selectclass':'line-gray'">{{item.name}}</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card article no-card margin-sm">
			<view class="cu-item shadow" style="border-radius: 0upx;">
				<view class="cu-bar bg-white " style="min-height:40px;">
					<view class="action ">
						<text>维修事项</text>
					</view>
				</view>
				<view class="content">
					<checkbox-group @change="checkboxChange">
						<view class="grid margin-bottom text-center col-2">
							<view class="padding-xs text-left flex" :style="items.length<=1?'width:100%':'width:50%'" v-for="(item,indexs) in items"
							 :key="indexs">
								<view class="flex flex-direction justify-center">
									<checkbox style="transform:scale(0.7)" :checked="item.checked" class="theme sm" :value="item.id">
									</checkbox>
								</view>
								<view class="flex flex-direction justify-center">
									<text class="margin-left-sm">{{item.name}}</text>
								</view>
							</view>
						</view>
					</checkbox-group>
				</view>
			</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm3"></mpvue-city-picker>
		<view @tap="modalName='bottomModal'" class="cu-card article no-card margin-top-sm margin-lr-sm">
			<view class="cu-form-group">
				<view class="title">车辆信息</view>
				<view class="action">
					<text class="text-cut" style="width: 300upx;">选择车辆(可选)</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</view>
		<view class="cu-modal bottom-modal" @tap="modalName=null" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog" style="border-top-right-radius: 20upx;border-top-left-radius: 20upx;height:60%;">
				<view class="cu-bar  justify-end">
					<view class="content"></view>
					<view class="action" @tap="modalName=null">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<div style="line-height: 500upx;text-align:center;margin-bottom: 50upx;height:500upx;" v-if="carInfoList.length <= 0">
					<span>暂未录入车辆信息</span>
				</div>
				<scroll-view v-else scroll-y="true" class="flex flex-direction" style="margin-bottom:80upx;height:80%">
					<view @click="selected(index)" class="flex margin padding" :class="isSelect==index?'selectBorder':'boder-one'"
					 v-for="(item,index) in carInfoList" :key="index">
						<view>
							<img :src="item.carimg" style="width:150upx;height:150upx;" />
						</view>
						<view class="flex flex-direction text-left margin-left" style="line-height:50upx;">
							<span>车牌号{{item.number}}</span>
							<!-- <span>全新JEEP指南者</span> -->
							<span>添加时间:{{item.create_at}}</span>
						</view>
					</view>
				</scroll-view>
				<view style="width: 100%;height: 100upx; line-height:100upx;position:fixed;bottom:10upx;text-align: center;">
					<button @click="modalName=null" class="cu-btn grad" style="color: #FFF;border-radius: 0.2rem;width: 90%;">确定</button>
				</view>
			</view>
		</view>
		<view @tap="showMulLinkageThreePicker" class="cu-card article no-card margin-top-sm margin-lr-sm">
			<view class="cu-form-group">
				<view class="title">所在地区</view>
				<view class="action">
					<text class="text-cut" style="width: 300upx;">{{form.province}} {{form.city}} {{form.district}}</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</view>
		<view @tap="setAdd(3)" class="cu-card article no-card margin-top-sm margin-lr-sm">
			<view class="cu-form-group">
				<view class="title" style="width: 150upx;">地址</view>
				<view class="action text-cut">
					{{form.address}}
				</view>
				<view class="action">
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</view>
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
						<editor id="editor" style="width: 100%;" class="ql-container" @input="textareaAInput" placeholder="详细描述您的问题详情,使用情况及出售原因能够更快的帮您处理哟~"></editor>
						<!-- #endif -->
						<!-- #ifdef H5 -->
						<textarea v-model="form.content" @input="textareaAInput" placeholder="详细描述您的问题详情,使用情况及出售原因能够更快的帮您处理哟~"></textarea>
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
				<input type="number" maxlength="11" placeholder="请输入电话" v-model="form.link_mobile"></input>
			</view>
		</view>

		<!-- <van-popup :show="datapic" position="bottom">
			<van-datetime-picker  :formatter="formatter" @cancel="closePopTime" @confirm="setTime" :value="currentDate" type="datetime"  />
		</van-popup> -->
		<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" @confirm="change"></tui-datetime>
		<view v-if="form.obj_type!=257" class="cu-card article no-card padding margin-sm bg-white">
			<view>
				<text class="text">接车服务</text>
				<view class="margin-tb-sm flex justify-between flex-wrap">
					<text class="align-self-center">是否需要接车服务</text>
					<switch :checked="switched" @change="switchChooce" />
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
		<avatar @upload="doUpload" @avtinit="doBefore" quality="2" ref="avatar"></avatar>
		<form report-submit="true" @submit="submitForm">
			<view class="cu-bar foot" style="box-shadow: 0 0 0 rgba(0, 0, 0, 0);-webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);margin-bottom: 20rpx">
				<button form-type="submit" class="cu-btn bg-theme text-white lg margin-lr-sm width">确认发布</button>
			</view>
		</form>
	</view>
</template>
</script>
<script>
	var that, cos;
	var COS = require('../../utils/cos-wx-sdk-v5')
	var datetime = require('../../utils/util')
	// import COS from 'cos-wx-sdk-v5';
	import tuiDatetime from "@/components/dateTime/dateTime"
	import cityData from '../../utils/city.data.js';
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			tuiDatetime,
			mpvueCityPicker
		},
		data() {
			return {
				isSelect: 0,
				datapic: false,
				currentDate: new Date().getTime(),
				timetype: 1,
				addressType: 1,
				areaPopshow: false,
				modalName: null,
				textareaBValue: '',
				selected1: 0,
				selected2: 0,
				classItem: [],
				chooceItem: [],
				items: [],
				text: '<view class="text-red">年检代办</view>',
				imgList: [],
				address: '',
				carInfoList: [],
				switched: false,
				form: {
					formId: '',
					ordersn: '', //需求订单号，新增时为空
					car_id: 0, //车型id，通过弹出框选择
					province: '',
					city: '',
					district: '',
					province_code: '',
					city_code: '',
					district_code: '110101',
					content: '', //需求内容
					longitude: '',
					latitude: '',
					address: '',
					link_man: '',
					link_mobile: '',
					obj_type: '', //一级服务类型
					obj_type2: '', //二级服务类型
					obj_type3: '', //三级服务类型
					image: '', //图片，支持多张
					pickup_service: 0, //是否需要接车
					car_get_longitude: '', //接车
					car_get_latitude: '',
					car_get_time: '', //接车时间
					car_get_address: '', //接车地点
					car_back_longitude: '', //送车经度
					car_back_latitude: '',
					car_back_time: '', //送车时间
					car_back_address: '', //送车地点
				},
				loading: true,
				areaList: {},
				type: 0,
				isupdate: false,
				isClick: false,
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 0],
				themeColor: '#007AFF',
				addressResult: {
					label: "请选择",
					value: [0, 0, 0],
					cityCode: '110101'
				},
				type: 1,
				startYear: 1980,
				endYear: 2030,
				cancelColor: "#888",
				color: "#5677fc",
				setDateTime: "",
				result: ""
			}
		},
		mounted() {
			// this.$api.get(this.api.getAreaData,function callbacks(res){
			// 	that.loading = false
			// 	that.areaList = res.data
			// })
		},
		onShow() {

		},
		onLoad(e) {
			that = this;
			that.type = e.type;
			if (e.type == 0) { //发布
				that.isupdate = false;
				this.bidCategoryList1(false);
				uni.getLocation({
					type: 'wgs84',
					altitude: true,
					geocode: true,
					success(res) {
						that.form.latitude = res.latitude
						that.form.longitude = res.longitude
						that.$api.get(
							'https://api.map.baidu.com/reverse_geocoding/v3/?ak=Ulna6HAk7FsVuGeG4aOsV1wWZtxcosrC&output=json&coordtype=wgs84ll&location=' +
							res.latitude + ',' + res.longitude,
							function callbacks(res) {
								that.form.address = res.result.formatted_address
								that.form.province = res.result.addressComponent.province;
								that.form.city = res.result.addressComponent.city;
								that.form.district = res.result.addressComponent.district;
								that.form.district_code = res.result.addressComponent.adcode;
							})
					}
				})
			} else { //修改
				that.isupdate = true;
				that.$api.postWithData(that.api.taskDetail, {
						task_id: e.task_id
					},
					function callbacks(res) {
						that.form = res.data
						let images = that.form.image.split(",")
						that.onEditorReady()
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
						that.bidCategoryList1(true);
					})
			}
			this.initCOS();
			this.getCarNew();
		},
		methods: {
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			hideMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.pickerCancel()
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
			initCOS() {
				cos = new COS({
					Bucket: that.api.Bucket,
					Region: that.api.Region,
					getAuthorization: function(options, callback) {
						// console.log(options);
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
			getCarNew() { //获取车辆信息
				this.$api.post(this.api.getCarNew,
					function callbacks(res) {
						if (res.data == null) {
							that.$api.msg("暂未录入车辆信息")
						} else {
							that.carInfoList = res.data
						}
					})
			},
			bidCategoryList1(isupdate) {
				//获取服务类型
				this.$api.postWithData(this.api.bidCategoryList, {
						pid: 0,
						has_child: 1
					},
					function callbacks(res) {
						if (res.data != null) {
							that.classItem = res.data
							if (isupdate) {
								if (that.isClick) {
									that.bidCategoryList2(isupdate, id)
								} else {
									that.bidCategoryList2(isupdate, that.form.obj_type)
								}
							} else {
								that.form.obj_type = that.classItem[0].id
								that.bidCategoryList2(isupdate, that.classItem[0].id)
							}
						} else {
							that.$api.msg(res.msg)
						}
					})
			},
			bidCategoryList2(isupdate, id) {
				that.chooceItem = [];
				that.items = [];
				this.$api.postWithData(this.api.bidCategoryList, {
						pid: id,
						has_child: 1
					},
					function callbacks(res) {
						if (res.data != null) {
							that.chooceItem = res.data
							// console.log(that.chooceItem);
							if (isupdate) { //修改
								if (that.isClick) {
									that.form.obj_type2 = that.chooceItem[0].id
									that.bidCategoryList3(isupdate, id)
								} else {
									that.bidCategoryList3(isupdate, that.form.obj_type2)
								}
							} else { //添加
								that.form.obj_type2 = that.chooceItem[0].id
								that.bidCategoryList3(isupdate, that.chooceItem[0].id)
							}
						} else {
							that.$api.msg(res.msg)
						};
					})
			},
			bidCategoryList3(isupdate, id) {
				that.items = [];
				this.$api.postWithData(this.api.bidCategoryList, {
						pid: id,
						has_child: 0
					},
					function callbacks(res) {
						if (res.data != null) {
							that.items = res.data
							if (isupdate) { //修改
								var items = that.items,
									values = that.form.obj_type3;
								for (var i = 0, lenI = items.length; i < lenI; ++i) {
									const item = items[i]
									if (values.indexOf(item.id) >= 0) {
										that.$set(item, 'checked', true)
									} else {
										that.$set(item, 'checked', false)
									}
								}
							}
						} else {
							that.$api.msg(res.msg)
						};
					})
			},
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
			openPopTime(timetype) {
				this.currentDate = new Date(),
					this.timetype = timetype
				this.datapic = true;
			},
			switchChooce(e) {
				this.switched = e.detail.value
				if (this.switched) {
					this.form.pickup_service = 1;
				} else {
					this.form.pickup_service = 0;
				}
			},
			onConfirm3(e) {
				console.log(e);
				let labels = e.label.split("-")
				this.form.province = labels[0]
				this.form.city = labels[1]
				this.form.district = labels[2]
				// this.form.province_code=a.detail.values[0].code
				// this.form.city_code=a.detail.values[1].code
				this.form.district_code = e.cityCode
				console.log(this.form.province);
			},
			checkboxChange: function(e) {
				// console.log(e.detail.value)
				var items = this.items,
					values = e.detail.value,
					obj3 = '';
				//把数组分割成字符串用,隔开
				for (var i = 0; i < values.length; i++) {
					obj3 += values[i] + ",";
				}
				if (obj3.length > 0) {
					obj3 = obj3.substr(0, obj3.length - 1);
				}
				values = values + "," + that.form.obj_type3
				console.log(values);
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.indexOf(item.id) >= 0) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				// console.log(obj3)
				this.form.obj_type3 = obj3;
			},
			submitForm(e) { //提交表单
				let content = that.form.content;
				var result = content.replace('\n', ""); //把'↵'替换为空字符串
				this.form.content = result
				console.log(e.detail.formId)
				this.form.formId = e.detail.formId
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
			checkClass1(index) {
				this.isClick = true;
				this.form.obj_type = this.classItem[index].id
				this.bidCategoryList2(that.isupdate, this.classItem[index].id)
			},
			checkClass2(index) {
				this.isClick = true;
				this.form.obj_type2 = this.chooceItem[index].id
				this.bidCategoryList3(that.isupdate, this.chooceItem[index].id)
			},
			selected(index) {
				this.isSelect = index;
				this.form.car_id = this.carInfoList[index].id;
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
						// console.log(e.address)
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
					// console.log(that.api.UPLOAD_HOST+fileKey);
					that.imgList.push(that.api.UPLOAD_HOST + fileKey)
					// console.log(that.imgList)
				});
				// this.$set(this.urls, rsp.index, rsp.path);
			},
			setAdd(index) {
				uni.chooseLocation({
					success(e) {
						// console.log(e.address)
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
		}
	}
</script>

<style lang="scss">
	.width {
		width: 100%;
	}

	.ql-container {
		height: 100px;
		min-height: 100px;
		margin-bottom: 20px;
	}

	.clear-shadow {
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		-webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
	}

	.selectBorder {
		border: 1px #1B4899 solid;
		width: auto;
		background-color: transparent;
		background-image: url('../../static/selected.png');
		background-repeat: no-repeat;
		background-size: 1rem 1rem;
		background-position: 100% 100%;
	}

	.car-item {
		line-height: 50upx;
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		align-content: flex-start;
	}

	.ci-number {
		width: 100%;
	}

	.ci-time {
		width: 100%;
		color: #999;
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
