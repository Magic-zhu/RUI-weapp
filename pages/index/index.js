//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navBarOptions: {
      barTitleText: "基础组件",
      frontColor: "#000000",
    },
    list: [
      {
        name: "Button",
        path: "/pages/Button_Ex/index"
      },
      {
        name: "Cell",
        path: "/pages/Cell_Ex/index"
      },
      {
        name: "Popup",
        path: "/pages/Popup_Ex/index"
      },
      {
        name: "Curtain",
        path: "/pages/Curtain_Ex/index"
      },
      {
        name: "Image",
        path: "/pages/Image_Ex/index"
      }
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
