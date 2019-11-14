<template>
	<view>
		<home v-once v-if="PageCur=='home'"></home>
		<market v-once v-if="PageCur=='market'"></market>
		<more v-once v-if="PageCur=='more'"></more>
		<mine v-once v-if="PageCur=='mine'"></mine>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" :class="PageCur=='home'?'text-green':'text-gray'" @click="NavChange" data-cur="home">
				<view class="cuIcon-home"></view> 首页
			</view>
			<view class="action" :class="PageCur=='market'?'text-green':'text-gray'" @click="NavChange" data-cur="market">
				<view class="cuIcon-similar"></view> 市场
			</view>
			<view @tap="showModal" data-target="bottomModal" class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-red1 shadow"></button>发布
			</view>
			<!-- <view class="action text-gray"  data-cur="more">
				<form report-submit="true" @submit="navigateTo">
					<input type="text" value="3" v-show="false"/>
					<button class="text-gray" form-type="submit" style="background: transparent;background-color: transparent;line-height: 1;font-size: 22rpx" >
						<view class="cuIcon-moneybag text-gray"></view>商家
					</button> 
				</form>
			</view> -->
			<view class="action" :class="PageCur=='more'?'text-green':'text-gray'" @click="NavChange" data-cur="more">
				<view class="cuIcon-moneybag"></view> 商家
			</view>
			<view class="action" :class="PageCur=='mine'?'text-green':'text-gray'" @click="NavChange" data-cur="mine">
				<view class="cuIcon-people"></view> 我的
			</view>
		</view>
		<view class="cu-modal bottom-modal" @tap="modalName=null" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog " style="border-top-right-radius: 20upx;border-top-left-radius: 20upx;">
				<view class="cu-bars">
					<view class="action text-green"></view>
					<view class="action text-blue text-xl" @tap="hideModal"><text class="cuIcon-close"></text></view>
				</view>
				<view class="padding-lr-xl padding-bottom-xl flex justify-around text-center align-center">
					<form report-submit="true" @submit="navigateTo">
						<input v-show="false" value="1" name="index"/>
						<button form-type="submit" style="font-size: 28upx;background: transparent;background-color: transparent;line-height: 1.3;">
						<image src="../../static/ksfb2.png" mode="aspectFit" style="width:90%;height:130upx;"></image>
						<view  form-type="submit" class="text-bold text-red1">快速发布</view>
						</button>
					</form>
					<view style="width: 1px;height:150upx;background: #ddd;"></view>
					<form report-submit="true" @submit="navigateTo">
						<input v-show="false" value="2"  name="index" />
						<button form-type="submit" style="font-size: 28upx;background: transparent;background-color: transparent;line-height: 1.3;">
							<image src="../../static/jzfb2.png" mode="aspectFit" style="width:90%;height:130upx;"></image>
							<view   class="text-bold">精准发布</view>
						</button>
					</form>
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog bg-white padding" style="width: 600upx;">
				<view class="margin">
					<image src="http://txcos.kelinteng.com/uploads/20191014/logo-img.png" class="cu-avatar xxl round" mode="aspectFill"></image>
					<view class="text-black text-lg text-bold margin-top">贵州柯林腾网络科技有限公司</view>
					<view class="text-black margin-top-sm padding-lr">您暂未授权创世车宝小程序获取您的信息,为了能正常使用小程序的功能,请开始「安全授权」并于稍后的弹框中点击「允许」</view>
					<button lang="zh_CN" open-type="getUserInfo" @getuserinfo="getUserInfo"  class="cu-btn block bg-green margin-top">安全授权</button>
					<button @tap="modalName=null" style="background: #EEEEEE;" class="cu-btn block margin-top">残忍取消</button>
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
				modalName:null,
				PageCur: 'home',
				form:{
					formId:'',
					pageUrl:'',
					pageParam:''
				}
			}
		},
		onShow() {
			that = this;
			this.modalName=null;
			this.$eventBus.$on('cutTab', function(data) {
				that.PageCur = data;
				//清除监听，不清除会消耗资源
				// this.$eventBus.$off('cutTab');
			});
			this.$eventBus.$on('register', function(data) {//home/home market/home 
				that.modalName = 'DialogModal1'
			});
		},
		onLoad(e) {
			if(e.cur!=undefined){
				this.PageCur='mine'
			}
		},
		methods: {
			getUserInfo(res){
				console.log(res)
				uni.login({
					provider:'weixin',
					success(login) {
						if(res.detail.iv==undefined){
							uni.showToast({icon:"none",mask:true,title:"授权失败！"})
							that.modalName='DialogModal1';
							return;
						}
						let data={iv:res.detail.iv,code:login.code,encryptedData:res.detail.encryptedData}
						that.$api.postWithData(that.api.register,data,
							function callbacks(res){
							if(res.code==0){
								that.modalName='DialogModal1';
								uni.showToast({icon:"none",mask:true,title:"注册失败"})
							}else{
								uni.setStorageSync("unionid",res.data.member.unionid)
								uni.setStorageSync("openid",res.data.member.openid)
								uni.setStorageSync("seller_id",res.data.seller_manager.seller_id)
								uni.setStorageSync("uid",res.data.member.uid)
								uni.setStorageSync("nickname",res.data.member.nickname)
								uni.setStorageSync("headimg",res.data.member.headimg)
								that.$eventBus.$emit('initData');
							}
						})
					}
				})
			},
			NavChange: function(e) {
				if(e.currentTarget.dataset.cur=='mine'){
					this.$api.post(this.api.getCarNew, function callbacks(res) {
						if(res==-1){
							that.modalName = 'DialogModal1'
						}else{
							that.PageCur = e.currentTarget.dataset.cur
						}
					})
					return;
				}
				this.PageCur = e.currentTarget.dataset.cur
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			navigateTo(e) {
				this.form.formId=e.detail.formId
				let url='';
				if(e.detail.value.index==1){
					this.form.pageUrl='pages/index/fastfabu'
					this.form.pageParam='type=0&from=home'
					url='fastfabu?type=0&from=home'
				}else  if(e.detail.value.index==2){
					this.form.pageUrl='pages/index/precisefabu'
					url='precisefabu?type=0&from=home'
					this.form.pageParam='type=0&from=home'
				}else{
					this.form.pageUrl='pages/home/businesshome'
					// url='../home/businesshome'
					// url='../more/home'
					this.PageCur='more'
					this.form.pageParam=''
				}
				this.$api.postWithData(this.api.logcscb,this.form,
					function callbacks(res){
						if(res==-1){
							that.modalName = 'DialogModal1'
						}else{
							that.modalName = null
							uni.navigateTo({
								url: url
							})
						}
				})
			}
		}
	}
</script>

<style>
	button::after{
		border: 0 solid rgba(0, 0, 0, 0);
	}
	.text-red1 {
		color: #FF0202
	}

	.thisradius {
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
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
	.cu-btn{
		height: 80upx;
	}
</style>
