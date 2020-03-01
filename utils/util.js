import config from "../config/index"
let timer;
/**
 *  点击添加 触摸反馈  
 * @param {*} callback 
 * @param {*} time - 填写time时 time时间内只能触发一次
 */
const click = (callback,time) =>{
    wx.vibrateShort();
    let context = this;
    if (time) {
        return function () {
            if (!timer) {
                callback.apply(context, arguments);
                timer = setTimeout(() => {
                    clearTimeout(timer);
                    timer = null;
                }, time)
            }
        }()
    } else {
        callback()
    }
}

let tabPath = config.tabPath;

/**
 * 
 * @param {string} url - 跳转地址
 * @param {object} params -携带参数
 * @param {number} type - 0  1redircte  2relaunch 3tab页面
 */
function naviagte(url, params, type) {
    let finalurl = url;
    let _type = 0;
    //如果存在路由参数
    if (params) {
        finalurl = handleparams(url, params);
    }

    if (type) {
        _type = type
    }

    if (tabPath.length != 0) {
        for (let i = 0; i<tabPath.length; i++) {
            if (url == tabPath[i]) {
                _type = 3;
                break
            }
        }
    }

    switch (_type) {
        case 0:
            wx.navigateTo({
                url: finalurl,
                fail: (err) => {
                    console.log("页面跳转错误❌",err)
                    wx.redirectTo({
                        url: finalurl
                    });
                }
            })
            break;
        case 1:
            wx.redirectTo({
                url: finalurl
            });
            break;
        case 2:
            wx.reLaunch({
                url: finalurl
            });
            break
        case 3:
            wx.switchTab({ url: finalurl })
    }
}

/**
 *  处理跳转带过来的参数
 * @param {*} url 
 * @param {*} params 
 */
function handleparams(url, params) {
    let res = url;
    let arr = [];
    for (var key in params) {
        let temp = [];
        temp[0] = key;
        temp[1] = params[key];
        arr.push(temp)
    }
    let len = arr.length;
    res= res + "?"
    for (let i = 0; i < len; i++) {
        res = res + arr[i][0] + "=" + arr[i][1] + "&"
    }
    return res
}

const get  = function (e) {
    return e.currentTarget.dataset
}

export default {
    click,
    naviagte,
    get,
}
