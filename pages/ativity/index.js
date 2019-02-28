// src/ativity/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    url:'https://mp.weixin.qq.com/s/ZXxrF_GiMBXemjwAeXhKPQ'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '活动',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    // setTimeout(() => {
    //   this.setData({url:'http://www.baidu.com'})
    // }, 2000)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})