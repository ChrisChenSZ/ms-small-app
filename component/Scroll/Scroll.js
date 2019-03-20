// component/Scroll/Scroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hasMoreData: true,
    isRefreshing: false,
    isLoadingMoreData: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadModal () {
      this.setData({
        loadModal: true
      })
      setTimeout(()=> {
        this.setData({
          loadModal: false
        })
      }, 2000)
    },
    scrolltoupper () {
      console.log('里面下拉刷新')
      this.loadModal()
      this.triggerEvent('scrolltoupper', ['下拉'])
    },
    scrolltolower () {
      console.log('上拉加载')
      this.triggerEvent('scrolltolower', ['上拉'])
    },
    onPullDownRefresh: function () {
      if (this.data.isRefreshing || this.data.isLoadingMoreData) {
        return
      }
      this.setData({
        isRefreshing: true,
        hasMoreData: true
      })
      // this.requestData()//数据请求
    },
    onReachBottom: function () {
      if (this.data.isRefreshing || this.data.isLoadingMoreData || !this.data.hasMoreData) {
        return
      }
      
      this.setData({
        isLoadingMoreData: true
      })
      // this.requestData()//数据请求
    },
  }
})
