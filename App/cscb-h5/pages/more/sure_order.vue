<template>
	<view class="">
		<view class="bg-white padding-right flex justify-between" style="min-height: 80upx;line-height: 80upx;">
			<view class="flex align-center">
				<image src="../../static/bm.png" mode="aspectFit" style="width:80upx;height:80upx;"></image>
				<view class="text-black text-bold">创世车宝自营店</view>
				<view class="cuIcon-right align-center"></view>
			</view>
		</view>
		<view class="flex padding-tb-sm align-center">
			<image class="margin-lr radius" src="../../static/gg.png" mode="aspectFill" style="width: 165upx;height: 165upx;"></image>
			<view class="flex flex-direction justify-between text-sm">
				<view style="width:500upx;" class="text-df text-black text-cut text-bold">康普顿GT950,合成型机油 便宜卖</view>
				<view>规格：<text>4L</text> </view>
				<view>级别：<text>SN</text> </view>
				<view>粘度：<text>ow-40</text> </view>
				<view class="text-df text-bold text-black"><text class="text-price">225.00</text>/件</view>
			</view>
		</view>
		<view class="flex bg-white justify-between padding-lr percent100-100">
			<text class="text-black text-bold">购买数量</text>
			<tui-numberbox :min="1" :max="100" :value="value" @change="change"></tui-numberbox>
		</view>
		<view class="flex bg-white justify-between align-center padding-lr percent100-100 margin-top-sm">
			<text class="text-black text-bold">购买类型</text>
			<tui-dropdown-list :show="dropdownShow" :top="65" :height="400">
				<template v-slot:selectionbox>
					<view  @click="dropDownList(-1)" style="width: 200upx;height: 60upx;line-height: 60upx;" class="solid text-center bg-white padding-lr-xs">
						{{dropdownlistData[selectIndex].name}}<text class="cuIcon-triangledownfill"></text>
					</view>
				</template>
				<template v-slot:dropdownbox>
					<view class="tui-selected-list solid">
						<scroll-view scroll-y class="tui-dropdown-scroll">
							<block v-for="(item,index) in dropdownlistData" :key="index">
								<view :class="selectIndex==index?'bg-cyan':'bg-white'" @click="dropDownList(index)" class=" padding-left-sm percent100" >
									{{item.name}}
								</view>
							</block>
						</scroll-view>
					</view>
				</template>
			</tui-dropdown-list>
		</view>
		<view class="flex bg-white justify-between padding-lr percent100-100 margin-top-sm">
			<text class="text-black text-bold">支付类型</text>
			<view class="flex align-center">
				<image style="width:48upx;height:38upx;" src="../../static/success51.png" mode="aspectFit"></image>
				<text>微信支付</text>
			</view>
		</view>
		<view class="cu-bar foot bg-white tabbar border shop">
			<view class="submit flex align-center">
				<text class="text-black text-bold">实付款:</text>
				<view class="text-lg margin-left-sm">
					<text class="text-price text-red margin-right-xs">680</text>
					<text class="text-red text-df">免运费</text>
				</view>
			</view>
			<view @tap="goPay" class="bg-red submit ">
				<text>立即支付</text>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import tuiDropdownList from "@/components/dropdown-list/dropdown-list"
	export default {
		components:{
			tuiNumberbox,
			tuiDropdownList
		},
		data() {
			return {
				value: 1,
				dropdownShow: false,
				selectIndex:0,
				dropdownlistData: [{
					name: "请选择类型",
					value : 0,
				},{
					name: "单独购买",
					value : 1,
				}, {
					name: "3人拼单",
					value : 2,
				}, {
					name: "5人拼单",
					value : 3,
				}],
			}
		},
		methods: {
			goPay(){
				if(this.dropdownlistData[this.selectIndex].value==0){
					this.$api.msg("请选择购买类型")
					return ;
				}
				uni.navigateTo({
					url:'paysuccess?type='+this.dropdownlistData[this.selectIndex].value
				})
			},
			change: function(e) {
				this.value = e.value
			},
			dropDownList(index) {
				if (index !== -1) {
					this.selectIndex=index;
					// this.$api.msg("name：" + this.dropdownlistData[index].name)
				}
				this.dropdownShow = !this.dropdownShow
			},
		},
	}
</script>

<style>
	.lineHeight {
		line-height: 50upx;
	}
	
	.minWidth {
		min-width: 200upx;
	}
</style>
