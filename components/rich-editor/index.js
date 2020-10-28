//Component Object
let state = {
    colorType: "",
    circleColors: [],
};
Component({
    properties: {
        width: {
            type: String,
            value: '750rpx',
        },
        height: {
            type: String,
            value: '500rpx',
        },
        sid: {
            type: String,
            value: "editor"
        },
        type: {
            type: String,
            value: "top"
        }
    },
    data: {
        /** 
        * ♥️♥️♥️页面数据♥️♥️♥️ 
        */
        Editor:null,
        btnList: [
            {
                key: "icon-editor-clean",
                select: false,
            },
            {
                key: "icon-editor-redo",
                select: false,
            },
            {
                key: "icon-editor-undo",
                select: false,
            },
            {
                key: "icon-editor-bold",
                select: false,
            },
            {
                key: "icon-editor-italic",
                select: false,
            },
            {
                key: "icon-editor-list-numbers",
                select: false,
            },
            {
                key: "icon-editor-list-bulleted",
                select: false,
            },
            //暂不开放图片功能
            // {
            //     key: "icon-editor-image",
            //     select: false,
            // },
        ],
        colorList: [
            "yellow",
            'yellowgreen',
            'green',
            'blue',
            'violet',
            'red',
            '#FF8000',
        ],
        colorPickerAnimation: null,
        /** 
        * 💙💙💙页面状态💙💙💙
        */
        colorSelected: "red",
        color: "",
        highLightSelected: "yellow",
        highlight: "",
        showColorPicker: false,
        showColorCircle: false,
        showToolBar: false,
        attributes: {

        }
    },
    lifetimes: {
        attached: function () {

        }
    },
    methods: {
        initEditor() {
            return new Promise(resolve=>{
                const query = wx.createSelectorQuery().in(this);
                query.select('#' + this.properties.sid).context(res => {
                    this.setData({
                        Editor : res.context
                    },()=>{
                        resolve();
                    })                   
                });
                query.exec();
            })
        },
        getEditorInput(e) {
            this.setData({
                showToolBar: false
            })
            this.triggerEvent('onchange', e.detail)
        },
        handleTap(e) {
            let { key, index } = e.currentTarget.dataset;
            switch (key) {
                case 'icon-editor-bold':
                    this.data.Editor.format('bold');
                    break;
                case 'icon-editor-italic':
                    this.data.Editor.format('italic');
                    break;
                case 'icon-editor-list-bulleted':
                    this.data.Editor.format('list', 'bullet');
                    break;
                case 'icon-editor-list-numbers':
                    this.data.Editor.format('list', 'ordered');
                    break;
                case 'icon-editor-redo':
                    this.data.Editor.redo();
                    return
                case 'icon-editor-undo':
                    this.data.Editor.undo();
                    return
                case 'icon-editor-image':

                    return
                case 'icon-editor-clean':
                    this.data.Editor.clear();
                    return
                default:
                    break;
            }
            let array = this.data.btnList;
            array[index].select = !array[index].select;
            //互为互斥关系
            if (index == 5) {
                array[6].select = false
            }
            if (index == 6) {
                array[5].select = false
            }
            this.setData({
                btnList: array
            })
        },
        //展开颜色选择卡
        showColorPicker(e) {
            let { type } = e.currentTarget.dataset;
            state.colorType = type;
            this.setData({
                showColorPicker: true
            }, () => {
                this.doColorPickerAnimation()
            })
        },
        //颜色选择
        selectColor(e, selfcolor) {
            let index = e ? e.currentTarget.dataset.index : '';
            let color = selfcolor || this.data.colorList[index];
            switch (state.colorType) {
                case 'color':
                    this.setData({
                        colorSelected: color,
                        showColorPicker: false,
                        colorPickerAnimation: null,
                    }, () => {
                        this.colorFont();
                    })
                    break;
                case 'backgroundColor':
                    this.setData({
                        highLightSelected: color,
                        showColorPicker: false,
                        colorPickerAnimation: null,
                    }, () => {
                        this.highlight();
                    })
                    break;
                default:
                    break;
            }
        },
        colorFont() {
            let color;
            if (this.data.color) {
                color = '';
            } else {
                color = this.data.colorSelected;
            }
            this.data.Editor.format('color', color)
            this.setData({
                color,
            })
        },
        highlight() {
            let color;
            if (this.data.highlight) {
                color = '';
            } else {
                color = this.data.highLightSelected;
            }
            this.data.Editor.format('backgroundColor', color)
            this.setData({
                highlight: color
            })
        },
        doColorPickerAnimation() {
            let animation = wx.createAnimation({
                duration: 200,
                timingFunction: 'linear',
                delay: 0,
                transformOrigin: '50% 50% 0'
            });
            if(this.properties.type=='top'){
                animation.opacity(1).translateY('80rpx').step();
            }else if(this.properties.type=='left'){
                animation.opacity(1).translateX('-80rpx').step();
            }
            this.setData({ colorPickerAnimation: animation.export() });
        },
        openColorCircle() {
            this.setData({
                showColorCircle: true,
                showColorPicker: false,
                colorPickerAnimation: null,
            }, () => {
                this.initColorCircle()
            })
        },
        initColorCircle() {
            const query = wx.createSelectorQuery().in(this);
            query.select('#color-circle')
                .fields({ node: true, size: true })
                .exec((res) => {
                    const canvas = res[0].node;
                    canvas.width = 600;
                    canvas.height = 600;
                    let ctx = canvas.getContext('2d');
                    let r = 255;
                    let g = 0;
                    let b = 0;
                    for (let i = 0; i < 36; i++) {
                        if (i < 6) {
                            b += 30;
                        }
                        if (i >= 6 && i < 12) {
                            r -= 30;
                        }
                        if (i >= 12 && i < 18) {
                            g += 30;
                        }
                        if (i >= 18 && i < 24) {
                            b -= 30;
                        }
                        if (i >= 24 && i < 30) {
                            g -= 30;
                        }
                        if (i >= 30 && i < 36) {
                            r += 30;
                        }
                        let color = '#' + this.getColor(r) + this.getColor(g) + this.getColor(b);
                        ctx.fillStyle = color;
                        state.circleColors.push(color);
                        let deg = Math.PI / 18 * (i + 1);
                        let degStart = Math.PI / 18 * i;
                        ctx.beginPath();
                        ctx.moveTo(300, 300);
                        ctx.lineTo(Math.cos(degStart) * 300 + 300, Math.sin(degStart) * 300 + 300);
                        ctx.arc(300, 300, 300, degStart, deg);
                        ctx.lineTo(300, 300);
                        ctx.closePath();
                        ctx.fill();
                    }
                    ctx.fillStyle = 'white';
                    ctx.beginPath()
                    ctx.arc(300, 300, 220, 0, 2 * Math.PI);
                    ctx.closePath()
                    ctx.fill();
                })
        },
        getColor(num) {
            if (num == 0) {
                return '00'
            } else {
                let s = num.toString(16)
                if (s.length == 1) {
                    return '0' + s
                }
                return s
            }
        },
        blur(e) {
            this.setData({
                showToolBar: false
            })                    
        },
        focus() {
            this.setData({
                showToolBar: true
            })
        },
        stausChange(e) {
            let attributes = e.detail;
            console.log('%c属性发生变化', 'color:#409EFF;', attributes)
            let btnList = this.data.btnList;
            if (!e.detail.color) {
                this.setData({
                    color: "",
                    attributes
                });
            } else {
                this.setData({
                    color: e.detail.color,
                    attributes
                });
            }
            if (!e.detail.backgroundColor) {
                this.setData({
                    highlight: "",
                    attributes
                });
            } else {
                this.setData({
                    highlight: e.detail.backgroundColor,
                    attributes
                });
            }
            if (!e.detail.bold) {
                btnList[3].select = false;
            } else {
                btnList[3].select = true;
            }
            if (!e.detail.italic) {
                btnList[4].select = false;
            } else {
                btnList[4].select = true;
            }
            if (!e.detail.list) {
                btnList[5].select = false;
                btnList[6].select = false;
            }
            this.setData({
                attributes,
                btnList
            })
        },
        canvasTouchEnd(e) {
            let { clientX, clientY } = e.changedTouches[0];
            let { offsetLeft, offsetTop } = e.currentTarget;
            let x = (clientX - offsetLeft) - 150;//相对坐标
            let y = 150 - (clientY - offsetTop);//相对坐标
            if (x * x + y * y <= 110 * 110 || x * x + y * y >= 150 * 150) {
                console.log('不在圆环上')
                return
            }
            let deg = Math.atan2(y, x);
            let needDeg;
            if (deg > 0) {
                needDeg = 2 * Math.PI - deg;
            } else {
                needDeg = - deg;
            }
            let index = Math.floor(needDeg / (Math.PI / 18));
            this.setData({
                showColorCircle: false
            }, () => {
                this.selectColor(undefined, state.circleColors[index]);
            })
        },
        // *******************************暴露给外部可用的方法******************************

        getContents() {
            return new Promise(resolve => {
                this.data.Editor.getContents({
                    success(contents) {
                        resolve(contents)
                    }
                })
            })
        },
        setContents(html) {
            this.initEditor()
            .then(()=>{
                // return new Promise((resolve) => {
                    if(html){
                        this.data.Editor.setContents({
                            html,
                            success(){
                                console.log('%c 设置成功','color:green',html)
                                // resolve()
                            },
                            fail(err){
                                console.log('%c 发生错误','color:red',err)
                            }
                        })
                    }
                // })
            })
        },
    },
});