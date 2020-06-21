class MagicCanvas {

    constructor(canvasId,component){
        this.context = null;
        this.canvasId = canvasId;
        this.component = component;
    }

    //获取画布上下文
    getContext(){
        return new Promise(resolve=>{
            const query = wx.createSelectorQuery();
            const selector = component?query.select('#'+this.canvasId).in(this.component):query.select('#'+this.canvasId);
            selector.fields({ node: true, size: true })
            .exec((res)=>{
                const canvas = res[0].node;
                canvas.width = res[0].width;
                canvas.height = res[0].height;
                this.context = canvas.getContext('2d');
                resolve(this.context);
            })
        })
    }

    //元素
    box(options){

    }

    text(options){

    }

    image(options){

    }
    

}

export default MagicCanvas 