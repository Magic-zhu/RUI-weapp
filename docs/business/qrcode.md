## 示例图片
![png](../assets/qrcode.png)

## 示例代码

```html
    <magic-qrcode code='123456' width='{{500}}' height='{{500}}' />
```

## 属性

|属性|类型|默认值|必填|说明
|:---:|:---:|:---:|:---:|---|
|code|string|-|是|要生成二维码的字符串
|width|number|300|否|宽度
|height|number|300|否|高度
|color|string|#000000|否|前景色
|backgroundColor|string|#ffffff|否|背景色

## 方法

### onFinish(imageFilePath)
绘制完成时触发 可以获取到 临时的二维码图片地址
```html
<magic-qrcode bind:onFinish='xxx' code='123456' width='{{500}}' height='{{500}}' />
```