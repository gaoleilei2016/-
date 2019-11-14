<template>
	<view>
		<view class="margin-tb">
			<text class="text-bold text-black margin-left" >常用功能</text>
		</view>
		<view class="cu-form-group">
			<view class="title">姓名</view>
			<input placeholder-class="text-right" class="text-right" placeholder="请填写车主姓名"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">性别</view>
			<radio-group class="block " @change="RadioChange">
				<radio style="transform:scale(0.7)" class='radio'  :checked="radio=='A'?true:false" value="A"></radio>男
				<radio style="transform:scale(0.7)" class='radio'  :checked="radio=='B'?true:false" value="B"></radio>女
			</radio-group>
		</view>
		<view class="cu-form-group">
			<view class="title">手机号</view>
			<input placeholder-class="text-right" class="text-right" type="number" placeholder="请填写手机号"></input>
		</view>
		<view @tap="showMulLinkageThreePicker" class="cu-form-group">
			<view class="title">地区</view>
			<view ><text v-text="addressResult.label"></text><text class="cuIcon-right"></text></view>
		</view>
		<view class="cu-form-group">
			<view class="title">地址</view>
			<input placeholder-class="text-right" class="text-right" placeholder="请填写您的准确地址"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">推荐码</view>
			<input placeholder-class="text-right" class="text-right" placeholder="请填写推荐人工号"></input>
		</view>
		<view class="margin-tb flex justify-between">
			<text class="text-bold text-black margin-left">车辆信息</text>
			<text @tap="navigator('carmanager')" class="margin-right">车辆管理 <text class="cuIcon-right"></text> </text>
		</view>
		<scroll-view scroll-x="true" style="white-space: nowrap;">
			<view class="flex justify-between padding-tb-xs">
				<view  class="shadow-warp padding flex bg-white margin-right ">
					<image src="../../static/logo.jpg" mode="widthFix" style="width:120upx;height: 120upx;"></image>
					<view class="flex flex-direction justify-around margin-left text-sm">
						<text>车牌号:贵G123456</text>
						<text>保险:2019.10.10-2020.01.01</text>
						<text>创建时间:2019.10.10 20:15</text>
					</view>
				</view>
				<view  class="shadow-warp padding flex bg-white margin-right ">
					<image src="../../static/logo.jpg" mode="widthFix" style="width:120upx;height: 120upx;"></image>
					<view class="flex flex-direction justify-around margin-left text-sm">
						<text>车牌号:贵G123456</text>
						<text>保险:2019.10.10-2020.01.01</text>
						<text>创建时间:2019.10.10 20:15</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="margin-tb">
			<text class="text-bold text-black margin-left">证件信息</text>
		</view>
		<view class="padding flex justify-around bg-white">
			<view class="text-center flex-sub margin-right">
				<text>身份证正面</text>
			</view>
			<view class="text-center flex-sub">
				<text>身份证反面</text>
			</view>
		</view>
		<view class="padding flex justify-around bg-white">
			<view class="flex-sub margin-right">
				<view class="grid col-1 grid-square">
					<view class="bg-img " v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="bg-gray" @tap="clk(0)" v-if="imgList.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="flex-sub">
				<view class="grid col-1 grid-square" >
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="bg-gray" @tap="clk(0)" v-if="imgList.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm3"></mpvue-city-picker>
		<avatar @upload="doUpload" @avtinit="doBefore" quality="2" ref="avatar"></avatar>
	</view>
</template>

<script>
	var that,cos;
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../utils/city.data.js';
	var COS =require('../../utils/cos-wx-sdk-v5')
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				radio: 'A',
				imgList: [],
				themeColor: '#007AFF',
				addressResult:{label:"请选择",value:[0,0,0],cityCode:'110101'},
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
			}
		},
		methods: {
			navigator(url){
				uni.navigateTo({
					url:url
				})
			},
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm3(e) {
				this.addressResult =e
			},
			initCOS(){
				cos = new COS({
					Bucket: that.api.Bucket,
					Region: that.api.Region,
				    getAuthorization: function (options, callback) {
						console.log(options);
				        that.$api.postWithData(that.api.qcloud_key,{
				                bucket: options.Bucket,
				                region: options.Region,
				            },
				        	function callbacks(res){
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
			RadioChange(e) {
				this.radio = e.detail.value
			},
			clk(index) {
				const { windowWidth, windowHeight } = uni.getSystemInfoSync();
				this.$refs.avatar.fChooseImg(index, {
					selWidth: windowWidth-50+"px",
					selHeight: windowWidth-50+"px",
					expWidth: windowWidth-50+"px",
					expHeight:windowWidth-50+"px",
					inner: index ? 'true' : 'true',
					canRotate: "false"
				});
			},
			doUpload(rsp) {
				console.log(rsp.path);
				var filePath = rsp.path;
				var date = new Date(),
				year = date.getFullYear()+"",
				month = (date.getMonth() + 1)+"",
				day = date.getDate()+"",
				getNowFormatDate=year+month+day,
				filename = date.getTime()+".png",
				fileKey='uploads/' + getNowFormatDate + '/' + filename;
				console.log(fileKey);
				cos.postObject({
				    Bucket: that.api.Bucket,
				    Region: that.api.Region,
				    Key: fileKey,
				    FilePath: filePath,
				    onProgress: function (info) {
				        console.log(JSON.stringify(info));
				    }
				}, function (err, data) {
				    console.log(err || data);
					console.log(that.api.UPLOAD_HOST+fileKey);
					that.imgList.push(that.api.UPLOAD_HOST+fileKey)
					console.log(that.imgList)
				});
				// this.$set(this.urls, rsp.index, rsp.path);
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
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
		},
		onLoad() {
			that = this;
			this.initCOS();
		},
	}
</script>

<style>
	.grid.col-1.grid-square>uni-view{
		padding-bottom: 60%;
	}
	.grid.col-1.grid-square>view{
		padding-bottom: 60%;
	}
</style>
