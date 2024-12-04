"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const queryParams = {};
    common_vendor.onLoad((e) => {
      let { id, name } = e;
      queryParams.classid = id;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    const getClassList = async () => {
      let res = await api_apis.apiGetClassList({
        classid: queryParams.classid
      });
      console.log("res: ", res);
      classList.value = res.data.data;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, index, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
