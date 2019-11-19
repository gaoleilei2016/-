<template>
	<view class="">
		<view class="bg-white padding-right flex justify-between" style="min-height: 80upx;line-height: 80upx;">
			<view class="flex align-center">
				<image :src="seller_list[selectIndex].brand_logo" mode="aspectFill" style="width:80upx;height:80upx;padding:20upx;"></image>
				<tui-dropdown-list :show="dropdownShow" :top="65" :height="400">
					<template v-slot:selectionbox>
						<view  @click="dropDownList(-1)" style="height: 60upx;line-height: 60upx;" class="text-center bg-white padding-lr-xs">
							{{seller_list[selectIndex].title}}<text class="cuIcon-triangledownfill align-center"></text>
						</view>
					</template>
					<template v-slot:dropdownbox>
						<view class="tui-selected-list solid">
							<scroll-view scroll-y style="height: 400upx;">
								<block v-for="(item,index) in seller_list" :key="index">
									<view :class="selectIndex==index?'bg-cyan':'bg-white'" @click="dropDownList(index)" class="text-cut padding-left-sm percent100" >
										{{item.title}}
									</view>
								</block>
							</scroll-view>
						</view>
					</template>
				</tui-dropdown-list>
				
			</view>
			<view @tap="openLocation" class="text-xl">
				<text class="cuIcon-locationfill"></text>
			</view>
		</view>
		<view class="flex padding-tb-sm align-center">
			<image class="margin-lr radius" :src="good.objLogo" mode="aspectFill" style="width: 165upx;height: 165upx;"></image>
			<view class="flex flex-direction justify-between text-sm">
				<view style="width:500upx;" class="text-df text-black text-cut text-bold">{{good.objTitle}}</view>
				<view class="margin-tb-sm"><text class="text-black">描述:</text><text>{{good.objDesc}}</text> </view>
				<view class="text-df text-bold text-black"><text class="text-price">{{good.price}}</text>/件</view>
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
			<text class="text-black text-bold">拼单购买({{good.o_type}})</text>
			<!-- <tui-dropdown-list :show="dropdownShow" :top="65" :height="400">
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
			</tui-dropdown-list> -->
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
	var that=this;
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
				seller_list:[],
				dropdownlistData: [{
					name: "请选择类型",
					value : 0,
				},{
					name: "单独购买",
					value : 1,
				}, {
					name: "3人拼单",
					value : 2,
				}],
				form:{
					id:0,//商品ID
					uid:0,//用户ID
					seller_id:0,//商家ID
					o_type:0,//购买类型
					num:0,//购买数量
					redids:0,//红包ID
					spell_list_ordersn:''//拼单订单号
				},
				price:0,
				seller:{},
				good:{},
				gzyh:{},
				ordersn:''
			}
		},
		onLoad(e) {
			this.ordersn=e.ordersn
			that=this;
			this.getPinResult()
		},
		updated() {
			
		},
		methods: {
			getPinResult(){
			this.$api.postWithData(this.api.isSubscribe,{uid:uni.getStorageSync("uid")},
				function callbacks(res){
					if(res.data!=null){
						that.gzyh=res.data
						that.$api.postWithData(that.api.payResult,{ordersn:that.ordersn},
							function callbacks(res){
								if(res.code==1&&res.data!=null){
									that.good=res.data
									if(that.gzyh.money==null||that.gzyh.money==''){
										that.gzyh.money=0
									}
									that.price=(that.good.price)-Number(parseFloat(that.gzyh.money));
									that.getSellerListCEA()
								}else{
									that.price=(that.good.price)
								}
							})
					}else{
						that.$api.msg("服务器错误")
					}
				})
			},
			getSellerListCEA(){
				let data = {
					keywords: '',
					latitude: 0,
					longitude: 0,
					cea_id:1,
					page: 1,
					size: 10
				};
				this.$api.postWithData(this.api.sellerListCEA,data,
					function callbacks(res){
						that.seller_list=res.data
						that.seller_list.unshift({id:that.good.shopid,address:that.good.s_address,title:that.good.s_title,latitude:that.good.s_latitude,longitude:that.good.s_longitude,brand_logo:that.good.s_brand_logo})
						that.selectIndex=0
					})
			},
			goPay(){
				console.log(this.seller_list[this.selectIndex].id);
				this.form.id=this.good.objid
				this.form.uid=uni.getStorageSync("uid")
				this.form.seller_id=this.seller_list[this.selectIndex].id
				this.form.o_type=this.good.o_type
				this.form.num=this.value
				this.form.redids=0
				this.form.spell_list_ordersn=this.good.spell_list_ordersn
				location.href="http://cscbnew.kelinteng.com/index/pay/cea.html?id="+this.form.id+'&uid='+this.form.uid+'&seller_id='+this.form.seller_id+'&o_type='+this.form.o_type+'&num='+this.form.num+"&sl_ordersn"+this.form.spell_list_ordersn
				
			},
			change: function(e) {
				this.value = e.value
				this.price=(this.good.price*this.value)-Number(parseFloat(that.gzyh.money));
			},
			openLocation(){
				uni.openLocation({
					latitude:Number(this.seller_list[this.selectIndex].latitude),
					longitude:Number(this.seller_list[this.selectIndex].longitude),
					address:this.seller_list[this.selectIndex].address,
					name:this.seller_list[this.selectIndex].title
				})
			},
			dropDownList(index) {
				if (index !== -1) {
					this.selectIndex=index;
					// this.$api.msg("name：" + this.dropdownlistData[index].name)
				}
				this.dropdownShow = !this.dropdownShow
			},
			payment: function(data, callback_succ_func, callback_error_func) {
				if (!this.isWechat()) {
					return;
				}
				if (typeof WeixinJSBridge == "undefined") {
					if (document.addEventListener) {
						document.addEventListener('WeixinJSBridgeReady', this.jsApiCall, false);
					} else if (document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
						document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
					}
				} else {
					this.jsApiCall(data, callback_succ_func, callback_error_func);
				}
			},
			isWechat: function() {
				var ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/micromessenger/i) == 'micromessenger') {
					return true;
				} else {
					return false;
				}
			},
			jsApiCall(data, callback_succ_func, callback_error_func) {
				//使用原生的，避免初始化appid问题  
				WeixinJSBridge.invoke('getBrandWCPayRequest', {
						appId: 'wxf9651f8626d421a9',
						timeStamp: data.timeStamp,
						nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位  
						package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）  
						signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'  
						paySign: data.paySign, // 支付签名  
						out_trade_no:data.out_trade_no
					},
					function(res) {
						var msg = res.err_msg ? res.err_msg : res.errMsg;
						//WeixinJSBridge.log(msg);  
						switch (msg) {
							case 'get_brand_wcpay_request:ok': //支付成功时  
								if (callback_succ_func) {
									callback_succ_func(res);
								}
								break;
							default: //支付失败时  
								WeixinJSBridge.log('支付失败!' + msg + ',请返回重试.');
								if (callback_error_func) {
									callback_error_func({
										msg: msg
									});
								}
								break;
						}
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
