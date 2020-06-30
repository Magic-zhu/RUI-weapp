// components/magicButton/index.js
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
    },

    /**
     * 组件的初始数据
     */
    data: {
        customStyle: '',
    },
    observers: {
        "custom": function (target) {
            let cssString = '';
            if(typeof target =='string'){
                cssString = target
            }else{
                for (let key in target) {
                    cssString = cssString + `${key}:${target[key]};`
                }
            }
            this.setData({
                customStyle: cssString
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
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