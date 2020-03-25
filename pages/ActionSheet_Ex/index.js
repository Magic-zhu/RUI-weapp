Page({

    /**
     * 页面的初始数据
     */
    data: {
        navBarOptions: {
            barTitleText: "ActionSheet 示例",
            frontColor: "#000000"
        },
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    onReady() {

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },
    openbox1() {
        this.selectComponent('#ActionSheet1').show()
    },
    openbox2(){
        this.selectComponent('#ActionSheet2').show()
    },
    choose(e){
        wx.showToast({
            title: `你点击了第${e.detail}个`,
            icon: 'none',
        });
    }
})