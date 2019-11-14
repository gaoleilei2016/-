<template>
	<view class="">
		<view class="bg-white padding">
			<view>
				<view class="flex justify-center align-center margin-top">
					<view>
						<image style="width:80upx; height:60upx;" mode="aspectFit" src="../../static/success51.png"></image>
					</view>
					<text class="text-green">支付成功</text>
				</view>
				<view class="flex justify-center align-center margin-top">
					<text class="text-price text-xxxl text-black">{{form.log_price}}</text>
				</view>
			</view>
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
			<view class="padding-top flex justify-between bg-white solid-top">
				<view class="flex flex-direction justify-center" style="width: 30%;">
					<text class="text-black">保单凭证</text>
				</view>
				<view class="flex-twice" style="width: 50%;height: 200upx;">
					<view class="grid col-1 grid-square" style="height: 200upx;">
						<view class="bg-img" @tap="ViewImage" :data-url="form.insurance_policy_file">
							<image style="height: 200upx;" v-if="form.insurance_policy_file.indexOf('png')!=-1" :src="form.insurance_policy_file" mode="aspectFill"></image>
							<image style="height: 200upx;" v-if="form.insurance_policy_file.indexOf('jpg')!=-1" :src="form.insurance_policy_file" mode="aspectFill"></image>
							<image style="height: 200upx;" v-if="form.insurance_policy_file.indexOf('jpeg')!=-1" :src="form.insurance_policy_file" mode="aspectFill"></image>
							<view v-if="form.insurance_policy_file.indexOf('pdf')!=-1" style="width: 100%;height: 200upx;" >{{form.insurance_policy_file}}</view>
							<view v-if="form.insurance_policy_file.indexOf('doc')!=-1" style="width: 100%;height: 200upx;" >{{form.insurance_policy_file}}</view>
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
			this.task.id=e.id
			this.task.uid=e.uid
			this.getServiceDetail()
		},
		methods: {
			getServiceDetail(){
				let data={task_id:this.task.id,uid:this.task.uid}
				that.$api.postWithData(that.api.taskServiceDetail,data,
				function callbacks(res){
					that.form=res.data
					if(that.form.insurance_policy_file==null){
						that.form.insurance_policy_file=""
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
