"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const noData = common_vendor.ref(false);
    const queryParams = {
      pageNum: 1,
      pageSize: 12
    };
    common_vendor.onLoad((e) => {
      let { id, name } = e;
      queryParams.classid = id;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      queryParams.pageNum++;
      getClassList();
    });
    const getClassList = async () => {
      let res = await api_apis.apiGetClassList({
        classid: queryParams.classid,
        pageNum: queryParams.pageNum,
        pageSize: queryParams.pageSize
      });
      classList.value = [...classList.value, ...res.data.data];
      if (queryParams.pageSize > res.data.length)
        noData.value = true;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value.length && !noData.value
      }, !classList.value.length && !noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(classList.value, (item, index, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        }),
        d: classList.value.length
      }, classList.value.length ? {
        e: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
