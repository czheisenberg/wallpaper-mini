<template>
	<view class="navBarLayout">
		<view class="navbar">
			<view class="statusBar" :style="{height: getStatusBarHeight() + 'px'}"></view>
			<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
				<view class="title">标题</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height: getNavBarHeight() + 'px'}">
			
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue';
import {getStatusBarHeight, getTitleBarHeight, getNavBarHeight} from '@/utils/system.js';

</script>

<style lang="scss" scoped>
.navBarLayout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom, transparent, #fff 400rpx),
		linear-gradient(to right, #beecd8 20%, #f4e2d8);
		.statusBar{
			
		}
		.titleBar{
			display: flex;
			align-content: center;
			padding: 0 30rpx;
			.title{
				font-size: 40rpx;
				font-weight: 700;
				color: #000;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				background: rgba(255,255,255,0.4);
				border-radius: 60rpx;
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					margin-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
				}
			}
		}
	}
	.fill{
		
	}
}
</style>