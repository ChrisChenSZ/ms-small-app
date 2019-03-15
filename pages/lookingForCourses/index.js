import api from "../../api/index.js";
const app = getApp();
// src/college/index.js
Page({
  /**
   * Page initial data
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [],
    query: {pageSize:6, pageNum:1},
    // 轮播图
    imgUrls: [
      "http://b.hiphotos.baidu.com/image/pic/item/11385343fbf2b2114a65cd70c48065380cd78e41.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552277593383&di=eb64883db8bf951cccf9018b9b977c0f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffc1f4134970a304e210531d0dfc8a786c9175cf0.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552277593382&di=6e464028f1e0d01a1079e38c9c7bfbbc&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F962bd40735fae6cd9456784901b30f2442a70f3c.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  isCard(e) {
    this.setData({
      isCard: e.detail.value
    });
  },
  /*~~~~~~~~~~~~~~~~~轮播图开始~~~~~~~~~~~~~~~~~~~~~*/
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    });
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    });
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    });
  },
  /*~~~~~~~~~~~~~~~~~轮播图结束~~~~~~~~~~~~~~~~~~~~~*/

  showModal() {
    this.setData({
      modalName: "DialogModal1"
    });
  },

  hideModal(e) {
    this.setData({
      modalName: null
    });
  },

  getUserInfo() {
    try {
      const userInfo = wx.getStorageSync("userInfo");
      return userInfo;
      // Do something with return value
    } catch (e) {
      // Do something when catch error
      console.log(e);
    }
  },

  onGotUserInfo(userInfo) {
    this.hideModal();
    const openid = this.getOpenId();
    try {
      wx.setStorageSync("userInfo", JSON.stringify(userInfo.detail.rawData));
    } catch (e) {
      console.log("保存openid错误", e);
    }
  },

  getOpenId() {
    try {
      const value = wx.getStorageSync("openid");
      if (value) {
        return value;
        // Do something with return value
      }
    } catch (e) {
      // Do something when catch error
      console.log(e);
    }
  },
  defaultUserInfo() {
    const userInfo = this.getUserInfo();
    console.log(userInfo);
    if (!userInfo) {
      this.showModal();
    }
  },

  initData() {
    this.setNavigationBarTitle();
    this.defaultUserInfo();
    this.getList();
  },
  getList() {
    api.product.list(this.data.query).then(res => {
     
      const newList = this.data.list.concat(res.data.data.list)
      this.setData({
        list: newList
      });
      console.log(this.data.list);
    });
  },

  scrolltoupper () {
    console.log('顶部刷新')
  },

  scrolltolower () {
    console.log('底部刷新')
    this.setData({
      ['query.pageNum']:++this.data.query.pageNum
    })
    console.log(this.data.query.pageNum)
    this.getList()
  },

  setNavigationBarTitle() {
    wx.setNavigationBarTitle({
      title: "找课程",
      success: result => {},
      fail: () => {},
      complete: () => {}
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.initData();

    // api.user.getUser().then(res => {
    //   console.log('数据',res);
    // })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function(res) {
    console.log(111, res);
    return {
      title: "自定义转发标题",
      path: "/src/college/index"
    };
  }
});
