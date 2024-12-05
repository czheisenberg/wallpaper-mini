import {request} from "@/utils/request.js";

export const apiGetBanner = () =>{
	return request({url: "/homeBanner"});
}

export const apiGetRandom = () =>{
	return request({url: "/randomWall"});
}

export const apiGetClassify = (data={}) => {
	return request({
		url: "/classify",
		data,
	})
}

export const apiGetClassList = (data={}) =>{
	return request({
		url: "/wallList",
		data,
	})
}

export const apiGetSetupScore = (data={}) => {
	return request({
		url: "/setupScore",
		data,
	})
}

export const apiWriteDownload = (data={}) => {
	return request({
		url: "/downloadWall",
		data,
	})
}

export const apiUserInfo = (data={}) => {
	return request({
		url: "/userInfo",
		data,
	})
}
