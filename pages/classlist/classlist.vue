<template>
	<view class="classlist">
		<view class="loadingLayout" v-if="!classList.length && !noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="content">
			<navigator 
				:url="'/pages/preview/preview?id=' + item._id" 
				class="item" 
				v-for="(item, index) in classList" 
				:key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="loadingLayout" v-if="classList.length || noData">
			<uni-load-more :status="noData? 'noMore': 'loading'"></uni-load-more>
		</view>
		
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onUnload, onReachBottom } from '@dcloudio/uni-app';
import { apiGetClassList, apiGetHistoryInfo } from "@/api/apis.js";
import { gotoHome } from '@/utils/common.js';

const classList = ref([]);
const noData = ref(false);

// onLoad() 获取请求参数
const queryParams = {
	pageNum: 1,
	pageSize: 12,
}
onLoad((e)=>{
	let { id=null, name=null, type=null } = e;
	if(type) queryParams.type = type;
	if(id) queryParams.classid = id;
	// 修改导航标题
	uni.setNavigationBarTitle({
		title: name
	})
	
	getClassList();
});

onReachBottom(()=>{
	if(noData.value) return;
	queryParams.pageNum++;
	getClassList();
})

// 分类网格
const getClassList = async()=>{
	let res;
	if(queryParams.classid) res = await apiGetClassList(queryParams);
	if(queryParams.type) res = await apiGetHistoryInfo(queryParams);
	
	classList.value = [...classList.value,...res.data.data];
	if(queryParams.pageSize > res.data.length) noData.value = true;
	uni.setStorageSync("storageClassList", classList.value);
}
console.log("🚀🚀🚀 classlist.vue 65 Lines. ", noData.value);
// onUnload 离开页面时的操作
onUnload(()=>{
	// 离开页面清楚缓存
	uni.removeStorageSync("storageClassList")
})

</script>

<style lang="scss">
.classlist{
	.content{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap:  5rpx;
		padding: 5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}
</style>
