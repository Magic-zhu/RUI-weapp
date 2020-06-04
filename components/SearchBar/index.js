//Component Object
Component({
    properties: {
        placeholder:{
            type:String,
            value:'请输入搜索用户、内容',
        },
        disabled:{
            type:Boolean,
            value:false,
        }
    },
    data: {
        inputValue:""
    },
    methods: {
        handleInput(e){
            this.setData({
                inputValue:e.detail.value
            })
        },
        handleBlur(e){
            this.triggerEvent('onBlur',this.data.inputValue)
        },
        handleConfirm(e){
            this.triggerEvent('onConfirm',this.data.inputValue)
        },
        clear(){
            this.setData({
                inputValue:""
            })
            this.triggerEvent('onClear')
        }
    },
});