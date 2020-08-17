Page({
    data: {
        navBarOptions: {
            barTitleText: "组件",
            frontColor: "#000000",
        },
        list: [
            {
                name: "基础组件",
                type: "title",
            },
            {
                name: "Canvas库",
                path: "/pages/Canvas_Ex/index",
                type: "page",
            },
            {
                name: "Animation库",
                path: "",
                type: "page",
            },
            {
                name: "Button 按钮",
                path: "/pages/Button_Ex/index",
                type: "page",
            },
            {
                name: "Cell 单元格",
                path: "/pages/Cell_Ex/index",
                type: "page",
            },
            {
                name: "Popup 弹出层",
                path: "/pages/Popup_Ex/index",
                type: "page",
            },
            {
                name: "Curtain 幕帘",
                path: "/pages/Curtain_Ex/index",
                type: "page",
            },
            {
                name: "Image 图片",
                path: "/pages/Image_Ex/index",
                type: "page",
            },
            {
                name: "Icon 图标",
                path: "/pages/Icon_Ex/index",
                type: "page",
            },
            {
                name: "反馈组件",
                type: "title",
            },
            {
                name: "Notify 通知",
                path: "/pages/Notify_Ex/index",
                type: "page",
            },
            {
                name: "ActionSheet 上拉菜单",
                path: "/pages/ActionSheet_Ex/index",
                type: "page",
            },
            {
                name: "业务组件",
                type: "title",
            },
            {
                name: "Modal",
                path: "/pages/Modal_Ex/index",
                type: "page",
            },
            {
                name: "BarCode 条形码",
                path: "/pages/BarCode_Ex/index",
                type: "page",
            },
            {
                name: "QrCode 二维码",
                path: "/pages/Qrcode_Ex/index",
                type: "page",
            },
            {
                name: "Uploader 图片上传",
                path: "/pages/Uploader_Ex/index",
                type: "page",
            }
        ],
        logoAnimation: null,
    },
    onLoad() {

    },
    onTabItemTap() {
        // wx.vibrateShort();
    },
    jump(e) {
        let { index } = wx.$.get(e);
        wx.$.navigate(this.data.list[index].path);
    },
})
