## 示例图片
![img](../assets/notify.png)
## 示例代码

```html
    <magic-notify id='nf' />
```

## 属性

|属性|类型|默认值|必填|说明
|:---:|:---:|:---:|:---:|---|
|position|string|bottom|否|通知出现的位置 top/bottom

## 方法

操作实例

```js
    this.selectComponent("#nf").success("成功通知")
    this.selectComponent("#nf").error("失败通知")
    this.selectComponent("#nf").warning("警告通知")
    this.selectComponent("#nf").info("信息")
    this.selectComponent("#nf").custom("自定义",'pink 自定义颜色')
```



