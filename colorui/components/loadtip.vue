<template>
	<view>
		<tui-loadmore :visible="visible"></tui-loadmore>
		<tui-nomore :visible="!visible"></tui-nomore>
	</view>
</template>

<script>
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	export default {
		name: "loadTip",
		components: {
			tuiLoadmore,
			tuiNomore
		},
		props: {
			//是否可见
			visible: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
	
</style>
