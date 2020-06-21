//Component Object
const { code128 } = require('./barcode');
Component({
    properties: {
        code: {
            type: String,
            value: '',
        },
        width: {
            type: Number,
            value: 300,
        },
        height: {
            type: Number,
            value: 150,
        },
    },
    data: {
        imageFilePath: "",
    },
    lifetimes: {
        attached: function () {
            this.create()
        },
        moved: function () { },
        detached: function () { },
    },
    pageLifetimes: {
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
    methods: {
        create() {
            let ctx = wx.createCanvasContext('container', this);
            code128(ctx, this.properties.code, this.properties.width, this.properties.height)
                .then(() => {
                    wx.canvasToTempFilePath({
                        canvasId: 'container',
                        success: (r) => {
                            this.setData({ imageFilePath: r.tempFilePath },()=>{
                                this.triggerEvent('onFinish',r.tempFilePath)
                            })
                        },
                        fail:(err)=>{
                            console.log(err)
                        }
                    },this)
                }
                )
        }
    },
});