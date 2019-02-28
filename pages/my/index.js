// src/my/index.js
Page({
  /**
   * Page initial data
   */
  data: {
    focus: false,
    inputValue: ''
  },
  login() {
    console.log(12111);
    wx.navigateTo({
      url: './user/user'
    });
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  // bindReplaceInput(e) {
  //   const value = e.detail.value;
  //   let pos = e.detail.cursor;
  //   if (pos != -1) {
  //     // 光标在中间
  //     const left = e.detail.value.slice(0, pos);
  //     // 计算光标的位置
  //     pos = left.replace(/11/g, '2').length;
  //   }

  //   // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
  //   return {
  //     value: value.replace(/11/g, '2'),
  //     cursor: pos
  //   };

  // 或者直接返回字符串,光标在最后边
  // return value.replace(/11/g,'2'),
  // },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '我的',
      success: result => {},
      fail: () => {},
      complete: () => {}
    });
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
  onShareAppMessage: function() {}
});
