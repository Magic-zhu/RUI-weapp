//Component Object
Component({
    properties: {
        list:{
            type:Array,
            value:[],
        },
        showCancel:{
            type:Boolean,
            value:false,
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
        commonTap(){

        },
        hide(){
            this.selectComponent('#magic_popup').hide()
        }
    },
});