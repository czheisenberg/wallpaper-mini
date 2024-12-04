<template>
	<view class="classlist">
		<view class="content">
			<navigator 
				url="/pages/preview/preview" 
				class="item" 
				v-for="(item, index) in classList" 
				:key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad, onReachBottom } from '@dcloudio/uni-app';
import { apiGetClassList } from "@/api/apis.js";

const classList = ref([]);
const noData = ref(false);

// onLoad() 获取请求参数
const queryParams = {
	pageNum: 1,
	pageSize: 12,
}
onLoad((e)=>{
	let { id, name } = e;
	queryParams.classid = id
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
	let res = await apiGetClassList({
		classid: queryParams.classid,
		pageNum: queryParams.pageNum,
		pageSize: queryParams.pageSize,
	});
	classList.value = [...classList.value,...res.data.data]
	if(queryParams.pageSize > res.data.length)
		noData.value = true
	
}


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
