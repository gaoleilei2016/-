<template>
	<view class="">
		<view class="bg-white padding-right flex justify-between" style="min-height: 80upx;line-height: 80upx;">
			<view class="flex align-center">
				<image src="../../static/bm.png" mode="aspectFit" style="width:80upx;height:80upx;"></image>
				<view class="text-black text-bold">{{seller.title}}</view>
				<view class="cuIcon-right align-center"></view>
			</view>
			<view @tap="openLocation" class="text-xl">
				<text class="cuIcon-locationfill"></text>
			</view>
		</view>
		<view class="flex padding-tb-sm align-center">
			<image class="margin-lr radius" src="../../static/gg.png" mode="aspectFill" style="width: 165upx;height: 165upx;"></image>
			<view class="flex flex-direction justify-between text-sm">
				<view style="width:500upx;" class="text-df text-black text-cut text-bold">{{good.title}}</view>
				<view class="margin-tb-sm"><text class="text-black">描述:</text><text>{{good.objDesc}}</text> </view>
				<view class="text-df text-bold text-black"><text class="text-price">{{goodprice}}</text>/件</view>
			</view>
		</view>
		<view class="flex bg-white justify-between padding-lr percent100-100">
			<text class="text-black text-bold">购买数量</text>
			<tui-numberbox :min="1" :max="100" :value="value" @change="change"></tui-numberbox>
		</view>
		<view class="flex bg-white justify-between align-center padding-lr percent100-100 margin-top-sm">
			<text class="text-black text-bold">关注优惠</text>
			<text class="text-black text-bold">{{gzyh.name}}</text>
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
					<text class="text-price text-red margin-right-xs">{{price}}</text>
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
	var that;
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
					value : 3,
				}, {
					name: "5人拼单",
					value : 5,
				}],
				form:{
					id:0,
					uid:0,
					seller_id:0,
					o_type:0,
					num:0,
					redids:0
				},
				seller:{},
				price:0,
				good:{},
				goodprice:0,
				gzyh:{},
				isOne:1
			}
		},
		onLoad(e) {
			that=this;
			this.good=JSON.parse(e.good)
			console.log(e.good);
			console.log(e.isone);
			this.sellerinfo()
			this.isOne=e.isone
			if(e.isone==1){
				this.goodprice=this.good.price;
				this.price=this.goodprice
				this.selectIndex=1
			}
			if(e.isone==5){
				this.goodprice=this.good.price_5;
				this.price=this.goodprice
				this.selectIndex=3
			}
		},
		updated() {
			if(this.selectIndex==0){
				this.price=0;
			}
			if(this.selectIndex==1){
				this.price=(this.good.price*this.value)-Number(parseFloat(that.gzyh.money));
			}
			if(this.selectIndex==2){
				this.price=(this.good.price_3*this.value)-Number(parseFloat(that.gzyh.money));
			}
			if(this.selectIndex==3){
				this.price=(this.good.price_5*this.value)-Number(parseFloat(that.gzyh.money));
			}
		},
		methods: {
			sellerinfo() {
				this.$api.postWithData(this.api.seller, {id: this.seller_id},
					function callbacks(res) {
						if(res.code==1&&res.data!=null){
							that.seller = res.data;
						}else{
							this.$api.msg(res.msg)
							setTimeout(function() {
								uni.navigateBack()
							}, 2000);
						}
					})
				this.$api.postWithData(this.api.isSubscribe,{uid:this.uid},
					function callbacks(res){
						that.gzyh=res.data
						that.price=Number(parseFloat(that.goodprice)-parseFloat(that.gzyh.money))
					})
			},
			goPay(){
				let that=this;
				if(this.dropdownlistData[this.selectIndex].value==0){
					this.$api.msg("请选择购买类型")
					return ;
				}
				this.form.id=this.good.id
				this.form.uid=uni.getStorageSync("uid")
				this.form.seller_id=this.seller_id
				this.form.o_type=this.dropdownlistData[this.selectIndex].value
				this.form.num=this.value
				this.form.redids=0
				location.href="http://cscbnew.kelinteng.com/index/pay/cea.html?id="+this.good.id+'&uid='+this.form.uid+'&seller_id='+this.seller_id+'&o_type='+this.form.o_type+'&num='+this.form.num
				// location.href="https://cscbnew.kelinteng.com/index/pay/cea?data="+JSON.stringify(this.form)
				// this.$api.postWithData(this.api.orderpay,this.form,
				// 	function callbacks(res){
				// 		console.log(res);
				// 		that.payment(res.data)
				// 		// uni.navigateTo({
				// 		// 	url:'paysuccess?type='+that.dropdownlistData[that.selectIndex].value
				// 		// })
				// 	})
				
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
			openLocation(){
				uni.openLocation({
					latitude:Number(this.seller.latitude),
					longitude:Number(this.seller.longitude),
					address:this.seller.address,
					name:this.seller.title
				})
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
