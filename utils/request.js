
//请求拦截
const interceptor_request = function(options){
    return options
}

//响应拦截
const interceptor_response = function(res){
    return res
}

function request(options){
    if(options.loading){
        wx.showLoading({
            title: "加载中...",
            mask: true,
        });
    }
    options = interceptor_request(options)
    return new Promise((resolve,reject)=>{
        wx.request({
            url: options.url||'',
            data: options.data||{},
            header: options.header||{'content-type':'application/json'},
            method: options.method||'GET',
            dataType: options.dataType||'json',
            responseType: options.responseType||'text',
            success: (result)=>{
                const r = interceptor_response(result);
                resolve(r);
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