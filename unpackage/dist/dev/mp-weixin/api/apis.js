"use strict";
const utils_request = require("../utils/request.js");
const apiGetBanner = () => {
  return utils_request.request({ url: "/homeBanner" });
};
const apiGetRandom = () => {
  return utils_request.request({ url: "/randomWall" });
};
const apiGetClassify = (data = {}) => {
  return utils_request.request({
    url: "/classify",
    data
  });
};
const apiGetClassList = (data = {}) => {
  return utils_request.request({
    url: "/wallList",
    data
  });
};
const apiGetSetupScore = (data = {}) => {
  return utils_request.request({
    url: "/setupScore",
    data
  });
};
const apiWriteDownload = (data = {}) => {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
};
const apiUserInfo = (data = {}) => {
  return utils_request.request({
    url: "/userInfo",
    data
  });
};
const apiGetHistoryInfo = (data = {}) => {
  return utils_request.request({
    url: "/userWallList",
    data
  });
};
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetHistoryInfo = apiGetHistoryInfo;
exports.apiGetRandom = apiGetRandom;
exports.apiGetSetupScore = apiGetSetupScore;
exports.apiUserInfo = apiUserInfo;
exports.apiWriteDownload = apiWriteDownload;
