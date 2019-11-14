<template name="mine">
	<view v-once style="background-color: #f2f2f2;">
		<cu-custom bgColor="bg-theme" :isCustom="false" :isBack="false"><block slot="backText"></block><block slot="content">会员中心</block></cu-custom>
		<scroll-view scroll-y class="page">
			<view class="bg">
				<view class="bg2" style="position: relative;">
					<view class="flex justify-center styl1 align-center text-center">
						<text class="cuIcon-settings"></text>
						<text @tap="navigateTo('../mine/h5?url=/index/rebate/member3.html')" class="margin-left-sm margin-right">资料编辑</text>
					</view>
					<view class="flex margin-left padding-top align-center">
						<view class="cu-avatar xl round" :style="'background-image:url('+avatarUrl+')'"></view>
						<view class="white margin-left-sm">
							<view class="text-white text-lg">{{nickname}}</view>
						</view>
					</view>
					<view class="margin-left margin-top padding-top text-white">
						<view class="cu-tag bg-orange round">
							会员 Lv.1<text class="cuIcon-videofill text-white margin-left-sm"></text>
						</view>
					</view>
				</view>
				<view class="lines"></view>
			</view>
			<view class="cu-tabbar-height1"></view>
			<view class="solids-top"></view>
			<view class="bg-white padding-top">
				<text class="text-bold text-black margin-left">常用功能</text>
				<view class="cu-list grid no-border col-3">
					<view @tap="navigateTo(item.url)" class="cu-item" v-for="(item,index) in changygn" :key="index" >
						<button :session-from="item.sessionFrom" send-message-title="关注公众号" send-message-img="http://txcos.kelinteng.com/uploads/20191014/qrcode.png" :show-message-card="item.url=='2'" :open-type="(item.url=='1'||item.url=='2')?'contact':''" style="background:transparent;background-color:transparent; line-height:1">
							<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
							</view>
							<text>{{item.name}}</text>
						</button>
					</view>
				</view>
			</view>
			<!-- <view class="solids-top"></view> -->
			<view class="bg-white padding-top">
				<text class="text-bold text-black margin-left" v-if="sellerFuns !==undefined && sellerFuns.length > 0 ">我是商家</text>
				<view class="cu-list grid no-border col-3">
					<view @tap="navigateTo(item.url)" class="cu-item" v-for="(item,index) in sellerFuns" :key="index" >
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						</view>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
			<!-- <view class="solids-top"></view> -->
			<view class="bg-white padding-top">
				<text class="text-bold text-black margin-left" v-if="otherFuns !==undefined && otherFuns.length > 0 ">扩展功能</text>
				<view class="cu-list grid no-border col-3">
					<button style="background:transparent;background-color:transparent; line-height:1" @tap="navigateTo(item.url)" :open-type="item.name=='在线客服'?'contact':''" class="cu-item" v-for="(item,index) in otherFuns" :key="index" >
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						</view>
						<text>{{item.name}}</text>
					</button>
					<!-- <navigator
						class="cu-item"
					    target="miniProgram"
					    open-type="navigate"
					    :app-id="tuchaoAppid"
					    :extra-data="extraData"
					    version="release">
					    <view  :class="['cuIcon-info','text-yellow']">
					    </view>
					    <text>关于我们</text>
					</navigator> -->
				</view>
			</view>
			<view class=" text-center padding text-sm text-gray">
				贵州柯林腾网络科技有限公司版权所有
			</view>
			<!-- <view class="cu-tabbar-height"></view>
			<view class="cu-tabbar-height"></view>
			<view class="cu-tabbar-height"></view> -->
		</scroll-view>
		<view class="cu-modal" @tap="modalName=null" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog ">
				<view class="cu-bar bg-white justify-end">
					<view class="content">核销信息</view>
					<view class="action" @tap="modalName=null">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl flex flex-direction justify-start text-left" style="line-height: 50upx;">
					<text>挂单单号:{{scanTaskResult.tp_ordersn}}</text>
					<text>挂单金额:{{scanTaskResult.tp_price}}</text>
					<text>挂单标题:{{scanTaskResult.tp_title}}</text>
					<text>用户:{{scanTaskResult.nickname}}</text>
					<text>车牌号:{{scanTaskResult.number}}</text>
					<text>核销状态:{{scanTaskResult.vc_status==0?'未使用':'已核销'}}</text>
					<text>核销商家:{{scanTaskResult.seller_title}}</text>
					<text>核销时间:{{scanTaskResult.vc_use_time}}</text>
				</view>
			</view>
		</view>
		<view class="cu-modal bg-modal" :class="modalMPShow==1?'show':''">
			<view class="cu-dialog ">
				<view class="cu-bar bg-white justify-end">
					<view class="content">关注公众号</view>
					<view class="action" @tap="showModalMP">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl modal-content" style="line-height: 50upx;">
					<image src="http://txcos.kelinteng.com/uploads/20191014/qrcode.png" mode="widthFix" style="width: 60vw;"></image>
					<view class="mc-tips">
						<view class="mct-title">怎么找到公众号?</view>
						<view class="mct-txt">
							1.截屏保存，打开微信扫一扫识别二维码并关注
						</view>
						<view class="mct-txt">
							2.微信搜索“创世车宝公众服务号”关注即可
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
		name: "mine",
		data() {
			return {
				//../home/businesshome ../mine/sjmb ../home/orderpage ../home/paysuccess
				tuchaoAppid:'wx8abaf00ee8c3202e',
				extraData:{},
				modalName:null,
				avatarUrl:'',
				nickname:'',
				modalMPShow: 0,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				changygn:[
					{
						cuIcon: 'calendar',
						color: 'olive',
						name: '我的挂单',
						url:'../mine/publishbid',
						sessionFrom: '',
					},{
						cuIcon: 'moneybag',
						color: 'red',
						name: '我是商家',
						url:'../home/businesshome',
						sessionFrom: '',
					},{
						cuIcon: 'scan',
						color: 'black',
						name: '扫码核销',
						url:'smhx',
						sessionFrom: '',
					},{
						cuIcon: 'service',
						color: 'orange',
						name: '客服热线',
						url:'4000851667',
						sessionFrom: 'phone',
					},{
						cuIcon: 'message',
						color: 'cyan',
						name: '在线客服',
						url:'1',
						sessionFrom: 'message',
					},{
						cuIcon: 'more',
						color: 'red',
						name: '更多精彩',
						url:'2',
						sessionFrom: 'more',
					}
					],
				sellerFuns: [],
				otherFuns: [],
				scanTaskResult:{
					'vc_id' : '',
	                'tp_ordersn'    : '',
	                'log_ordersn'   : '',
	                'tp_id'         : 0,
	                'tp_title'      : '',
	                'tp_price'      : '',
	                'seller_id'     : 0,
	                'seller_title'  : '',
	                'uid'           : 0,
	                'nickname'      : '',
	                'number'        : '',
	                'vc_status'     : 0,//核销成功 0 未使用 1 已核销
	                'tp_status'     : 0,//服务完成 2 服务中 3服务完成
	                'log_status'    : 0,//支付状态 0 未支付 1 已支付
					'vc_use_time'	:''
				}
			}
		},
		mounted() {
			that=this;
			// uni.pageScrollTo({scrollTop: 0})
			uni.setNavigationBarColor({frontColor: '#ffffff',backgroundColor: '#182E6C'})
			this.avatarUrl=uni.getStorageSync("headimg")
			this.nickname=uni.getStorageSync("nickname")
		},
		methods: {
			showModalMP(){
				// console.log(that.modalMPShow);
				if(that.modalMPShow == 1)
				{
					that.modalMPShow = 0;
				}
				else{
					that.modalMPShow = 1;
				}
				console.log(that.modalMPShow);
			},
			getUserInfo(res){
				// console.log(res)
				uni.setStorageSync('avatarUrl',res.detail.userInfo.avatarUrl)
			},
			navigateTo(url) {
				if(url=='4000851667'){
					uni.makePhoneCall({
						phoneNumber:url
					})
					return;
				}
				if(url=='smhx'){//扫码核销
					uni.scanCode({
						success(res) {
							// console.log(res.result);
							let data={vc_id:res.result};
							that.scanTask(data)
						},
						fail(res) {
							
						}
					})
					return;
				}
				else if(url == 'goMP')
				{
					that.showModalMP();
					// that.$api.msg('更多功能请至公众号体验')
					return;
				}
				uni.navigateTo({
					url:url
				})
			},
			scanTask(code){
				that.$api.postWithData(that.api.scanTask,code,
					function callbacks(res){
						if(res.code==1){
							that.scanTaskResult=res.data
							that.modalName='Modal'
							that.$api.msg(res.msg)
						}else{
							that.$api.msg(res.msg)
						}
				})
			}
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}
	.styl1 {
		text-align: center;
		float: right;
		background-color: #C0985D;
		color: #FFFFFF;
		padding: 0.3125rem;
		border-top-right-radius:15upx;
		border-bottom-left-radius:15upx;
	}
	.bg {
		background: #182E6C;
		height: 250upx;
		border-bottom-left-radius: 50upx;
		border-bottom-right-radius: 50upx;
	}
	.bg2 {
		margin-left: 0.8rem;
		margin-right: 0.8rem;
		height:300upx;
		background-color: #D7B878;
		border-radius:15upx;
		top: 30upx;
	}
	.solids-top{
		border: 10upx solid #eee;
	}
	.solids-bottom{
		background-color: #eee;
	}
	.cu-tabbar-height1{
		min-height: 100upx;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
	}
	.cu-tabbar-height {
		background-color: #eee;
		min-height: 100upx;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
	}
	.modal-content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.mc-tips{
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
</style>
