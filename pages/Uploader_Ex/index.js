Page({

    /**
     * 页面的初始数据
     */
    data: {
        navBarOptions: {
            barTitleText: "图片上传示例",
            frontColor: "#000000"
        },
        upload: false,
    },
    getSrc(e) {
        this.setData({
            upload: true
        })
        setTimeout(() => {
            this.setData({
                upload: false
            })
        }, 500)
    }
})