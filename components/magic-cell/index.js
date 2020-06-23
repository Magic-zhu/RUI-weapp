// components/Cell/index.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        icon_left: {
            type: String,
        },
        icon_right: {
            type: String,
        },
        label: {
            type: String,
            value: "标题"
        },
        value: {
            type: String,
            value: "内容"
        },
        size: {
            type: String,
            value: "normal"
        },
        custom: {
            type: Object,
            optionalTypes: [String],
        },
        customHover: {
            type: String
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        customStyle: "",
    },
    observers: {
        "custom": function (target) {
            let cssString = '';
            console.log(typeof target)
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
            this.triggerEvent('onTap', e);
        }
    }
})
