<template>
	<view class="preview">
		<swiper
			circular="true"
			:current="currentIndex"
			@change="swiperChange"
		>
			<swiper-item v-for="(item, index) in classList" :key="item._id">
				<image v-if="readImages.includes(index)" @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-if="maskState">
			<view class="goback" @click="goBack" :style="{top: getStatusBarHeight() + 'px'}">
				<uni-icons type="back" size="20" color="#fff"></uni-icons>
			</view>
			<view class="count">{{currentIndex + 1}} / {{classList.length}}</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">{{currentInfo.userScore ? currentInfo.userScore : currentInfo.score}}分</view>
				</view>
				
				<view class="box">
					<uni-icons type="download" size="24"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popupHeader">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y="true" >
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID:</view>
							<text selectable class="value id"> {{currentInfo._id}}</text>
						</view>
						<view class="row">
							<view class="label">分类:</view>
							<text selectable class="value classify"> 美女</text>
						</view>
						<view class="row">
							<view class="label">发布者:</view>
							<text selectable class="value"> {{currentInfo.nickname}}</text>
						</view>
						<view class="row">
							<view class="label">评分:</view>
							<text selectable class="value">
								{{currentInfo.userScore ? currentInfo.userScore : currentInfo.score}}
								<uni-rate :value="currentInfo.userScore ? currentInfo.userScore : currentInfo.score"></uni-rate>
								<!-- <text class="score">{{currentInfo.score}}分</text> -->
							</text>
						</view>
						<view class="row">
							<view class="label">摘要:</view>
							<text selectable class="value">
								{{currentInfo.description}}
							</text>
						</view>
						<view class="row">
							<view class="label">标签:</view>
							<view class="value tags">
								<view class="tag" v-for="(tab, index) in currentInfo.tabs" :key="index">{{tab}}</view>
							</view>
						</view>
						
						<view class="copyright">
							声明: 所有图片均来自互联网，非商业使用，仅用于免费学习交流，如有侵权，您可以联系平台删除。谢谢合作。
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popupHeader">
					<view></view>
					<view class="title">{{isScore ? '评分过了~' : '壁纸评分'}}</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				
				<view class="content">
					<uni-rate v-model="userScore" allowHalf="" :disabled="isScore" disabled-color="#FFCA3E"></uni-rate>
					<text class="text">{{userScore}}分</text>
				</view>
				
				<view class="footer">
					<button @click="submitScore" :disabled="!userScore || isScore" type="default" size="mini" plain="true">确认评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import {ref} from 'vue';
import {getStatusBarHeight} from "@/utils/system.js";
import { apiGetSetupScore } from "@/api/apis.js";
import { onLoad } from '@dcloudio/uni-app';

const maskState = ref(true)
const infoPopup = ref(null)
const scorePopup = ref(null)
const userScore = ref(0)
const classList = ref([])
const currentId = ref(null)
const currentIndex = ref(0)
const readImages = ref([])
const currentInfo = ref(null)
const isScore = ref(false)

// 从storage中读取数据
const storageClassList =  uni.getStorageSync("storageClassList") || [];
classList.value = storageClassList.map(item=>{
	return{
		...item,
		picurl: item.smallPicurl.replace("_small.webp", ".jpg")
	}
})

// onLoad()声明周期
onLoad((e)=>{
	currentId.value = e.id
	currentIndex.value = classList.value.findIndex(item=>item._id == currentId.value)
	currentInfo.value = classList.value[currentIndex.value]
	readImagesFunc();
})
// 读取图片函数用于预加载前，中，后三张图
function readImagesFunc(){
	readImages.value.push(
		currentIndex.value<=0 ? classList.value.length-1 : currentIndex.value-1,
		currentIndex.value,
		currentIndex.value>=classList.value.length ? 0 : currentIndex.value+1
	)
	readImages.value = [...new Set(readImages.value)]
}

// 轮播图切换
const swiperChange = (e) => {
	currentIndex.value = e.detail.current
	currentInfo.value = classList.value[currentIndex.value]
	readImagesFunc();
}

// 返回上一页
const goBack = ()=>{
	uni.navigateBack()
}

// 遮罩层切换(显示/不显示)
const maskChange = () =>{
	maskState.value = !maskState.value
}
// 点击弹出信息
const clickInfo = ()=>{
	infoPopup.value.open()
}
// 点击关闭信息
const clickInfoClose = ()=>{
	infoPopup.value.close()
}
// 点击评分弹出
const clickScore = ()=>{
	scorePopup.value.open()
	if(currentInfo.value.userScore){
		isScore.value = true
		userScore.value = currentInfo.value.userScore
	}
}
// 点击评分关闭
const clickScoreClose = () =>{
	scorePopup.value.close()
	userScore.value = 0
	isScore.value = false
}
// 提交评分
const submitScore = async () =>{
	uni.showLoading({
		title:"加载中"
	})
	let { classid,_id:wallId } = currentInfo.value
	let res = await apiGetSetupScore({
		classid,
		wallId,
		userScore: userScore.value
	})
	uni.hideLoading()
	if(res.data.errCode === 0){
		uni.showToast({
			title:"评分成功",
			icon:"none"
		})
		classList.value[currentIndex.value].userScore = userScore.value
		uni.setStorageSync("storageClassList", classList.value)
		clickScoreClose();
	}
	console.log("res: ", res)
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
			width: 38px;
			height: 38px;
			background-color: rgba(0,0,0, 0.5);
			left: 30rpx;
			margin-left: 0;
			border-radius: 100px;
			top: 0;
			backdrop-filter: blur(10rpx);
			border: 1rpx solid rgba(255,255,255,0.3);
			display: flex;
			justify-content: center;
			align-items: center;
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
	.popupHeader{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title{
			color: #676767;
		}
		.close{
			padding: 10rpx;
		}
	}
	.infoPopup{
		background-color: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		
		scroll-view{
			max-height: 60vh;
			.content{
				.copyright{
					margin: 10rpx 20rpx;
					background-color: #f6f6f6;
					font-size: 28rpx;
					padding: 15rpx;
					border-radius: 12rpx;
				}
				.row{
					display: flex;
					align-items: center;
					padding: 15rpx 0;
					font-size: 32rpx;
					line-height: 1em;
					.label{
						color: #a7a7a7;
						width: 140rpx;
						text-align: center;
						font-size: 30rpx ;
					}
					.value{
						flex: 1;
						width: 0;
					}
					.tags{
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						.tag{
							padding: 10rpx 30rpx;
							line-height: 1em;
							font-size: 22rpx;
							border: 1px solid $brand-theme-color;
							border-radius: 40rpx;
							color: $brand-theme-color;
							margin: 0 10rpx 10rpx 0;
							display: flex;
							align-items: center;
						}
					}
					.classify{
						color: $brand-theme-color;
					}
					.id{
						color: #bbb;
					}
				}
			}
		}
	}
	.scorePopup{
		background: #fff;
		padding: 30rpx;
		width: 70vw;
		border-radius: 30rpx;
		.content{
			padding: 30rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.text{
				padding-left: 10rpx;
				color: #FFCA3E;
				line-height: 1em;
				width: 80rpx;
				text-align: right;
			}
		}
		.footer{
			padding: 10rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
