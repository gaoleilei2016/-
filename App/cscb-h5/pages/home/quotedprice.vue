<template>
	<view v-once>
		<view class="bg-white margin-sm padding">
			<view class="margin-top-sm text-lg">基本信息</view>
			<view class="text-gray">
			<!-- <view class="margin-top-sm ">车型:{{orderInfo.carbrand}}</view> -->
			<view class="margin-top-sm ">服务类型:{{orderInfo.obj_type_name}}</view>
			<view class="margin-top-sm ">服务项目:</view>
			<view class="grid col-2 margin-sm">
				<view class="padding-xs text-cut" v-for="(item,indexs) in orderInfo.obj_type3_name" :key="indexs">
					<text>{{item.name}}</text>
				</view>
			</view>
			</view>
			<view class="text-lg">描述说明</view>
			<view class="margin-top-sm text-gray" v-if="orderInfo.content != '' && orderInfo.content != null" v-html="orderInfo.content"></view>
			<view class="margin-top-sm text-gray" v-else>暂无描述说明</view>
		</view>
		<view class="bg-white margin-sm" v-for="(item,index) in form.items" :key="index">
			<view class="flex justify-between align-center" style="min-height: 100upx;padding: 1upx 30upx;">
				<view ><input placeholder="请输入项目名称" v-model="item.name" name="input"></input></view>
				<view @click="deleteitem(index)" class="cuIcon-deletefill text-black"></view>
			</view>
			<view v-if="orderInfo.obj_type!=257" class="cu-form-group" style="min-height: 80upx;padding: 1upx 30upx;">
				<view>维修工时</view>
				<view><input type="digit" v-model="item.wxgs" class="text-right" placeholder-class="text-right" placeholder="请输入维修工时" name="input"></input></view>
			</view>
			<view class="cu-form-group " style="min-height: 80upx;padding: 1upx 30upx;" v-if="orderInfo.obj_type==257">
				<view>保险价格</view>
				<view><input type="digit" v-model="item.pjjg" class="text-right" placeholder-class="text-right" placeholder="请输入保险价格" name="input"></input></view>
			</view>
			<view class="cu-form-group " style="min-height: 80upx;padding: 1upx 30upx;" v-else>
				<view>材料价格</view>
				<view><input type="digit" v-model="item.pjjg" class="text-right" placeholder-class="text-right" placeholder="请输入材料价格" name="input"></input></view>
			</view>
			<view class="cu-form-group " style="min-height: 80upx;padding: 1upx 30upx;" v-if="orderInfo.obj_type==257">
				<view>保险公司</view>
				<view><input class="text-right" v-model="item.pjpp" placeholder-class="text-right" placeholder="请输入保险公司" name="input"></input></view>
			</view>
			<view class="cu-form-group " style="min-height: 80upx;padding: 1upx 30upx;" v-else>
				<view>材料品牌</view>
				<view><input class="text-right" v-model="item.pjpp" placeholder-class="text-right" placeholder="请输入材料品牌" name="input"></input></view>
			</view>
			<view class="cu-form-group " style="min-height: 80upx;padding: 1upx 30upx;" v-if="orderInfo.obj_type!=257">
				<view>维修时间</view>
				<view><input class="text-right" v-model="item.wxsj" placeholder-class="text-right" placeholder="请输入维修时间" name="input"></input></view>
			</view>
			<view class="cu-form-group " style="min-height: 80upx;padding: 1upx 30upx;" v-if="orderInfo.obj_type==257">
				<view>保险有限期</view>
				<view><input class="text-right" v-model="item.zbsj" placeholder-class="text-right" placeholder="请输入保险有限期" name="input"></input></view>
			</view>
			<view class="cu-form-group " style="min-height: 80upx;padding: 1upx 30upx;" v-else>
				<view>质保时间</view>
				<view><input class="text-right" v-model="item.zbsj" placeholder-class="text-right" placeholder="请输入质保时间" name="input"></input></view>
			</view>
		</view>
		<view @tap="openDialog" class="padding text-center ">
			<button class="cu-btn block margin-lr lg radius shadow bg-white">继续添加</button>
		</view>
		<view class="cu-form-group margin-lr-sm" style="padding: 1upx 30upx;" v-if="orderInfo.obj_type==257">
			<view>图片</view>
			<view style="width: 80%;">
				<view class="grid col-4 grid-square flex-sub justify-end padding-tb">
					<view class="bg-img" style="margin-right:20rpx;margin-bottom:0;" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" style="margin-right:20rpx;margin-bottom:0;" @tap="clk(0)" v-if="imgList.length<3">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white margin-sm padding">
			<view class="text-bold margin-bottom-sm">维修建议</view>
			<textarea v-if="modalName==null" style="height:150upx;" v-model="form.desc" placeholder="请输入维修建议..."></textarea>
		</view>
		<view class="cu-bar foot padding-lr bg-theme text-white">
			<text>总价:<text class="text-price margin-left">{{form.price}}</text></text>
			<form report-submit="true" @submit="submit">
			<button  form-type="submit" class="cu-btn bg-transparent text-white">提交价格</button>
			</form>
		</view>
		<view class="cu-tabbar-height "></view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">项目名称</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view><input v-model="value" class="text-left" placeholder-class="text-left" placeholder="请输入项目名称" name="input"></input></view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="confirm">确定</button>
					</view>
				</view>
			</view>
		</view>
		<avatar @upload="doUpload" @avtinit="doBefore" quality="2" ref="avatar"></avatar>
	</view>
