<template>
	<view class="padding-sm">
		<view class="cu-form-group">
			<view class="title">车牌号</view>
			<input v-model="form.carno" placeholder-class="text-right" class="text-right" placeholder="请填写车牌号"></input>
		</view>
		<view @tap="navigator('carbrand')"  class="cu-form-group margin-top-sm ">
			<view class="title">品牌及车型</view>
			<view >请选择 <text class="cuIcon-right"></text></view>
		</view>
		<view @tap="showSinglePicker" class="cu-form-group">
			<view class="title">车龄</view>
			<view ><text v-text="carAgeResult.label"></text><text class="cuIcon-right"></text></view>
		</view>
		<view @tap="show" class="cu-form-group">
			<view class="title">续保日期</view>
			<view ><text v-text="dateResult"></text><text class="cuIcon-right"></text></view>
		</view>
		<view @tap="showMulLinkageThreePicker" class="cu-form-group">
			<view class="title">所在地区</view>
			<view ><text v-text="addressResult.label"></text><text class="cuIcon-right"></text></view>
		</view>
		<view class="cu-form-group">
			<text>行驶证件照</text>
		</view>
		<view class="flex justify-around bg-white">
			<view class="margin-left-sm flex-sub">
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
			<view class="margin-lr-sm flex-sub">
				<view class="grid col-1 grid-square" >
					<view class="bg-img "  v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
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
		<view class="cu-form-group margin-top">
			<text>车辆照片</text>
		</view>
		<view class=" flex justify-around bg-white">
			<view class="margin-left-sm flex-sub">
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
			<view class="margin-lr-sm flex-sub">
			</view>
		</view>
		<button @tap="submitForm" class="cu-btn lg bg-theme block margin-top">确认修改</button>
		<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" @confirm="change"></tui-datetime>
		 <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		  @onConfirm="onConfirm1" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm3"></mpvue-city-picker>
		 <avatar @upload="doUpload" @avtinit="doBefore" quality="2" ref="avatar"></avatar>
	</view>
</template>

<script>
	var that,cos;
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../utils/city.data.js';
	import tuiDatetime from "@/components/dateTime/dateTime"
	var COS =require('../../utils/cos-wx-sdk-v5')
	export default {
		components: {
			tuiDatetime,
			mpvuePicker,
			mpvueCityPicker
		},
		data() {
			return {
				type: 1,
				startYear: 1980,
				endYear: 2030,
				cancelColor: "#888",
				color: "#5677fc",
				setDateTime: "",
				dateResult: '请选择',
				radio: 'A',
				imgList: [],
				pickerSingleArray: [
					{label: '1年',value:1},{label: '2年',value:2},
					{label: '3年',value:3},{label: '4年',value:4},
					{label: '5年',value:5},{label: '6年',value:6},
					{label: '7年',value:7},{label: '8年',value:8},
					{label: '9年',value:9},{label: '10年',value:10},
					{label: '11年',value:11},{label: '12年',value:12}
				],
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				addressResult:{label:"请选择",value:[0,0,0],cityCode:'110101'},
				carAgeResult:{label:"请选择",index:[0],value:[1]},
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				form:{
					carno:'',
				}
			}
		},
		methods: {
			submitForm(){
				
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
				uni.showLoading({mask: true});
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
					uni.hideLoading()
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
			show: function() {
				this.cancelColor = "#888";
				this.color = "#5677fc";
				this.setDateTime = "";
				this.startYear = 1980;
				this.endYear = 2030;
				this.type = 2;
				this.$refs.dateTime.show()
			},
			change: function(e) {
				console.log(e)
				this.dateResult = e.result
			},
			showSinglePicker() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show()
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm1(e) {
				this.carAgeResult =e
			},
			onConfirm3(e) {
				this.addressResult =e
			},
			navigator(url){
				uni.navigateTo({
					url:url
				})
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
