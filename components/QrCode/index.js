//Component Object
import QRCode from './weapp-qrcode'
Component({
    properties: {
        code:{
            type:String,
            value:'',
        },
        color:{
            type:String,
            value:'',
        },
        backgroundColor:{
            type:String,
            value:'',
        },
        width:{
            type:Number,
            value:300,
        },
        height:{
            type:Number,
            value:300,
        },
    },
    data: {
        imageFilePath:"",
    },
    lifetimes:{
        attached(){
            this.create();
        }
    },
    methods: {
        create(){
            new QRCode("container", {
                usingIn: this,
                text: this.properties.code,
                width: this.properties.width,
                height: this.properties.height,
                colorDark: this.properties.color||"#000000",
                colorLight: this.properties.backgroundColor||"#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
                success:()=>{
                    wx.canvasToTempFilePath({
                        x: 0,
                        y: 0,
                        width: this.properties.width,
                        height: this.properties.height,
                        destWidth: this.properties.width,
                        destHeight: this.properties.height,
                        canvasId: "container",
                        fileType: 'png',
                        quality: 1.0,
                        success: (result)=>{
                            this.setData({
                                imageFilePath:result.tempFilePath
                            },()=>{
                                this.triggerEvent('onFinish',result.tempFilePath)
                            })
                        },
                        fail: ()=>{},
                        complete: ()=>{}
                    }, this);
                }
            })
        },
    },
});