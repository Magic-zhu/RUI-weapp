//Component Object
Component({
    properties: {
        default:{
            type:String,
        },
        pickerRange: {
            type: Array,
            value: [],
        },
        pickerRangeKey: {
            type: String,
            value: "",
        },
        pickerDisabled: {
            type: Boolean,
            value: false,
        },
        pickerMode: {
            type: String,
            value: 'selector',
        },
        //1-输入框 2 picker 3 -多选
        type: {
            type: String,
            value: 'text',
        },
        password: {
            type: Boolean,
            value: false,
        },
        placeholder: {
            type: String,
            value: '请输入内容',
        },
        placeholderClass: {
            type: String,
            value: 'placeholder-default',
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        maxlength: {
            type: String,
            value: '',
        },
        label: {
            type: String,
            value: '',
        },
        pid:{
            type: String,
        },
        required:{
            type:Boolean,
            value:false
        }
    },
    data: {
        inputValue: "",
        pickerValue:"",
        mutiValue:[],
        mutiRange:[],
    },
    attached(){
        if(this.properties.type==3){
            this.setData({
                mutiRange:this.properties.pickerRange.map(item=>{                   
                    return {
                        value:item,
                        active:false
                    }
                })
            })
        }
    },
    methods: {
        onInput(e) {
            let value = e.detail.value;
            this.setData({ inputValue: value });
            this.triggerEvent('onInput', value);
        },
        onFocus(e) {
            let value = e.detail.value;
            this.triggerEvent('onFocus', value);
        },
        onBlur(e) {
            let value = e.detail.value;
            this.triggerEvent('onBlur', value);
        },
        onConfirm(e) {
            let value = e.detail.value;
            this.triggerEvent('onConfirm', value);
        },
        setValue(value, callback) {
            this.setData({ inputValue: value }, () => {
                callback && callback()
            });
        },
        onPickerChange(e) {
            let value = e.detail.value;
            if(this.properties.pickerRangeKey){
                this.setData({pickerValue:this.properties.pickerRange[value][this.properties.pickerRangeKey]})
            }else{
                this.setData({pickerValue:this.properties.pickerRange[value]})
            }
            this.triggerEvent('onPickerChange', value);
        },
        onMultiPickerTap(e){
            this.selectComponent('#popup'+this.properties.pid).show();
        },
        choose(e){
            const {index} = e.currentTarget.dataset;
            let mutiRange = this.data.mutiRange;
            mutiRange[index].active = !mutiRange[index].active;
            this.setData({mutiRange});
        },
        confirmChoose(){
            let arr_choose = [];
            this.data.mutiRange.forEach(item=>{
                if(item.active){
                    arr_choose.push(item.value)
                }
            });
            this.setData({mutiValue:arr_choose});
            this.selectComponent('#popup'+this.properties.pid).hide();
            this.triggerEvent('onMutiValueChange',arr_choose);
        }
    },
});