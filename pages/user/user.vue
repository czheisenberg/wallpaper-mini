<template>
	<view class="userLayout">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/5.jpg" mode="aspectFill"></image>
			</view>
			<view class="nickname">鸡你太美</view>
			<view class="ip">IP: 重庆</view>
		</view>
		
		<view class="section">
			<view class="list">
				<view class="row">
					<view class="left">
						<uni-icons type="cloud-download-filled" size="25" color="#28b389"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<view class="row">
					<view class="left">
						<uni-icons type="heart-filled" size="25" color="#28b389"></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">
						<view class="text">3</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="25" color="#28b389"></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<view class="text">0</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">			
				<view class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="25" color="#28b389"></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<view class="row">
					<view class="left">
						<uni-icons type="flag-filled" size="25" color="#28b389"></uni-icons>
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
</template>

<script setup>


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
				border-bottom: 1px solid #eee;
				&:last-child{
					border-bottom: none;
				}
				.left{
					display: flex;
					align-items: center;
					gap: 15rpx;
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
			}
		}
	}
}
</style>
