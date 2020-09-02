// pages/Button_Ex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarOptions:{
        barTitleText:"button示例",
        frontColor:"#000000",
    },
    ex_pa:{
      text:"我是参数"
    },
    options:{
      openType:'share'
    },
    style1:{
      'background-color':'#ff99aa',
      'width':'300rpx',
      'height':'80rpx'
    },
    style2:{
      'background-color':'#0081ff',
    }
  },
  btnTap(e){
    let {params} = wx.$.get(e);
    wx.showToast({
      title: '点击了 参数是：'+params.text,
      icon: 'none'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})