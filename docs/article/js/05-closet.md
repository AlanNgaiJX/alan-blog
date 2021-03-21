---
title: 闭包
sidebarDepth: 2
---

## 闭包的实质
闭包，就是能够读取其他函数内部变量的函数

## 闭包的产生条件

1. 函数嵌套
2. 内部函数调用外部函数变量
3. 执行外部函数

## 闭包的特性
（你对闭包的理解）

1. 延长局部变量的生命周期：闭包调用的外部函数变量会一直存活，直到闭包释放。这容易造成内存泄漏。
2. 突破作用域限制：函数外部可以操作函数内部的变量。
3. 使用闭包主要是为了设置私有的变量和方法，避免污染全局变量，可以完成一些功能模块的封装，以及实现数据缓存效果。

## 闭包的生命周期

1. 产生：执行内部函数的定义时，产生闭包
2. 死亡：内部函数成为垃圾对象时（赋值null）

## 说说作用域链

javascript中，有函数即形成作用域，有函数嵌套那就形成了一条作用域链，作用域链向上可以一直访问到global对象，向下则不允许访问。

## 闭包的几种形式

(一)将函数作为另一个函数的返回值
```javascript
function a() {
    var x = 2;
    function b() {
        x++;
        console.log(x);
    }
    return b;
}
var f = a();
f();
f();

```
(二)将函数作为实参，传递给另一个函数调用
```javascript
function showMsg(msg,time){
    setTimeout(function(){
        alert(msg);
    },time);
}
showMsg('helloWorld',1000);
```


## 闭包的应用

**实现JS模块**

* 具有特定功能的js文件
* 将所有的数据和功能都封装在一个函数内部（私有的）
* 只向外暴露一个包含n个方法的对象或函数
* 模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能

```javascript
(function(window){
    var name;
    var age;
    function setName(n){
        name = n;
    }
    function getName(){
        return name;
    }
    function setAge(x){
        age = x;
    }
    function getAge(){
        return age;
    }
    return window.mo = {
        setName:setName,
        getName:getName,
        setAge:setAge,
        getAge:getAge
    }
})(window);

```

## 面试题

（一）
```javascript
var name = "the Window";
var object = {
    name : "My object",
    getNameFunc : function(){
        return function(){
            return this.name;
        }
    }
};
console.log(object.getNameFunc()());
//输出：the Window
```

（二）
```javascript
var name = "the Window";
var object = {
    name : "My object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        }
    }
};
console.log(object.getNameFunc()());
//输出：My object
```

（三）
```javascript
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        },
    };
}
var a = fun(0); //undefined { fun : function(m){ n=0; return fun(m,n)}}
a.fun(1); // 0
a.fun(2); // 0
a.fun(3); // 0

var b = fun(0).fun(1).fun(2).fun(3);
//undefined { fun : function(m){ n=0; return fun(m,n)}}
//0 { fun : function(m){ n=1; return fun(m,n)}}
//1 { fun : function(m){ n=2; return fun(m,n)}}
//2 { fun : function(m){ n=3; return fun(m,n)}}

var c = fun(0).fun(1);
c.fun(2);
c.fun(3);
// undefined 0 1 1
```