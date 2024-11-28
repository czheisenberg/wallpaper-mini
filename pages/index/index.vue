<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper 
				indicator-dots="true" 
				indicator-color="rgba(255,255,255,0.5)" 
				indicator-active-color="#fff"
				autoplay="true"
				circular="true"
			>
				<swiper-item>
					<image src="../../common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="notification" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical="true" circular="true" autoplay="true" interval="1500" duration="300">
					<swiper-item v-for="item in 5">具体内容内容内容内容内容内容内容内容内容内容内容</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="20" color="#333"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	
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
			text{
				color: #28b389;
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
}
</style>
