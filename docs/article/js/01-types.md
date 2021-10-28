---
title: 原始类型 与 引用类型
sidebarDepth: 2
---

## 七大原始类型

* number、string、boolean、undefine、null、symbol (es6)、bigInt

## 引用类型

* Object、Array、Function、RegExp、Date
* 特殊的基本包装类（String、Number、Array）
* 单体内置对象（Math、Global）

## 判断原始类型 与 引用类型
```js
function isBaseType(input){
    if (input === null) {
        return true;
    }
    if (typeof input !== 'function' && typeof input !== 'object') {
        return true;
    }else{
        return false;
    }
}
```

## 原始类型 与 引用类型 的区别
* **引用类型可添加属性和方法：**
     引用类型可添加属性和方法，而原始类型不能
     
```javascript
//为引用类型值添加属性
var p = new Object();
p.age=11;
alert(p.age);//11

//为原始类型值添加属性
var name = 'a';
name.age = 11;
alert(name.age); //undefined
```
     

* * *
* **创建时的不同表现：**
    1. 原始类型的变量值保存在栈区；

    2. 引用类型的变量地址保存在栈区，该地址指向一个在堆区的内存，内存中保存了值

    
* * *
* **复制时的不同表现：**

    1. 原始类型复制时会在栈区再创建一个值，再赋值给新的变量，两个变量的操作互不影响；

    2. 引用类型复制时在栈区再创建一个地址赋值给新的变量，实际上两个变量的地址相同，指向同一块堆内存，两个变量的操作相互影响；

    3. 传递参数是按值传递的，当参数是引用类型时，实际上传递的是地址，因此操作该参数会影响到对象。
 
```javascript
//原始类型值
var a = 'a';
var b = a;
a = 'b';
alert(b); //a
```
   
```javascript
//引用类型值,以数组为例

//1.对其中一个变量直接赋值不会影响到另一个变量（并未操作引用的对象）
var a = [1,2,3];
var b = a;
a = [1,2,3,4];
alert(a);//1,2,3,4
alert(b); //1,2,3

//2.使用push(操作了引用的对象)
var a = [1,2,3];
var b = a;
a.push(4);
alert(a);//1,2,3,4
alert(b); //1,2,3,4


```

* * *

* **类型的检测：**
     基本的类型检测手段有typeof（用来检测基本类型，number、boolean、string、undefine）；
     
```javascript
注意：
typeof null //Object
typeof function a(){} //function

//引用类型的检测使用instance of
new Object() instance of Object //true
new Array() instance of Array //true
new RegExp() instance of RegExp //true

// * A instance of B：A是B类型的实例（有道翻译）
```

附上：准确的类型检测
```javascript
// 判断string
typeof "1" === "string"; // true

// 判断number
typeof 2 === "number"; // true
// NaN的判断
typeof NaN === "number"; // true
isNaN(num); // true

// 判断boolean
typeof true === "boolean"; // true

// 判断undefined
typeof undefined === "undefined"; // true
undefined === undefined;// true

// 判断null
Object.prototype.toString.call(null); // "[object Null]"
null === null; // true

console.log("===判断对象===");
Object.prototype.toString.call({}); // "[object Object]"

// 判断数组
Object.prototype.toString.call([]); // "[object Array]";
[""] instanceof Array; // true
Array.isArray([]); // true

// 判断函数
var fun = function () {};
typeof fun === "function"; // true
fun instanceof Function; // true
Object.prototype.toString.call(fun); // "[object Function]"

// 判断正则表达式
var reg = new RegExp();
reg instanceof RegExp; // true
Object.prototype.toString.call(reg); // "[object RegExp]"

// 判断Date
var date = new Date();
date instanceof Date; // true
Object.prototype.toString.call(date); // "[object Date]"

```
* * *
## undefined 和 null 的区别

* undefined 表示一个变量最原始的状态（已定义未赋值）。
* null 表示一个变量被人为的设置为空对象。

## 什么时候使用null

* 初始赋值，标明将要赋值为对象
* 释放对象，让对象成为垃圾对象

## typeof 和 === undefined的区别
```js
typeof s === 'undefined';// 即使s未声明也不会报错

s === 'undefined'// s未声明会报错
```