## 示例图片
![图片](../assets/image.png)
## 示例代码
```html
    <magic-image src="xxxxx" width='658rpx' height='411rpx'></magic-image>
```
## 属性

|属性|类型|默认值|必填|说明
|:---:|:---:|:---:|:---:|---|
|width|string|750rpx|否|宽度
|height|string|auto|否|高度
|src|number|-|是|图片地址
|mode|string|-|否|图片模式 等同于wx组件image的[mode](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
|default|string|-|否|在图片还未加载完成前 默认显示的图片
|defaultHeight|string|-|否|当有时候不确定图片高度的时候可以给一个默认的高度