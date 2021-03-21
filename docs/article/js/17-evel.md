---
title: eval
sidebarDepth: 2
---

## eval的参数与返回

* 接收String，执行string中的语句并返回结果
* 接收对象，原封不动地返回对象

## eval的作用域和变量提升

* 在非严格模式中

1. eval中使用var和function不会造成变量提升，但与外部使用同一个作用域。

2. eval中使用let和const，在eval内部具有独立的作用域，外部无权访问内部变量。

* 在严格模式中

1. eval中使用var、function也会在eval内部创建独立的作用域，外部无权访问。

## eval的其他使用场景

模仿JSON.parse
```js
function jsonParse(obj){
    return eval("(" + obj + ")");
}    
```


## 永远都不要使用eval

eval() 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果 eval() 运行的字符串代码被恶意方修改，最终可能在用户计算机上运行恶意代码。

而使用Function是安全的（Function也可以传入字符串，并执行），上面的例子可以改造为

模仿JSON.parse
```js
function jsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}    
```

## eval执行更慢

eval的解析执行走js解释器,不走Js引擎，没有得到优化。

