//Component Object
Component({
    properties: {
        label:{
            type:String,
        },
        color:{
            type:String,
        },
        size:{
            type:String,
            value:"32rpx",
        }
    },
    data: {
        isChecked:false,
    },
    lifetimes:{
        attached: function () { },
        moved: function () { },
        detached: function () { },
    },
    pageLifetimes:{
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
    methods: {
        changeStatus(){
            this.setData({isChecked:!this.data.isChecked},()=>{
                this.triggerEvent('onChange',this.data.isChecked)
            });
        }
    },
});