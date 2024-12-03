const SYSTEM_INFO = uni.getSystemInfoSync()
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15 // 获取状态栏高度
export const getTitleBarHeight = () =>{
	if(uni.getMenuButtonBoundingClientRect){
		let {top, height} = uni.getMenuButtonBoundingClientRect()
		let titleBarHeight = height + (top - getStatusBarHeight()) * 2
		return titleBarHeight;
	}else{
		return 40;
	}
}

export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();