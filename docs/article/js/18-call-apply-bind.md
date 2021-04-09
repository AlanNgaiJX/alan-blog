---
title: call、apply、bind 的区别
sidebarDepth: 2
---

## call、apply、bind之间的区别

* 三者都可以指定函数的this
* call和apply是立即调用函数
* bind返回的是函数，不会立即调用
* apply用数组传参fn.apply(context,args)
* call需要一个个传入参数fun.call(context,arg1,arg2,arg3)

注意：不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定

## 经典使用场景
高阶函数中干预this的指向

不干预的情况下，匿名函数中的func的this指向全局对象
```javascript
function gen(func) {
    return function () {
        func(); // 匿名函数中的执行的函数，其this指向全局对象
    };
}

const f = gen(function () {
    console.log(this);
});

const obj = { f };

f();// this -> global
obj.f();// this -> global

```
干预后：
```javascript
function gen(func) {
    return function () {
        console.log(this);// 调用1是global，调用2是obj
        func.apply(this); // 匿名函数中的执行的函数，其this指向全局对象
    };
}

const f = gen(function () {
    console.log(this);
});

const obj = { f };

f();// this -> global
obj.f();// this -> obj

```