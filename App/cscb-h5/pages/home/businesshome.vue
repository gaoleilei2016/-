<template>
	<view v-once>
		<view style="position: fixed;">
			<image src="../../static/bb.png" mode="widthFix" style="width: 100vw;"></image>
		</view>
		<view style="position: absolute;top:30upx;z-index: 1000;width: 100%;" class="align-center text-center">
			<image class="round" mode="aspectFill" :src="seller.brand_logo" style="width: 150upx;height: 150upx;position: relative;z-index: 2;"></image>
			<view class="bg-white align-center text-center padding-tb" style="position: relative;top: -80upx;width: 95%;z-index: 1;margin: 0 auto;padding-top:90upx ;">
				<view class="text-lg">{{seller.title}}</view>
				<view class="padding text-gray solid-bottom">商家地址:{{seller.address}}</view>
				<view class="flex justify-around padding">
					<view :class="index==1?'text-bold':''" @tap="getCYTaskListM(1,true)" class="flex flex-direction">
						<text>{{seller.task_sum}}</text>
						<text class="text-theme margin-top-xs">竞标记录</text>
					</view>
					<view class="flex flex-direction justify-end">
						<text class="text-theme">|</text>
					</view>
					<view :class="index==2?'text-bold':''" @tap="getMyServiceListM(2,true)" class="flex flex-direction">
						<text>{{seller.task_num}}</text>
						<text class="text-theme margin-top-xs">成单记录</text>
					</view>
					<view class="flex flex-direction justify-end">
						<text class="text-theme">|</text>
					</view>
					<view :class="index==3?'text-bold':''" @tap="getMyIncomeListM(3,true)" class="flex flex-direction">
						<text class="text-price">{{seller.task_money}}</text>
						<text class="text-theme margin-top-xs">商家收益</text>
					</view>
				</view>
				<view class="bar padding-xs"> </view>
				<block v-if="index==1">
					<view class="cu-bar bg-white solid-bottom" style="min-height:40px;">
						<view class="action ">
							<text class="text-df text-black text-bold">竞标记录</text>
						</view>
					</view>
					<view class="text-left cu-card article no-card solid-bottom" v-for="(item,index) in getCYTaskList" :key="index">
						<view class="cu-item shadow" style="border-radius: 0upx;">
							<view class="cu-bar bg-white " style="min-height:80upx;">
								<view class="action ">
									<text class="text-df">服务单号:{{item.ordersn}}</text>
								</view>
								<view @tap="navigateTo('../home/service_detail?seller_id='+item.seller_id+'&id='+item.id)" v-if="item.status == 2 || item.status == 3" class="action text-theme text-bold">
									服务详情
								</view>
							</view>
							<view @tap="navigateTo('../home/shopselect?task_id='+item.id)" :class="item.log_seller_id == item.seller_id?'background-zb':'background-wz'"  class="content">
								<image style="width: 180upx;" :src="item.image.split(',')[0]" mode="aspectFill"></image>
								<view class="desc">
									<view class="text-df flex justify-between align-center"> 
									 <text>{{item.title}}</text>
									 <!-- <text class="text-gray text-sm">225m</text> -->
									</view>
									<view class="text-sm text-gray"><text>{{item.content}}</text></view>
									<!-- <view class="text-sm text-gray">车型:<text>奥迪A8</text></view> -->
									<view class="text-sm text-gray">服务类型:<text>{{item.car_info}}</text></view>
									<view class="text-sm text-orange" v-if="seller_id == item.seller_id">我的报价:<text class="text-price">{{item.price}}</text></view>
									<view class="text-sm text-orange" v-else>TA的报价：¥ ****元</text></view>
								</view>
							</view>
						</view>
					</view>
				</block>
				<block v-if="index==2">
					<view class="cu-bar bg-white solid-bottom" style="min-height:40px;">
						<view class="action ">
							<text class="text-df text-black text-bold">我的服务</text>
						</view>
					</view>
					<view class="text-left cu-card article no-card solid-bottom" v-for="(item,index) in getMyServiceList" :key="index">
						<view class="cu-item shadow" style="border-radius: 0upx;">
							<view class="cu-bar bg-white " style="min-height:80upx;">
								<view class="action ">
									<text class="text-df">服务单号:{{item.ordersn}}</text>
								</view>
								<view @tap="navigateTo('../home/service_detail?seller_id='+item.seller_id+'&id='+item.id)" v-if="item.status == 2 || item.status == 3" class="action text-theme text-bold">
									服务详情
								</view>
							</view>
							<view  @tap="navigateTo('../home/shopselect?task_id='+item.id)" :class="item.log_seller_id == item.seller_id?'background-zb':'background-wz'"  class="content">
								<image style="width: 180upx;" :src="item.image.split(',')[0]" mode="aspectFill"></image>
								<view class="desc">
									<view class="text-df flex justify-between align-center"> 
									 <text>{{item.title}}</text>
									 <!-- <text class="text-gray text-sm">225m</text> -->
									</view>
									<view class="text-sm text-gray"><text>{{item.content}}</text></view>
									<view class="text-sm text-gray">服务类型:<text>{{item.car_info}}</text></view>
									<view class="text-sm text-gray">预计时间:<text>{{item.time}}</text></view>
									<view class="text-sm text-orange" v-if="seller_id == item.seller_id">我的报价:<text class="text-price">{{item.price}}</text></view>
									<view class="text-sm text-orange" v-else>TA的报价：¥ ****元</text></view>
								</view>
							</view>
						</view>
					</view>
				</block>
				<block v-if="index==3">
					<view class="cu-bar bg-white solid-bottom" style="min-height:40px;">
						<view class="action ">
							<text class="text-df text-black text-bold">我的收益</text>
						</view>
					</view>
					<view class="text-left cu-card article no-card solid-bottom" v-for="(item,index) in getMyIncomeList" :key="index">
						<view class="cu-item shadow" style="border-radius: 0upx;padding-top: 30rpx;padding-bottom: 30rpx">
							<view  class="content">
								<view class="desc">
									<view>账单号:<text>{{item.ordersn}}</text></view>
									<view class="margin-tb-sm text-orange">到账金额:<text class="text-price">{{item.seller_money}}</text></view>
									<view>到账时间:<text>{{item.create_at}}</text></view>
								</view>
							</view>
						</view>
					</view>
				</block>
				<view class="cu-load margin-bottom" :class="isLoad?'loading':'over'"></view>
				<view class="cu-modal bg-modal" :class="modalMPShow==1?'show':''">
					<view class="cu-dialog bg-white padding" style="width: 600upx;">
						<view class="margin">
							<view class="text-black margin-top-sm padding-lr">{{msg}}</view>
							<button session-from="businesshome" open-type="contact" class="cu-btn block bg-green margin-top">关注公众号</button>
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
				isLoad:true,
				modalMPShow:0,
				seller: {
					address: "",brand_logo: "",city: "",district: "",id: 0,latitude: "",longitude: "",
					phone: "",price: "0",province: "",status: 1,task_money: "0",task_num: 0,task_sum: 0,
					title: "",type: "1",view: 347
				},
				seller_id:0,
				getCYTaskList:[],//我的竞标记录
				getMyServiceList:[],//我的服务记录
				getMyIncomeList:[],//我的收益记录
				index:1,
				msg:'',
				form:{
					page:1,
					size:5
				}
			}
		},
		onShow() {
			that=this;
			this.seller_id=uni.getStorageSync("seller_id")
			this.$api.post(this.api.seller,
				function callbacks(res){
					if(res.code==0){
						that.msg=res.msg;
						that.modalMPShow=1;
					}else{
						that.seller=res.data
						that.modalMPShow=0;
					}
			})
			this.getCYTaskListM(1,true)
		},
		onReachBottom() {
			this.form.page++;
			if(this.index==1){
				this.getCYTaskListM(1,false)
			}else if(this.index==2){
				this.getMyIncomeListM(2,false)
			}else{
				this.getMyServiceListM(3,false)
			}
		},
		methods: {
			navigateTo(url){
				uni.navigateTo({
					url:url
				})
			},
			getCYTaskListM(pos,load){//竞标记录
				this.isLoad=true;
				this.index=pos;
				if(load){
					this.form.page=1;
					this.getCYTaskList=[]
				}
				this.$api.postWithData(this.api.getCYTaskList,this.form,
					function callbacks(res){
						if(load==false){
							// console.log(res.data);
							if(res.data==null){
								that.isLoad=false;
								return;
							}
							for (let i = 0; i < res.data.length; i++) {
								that.getCYTaskList.push(res.data[i]);
							}
						}else{
							that.getCYTaskList=res.data
						}
						if(that.getCYTaskList.length<=2){
							that.isLoad=false;
						}
				})
			},
			getMyIncomeListM(pos,load){//服务记录
				this.isLoad=true;
				this.index=pos;
				if(load){
					this.form.page=1;
					this.getMyIncomeList=[]
				}
				this.$api.postWithData(this.api.getMyIncomeList,this.form,
					function callbacks(res){
						if(load==false){
							if(res.data.length<=0){
								that.isLoad=false;
							}
							for (let i = 0; i < res.data.length; i++) {
								that.getMyIncomeList.push(res.data[i]);
							}
						}else{
							that.getMyIncomeList=res.data
						}
						if(that.getMyIncomeList.length<=2){
							that.isLoad=false;
						}
				})
			},
			getMyServiceListM(pos,load){//收益记录
				this.isLoad=true;
				this.index=pos;
				if(load){
					this.form.page=1;
					this.getMyServiceList=[]
				}
				this.$api.postWithData(this.api.getMyServiceList,this.form,
					function callbacks(res){
						if(load==false){
							if(res.data.length<=0){
								that.isLoad=false;
							}
							for (let i = 0; i < res.data.length; i++) {
								that.getMyServiceList.push(res.data[i]);
							}
							
						}else{
							that.getMyServiceList=res.data
						}
						if(that.getMyServiceList.length<=2){
							that.isLoad=false;
						}
				})
			}
		},
	}
</script>

<style>
	.bar{
		background: #EEE;
		height: 10upx;
		width: 100%;
	}
	.background-zb{
		background: url(../../static/zhongbiao.png) no-repeat;
		background-color: #ffffff;
		background-size:92upx 85upx;
		background-position: 90% 100%;
	}
	.background-wz{
		background-image: url(../../static/weizhongbiao.png);
		background-repeat: no-repeat;
		background-size:92upx 85upx;
		background-position: 90% 100%;
	}
	.cu-btn{
		height: 80upx;
	}
</style>
