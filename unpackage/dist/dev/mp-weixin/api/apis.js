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
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassify = apiGetClassify;
exports.apiGetRandom = apiGetRandom;
