---
title: symbol
sidebarDepth: 2
---

## 前言
ES5中对象的属性名都是字符串，容易造成重名，污染环境

## Symbol是什么
```javascript
let s = Symbol();
let obj = {firstName:"alan",lastName:"ngai"}

//两种添加属性的方式
obj.nickName = "jack";
obj[s] = "john";

console.log(obj);
//{firstName:"alan",lastName:"ngai",nickName:"jack",symbol():"john"}
```

1. 是一种新增的基本类型
2. Symbol的值是唯一的，用于解决命名冲突
3. Symbol不能计算，也不能进行拼接字符串
4. for in、for of不会遍历symbol



* * *
## 如何标识Symbol
```javascript
 let one = Symbol('one');
 let two = Symbol('two');
 
 console.log(one);//    Symbol(one)
 console.log(two);//    Symbol(two)
```