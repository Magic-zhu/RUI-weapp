//Component Object
Component({
    properties: {
        list:{
            type:Array,
            value:[],
        },
        showCancel:{
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
        show(){
            this.selectComponent('#magic_popup').show()
        },
        commonTap(e){
            let {index} = e.currentTarget.dataset;
            this.triggerEvent('onTap',index);
        },
        hide(){
            this.selectComponent('#magic_popup').hide()
        }
    },
});