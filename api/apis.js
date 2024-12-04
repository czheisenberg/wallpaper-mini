import {request} from "@/utils/request.js";

export const apiGetBanner = () =>{
	return request({url: "/homeBanner"});
}

export const apiGetRandom = () =>{
	return request({url: "/randomWall"});
}