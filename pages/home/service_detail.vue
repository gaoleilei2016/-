<template>
	<view class="">
		<view class="bg-white padding">
			<view class="flex justify-between padding-tb">
				<text class="text-black">商品</text>
				<text>{{form.title}}</text>
			</view>
			<view class="flex justify-between padding-bottom">
				<text class="text-black">交易时间</text>
				<text>{{form.payTime}}</text>
			</view>
			<view class="flex justify-between padding-bottom">
				<text class="text-black">支付方式</text>
				<text>微信</text>
			</view>
			<view class="flex justify-between padding-bottom">
				<text class="text-black">交易单号</text>
				<text>{{form.ordersn}}</text>
			</view>
			<view class="flex justify-between  padding-bottom">
				<text class="text-black">核销状态</text>
				<text>{{form.statusText}}</text>
			</view>
			<view v-if="form.obj_type==257" class="flex justify-between padding-top solid-top">
				<text class="text-black">保单凭证</text>
				<text></text>
			</view>
			<view v-if="form.obj_type==257" class="padding-lr flex justify-between bg-white">
				<view class="flex-sub ">
				</view>
				<view class="flex-twice">
					<view class="cu-bar search bg-white" >
						<view class="search-form radius solid" style="margin-left: 0;margin-right: 0;padding-left: 20upx;background-color: #FFF;">
							<input v-model="form.insurance_policy_link" :adjust-position="false" type="text" placeholder="请在此输入保单链接" confirm-type="search"></input>
						</view>
					</view>
				</view>
			</view>
			<view  class="padding flex justify-between bg-white">
				<view class="flex-sub " style="width: 40%;">
				</view>
				<view class="flex-twice" style="width: 50%;">
					<view class="grid col-1 grid-square" >
						<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
							<image v-if="item.indexOf('png')!=-1" :src="imgList[index]" mode="aspectFill"></image>
							<image v-if="item.indexOf('jpg')!=-1" :src="imgList[index]" mode="aspectFill"></image>
							<image v-if="item.indexOf('jpeg')!=-1" :src="imgList[index]" mode="aspectFill"></image>
							<view  v-if="item.indexOf('pdf')!=-1" style="width: 100%;height: 100%;" >{{item}}</view>
							<view  v-if="item.indexOf('doc')!=-1" style="width: 100%;height: 100%;" >{{item}}</view>
							<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="bg-gray" @tap="clk()" v-if="imgList.length<1">
							<text class='cuIcon-add'></text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex justify-between margin-tb padding bg-white">
			<view style="width: 15%;">
				<image class="round bg-black" :src="form.seller_brand_logo" style="width: 90upx;height: 90upx;" mode="aspectFit"></image>
			</view>
			<view @tap="navigationTo" style="width: 65%;" class="flex flex-direction justify-around">
				<text class="text-bold ">{{form.seller_title}}</text>
				<text class="text-sm">联系电话:<text>{{form.link_mobile}}</text></text>
				<text class="text-sm">地址:<text>{{form.seller_address}}</text><text class="text-theme">(导航到店)</text></text>
			</view>
			<view style="width:20%;height: 150upx;" class="flex flex-direction justify-center">
				<!-- <canvas :style="{width:qrcode_w+'px', height:qrcode_w+'px'}" canvas-id="couponQrcode0"></canvas> -->
				<image src="http://txcos.kelinteng.com/uploads/20191014/qrcode.png" style="width:130upx;height:130upx;" mode="aspectFit"></image>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
		<view class="cu-tabbar-height"></view>
		<view v-if="form.obj_type==257" @tap="submitForm" class="cu-bar foot block margin-bottom">
			<button class="cu-btn lg bg-theme block" style="width:90%;margin: 0 auto;">确认提交</button>
		</view>
	</view>
</template>

<script>
	var that,cos;
	var COS =require('../../utils/cos-wx-sdk-v5')
	export default {
		data() {
			return {
				qrcode_w: uni.upx2px(150),
				imgList: [],
				fileIndex:0,
				task:{},
				isSeller:false,
				form:{
					ordersn:'',
					insurance_policy_file:'',
					insurance_policy_link:'',
					link_mobile:'',
					log_paytime:'',
					log_paymodel:'',
					seller_title:'',
					status:'',
					statusText:'',
					seller_brand_logo:'',
					seller_latitude: "",
					seller_longitude: "",
					title: '',
					seller_address:''
				}
			}
		},
		onLoad(e) {
			that = this;
			this.initCOS();
			this.task.seller_id=e.seller_id
			this.task.id=e.id
			this.getServiceDetail()
		},
		methods: {
			submitForm(){
				let data={task_id:this.task.id,seller_id:this.task.seller_id,
				insurance_policy_link:this.form.insurance_policy_link,
				insurance_policy_file:this.imgList[0]};
				console.log(data);
				this.$api.postWithData(this.api.taskSellerSave,data,
					function callbacks(res){
						console.log(res);
						if(res.code==1){
							this.$api.msg(res.msg)
							setTimeout(function() {
								uni.navigateBack()
							}, 1500);
						}else{
							this.$api.msg(res.msg)
						}
						
					})
			},
			getServiceDetail(isSeller){
				let data={task_id:this.task.id,seller_id:this.task.seller_id}
				that.$api.postWithData(that.api.taskServiceDetail,data,
				function callbacks(res){
					if(res.code==1){
						that.form=res.data
						console.log(that.form.insurance_policy_file);
						if(that.form.insurance_policy_file!=null){
							that.imgList=[]
						}else{
							that.imgList[0]= that.form.insurance_policy_file
						}
					}
					console.log(res.data);
				})
			},
			navigationTo() {
				uni.openLocation({
					name: that.form.seller_title,
					address: that.form.seller_address,
					latitude: Number(that.form.seller_latitude),
					longitude: Number(that.form.seller_longitude),
				})
			},
			doUpload(rsp) {
				console.log(rsp.path);
				var filePath = rsp.path;
				var date = new Date(),
				year = date.getFullYear()+"",
				month = (date.getMonth() + 1)+"",
				day = date.getDate()+"",
				getNowFormatDate=year+month+day;
				if(this.fileIndex==0){
					var filename = date.getTime()+".png"
				}else{
					var filename=rsp.name
				}
				let fileKey='uploads/' + getNowFormatDate + '/' + filename;
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
			clk(){
				uni.showActionSheet({
					itemList:["图片",'文件'],
					success(e) {
						if(e.tapIndex==0){
							that.fileIndex=0
							uni.chooseImage({
								count: 1,
								sizeType: ['compressed'],
								sourceType: ['album', 'camera'],
								success: (r)=>{
									console.log(r);
									let path = r.tempFiles[0];
									console.log(path);
									that.doUpload(path)
								}
							})
						}else{
							// #ifdef MP-WEIXIN
							that.fileIndex=1;
							wx.chooseMessageFile({count:1,type:'file',
								success(r){
									let path = r.tempFiles[0];
									console.log(path)
									that.doUpload(path)
								}
							})
							// #endif
						}
					}
				})
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
		},
	}
</script>

<style>
	.grid.col-1.grid-square>uni-view{
		padding-bottom: 50%;
	}
	.grid.col-1.grid-square>view{
		padding-bottom: 50%;
	}
</style>
