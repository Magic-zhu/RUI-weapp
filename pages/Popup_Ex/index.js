// pages/Popup_Ex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarOptions: {
      barTitleText: "Popup示例",
      frontColor: "#000000",
    },
  },
  btnTap(){
    this.selectComponent('#pop').show();
  },
  btnTap1(){
    this.selectComponent('#pop1').show();
  },
  btnTap2(){
    this.selectComponent('#pop2').show();
  },
  btnTap3(){
    this.selectComponent('#pop3').show();
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