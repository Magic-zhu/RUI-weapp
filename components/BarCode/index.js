//Component Object
const barcode = require('./barcode');
Component({
    properties: {
        code:{
            type:String,
            value:'',
        },
        width:{
            type:Number,
            value:300,
        },
        height:{
            type:Number,
            value:150,
        },
    },
    data: {

    },
    lifetimes:{
        attached: function () {
            this.create()
        },
        moved: function () { },
        detached: function () { },
    },
    pageLifetimes:{
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
    methods: {
        create(){
            let ctx = wx.createCanvasContext(container, this);
            barcode(ctx,this.properties.code,this.properties.width,this.properties.height);
        }      
    },
});