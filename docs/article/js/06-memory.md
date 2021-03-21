---
title: 内存泄露 与 内存溢出
sidebarDepth: 2
---

## 内存溢出

* 一种程序运行出现的错误
* 当程序运行所需内存超过了计算机剩余的内存时，程序崩溃并抛出内存溢出的错误

## 内存泄露

* 指内存被占用且没有及时释放
* 内存泄露越多，计算机剩余的内存就越小，此时越容易发生内存溢出
* 常见的内存泄露情况：
    * 意外的全局变量
    * 未及时清理计时器或回调函数
    * 闭包

```javascript
function x(){
 a = 10;
 //或者this.a = 10;
 //或者window.a = 10;
}
x();
//产生了一个意外的全局变量
```

```javascript
var intervald = setInterval(function (){
    console.log('----');
},1000);

//清除计时器
clearInterval(intervalId);

-----------------------------------------

var element = document.getElementById('button');

function onClick(event) {

    element.innerHtml = 'text';

}
element.addEventListener('click', onClick);


element.removeEventListener('click', onClick);

element.parentNode.removeChild(element);

```

```javascript
function a(){
    var x = 10;
    function b(){
        return x;
    }
    return b;
}
var f = a();
f();
//将内部函数对象设置为垃圾对象
f = null;
```
