<template>
	<view>
		<view class="margin-lr-sm padding-tb-sm">
			<view class="bg-white padding">信息统计</view>
			<view class="solid"></view>
			<view class="flex justify-around bg-white padding">
				<view class="text-center margin-tb">
					<view>{{myPubData.count}}</view>
					<view class="margin-top-sm">发布记录</view>
				</view>
				<view class="text-center margin-tb">
					<view>{{myPubData.success}}</view>
					<view class="margin-top-sm">交易成功</view>
				</view>
				<view class="text-center margin-tb">
					<view class="text-price">{{myPubData.total_price}}</view>
					<view class="margin-top-sm">支出金额</view>
				</view>
			</view>
		</view>
		<view class="cu-list grid no-border col-5 margin-lr-sm">
			<view :class="checkedIndex==index?'text-theme':'text-gray'" @click="checked(index)" class="cu-item" v-for="(item,index) in ciygn" :key="index" >
				<view :class="['cuIcon-' + item.cuIcon]"></view>
				<view class="margin-top-sm">{{item.name}}</view>
			</view>
		</view>
		<view class="cu-card article no-card margin-tb-sm margin-lr-sm" v-for="(item,index) in orderRes" :key="index">
			<view class="cu-item shadow" style="border-radius: 0upx;padding-bottom: 0;">
				<view class="cu-bar bg-white solid-bottom" style="min-height:40px;">
					<view class="action ">
						<text class="text-df">单号:{{item.ordersn}}</text>
					</view>
					<view v-if="item.status == 10" class="action text-theme text-bold">等待报价</view>
					<view v-if="item.status == 0" class="action text-theme text-bold">待审核</view>
					<view v-if="item.status == 1" class="action text-theme text-bold">报价中</view>
					<view v-if="item.status == 2" class="action text-theme text-bold">服务中</view>
					<view v-if="item.status == 3" class="action text-theme text-bold">已完成</view>
					<view v-if="item.status == 4" class="action text-theme text-bold">已关闭</view>
					<view v-if="item.status == 5" class="action text-theme text-bold">平台关闭</view>
					<view v-if="item.status == 6" class="action text-theme text-bold">售后中</view>
					<view v-if="item.status == -1" class="action text-theme text-bold">已删除</view>
					<view @click="lookwuliu(item)" v-if="item.experss_no" class="action text-theme text-bold">查看物流</view>
				</view>
				<view class="content margin-tb">
					<image lazy-load="true" style="width: 180upx;" :src="item.image" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-df flex justify-between align-center"> 
						 <text>{{item.title}}</text><text class="text-grays text-sm" v-if="false">{{item.distance==null?0:item.distance|km}}</text>
						</view>
						<view class="text-sm text-grays" v-html="item.content"></view>
						<!-- <view class="text-sm text-grays">车型描述:<text>奥迪A8</text></view> -->
						<view class="text-sm text-grays">服务类型:<text>{{item.obj_type_name}}</text></view>
						<view class="text-sm text-grays">所在地区:<text>{{item.address}}</text></view>
					</view>
				</view>
				<view class="cu-bar bg-white solid-top" style="min-height:40px;">
					<view class="action padding-tb-sm">
						<button class="text-sm cu-btn round lines-theme shadow margin-right-xs">报价商家({{item.bidCount}})</button>
						<button @click="comment(item)" v-if="item.status == 3 && item.comment == 1"  class="text-sm cu-btn round lines-theme shadow margin-right-xs">去评价</button>
						<button @click="closeFuwu(item)" v-else-if="item.status == 1" class="text-sm cu-btn round lines-theme shadow">关闭服务</button>
						<button v-else-if="item.status == 4" class="text-sm cu-btn round lines-theme shadow">已关闭</button>
						<button v-else-if="item.status == 0" class="text-sm cu-btn round lines-theme shadow">待审核</button>
					</view>
					<view class="action padding-tb-sm">
						<button  @click="navigateTo('../home/shopselect?task_id='+item.id)" class="text-sm cu-btn round lines-theme shadow margin-right-xs">查看详情</button>
						<!-- <button  @click="paySuccessPage(item)" class="text-sm cu-btn round lines-theme shadow margin-right-xs">查看详情</button> -->
						<button  @click="navigateTo('../index/precisefabu?task_id='+item.id+'&type=1')" v-if="(item.status == 0 || item.status == 1) && item.obj_type2 != 0" class="text-sm cu-btn round lines-theme shadow">编辑</button>
						<button  @click="navigateTo('../index/fastfabu?task_id='+item.id+'&type=1')" v-if="(item.status == 0 || item.status == 1) && item.obj_type2 == 0" class="text-sm cu-btn round lines-theme shadow">编辑</button>
						<button  @click="paySuccessPage(item)" v-if="(item.status == 2 || item.status == 3)" class="text-sm cu-btn round lines-theme shadow margin-right-xs">服务详情</button>
					</view>
				</view>
			</view>
		</view>
		<div v-if="true" class="positionWrap">
			<div class="position" @tap="showModal" data-target="bottomModal">
				<span>发布</span>
			</div>
		</div>
		<view class="cu-modal bottom-modal" @tap="modalName=null" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog " style="border-top-right-radius: 20upx;border-top-left-radius: 20upx;">
				<view class="cu-bars">
					<view class="action text-green"></view>
					<view class="action text-blue text-xl" @tap="hideModal"><text class="cuIcon-close"></text></view>
				</view>
				<view class="padding-lr-xl padding-bottom-xl flex justify-around text-center align-center">
					<view @tap="navigateTo('../index/fastfabu?type=0&from=publishid')" open-type="navigate">
						<image src="../../static/ksfb2.png" mode="aspectFit" style="width:90%;height:130upx;"></image>
						<text class="text-bold text-red1">快速发布</text>
					</view>
					<view style="width: 1px;height:150upx;background: #ddd;"></view>
					<view @tap="navigateTo('../index/precisefabu?type=0&from=publishid')" open-type="navigate">
						<image src="../../static/jzfb2.png" mode="aspectFit" style="width:90%;height:130upx;"></image>
						<text class="text-bold">精准发布</text>
					</view>
				</view>
			</view>
		</view>
		<load-tip :visible="isLoad"></load-tip>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				modalName:null,
				isLoad:true,
				myPubData: 
				{
					"count": 0,
					"success": 0,
					"total_price": 0
				},
				orderRes:[],
				ciygn: [{cuIcon: 'calendar',color: 'theme',name: '全部订单',value:0}, 
				{cuIcon: 'time',color: 'gray',name: '待审核',value:100}, 
				{cuIcon: 'sponsor',color: 'gray',name: '服务报价',value:1}, 
				{cuIcon: 'newshot',color: 'gray',name: '正在服务',value:2}, 
				{cuIcon: 'edit',color: 'gray',name: '服务完成',value:3}],
				checkedIndex:0,
				page:1,
				size:10
			};
		},
		filters: {
			km: function(val) {
				if(val!=null){
					return (Number(val) / 1000).toFixed(2) + 'km';
				}else{
					return "";
				}
			}
		},
		onShow() {
			that=this;
			this.$eventBus.$on('myTaskList',
			 function() {
				that.initData();
			});
		},
		onLoad() {
			this.initData();
		},
		onPullDownRefresh() {
			this.page=1;
			this.isLoad=true;
			this.orderRes=[];
			this.myTaskList(this.ciygn[this.checkedIndex].value, this.page)
		},
		onReachBottom() {
			this.page++;
			this.myTaskList(this.ciygn[this.checkedIndex].value, this.page)
		},
		methods: {
			initData(){
				this.isLoad=true;
				this.page=1;
				this.checkedIndex=0;
				this.orderRes=[];
				this.myTaskList(this.ciygn[this.checkedIndex].value, this.page);
				this.initmyPubData();
			},
			closeFuwu(item){
				this.$api.postWithData(this.api.closeTask,{task_id:item.id},
					function callbacks(res){
						if(res.data.code==1){//关闭服务成功
							this.$api.msg(res.data.msg)
						}else{
							this.$api.msg(res.data.msg)
						}
					})
			},
			initmyPubData(){
				this.$api.post(this.api.myPubData,
					function callbacks(res){
						that.myPubData=res.data
					})
			},
			myTaskList(index,page){
				this.$api.postWithData(this.api.myTaskList,{page:page,size:10,index:index},
					function callbacks(res){
					var data = res.data;
					if (data.length >0) {
						that.isLoad = true;
					} else {
						that.isLoad = false;
					}
					for (var i = 0; i < data.length; i++) {
						that.orderRes.push(data[i]);
					}
					for (var i = 0; i < that.orderRes.length; i++) {
						that.orderRes[i].image=that.orderRes[i].image==''?'../../static/logo.jpg':that.orderRes[i].image.split(",")[0]
					}	
					if(that.orderRes.length<=5){
						that.isLoad = false;
					}
					uni.stopPullDownRefresh()
				})
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			checked(index) {
				this.checkedIndex = index
				this.orderRes=[]
				this.page=1;
				this.isLoad=true;
				this.myTaskList(this.ciygn[index].value, this.page)
			},
			navigateTo(url) {
				this.modalName = null
				uni.navigateTo({
					url: url
				})
			},
			paySuccessPage(item){
				uni.navigateTo({
					url:'../home/service_detail_user?id='+item.id+'&uid='+item.uid
				})
				// this.$api.postWithData(this.api.payResult,{ordersn:ordersn},
				// 	function callbacks(res){
				// 		if(res.code==0){
				// 			that.loading=false;
				// 			that.$api.msg(res.msg)
				// 		}else{
				// 			uni.navigateTo({url:'../home/paysuccess?data='+JSON.stringify(res.data)})
				// 		}
				// })
			}
		},
	}
</script>

<style>
	.positionWrap {
		width: 100%;
		position: fixed;
		text-align: center;
		bottom:30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.position {
		border-radius: 1000upx;
		color: #193172;
		z-index: 9999;
		-moz-box-shadow:0px 0px 25px darkgrey;
		-webkit-box-shadow:0px 0px 25px darkgrey;
		box-shadow:0px 0px 25px darkgrey;
		/* box-shadow: darkgrey 0 0.2rem 2rem 0; */
		line-height: 120upx;
		background: #fff;
		width:120upx;
		height:120upx;
	}
	.cu-bars {
		display: flex;
		position: relative;
		align-items: center;
		padding-right: 30upx;
		padding-top: 30upx;
		min-height: 30upx;
		justify-content: space-between;
	}
	.text-red1 {
		color: #FF0202
	}
	
</style>
