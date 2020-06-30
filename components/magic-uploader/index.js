//Component Object
Component({
    properties: {
        uploading:{
            type:Boolean,
            value:false
        }
    },
    data: {
        src:"",//上传后的图片地址
    },
    methods: {
        upload(){
            if(this.data.src!='') return;
            wx.chooseImage({
                count: 1,
                success:(res)=>{
                    this.setData({
                        src:res.tempFilePaths[0]
                    })
                    this.triggerEvent('onGetSrc',res.tempFilePaths[0])
                },
            });
        },
        preview(){
            wx.previewImage({
                current: '0',
                urls: [this.data.src],
            });
        },
        clear(){
            this.setData({
                src:''
            })
        }
    },
});