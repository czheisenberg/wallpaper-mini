<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper 
				indicator-dots="true" 
				indicator-color="rgba(255,255,255,0.5)" 
				indicator-active-color="#fff"
				autoplay="true"
				circular="true"
			>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="notification" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical="true" circular="true" autoplay="true" interval="1500" duration="300">
					<navigator url="/pages/notice/detail">
						<swiper-item v-for="(item, index) in 5" :key="index">具体内容内容内容内容内容内容内容内容内容内容内容</swiper-item>
					</navigator>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="18" color="#333"></uni-icons>
			</view>
		</view>
		
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #customer>
					<view class="calendar">
						<uni-icons type="calendar" size="30"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd"></uni-dateformat>
						</view>
						
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x="true" >
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #customer>
					<navigator url="#" class="more">More+</navigator>
				</template>
			</common-title>
			
			<view class="content">
				<theme-item 
					v-for="(item, index) in classifyList" 
					:key="item._id"
					:item="item"
				></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue';
import {
	apiGetBanner,
	apiGetRandom,
	apiGetClassify,
} from '@/api/apis.js'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

const bannerList = ref([]);
const randomList = ref([]);
const classifyList = ref([]);

// 获取banner
const getBanner = async () =>{
	let res = await apiGetBanner();
	if(res.data.errCode === 0){
		bannerList.value = res.data.data
	}
}

// 获取每日推荐的几张图片
const getRandomPic = async ()=>{
	let res = await apiGetRandom();
	if(res.data.errCode === 0){
		randomList.value = res.data.data
	}
}

// 专题精选为分类
const getClassify = async () => {
	let res = await apiGetClassify({
		select: true
	});
	classifyList.value = res.data.data
}

// 跳转到预览页面
const goPreview = () =>{
	uni.navigateTo({
		url: "/pages/preview/preview"
	})
}

// 分享功能
onShareAppMessage((e)=>{
	return{
		title: "毒师宇宙壁纸",
		path: "/pages/index/index",
	}
})

// 分析到朋友圈（微信）
onShareTimeline((e)=>{
	return{
		title: "毒师宇宙壁纸",
	}
})

getBanner();
getRandomPic();
getClassify();
</script>

<style lang="scss" scoped>
.homeLayout{
	.banner{
		width: 750rpx;
		padding: 30rpx 0;
		swiper{
			width: 750rpx;
			height: 340rpx;
			&-item{
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	.notice{
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #f9f9f9;
		border-radius: 80rpx;
		margin: 0 auto;
		display: flex;
		.left{
			width: 140rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
				}
			}  
			text{
				color: $brand-theme-color ;
				font-size: 28rpx;
				font-weight: 600
			}
		}
		.center{
			flex: 1;
			swiper{
				height: 100%;
				&-item{
					height: 100%;
					font-size: 30rpx;
					color: #666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis; // ...
				}
			}
		}
		.right{
			width: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	
	.select{
		padding-top: 50rpx;
		.calendar{
			display: flex;
			justify-content: center;
			align-items: center;
			color: $brand-theme-color;
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
				}
			}
		}
		.content{
			width: 720rpx;
			margin-left: 30rpx;
			margin-top: 30rpx;
			scroll-view{
				white-space: nowrap;
				.box{
					width: 220rpx;
					height: 430rpx;
					display: inline-block;
					margin-right: 15rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				.box:last-child{
					margin-right: 30rpx;
				}
			}
		}
	}
	.theme{
		padding: 50rpx 0;
		.more{
			font-size: 32rpx;
			color: #777;
		}
		.content{
			margin-top: 30rpx;
			padding: 0 30rpx;
			display: grid;
			gap: 15rpx;
			grid-template-columns: repeat(3, 1fr);
		}
	}
}
</style>
