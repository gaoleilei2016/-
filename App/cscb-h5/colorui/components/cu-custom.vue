<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view v-if="!isCustom" class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
			<view v-if="isCustom" class="cu-bars fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS||H5 -->
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bars fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="content" :style="[{top:StatusBar + 'px'},{width:'100%'}]">
					<slot name="content"></slot>
				</view>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		onShow() {
			console.log("success")
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isCustom:{
				type:[Boolean,String],
				default:false
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
.cu-bars {
	display: flex;
	position: relative;
	align-items: center;
	min-height: 100upx;
	width: 100%;
}
.cu-bars.fixed,
.nav.fixed {
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1024;
}
</style>
