<template>
	<view class="page solid-top">
		<view class="padding bg-white solid-bottom">
			<view class="flex justify-center align-center margin-top">
				<view>
					<image style="width:80upx; height:60upx;" mode="aspectFit" src="../../static/success51.png"></image>
				</view>
				<text>支付成功</text>
			</view>
			<view class="flex justify-center align-center margin-top">
				<text class="text-price text-xxxl text-black">0.01</text>
			</view>
		</view>
		<view v-if="pindan" style="background: #FDF6F0;" class="padding-tb-xl solid-bottom flex justify-center">
			<view class="text-center">
				<image class="round" style="width: 80upx;height: 80upx;" src="http://img.tukexw.com/img/2c99a00e77f69be1.jpg" mode="aspectFit"></image>
				<view style="width:100upx;" class="text-cut text-sm">JD_8*****</view>
			</view>
			<view class="text-center">
				<image class="round" style="width: 80upx;height: 80upx;" src="http://photocdn.sohu.com/20110808/Img315782914.jpg" mode="aspectFit"></image>
				<view style="width:100upx;" class="text-cut text-sm">JD_8*****</view>
			</view>
			<view class="text-center">
				<image class="round" style="width: 80upx;height: 80upx;" src="http://img4.imgtn.bdimg.com/it/u=4293497862,2226300746&fm=15&gp=0.jpg" mode="aspectFit"></image>
				<view style="width:100upx;" class="text-cut text-sm">JD_8*****</view>
			</view>
			<view class="text-center">
				<image style="width: 80upx;height: 80upx;" src="../../static/fabu.png" mode="aspectFit"></image>
				<view class="text-sm">邀请好友</view>
			</view>
		</view>
		<view class="padding-tb bg-white">
			<view class="padding-lr-sm">
				<view class="flex justify-between margin-top-sm">
					<text>商品名称</text>
					<text>{{info.tp_title}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>支付金额</text>
					<text>{{info.tp_title}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>交易时间</text>
					<text>{{info.payTime}}</text>
				</view>
				<view class="flex justify-between margin-top-sm">
					<text>支付方式</text>
					<text>微信支付</text>
				</view>
				<view class="flex justify-between margin-tb-sm">
					<text>交易单号</text>
					<text>{{info.ordersn}}</text>
				</view>
				<view class="flex justify-between margin-tb-sm">
					<text>核销状态</text>
					<text>{{info.vip_coupon.status==0?'未使用':info.vip_coupon.status==1?'已核销':'已使用'}}</text>
				</view>
				<view v-if="pindan" class="flex justify-between margin-tb-sm">
					<text>拼单状态</text>
					<text>拼单中(还差1人)</text>
				</view>
			</view>
		</view>
		<view class="bg-white flex justify-between padding-lr-sm margin-tb-sm padding-tb">
				<view style="width: 15%;">
					<image class="round bg-black" :src="info.brand_logo" style="width: 90upx;height: 90upx;" mode="aspectFit"></image>
				</view>
				<view style="width: 60%;" class="flex flex-direction  justify-around">
					<text >{{info.seller_title}}</text>
					<text class="">联系电话:<text>{{info.seller_phone}}</text></text>
					<text @tap="navigationTo(info)">地址:<text>{{info.seller_address}}</text><text class="text-theme"> (导航到店)</text></text>
				</view>
				<view style="width:25%;" class="">
					<image src="http://txcos.kelinteng.com/uploads/20191014/qrcode.png" mode="widthFix" style="width:130upx;height: 130upx;"></image>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:1,
				pindan:true,
				info: {
					ordersn:'',
					tp_title:'',
					payTime:'',
					vip_coupon:{status:0},
					brand_logo:'',
					seller_title:'商家',
					seller_phone:'15932207322',
					seller_address:'',
				},
				imgList:[],
				tsDetail:{}
			}
		},
		onLoad(res) {
			this.type=res.type
			if(this.type==1){//普通
				this.pindan=false
			}else{//拼单
				this.pindan=true
			}
			if(this.info.status==1){//支付成功
				this.info.status='支付成功'
			}else if(this.info.status==2){//已取消
				this.info.status='已取消'
			}else{//未支付
				this.info.status='未支付'
			}
		},
		
		methods: {
			navigationTo(info) {
				uni.openLocation({
					name: info.seller_address,
					address: info.seller_address,
					latitude: Number(info.seller_latitude),
					longitude: Number(info.seller_longitude),
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
