<template>
	<view class="">
		<view class="bg-white padding-right flex justify-between" style="min-height: 80upx;line-height: 80upx;">
			<view class="flex align-center">
				<!-- <image :src="seller_list[seller_Index].brand_logo" mode="aspectFill" style="width:80upx;height:80upx;padding:20upx;"></image> -->
				<image  mode="aspectFill" style="width:30upx;height:30upx;"></image>
				<view class="text-black text-bold">优质商家为您精诚服务</view>
			</view>
			<view  @tap="showModal" data-target="DrawerModalR" >
				<text>查看</text>
			</view>
		</view>
		<view class="flex padding-tb-sm align-center">
			<image class="margin-lr radius" :src="good.logo" mode="aspectFit" style="width: 165upx;height: 165upx;"></image>
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
		<view class="flex bg-white justify-between padding-lr percent100-100 margin-top-sm">
			<text class="text-black text-bold">联系人</text>
			<view class="flex align-center">
				<input type="text" v-model="form.recive_name" placeholder="请输入联系人" class="text-right text-df" placeholder-class="text-right text-df" />
			</view>
		</view>
		<view class="flex bg-white justify-between padding-lr percent100-100 margin-top-sm">
			<text class="text-black text-bold">联系电话</text>
			<view class="flex align-center">
				<input type="number" maxlength="11" v-model="form.recive_phone" placeholder="请输入联系电话" class="text-right text-df" placeholder-class="text-right text-df"/>
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
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<scroll-view scroll-y="true" class="cu-dialog basis-lg" style="min-width: 80%;"  @tap.stop="" >
				<view class="bg-white padding text-left">
					<view class="text-black text-bold text-lg margin-bottom-sm">优选商家为您精诚服务</view>
					<view class="">成功购买后以下商家均支持到店服务</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item" style="border-top: 0.5px solid #ddd;height:180upx;" v-for="(item,index) in seller_list" :key="index">
						<view class="cu-avatar radius lg" :style="'background-image:url('+item.brand_logo+');'"></view>
						<view class="content">
							<view class="text-black"><view class="text-cut">{{item.title}}</view></view>
							<view class="text-sm flex"> <view class="text-cut">电话:{{item.store_phone}}</view></view>
							<view @tap="openLocation(item)" class="text-sm flex"> <view class="text-cut">地址:{{item.address}}</view></view>
						</view>
						<view class="action">
							<view class="text-sm">{{item.km==null?0:item.km|km}}</view>
							<!-- <view class="cu-tag round bg-red sm">5</view> -->
						</view>
					</view>
				</view>
			</scroll-view>
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
				modalName:null,
				value: 1,
				dropdownShow: false,
				dropdownShowSeller:false,
				selectIndex:0,
				seller_Index:0,
				seller_list:[],
				dropdownlistData: [{
					name: "请选择类型",
					value : 0,
				},{
					name: "单独购买",
					value : 1,
				}, {
					name: "3人拼单",
					value : 3,
				}],
				form:{
					id:0,
					uid:0,
					seller_id:0,
					o_type:0,
					num:0,
					redids:0,
					recive_name:'',
					recive_phone:''
				},
				seller:{},
				price:0,
				good:{},
				goodprice:0,
				gzyh:{},
				isOne:1
			}
		},
		filters: {
			views: function(val) {
				if (Number(val) > 999) {
					return '999+';
				} else {
					return val.toFixed(0);
				}
			},
			km: function(val) {
				if (val != null) {
					return (Number(val) / 1000).toFixed(2) + 'km';
				} else {
					return "";
				}
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
			if(e.isone==3){
				this.goodprice=this.good.price;
				this.price=this.goodprice
				this.selectIndex=2
			}
		},
		updated() {
			if(this.selectIndex==1){
				if(this.price<=0){
					this.price=0;
				}else{
					this.price=(this.good.price*this.value)-Number(parseFloat(that.gzyh.money));
				}
			}
			if(this.selectIndex==2){
				if(this.price<=0){
					this.price=0;
				}else{
					this.price=(this.good.price_3*this.value)-Number(parseFloat(that.gzyh.money));
				}
			}
			if(this.selectIndex==3){
				this.price=(this.good.price_5*this.value)-Number(parseFloat(that.gzyh.money));
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			sellerinfo() {
				this.$api.postWithData(this.api.isSubscribe,{uid:uni.getStorageSync("uid"),cscb_extends_activity_id:this.good.cscb_extends_activity_id},
					function callbacks(res){
						that.gzyh=res.data
						if(Number(parseFloat(that.goodprice)-parseFloat(that.gzyh.money))<0){
							that.price=0
						}else{
							that.price=Number(parseFloat(that.goodprice)-parseFloat(that.gzyh.money))
						}
						that.getSellerListCEA()
					})
			},
			getSellerListCEA(){
				let data = {
					keywords: '',
					latitude: this.lat,
					longitude:this.long,
					cea_id:1,
					page: 1,
					size: 100
				};
				that.$api.postWithData(that.api.sellerListCEA,data,
					function callbacks(res){
						that.seller_list=res.data
						// that.seller_list.unshift({id:that.seller.id,address:that.seller.address,title:that.seller.title,latitude:that.seller.latitude,longitude:that.seller.longitude,brand_logo:that.seller.brand_logo})
						that.seller_Index=0
					})
			},
			goPay(){
				let that=this;
				if(this.dropdownlistData[this.selectIndex].value==0){
					this.$api.msg("请选择购买类型")
					return ;
				}
				if(this.form.recive_name==''){
					this.$api.msg("请填写联系人")
					return ;
				}
				if(this.form.recive_phone==''){
					this.$api.msg("请输入联系电话")
					return ;
				}
				this.form.id=this.good.objid
				this.form.uid=uni.getStorageSync("uid")
				// this.form.seller_id=this.seller_list[this.seller_Index].id
				this.form.o_type=this.dropdownlistData[this.selectIndex].value
				this.form.num=this.value
				this.form.redids=0
				// location.href="http://cscbnew.kelinteng.com/index/pay/cea.html?id="+this.good.id+'&uid='+this.form.uid+'&seller_id='+this.form.seller_id+'&o_type='+this.form.o_type+'&num='+this.form.num
				location.href="http://cscbnew.kelinteng.com/index/pay/cea.html?id="+this.good.id+'&uid='+this.form.uid+'&o_type='+this.form.o_type+'&num='+this.form.num+'&recive_name='+this.form.recive_name+'&recive_phone='+this.form.recive_phone
			},
			change: function(e) {
				this.value = e.value
			},
			dropDownList(index) {
				if (index !== -1) {
					this.selectIndex=index;
				}
				this.dropdownShow = !this.dropdownShow
			},
			dropDownSellerList(index) {
				if (index !== -1) {
					this.seller_Index=index;
				}
				this.dropdownShowSeller = !this.dropdownShowSeller
			},
			openLocation(item){
				uni.openLocation({
					latitude:Number(item.latitude),
					longitude:Number(item.longitude),
					address:item.address,
					name:item.title
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
