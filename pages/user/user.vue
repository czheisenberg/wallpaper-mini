<template>
	<view class="userLayout pageBg" v-if="userInfo">
		<view :style="{height: getNavBarHeight() + 'px'}"></view>
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/5.jpg" mode="aspectFill"></image>
			</view>
			<view class="nickname">鸡你太美</view>
			<view class="ip">IP: {{userInfo.IP}}</view>
			<view class="ip">地址: {{userInfo.address.province}}</view>
		</view>
		
		<view class="section">
			<view class="list">
				<navigator url="/pages/classlist/classlist">
				<view class="row">
					<view class="left">
						<uni-icons type="cloud-download-filled" size="25"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">{{userInfo.downloadSize}}</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				</navigator>
				
				<navigator url="/pages/classlist/classlist">
				<view class="row">
					<view class="left">
						<uni-icons type="heart-filled" size="25"></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">
						<view class="text">{{userInfo.scoreSize}}</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				</navigator>
				
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="25"></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
					<!-- #ifdef MP-WEIXIN -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<button @click="clickConcat">拨打电话</button>
					<!-- #endif -->
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">		
				<view class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="25"></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<view class="row">
					<view class="left">
						<uni-icons type="flag-filled" size="25"></uni-icons>
						<view class="text">常见问题</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
	
	<view class="loadingLayout" v-else>
		<view :style="{height: getNavBarHeight() + 'px'}"></view>
		<uni-load-more status="loading"></uni-load-more>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getNavBarHeight } from '@/utils/system.js';
import { apiUserInfo } from '@/api/apis.js';

const userInfo = ref(null);

const clickConcat = function(){
	uni.makePhoneCall({
		phoneNumber:'114'
	})
}

const getUserInfo = () =>{
	apiUserInfo().then(res=>{
		userInfo.value = res.data.data
		console.log("🚀 user.vue 104 Lines. ", userInfo.value);
	})
}
getUserInfo();
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 50rpx 0;
		
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nickname{
			font-size: 50rpx;
			padding: 10rpx 0;
			color: #333;
		}
		.ip{
			color: #bbb;
			font-size: 25rpx;
		}
	}
		
	.section{
		width: 690rpx;
		margin: 30rpx auto;
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				height: 100rpx;
				position: relative;
				border-bottom: 1px solid #eee;
				background-color: #fff;
				&:last-child{
					border-bottom: none;
				}
				.left{
					display: flex;
					align-items: center;
					gap: 15rpx;
					:deep(){
						.uni-icons{
							color: $brand-theme-color !important;
						}
					}
					.text{
						color: #666;
					}
				}
				.right{
					display: flex;
					align-items: center;
					.text{
						font-size: 28rpx;
						color: #aaa;
					}
				}
				button{
					position: absolute;
					top: 0;
					left: 0;
					height: 100rpx;
					width: 100%;
					opacity: 0;
				}
			}
		}
	}
}
</style>
