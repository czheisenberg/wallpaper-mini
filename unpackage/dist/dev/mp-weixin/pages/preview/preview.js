"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(0);
    const readImages = common_vendor.ref([]);
    const currentInfo = common_vendor.ref(null);
    const isScore = common_vendor.ref(false);
    const storageClassList = common_vendor.index.getStorageSync("storageClassList") || [];
    classList.value = storageClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    common_vendor.onLoad((e) => {
      currentId.value = e.id;
      currentIndex.value = classList.value.findIndex((item) => item._id == currentId.value);
      currentInfo.value = classList.value[currentIndex.value];
      readImagesFunc();
    });
    function readImagesFunc() {
      readImages.value.push(
        currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value >= classList.value.length ? 0 : currentIndex.value + 1
      );
      readImages.value = [...new Set(readImages.value)];
    }
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = classList.value[currentIndex.value];
      readImagesFunc();
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      scorePopup.value.open();
      if (currentInfo.value.userScore) {
        isScore.value = true;
        userScore.value = currentInfo.value.userScore;
      }
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "加载中"
      });
      let { classid, _id: wallId } = currentInfo.value;
      let res = await api_apis.apiGetSetupScore({
        classid,
        wallId,
        userScore: userScore.value
      });
      common_vendor.index.hideLoading();
      if (res.data.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        classList.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorageSync("storageClassList", classList.value);
        clickScoreClose();
      }
      console.log("res: ", res);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImages.value.includes(index)
          }, readImages.value.includes(index) ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          size: "20",
          color: "#fff"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(classList.value.length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "28"
        }),
        m: common_vendor.o(clickInfo),
        n: common_vendor.p({
          type: "star",
          size: "28"
        }),
        o: common_vendor.t(currentInfo.value.userScore ? currentInfo.value.userScore : currentInfo.value.score),
        p: common_vendor.o(clickScore),
        q: common_vendor.p({
          type: "download",
          size: "24"
        })
      } : {}, {
        r: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        s: common_vendor.o(clickInfoClose),
        t: common_vendor.t(currentInfo.value._id),
        v: common_vendor.t(currentInfo.value.nickname),
        w: common_vendor.t(currentInfo.value.userScore ? currentInfo.value.userScore : currentInfo.value.score),
        x: common_vendor.p({
          value: currentInfo.value.userScore ? currentInfo.value.userScore : currentInfo.value.score
        }),
        y: common_vendor.t(currentInfo.value.description),
        z: common_vendor.f(currentInfo.value.tabs, (tab, index, i0) => {
          return {
            a: common_vendor.t(tab),
            b: index
          };
        }),
        A: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        B: common_vendor.p({
          type: "bottom"
        }),
        C: common_vendor.t(isScore.value ? "评分过了~" : "壁纸评分"),
        D: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        E: common_vendor.o(clickScoreClose),
        F: common_vendor.o(($event) => userScore.value = $event),
        G: common_vendor.p({
          allowHalf: "",
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3E",
          modelValue: userScore.value
        }),
        H: common_vendor.t(userScore.value),
        I: common_vendor.o(submitScore),
        J: !userScore.value || isScore.value,
        K: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        L: common_vendor.p({
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
