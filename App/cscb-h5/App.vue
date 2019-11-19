<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.clearStorageSync()
			Vue.prototype.lat=0
			Vue.prototype.long=0
			// Vue.prototype.uid=2210
			// Vue.prototype.seller_id=60
			Vue.prototype.wxConfig=null;
			
			uni.getSystemInfo({
				success: function(e) {
					Vue.prototype.screenWidth=e.windowWidth;
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			setInterval(function(){
				uni.getLocation({geocode:true,type:'wgs84',altitude:true,
					success(res) {
						Vue.prototype.lat=res.latitude
						Vue.prototype.long=res.longitude
					}
				})
			},1000*60)
		},
		onShow: function() {
			let that=this;
			uni.getLocation({geocode:true,type:'wgs84',altitude:true,
				success(res) {
					Vue.prototype.lat=res.latitude
					Vue.prototype.long=res.longitude
					that.$eventBus.$emit('initData');
				}
			})
			console.log('App Show')
			this.$api.post(this.api.wechatJSSDK,
				function callbacks(res){
					console.log(res.data);
					uni.setStorageSync("wxConfig",JSON.stringify(res.data))
				})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/myicon.css";
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}
	.container {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.tab-view::before {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}
	
	.tab-view {
		width: 100%;
		height: 100upx;
		overflow: hidden;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		left: 0;
		z-index: 99;
		background: #fff;
		white-space: nowrap;
	}
	
	.tab-bar-title {
		height: 100upx;
		line-height: 100upx;
		font-size: 32upx;
		color: #999;
		font-weight: 400;
	}
	
	.active {
		border-bottom: 6upx solid #5677fc;
	}
	
	.active .tab-bar-title {
		color: #5677fc !important;
		font-size: 32upx;
		font-weight: bold;
	}
	
	/*tabbar end*/
	.scoll-y {
		height: 100%;
	}
	
	.list-view {
		margin-top: 100upx;
		margin-bottom: 20upx;
		width: 100%;
		box-sizing: border-box;
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.list-cell {
		padding-bottom: 0;
		padding-left: 20upx;
		padding-right: 20upx;
		padding-top: 20upx;
		box-sizing: border-box;
	}
	
	.cell-title-box {
		display: flex;
		justify-content: space-between;
	}
	
	.cell-title {
		font-size: 36upx;
		line-height: 56upx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		/* padding-bottom: 30upx; */
	}
	
	.img-container {
		width: 100%;
		padding-top: 24upx;
		display: flex;
		height: 160upx;
		justify-content: space-between;
	}
	
	.cell-img {
		width: 32%;
		overflow: hidden;
		position: relative;
	}
</style>
