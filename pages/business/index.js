//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navBarOptions: {
      barTitleText: "业务组件",
      frontColor: "#000000",
    },
    list: [
      {
        name: "Modal",
        path: "/pages/Modal_Ex/index"
      },
    ]
  },
  onLoad() {

  },
  jump(e) {
    wx.$.click(() => {
      let { index } = wx.$.get(e);
      wx.$.navigate(this.data.list[index].path);
    })
  }
})
