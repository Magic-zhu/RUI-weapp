//Component Object
import config from './config';
Component({
    properties: {
        color:{
            type:String,
            value:"#b3b8c6"
        },
        selectedColor:{
            type:String,
            value:"#ffa400"
        },
        backgroundColor:{
            type:String,
        },
        custom:{
            type:Boolean,
            value:false,
        },
        tabItemList:{
            type:Array,
        }
    },
    data: {
        tabItemList:[],
        ifHasBlank:false,
        active:0,
    },
    lifetimes:{
        attached: function () {
            this.checkIfNeedBlank();
            this.init();
        },
    },
    methods: {
        //初始化组件
        init(){
            let tabItemList;
            if (this.properties.tabItemList.length==0){
                if(!config.list){
                    console.error('👉来自tabbar组件:必须要在配置文件中定义list或者动态传入tabItemList');
                    return 
                }
                tabItemList = config.list;
            }
            tabItemList = tabItemList.map(item=>{
                item.redDot = false;
                item.badge = null;
                return item
            })
            let pageStack =  getCurrentPages();
            let nowRoute = pageStack[pageStack.length-1].route;
            let active;
            for(let i=0;i<tabItemList.length;i++){
                if(tabItemList[i].pagePath==nowRoute){
                    active = i;
                }
            }
            this.setData({tabItemList,active});
        },
        //是否要给小黑条 留出位置
        checkIfNeedBlank(){
            let model = wx.getSystemInfoSync().model;
            if (
                model.indexOf("iPhone") != -1 &&
                model.indexOf("iPhone 5") == -1 &&
                model.indexOf("iPhone 6") == -1 &&
                model.indexOf("iPhone 7") == -1 &&
                model.indexOf("iPhone 8") == -1 &&
                model.indexOf("iPhone SE") == -1
            ) {
                this.setData({ifHasBlank:true})
            }
        },
        showRedDot(index){

        },
        tabbarTap(e){
            let {index} = e.currentTarget.dataset;
            let url = "/"+this.data.tabItemList[index].pagePath;
            switch(this.data.tabItemList[index].jumpType){
                case 'swtichTab':
                    wx.switchTab({
                        url,
                        fail: (err)=>{
                            console.error(err)
                        },
                    });
                    break
                case 'navigateTo':
                    wx.navigateTo({
                        url,
                        fail: (err)=>{
                            console.error(err)
                        },
                    })    
            }
        }
    },
});