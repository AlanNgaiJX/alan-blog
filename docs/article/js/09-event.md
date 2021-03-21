---
title: 事件Event
sidebarDepth: 2
---

## 1.原生事件和移动端事件的一些区别

* [移动端点击事件延迟](https://blog.csdn.net/qappleh/article/details/80419204)
* [touch事件与click事件的区别](https://blog.csdn.net/lululove19870526/article/details/44345759)

## 2.js触发DOM元素上的事件
场景：我们平常都是操作鼠标、键盘来触发绑定在DOM元素上的事件，在某些特殊情况，我们可能需要用JS去触发。（例如触发一个隐藏的input标签）

老办法：

1. 使用document.createEvent创建事件
2. 使用event.initEvent初始化事件
3. 触发事件domEl.dispatch(event);

例如：
```javascript
 var fileInput = document.getElementById("fileInput");
 var clickEvent = document.createEvent("MouseEvents");
           
clickEvent.initEvent("click", true, true);
clickEvent.stopPropagation();
fileInput.dispatchEvent(clickEvent);
```

新办法：

* 使用[基于Event的接口](https://developer.mozilla.org/zh-CN/docs/Web/API/Event#%E5%9F%BA%E4%BA%8E_Event_%E7%9A%84%E6%8E%A5%E5%8F%A3)的构造函数创建事件，无需初始化，直接可用于触发。
* 常用的事件接口有 MouseEvent、TouchEvent、KeyboardEvent、InputEvent

```javascript
var clickEvent = new MouseEvent('click');
```
