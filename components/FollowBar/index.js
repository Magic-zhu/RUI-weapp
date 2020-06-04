//Component Object
Component({
    properties: {
        data:{
            type:Array,
        },
        vibrate:{
            type:Boolean,
            value:true,
        }
    },
    data: {

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
        handleTap(e){
            if(this.properties.vibrate){
                wx.vibrateShort();
            }
            this.triggerEvent('onchange',e.currentTarget.dataset.index)
        } 
    },
});