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
      {
        name:"BarCode 条形码",
        path:"/pages/BarCode_Ex/index"
      },
      {
        name:"QrCode 二维码",
        path:"/pages/Qrcode_Ex/index"
      },
    ]
  },
  onTabItemTap() {
    wx.vibrateShort();
},
  jump(e) {
    wx.$.click(() => {
      let { index } = wx.$.get(e);
      wx.$.navigate(this.data.list[index].path);
    })
  }
})
