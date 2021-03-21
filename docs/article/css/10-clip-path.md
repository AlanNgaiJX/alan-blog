---
title: clip-path 裁切
sidebarDepth: 2
---

## clip-path功能

* clip-path相当于裁切元素，最基础的就是裁切矩形，圆形，椭圆，多边形等形状。
* 还可以使用svg来裁切，使用path来定制特别的形状。

基本使用

```css
//正方形 参数top right bottom left round radius;
clip-path: inset(10px 10px 10px 10px round 10px);

//圆形 参数 半径 圆心位置
clip-path: circle(20px at 10px 10px);
```

[codepen 基础例子](https://codepen.io/AlanNgaiJX/pen/wvzKqLd)
[更多使用，参考MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
[定制clip路径](https://bennettfeely.com/clippy/)