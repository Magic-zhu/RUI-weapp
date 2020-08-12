## 示例图片

![图片1](../assets/uploader1.png)
![图片2](../assets/uploader2.png)
![图片3](../assets/uploader3.png)

## 示例代码

```html
<magic-uploader uploading='{{upload}}' bind:onGetSrc='getSrc'/>
```
这里更建议通过修改源代码 直接把upload过程封装进去😊

## 属性

|属性|类型|默认值|必填|说明
|:---:|:---:|:---:|:---:|---|
|uploading|boolean|false|否|是否显示上传中状态

## 方法

+ getSrc 获取临时文件地址


