// pages/Curtain_Ex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarOptions: {
      barTitleText: "curtain示例",
      frontColor: "#000000",
    },
  },
  open(){
    this.selectComponent("#curtain").show();
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})