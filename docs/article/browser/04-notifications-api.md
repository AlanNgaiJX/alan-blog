### Notifications Api 消息通知
#### 该Api旨在向用户显示桌面通知

* 我们以前或许会在网页中浮动弹出一个div来实现消息通知功能，但这种方式有很大的局限性：例如我在浏览另一个网页时就不会看到消息通知了。

* 而Notifications Api恰好解决了该痛点，向用户显示桌面级的消息通知。

#### 兼容性

* chrome ff safari对接口有较好的兼容性
* 移动端浏览器都不支持该接口
* 注意：该接口仅在Https下才被支持
<img src="~@blogImages/e1.jpeg" width="600" style="display: block;"/>


#### 桌面通知流程
1. 检查浏览器是否支持
2. 检查权限，用户是否同意接受通知
3. （向用户获取权限）
4. 发出通知

```javascript
// 检查浏览器是否支持
if(!window.Notification){return;}

// 检查权限
// 有权限则发送通知
else if(Notification.permission === "granted"){
   var notification = new Notification("Hi there!");
}

// 没有权限，且权限不是拒绝才去再询获权限
else if(Notification.permission !== "denied"){
   Notification.requestPermission().then(function (permission) {
      // 如果用户接受权限，我们就可以发起一条消息
      if (permission === "granted") {
         var notification = new Notification("Hi");
      }
    });
}

// 权限为拒绝就不处理了
```
一些主要的属性，方法以及事件
```
// Notification.permission有三种状态
granted 允许 | default 未知 | denied 拒绝

// 向用户获取权限
Notification.requestPermission().then(function(permission))

// 发送通知
var n = new Notification(title, options);

参数：
title - 通知标题
options - 可选内容(dir、lang、body、tag、icon)

// 关闭通知
n.close();

// 一些事件
n.onclick
n.onshow
n.onerror
n.onclose
```



参考：
[W3C Notifications规范](https://w3c-html-ig-zh.github.io/notifications/whatwg/)
[MDN Notification API](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)
[Can I use Notification API](https://caniuse.com/?search=Notification%20API)