<template>
	<view class="classLayout pageBg">
		<view class="classify">
			<theme-item v-for="(item, index) in 15" :key="index"></theme-item>
		</view>
	</view>
</template>

<script setup>


</script>

<style lang="scss">
.classLayout{
	.classify{
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
}
</style>
