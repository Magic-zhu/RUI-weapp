//Component Object
import QRCode from './weapp-qrcode'
Component({
    properties: {
        myProperty:{
            type:String,
            value:'',
            observer: function(){}
        },

    },
    data: {

    },
    methods: {
        create(){
            let qrcode = new QRCode("canvas", {
                usingIn: this.$scope,
                text: text,
                width: 150,
                height: 150,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
              });
        }
    },
});