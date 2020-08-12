## 示例图片
![png](../assets/barcode.png)

## 示例代码

```html
    <magic-barcode code='12312313' bind:onFinish='getUrl' width='{{500}}' height='{{200}}'/>
```

## 属性

|属性|类型|默认值|必填|说明
|:---:|:---:|:---:|:---:|---|
|code|string|-|是|要生成条形码的字符串
|width|number|300|否|宽度
|height|number|150|否|高度

## 方法

### onFinish(imageFilePath)

绘制完成时触发 可以获取到 临时的码图片地址