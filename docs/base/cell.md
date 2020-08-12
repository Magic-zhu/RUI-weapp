## 示例图片
![ex](../assets/cell.png)
## 示例代码

```html
		<magic-cell
		 icon_left='/assets/phone.png'
		 custom='color:white;border-bottom:2rpx solid red;border-top:2rpx solid blue;background-color:pink;'
		 label="完全自定义"
		 value='完全自定义'
		/>
		<magic-cell
		 icon_left='/assets/phone.png'
		 custom='{{custom}}'
		 label="完全自定义"
		 value='完全自定义'
		/>
```
```js
custom ={
  'color':'white',
  'border-bottom':'2rx solid red'
  //...
}
```

## 属性

|    属性     |  类型  | 默认值 | 必填 | 说明                        |
| :---------: | :----: | :----: | :--: | --------------------------- |
|  icon_left  | String |        |  否  | 左侧的 icon 图 传入图片地址 |
| icon_right  | String |        |  否  | 右侧的 icon 图 传入图片地址 |
|  label  | String |  标题  |  否  | 左侧的标题                  |
| value  | String |  内容  |  否  | 右侧的内容                  |
|    size     | String | normal |  否  | 大小 small normal big 可选  |
|   custome   | String或者Object |        |  否  | 自定义样式(可以是字符串或者样式对象) |
| customHover | String |        |  否  | 等价于 hover-class          |

## 方法

### onTap

```html
  <magic-cell bind:onTap='xxxx'/>
```

点击事件
