## 示例图片

![ex](../assets/popup.png)

## 示例代码
```html
    <Popup id='pop'>
        <view class="white_block">
            //这里写自己的内容
        </view> 
    </Popup>
```
```js
 this.selectComponent('#pop').show();
```

## 属性
|    属性     |  类型  | 默认值 | 必填 | 说明                        |
| :---------: | :----: | :----: | :--: | --------------------------- |
|  position  | String |   bottom     |  否  | 支持top,bottom,left,right 表示从哪个方向弹出 |

通过实例操作

+ show() 展示
+ hide() 收起