</template>

<script>
	var that,cos;
	var COS =require('../../utils/cos-wx-sdk-v5')
	export default {
		data() {
			return {
				imgList: [],
				value: '',//项目名称
				list: {},
				wxgs: 0,
				modalName:null,
				orderInfo: {},
				form: {
					formId:'',
					task_id:0,
					price:0,
					items:[
						{
							"name": '默认项目(点击可修改)',
							"wxgs": '',
							"pjjg": '',
							"pjpp": "",
							"wxsj": '',
							"zbsj": ""
						},
					],
					files:'',
					desc: "",//维修建议
				}
			};
		},
		updated() {
		    var delprice = 0;
		    this.form.items.forEach(function (item, index) {
		        delprice += (parseFloat(item.wxgs == '' ? 0 : item.wxgs) + parseFloat(item.pjjg == '' ? 0 : item.pjjg));
		    })
		    this.form.price = this.toDecimal(delprice)
		},
		onLoad(e) {
			that=this;
			that.initCOS();
			this.form.task_id=e.task_id
			if(e.type==0){//修改报价
				this.taskLogDetail()
				this.taskDetail()
			}else{//新增报价
				this.taskDetail()
			}
		},
		methods: {
			clk(index) {
				const { windowWidth, windowHeight } = uni.getSystemInfoSync();
				this.$refs.avatar.fChooseImg(index, {
					selWidth: windowWidth-50+"px",
					selHeight: windowWidth-50+"px",
					expWidth: "800px",
					expHeight:"800px",
					inner: index ? 'true' : 'true',
					canRotate: "false"
				});
			},
			doBefore() {
				console.log('doBefore');
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
					// console.log(that.api.UPLOAD_HOST+fileKey);
					that.imgList.push(that.api.UPLOAD_HOST+fileKey)
					// console.log(that.imgList)
				});
				// this.$set(this.urls, rsp.index, rsp.path);
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
			//获取报价数据
			taskLogDetail(){
				this.$api.postWithData(this.api.taskLogDetail,{task_id:this.form.task_id},
					function callbacks(res){
						that.form.desc=res.data.desc
						that.form.items=JSON.parse(res.data.items)
						if(res.data.files!=null){
							let images=res.data.files.split(",")
							if(images[0]!=''&&images[0]!=null){
								for (let i = 0; i < images.length; i++) {
									that.imgList.push(images[i])
								}
							}
						}
					})
			},
			taskDetail(){
				this.$api.postWithData(this.api.taskDetail,{task_id:this.form.task_id},
				function callbacks(res) {
					if(res.code==0){
						that.$api.msg("当前挂单已关闭或不存在")
						setTimeout(function() {
							uni.navigateBack()
						}, 2000);
						return;
					}
					that.orderInfo=res.data;
				})
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			openDialog() {
				this.modalName = 'DialogModal1';
			},
			deleteitem(index) {
				var delprice = 0;
				// console.log(index)
				// var index = this.indexOf(this.form.items);
				if (index > -1) {
				    this.form.items.splice(index, 1);
				}
				this.form.items.forEach(function (item, index) {
				    // console.log(parseFloat(item.wxgs))
				    delprice += (parseFloat(item.wxgs == '' ? 0 : item.wxgs) + parseFloat(item.pjjg == '' ? 0 : item.pjjg));
				    // console.log(toDecimal(delprice))
				})
				this.form.price = this.toDecimal(delprice)
			},
			confirm() {
				if (this.value == '') {
					this.$api.msg('请填写项目名称')
					return;
				}
				var name = this.value;
				// console.log(name)
				this.list = {
					"name": name,
					"wxgs": '',
					"pjjg": '',
					"pjpp": "",
					"wxsj": '',
					"zbsj": ""
				}
				// console.log(this.list.name)
				this.form.items.push(this.list)
				this.value='';
				this.modalName = null
			},
			submit(e) { //提交价格
				console.log(e.detail.formId)
				this.form.formId=e.detail.formId
				if(this.orderInfo.obj_type==257){
					for (let i = 0; i < this.form.items.length; i++) {
						if(this.form.items[i].name==''){
							this.$api.msg("第"+(i+1)+"个项目名称不能为空")
							return;
						}
						if(this.form.items[i].pjjg==''){
							this.$api.msg("第"+(i+1)+"个保险价格不能为空")
							return;
						}
						if(this.form.items[i].pjpp==''){
							this.$api.msg("第"+(i+1)+"个保险公司不能为空")
							return;
						}
						if(this.form.items[i].zbsj==''){
							this.$api.msg("第"+(i+1)+"个保险有限期不能为空")
							return;
						}
					}
					var images = '';
					for (var i = 0; i < this.imgList.length; i++) {
						if (i < (this.imgList.length - 1)) {
							images += this.imgList[i] + ",";
						} else {
							images += this.imgList[i];
						}
					}
					this.form.files = images;
				}else{
					for (let i = 0; i < this.form.items.length; i++) {
						if(this.form.items[i].name==''){
							this.$api.msg("第"+(i+1)+"个项目名称不能为空")
							return;
						}
						if(this.form.items[i].wxgs==''){
							this.$api.msg("第"+(i+1)+"个维修工时不能为空")
							return;
						}
						if(this.form.items[i].pjjg==''){
							this.$api.msg("第"+(i+1)+"个材料价格不能为空")
							return;
						}
						if(this.form.items[i].pjpp==''){
							this.$api.msg("第"+(i+1)+"个材料品牌不能为空")
							return;
						}
						if(this.form.items[i].wxsj==''){
							this.$api.msg("第"+(i+1)+"个维修时间不能为空")
							return;
						}
						if(this.form.items[i].zbsj==''){
							this.$api.msg("第"+(i+1)+"个质保时间不能为空")
							return;
						}
					}
				}
				if(this.form.desc==''){
					this.$api.msg("维修建议不能为空")
					return;
				}
				console.log(this.form);
				this.$api.postWithData(this.api.bidding,
				{task_id:this.form.task_id,items:JSON.stringify(this.form.items),
				price:this.form.price,files:this.form.files,desc:this.form.desc},
					function callbacks(res){
						if(res.code==1){
							that.$api.msg(res.msg)
							uni.reLaunch({
								url:'../index/index'
							})
						}
					})
			},
			toDecimal(x) { //四舍五入保留2位小数
			    var f = parseFloat(x);
			    if (isNaN(f)) {
			        return;
			    }
			    f = Math.round(x * 100) / 100;
			    return f;
			},
		},
	}
</script>

<style>
</style>
