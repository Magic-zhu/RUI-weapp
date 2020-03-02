// pages/Notify_Ex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarOptions: {
      barTitleText: "notify示例",
      frontColor: "#000000",
    },
  },
  btnTap(){
    this.selectComponent("#nf").success("成功通知")
  },
  btnTap1() {
    this.selectComponent("#nf").error("失败通知")
  },
  btnTap2() {
    this.selectComponent("#nf").warning("警告通知")
  },
  btnTap3() {
    this.selectComponent("#nf").info("信息")
  },
  btnTap4() {
    this.selectComponent("#nf").custom("自定义",'pink')
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