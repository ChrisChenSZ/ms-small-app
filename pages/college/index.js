
import api from "../../api/index.js" 
// src/college/index.js
Page({
  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('初始化', options)
    wx.setNavigationBarTitle({
      title: '社团',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    
    api.user.getUser().then(res => {
      console.log('数据',res);
    })
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
  onShareAppMessage: function (res) {
    console.log(111,res)
    return {
      title: '自定义转发标题',
      path: "/src/college/index"
    }
  }
})
