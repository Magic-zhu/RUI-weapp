//         const query = wx.createSelectorQuery();
//         query.select('#'+this.canvasId)
//         .fields({ node: true, size: true })
//         .exec((res)=>{
//             const canvas = res[0].node;
//             canvas.width = res[0].width
//             canvas.height = res[0].height
//             this.vm = canvas.getContext('2d');