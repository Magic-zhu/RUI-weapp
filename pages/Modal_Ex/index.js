// pages/Modal_Ex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarOptions: {
      barTitleText: "modal示例",
      frontColor: "#000000",
    },
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
  tap1(){
    this.selectComponent('#modal1').open()
  },
  tap2() {
    this.selectComponent('#modal2').open()
  },
  tap3() {
    this.selectComponent('#modal3').open()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})