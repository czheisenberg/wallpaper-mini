<template>
	<view class="preview">
		<swiper
			circular="true"
		>
			<swiper-item v-for="(item, index) in 5" :key="index">
				<image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-if="maskState">
			<view class="goback"></view>
			<view class="count">3 / 5</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				
				<view class="box">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">5分</view>
				</view>
				
				<view class="box">
					<uni-icons type="download" size="24"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue';

const maskState = ref(true)
const maskChange = () =>{
	maskState.value = !maskState.value

}
</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;
	position: relative;
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.mask{
		&>view{
			position: absolute;
			width: fit-content;
			left: 0;
			right: 0;
			margin: auto;
			color: #fff;
		}
		.goback{
			
		}
		.count{
			top: 10vh;
			background-color: rgba(0,0,0, 0.5);
			font-size: 28rpx;	
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);
		}
		.time{
			font-size: 130rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0,0,0,0.3);
		}
		.date{
			font-size: 34rpx;
			top: calc(10vh + 240rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0,0,0,0.3);
		}
		.footer{
			background: rgba(255,255,255,0.8);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 60rpx;
			color: black;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx 0 rgba(0,0,0,0.1);
			backdrop-filter: blur(20rpx);
			.box{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 2rpx 13rpx;
				.text{
					color: #777;
					font-size: 26rpx;
				}
			}
		}
	}
}
</style>
