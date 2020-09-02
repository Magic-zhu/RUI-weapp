Page({

    /**
     * 页面的初始数据
     */
    data: {
        navBarOptions: {
            barTitleText: "颜色",
            frontColor: "#000000"
        },
        textList: [
            {
                text: "主要文字",
                value: "#303133",
            },
            {
                text: "常规文字",
                value: "#606266",
            },
            {
                text: "次要文字",
                value: "#909399",
            },
            {
                text: "占位文字",
                value: "#C0C4CC",
            },
        ],
        showdowList: [
            {
                text:"基础投影",
                value:"0 2rpx 4rpx rgba(0, 0, 0, .12)",
            },
            {
                text:"浅色投影",
                value:"0 2rpx 12rpx 0 rgba(0, 0, 0, 0.1)",
            },
        ],
        normalList: [
            {
                color: "red",
                value: "#e54d42"
            },
            {
                color: "orange",
                value: "#ff9900"
            },
            {
                color: "yellow",
                value: "#fbbd08"
            },
            {
                color: "olive",
                value: "#8dc63f"
            },
            {
                color: "green",
                value: "#39b54a"
            },
            {
                color: "cyan",
                value: "#1cbbb4"
            },
            {
                color: "blue",
                value: "#0081ff"
            },
            {
                color: "purple",
                value: "#6739b6"
            },
            {
                color: "mauve",
                value: "#9c26b0"
            },
            {
                color: "pink",
                value: "#e03997"
            },
            {
                color: "brown",
                value: "#a5673f"
            },
            {
                color: "redLight",
                value: "#fadbd9",
                border: "#e54d42",
            },
            {
                color: "orangeLight",
                value: "#fde6d2",
                border: "#ff9900",
            },
            {
                color: "yellowLight",
                value: "#fef2ce",
                border: "#fbbd08",
            },
            {
                color: "oliveLight",
                value: "#e8f4d9",
                border: "#8dc63f",
            },
            {
                color: "greenLight",
                value: "#d7f0db",
                border: "#39b54a",
            },
            {
                color: "cyanLight",
                value: "#d2f1f0",
                border: "#1cbbb4",
            },
            {
                color: "purpleLight",
                value: "#e1d7f0",
                border: "#6739b6",
            },
            {
                color: "mauveLight",
                value: "#ebd4ef",
                border: "#9c26b0",
            },
            {
                color: "pinkLight",
                value: "#f9d7ea",
                border: "#e03997",
            },
            {
                color: "brownLight",
                value: "#ede1d9",
                border: "#a5673f",
            },
        ],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
})