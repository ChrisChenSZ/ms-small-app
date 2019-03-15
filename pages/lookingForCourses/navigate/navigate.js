Page({
  onLoad: function (options) {
    console.log('带过来的参数',options)
    wx.setNavigationBarTitle({
      title: '详情页',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });

  },
})