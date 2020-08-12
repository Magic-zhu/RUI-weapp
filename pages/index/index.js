//index.js
import Ani from '../../components/magic-animation/animation'
Page({
    data: {
        navBarOptions: {
            barTitleText: "基础组件",
            frontColor: "#000000",
        },
        list: [
            {
                name: "Canvas库",
                path: "/pages/Canvas_Ex/index"
            },
            {
                name: "Animation库",
                path: ""
            },
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
            },
            {
                name: "Icon",
                path: "/pages/Icon_Ex/index"
            },
        ],
        logoAnimation: null,
    },
    onLoad(){
       
    },
    onTabItemTap() {
        // wx.vibrateShort();
    },
    jump(e) {
        wx.$.click(() => {
            let { index } = wx.$.get(e);
            wx.$.navigate(this.data.list[index].path);
        })
    },
})
