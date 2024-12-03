"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const goPreview = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: common_vendor.p({
          type: "notification",
          size: "20"
        }),
        f: common_vendor.f(5, (item, index, i0) => {
          return {
            a: index
          };
        }),
        g: common_vendor.p({
          type: "right",
          size: "18",
          color: "#333"
        }),
        h: common_vendor.p({
          type: "calendar",
          size: "30"
        }),
        i: common_vendor.p({
          date: Date.now(),
          format: "dd"
        }),
        j: common_vendor.f(8, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.o(goPreview, index)
          };
        }),
        k: common_assets._imports_3,
        l: common_vendor.f(8, (item, index, i0) => {
          return {
            a: index,
            b: "1cf27b2a-7-" + i0
          };
        }),
        m: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
