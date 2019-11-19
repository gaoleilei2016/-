<template>
	<view>
		<web-view :webview-styles="webviewStyles" @message="getMessage" :src="src"></web-view>
		<!-- http://cscb2.kelinteng.com/index/bidding/publishbid -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				src:this.api.http+'/index/shop/loginkpd.html'
			}
		},
		onLoad(e) {
			this.src=this.api.http+e.url
			console.log(e.url)
		},
		methods: {
			getMessage(event) {
				uni.showToast({
					title:event.detail.data[0].action
				})
				console.log(event.detail.data)
			}
		},
	}
</script>

<style>
</style>
