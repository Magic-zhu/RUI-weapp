
//请求拦截
const interceptor_request = function(options){

}

//响应拦截
const interceptor_response = function(res){

}

function request(options){
    if(options.loading){
        wx.showLoading({
            title: "加载中...",
            mask: true,
        });
    }
    interceptor_request(options)
    return new Promise((resolve,reject)=>{
        wx.request({
            url: options.url||'',
            data: options.data||{},
            header: options.header||{'content-type':'application/json'},
            method: options.method||'GET',
            dataType: options.dataType||'json',
            responseType: options.responseType||'text',
            success: (result)=>{
                interceptor_response(result);
                resolve(result);
            },
            fail: (err)=>{
                reject(err);
            },
            complete: ()=>{
                wx.hideLoading();
            }
        });
    })
}