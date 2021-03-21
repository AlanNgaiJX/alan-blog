---
title: chrome调试动画
sidebarDepth: 2
---

## moreTools -> Animation面板

* 重播动画，100% 25% 10%速度
* deatail编辑某个动画的起始时间等等
* 可以在element面板给个break-point -> attr，以捕获动态增删的clss属性
* keyframe都在style面板的最下方
[参考：Crhome动画调试最佳实践](https://juejin.cn/post/6869602883998842888)


## 还可以使用js监听动画

* animationstart
* animationiteration
* animationend

```javascript
var lil = $(".lilguy"),
  logIt = $(".logIt"),
  log = $(".term-content");

logIt.on('click', function() {
  lil.addClass('restart');
});

lil.on('animationstart webkitAnimationStart oanimationstart MSAnimationStart', function(e) {
  log.empty();
  log.append("<p>Animation has started.</p>");
});

lil.on('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function(e) {
  log.append("<p>An iteration fired.");
});

lil.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
  log.append("<p>Animation has completed.</p>");
  lil.removeClass("restart");
});
```

[参考：js监听动画](https://codepen.io/sdras/embed/PqXeMX)
