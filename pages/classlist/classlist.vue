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
import { onLoad } from '@dcloudio/uni-app';
import { apiGetClassList } from "@/api/apis.js";

const classList = ref([]);

const queryParams = {}
onLoad((e)=>{
	let { id, name } = e;
	queryParams.classid = id
	uni.setNavigationBarTitle({
		title: name
	})
	
	getClassList();
});

const getClassList = async()=>{
	let res = await apiGetClassList({
		classid: queryParams.classid
	});
	console.log("res: ", res);
	classList.value = res.data.data
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
