<!-- 悬浮菜单 <tabs-sticky v-model="index" :fixed="false" @change="changeTab"></tabs-sticky> -->
<template>
	<view class="tabs-sticky" :class="{'tabs-fixed': fixed}">
		<view class="tab" v-for="(tab, i) in tabs" :key="i" :class="{active: value==i}" @click="changeTab(i)">
			<text :class="i==0?'icon-tab1 ':i==1?'icon-tab2':'icon-tab3'"></text>{{tab.name}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabs: Array, 
			value: { // 当前菜单下标 (使用v-model语法糖: 1.props需为value; 2.需回调input事件)
				type: Number,
				default(){
					return 0
				}
			},
			fixed: Boolean // 是否悬浮
		},
		methods: {
			// 切换tab
			changeTab(i) {
				if(this.value != i){
					this.$emit('input', i);
					this.$emit('change', i);
				}
			}
		},
	}
</script>

<style>
	.tab>text{
		font-size:30upx;
		color: #182E6C;
		margin-right: 20upx;
	}
	/*菜单*/
	.tabs-sticky{
		display: flex;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28upx;
		text-align: center;
		background: #fff;
		border-bottom: 1upx solid #ddd;
	}
	.tabs-sticky .tab{
		flex: 1;
	}
	/* tab选中的样式 */
	.tabs-sticky .active{
		border-bottom: 4upx solid #17255E;
		color: #000;
		font-weight: bold;
	}
	/*悬浮样式*/
	.tabs-sticky.tabs-fixed{
		z-index: 9999;
		position: fixed;
		top: var(--window-top);
		left: 0;
		width: 100%;
	}
</style>
