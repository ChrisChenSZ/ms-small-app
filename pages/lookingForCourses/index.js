import api from "../../api/index.js";
const app = getApp();
// src/college/index.js
Page({
  /**
   * Page initial data
   */
  data: {
    categoryNav:['同步课','专题课','讲座','素养课','1对1','学币','讲座','讲座','讲座','讲座','讲座','讲座','讲座','讲座',],
    coursesCategoryNav:['全部','数学','语文','编程','英语(Amazing English)'],
    TabCur:0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    lists: [],
    isCard:true,
    query: {pageSize:6, pageNum:1},
    navCur: 0,
    // 轮播图
    imgUrls: [
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  coursesCategoryNavSelect(e) {
    const id = e.currentTarget.dataset.id 
    const {lists,curNav} = this.data
    const query = lists[curNav] && lists[curNav].query || {pageSize:6, pageNum:1}
    this.getAllList(id)
    this.setData({
      navCur: id,
      coursesCategoryNavScrollLeft: (e.currentTarget.dataset.id-1)*60,
      query 
    })
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
    this.getBannerList()
    this.getAllList();
  },
  getBannerList() {
    api.banner.list().then(res => {
      this.setData({
        imgUrls:res.data.data.banner
      })
    })
  },
  getAllList(id) {
    if(id) {
      if(this.data.lists[id]) {
        return
      } else {
        this.getAllApiList(id)
      }
    }else {
      this.getAllApiList()
    }
  },
  getAllApiList (categoryId) {
    const query = categoryId ? {...this.data.query,categoryId} : this.data.query
    api.product.list(query).then(res => {
      const allLists = this.data.lists
      allLists.push({query,list:res.data.data.list})
      this.setData({lists: allLists});
    });
  },

  scrolltoupper () {
    console.log('顶部刷新')
    console.log(this.selectComponent('#msScroll').data.isRefreshing)
    setTimeout( () => {
      this.selectComponent('#msScroll').setData({
        isRefreshing:false
      })
    }, 1000)
  },

  scrolltolower (e) {
    this.setData({
      [`lists[${this.data.navCur}].query.pageNum`]:++this.data.lists[this.data.navCur].query.pageNum
    })
    this.pushList()
  },
  pushList() {
    const {navCur,lists} = this.data
    const currentQuery = lists[navCur].query  
    const query = navCur ? {...currentQuery,categoryId:navCur} : currentQuery
    api.product.list(query).then(res => {
      const newList = lists[navCur].list.concat(res.data.data.list)
      this.setData({[`lists[${navCur}].list`]: newList})
    });
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
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
  },

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
