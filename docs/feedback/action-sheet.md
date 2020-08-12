## 示例图片

![img](../assets/actionsheet.png)

## 示例代码

```html
<ActionSheet id="ActionSheet2" list='{{["选项1","选项2"]}}' showCancel='{{false}}'></ActionSheet>
```
## 属性

|属性|类型|默认值|必填|说明
|:---:|:---:|:---:|:---:|---|
|list|array|-|是|选项列表
|showCancel|boolean|true|否|是否显示取消按钮

## 方法

操作实例
```js
 this.selectComponent('#ActionSheet2').show()
 this.selectComponent('#ActionSheet2').close()
```

### onTap 点击某个选项
```html
<ActionSheet id="ActionSheet1" list='{{["选项1","选项2"]}}' bind:onTap='choose' ></ActionSheet>
```
```js
    choose(e){
        wx.showToast({
            title: `你点击了第${e.detail}个`,
            icon: 'none',
        });
    }
```