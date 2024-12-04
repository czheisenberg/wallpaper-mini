"use strict";
const utils_request = require("../utils/request.js");
const apiGetBanner = () => {
  return utils_request.request({ url: "/homeBanner" });
};
const apiGetRandom = () => {
  return utils_request.request({ url: "/randomWall" });
};
exports.apiGetBanner = apiGetBanner;
exports.apiGetRandom = apiGetRandom;
