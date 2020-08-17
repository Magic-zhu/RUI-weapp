// components/magicButton/index.js
import config from "./config"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text: {
            type: String,
            value: "普通按钮"
        },
        custom: {
            type: Object,
            optionalTypes: [String],
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        image: {
            type: String,
        },
        options: {
            type: Object
        },
        loading: {
            type: Boolean
        },
        type:{
            type: String,
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        customStyle: '',
    },
    observers: {
        "custom": function (target) {
            let cssString = this.cssTran(target);
            this.setData({
                customStyle: cssString
            })
        }
    },
    attached(){
        if(config.use && this.properties.type && config[this.properties.type]){
            const customStyle = this.cssTran(config[this.properties.type])
            this.setData({customStyle})
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        cssTran(target){
            let cssString = '';
            if(typeof target =='string'){
                cssString = target
            }else{
                for (let key in target) {
                    cssString = cssString + `${key}:${target[key]};`
                }
            }
            return cssString
        },
        handleTap(e) {
            this.triggerEvent('Tap', e)
        },
        handleGetuserinfo(e) {
            this.triggerEvent('onGetuserinfo', e)
        },
        handleContact(e) {
            this.triggerEvent('onContact', e)
        },
        handlePhoneNumber(e) {
            this.triggerEvent('onPhoneNumber', e)
        },
        handleOpenSetting(e) {
            this.triggerEvent('onOpenSetting', e)
        },
        handleLaunchapp(e) {
            this.triggerEvent('onLaunchapp', e)
        }
    }
})