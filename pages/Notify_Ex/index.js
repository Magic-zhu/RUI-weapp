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
})