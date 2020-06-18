//Page Object
Page({
    data: {
        navBarOptions: {
            barTitleText: "关于",
            frontColor: "#000000",
          },
    },
    //options(Object)
    onTabItemTap() {
        wx.vibrateShort();
    },
    onShow: function(){
        
    },
});