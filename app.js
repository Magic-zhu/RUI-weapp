//app.js
import Utils from "./utils/util"
App({
  onLaunch: function () {
    wx.$= Object.create(null);
    wx.$.click = Utils.click;
    wx.$.navigate = Utils.naviagte;
    wx.$.get = Utils.get;
  },
  globalData: {
    userInfo: null
  }
})