<template>
	<view>
		<view class="cu-card article no-card margin-bottom-sm" v-if="mylist.length>0" v-for="(item,index) in mylist" :key="index">
			<view class="cu-item shadow" style="border-radius: 0upx;">
				<view class="cu-bar bg-white solid-bottom" style="min-height:40px;">
					<view class="action ">
						<text class="text-df">单号:{{item.ordersn}}</text>
					</view>
					<view class="action text-theme text-bold">
						<text v-if="item.status == 1">等待报价</text>
						<text v-else-if="item.status == 2">报价结束</text>
						<text v-else-if="item.status == 3">服务完成</text>
						<text v-else-if="item.status == 4">发起人关闭</text>
						<text v-else-if="item.status == 5">平台关闭</text>
						<text v-else-if="item.status == 6">售后中</text>
						<text v-else></text>
					</view>
				</view>
				<view @tap="navigateTo(item)" class="content margin-top">
					<image lazy-load="true" style="width: 180upx;filter: blur(1px);" :src="item.image" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-df flex justify-between align-center">
							<text style="width: 75%;">{{item.title}}</text><text v-if="showkm" class="text-grays text-sm">{{item.distance==null?0:item.distance|km}}</text>
						</view>
						<view class="text-sm text-grays" v-html="item.content"><text></text></view>
						<view class="text-sm text-grays" v-if="false">车型描述:<text>奥迪A8</text></view>
						<view class="text-sm text-grays">服务类型:<text v-text="item.obj_type_name"></text></view>
						<view class="text-sm text-grays">所在地区:<text>{{item.province}}/{{item.city}}/{{item.district}}</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "listItem",
		filters: {
			km: function(val) {
				if (val != null) {
					return (Number(val) / 1000).toFixed(2) + 'km';
				} else {
					return "";
				}
			}
		},
		props: {
			mylist: {
				type: Array,
				default () {
					return []
				}
			},
			showkm:true
		},
		methods: {
			navigateTo(item) {
				this.$emit('navigateTo', item);
			}
		}
	}
</script>

<style>
</style>
