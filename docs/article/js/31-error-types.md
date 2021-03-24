---
title: Error 的类型
sidebarDepth: 2
---

## 错误的类型
* Error：所有错误的父类型
* ReferenceError：引用的变量不存在，`ReferenceError：a is not defined`
* TypeError：数据类型不正确，`TypeError：Cannot read property 'xxx' of undefined/ null`
* RanageError：数据值不在其所允许的范围内，`RangeError：Maximun call stack size exceeded`
* SyntaxError：语法错误

## 错误处理方式
1. 主动抛出错误：throw error
2. 捕获处理：try...catch

## 错误对象的属性
1. message：错误相关信息
2. stack：函数调用栈记录信息
