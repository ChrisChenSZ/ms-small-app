import api from '../../api/index.js'
// src/my/index.js
Page({
  /**
   * Page initial data
   */
  data: {
    focus: false,
    user: {
      username:'',
      password: ''
    }
  },
  login() {
    api.user.login(this.data.user).then(res => {
      console.log('登录', res)
      wx.navigateTo({
        url: './user/user'
      });
    }).catch (err => {
      console.log(err)
    })

  },
  bindKeyInput(e) {
    const inputKey = `user.${e.target.id}`
    this.setData({
      [inputKey]: e.detail.value
    });
    console.log(this.data.user)
  },
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
