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