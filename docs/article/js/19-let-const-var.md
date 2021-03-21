---
title: let、const、var 的区别
sidebarDepth: 2
---
## let与var区别

1. let在块作用域中有效
2. let不能重复声明
3. let不会有变量提升

**应用：循环遍历加监听**
```javascript
//问题的引出
var btns = document.getElementsByTagName('button');
        for (var index = 0; index < btns.length; index++) {
            var btn = btns[index];
            btn.onclick = function(){
                alert(index);
            }
        }
//这种情况三个按钮按下都显示3
    //因为事件驱动机制，在执行回调函数时index是一个全局变量，这个变量此时已经执行过了for，index为3
```
```javascript
//利用闭包技术
    var btns = document.getElementsByTagName('button');
    for (var index = 0; index < btns.length; index++) {
        var btn = btns[index];
        (function(i){
            btn.onclick = function(){
                alert(i);
            }
        })(index);
    }
```
```javascript
//利用let
var btns = document.getElementsByTagName('button');
        for (let index = 0; index < btns.length; index++) {
            var btn = btns[index];
            btn.onclick = function(){
                alert(index);
            }
        }
```
参考：[https://www.cnblogs.com/yifeng555/p/8455414.html](https://www.cnblogs.com/yifeng555/p/8455414.html)

* * *
## const

* 定义常量
* 不能修改
* 同let一样，也是块级作用域