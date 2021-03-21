---
title: 执行上下文 与 执行上下文栈
sidebarDepth: 2
---

## 变量提升与函数提升

### 变量声明提升（先执行）
* 通过var声明的变量，在定义语句之前就可以访问到
* 值：undefined

### 函数声明提升（后执行）

* 通过function声明的函数，在其之前就可以直接调用
* 值：函数定义（对象）

* * *

## 全局执行上下文

* 在<u>执行全局代码前</u>将window确定为全局执行上下文
* 对全局数据进行预处理
        * var定义的全局变量==>undefined，添加为window的属性
        * function声明的全局函数==>赋值并添加为window的方法
        * this指向window

最后执行
* * *

## 函数执行上下文

* <u>在调用函数，准备执行函数体之前</u>，创建对应的函数执行上下文对象
* 对局部数据进行预处理
    * 形参变量==>赋值（实参）==>添加为执行上下文的属性
    * arguments==>赋值（实参列表），添加为执行上下文的属性
    * var定义的局部变量==>undefined，添加为执行上下文的属性
    * function声明的函数==>赋值（fun），添加为执行上下文的方法
    * this==>赋值（调用函数的对象）
    
最后执行

* * *
 ## 执行上下文栈
 
```javascript
//1.进入全局执行上下文
var a = 10;
var bar = function(x){
    var b = 5;
    //3.进入foo执行上下文
    foo(x+b);
}
var foo = function(y){
    var c =5;
    console.log(a+c+y);
}
//2.进入bar函数执行上下文
bar(10);
```

栈流程：1进、2进、3进、3出、2出、1出


* * *
## 面试题

（一）
```javascript
var a = 3;
function fn(){
    console.log(a);
    var a = 4;
}
fn();

//输出：undefinded
```

（二）
```javascript
//1.依次输出了什么？
//2.整个过程中产生了几个执行上下文？

console.log('global begin:'+i);
var i = 1;
foo(i);
function foo(i){
    if(i == 4){
        return;
    }
    console.log('foo() begin:'+i);
    foo(i+1);
    console.log('foo() end:'+i);
}
console.log('global end:'+i);


//1.依次输出：
// undefined
// foo() begin: 1
// foo() begin: 2
// foo() begin: 3
// foo() end: 3
// foo() end: 2
// foo() end: 1
// global end: 1

//2.整个过程产生了5个执行上下文

//画栈图
//
//foo(4)
//foo(3)
//foo(2)
//foo(1)
//全局执行上下文
```

（三）
```javascript
function a(){
}
var a;
console.log(typeof a)
//输出：function
//原因：变量声明提升先执行，函数声明提升后执行覆盖
```
（四）
```javascript
var c = 1;
function c(c){
    console.log(c);
}
c(2);

//输出：报错 c is not a function
//原因：以上代码相当于
var c;
function c(c){
    console.log(c);
}
c = 1;
c(2);
```
（六）
```javascript
if(!(b in window)){
    var b = 1;
}
console.log(b);

//输出：undefined
//原因：(b in window) === true
```