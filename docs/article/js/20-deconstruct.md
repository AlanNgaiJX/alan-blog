---
title: 变量的解构与赋值
sidebarDepth: 2
---

## 数组解构

```javascript
//1.基本
let [a,b,c] = [1,2,3];

//2.可嵌套
let [a, [[b], c]] = [1, [[2], 3]];

//3.可忽略
let [a,,c] = [1,2,3]

//4.可使用剩余运算符（a:1, b :[2,3]）
let [a,...b] = [1,2,3]

//5.当解构的结果是undefined时，触发默认值作为结果
let [a = 3, b = a] = [];     // a = 3, b = 3
let [a = 3, b = a] = [1];    // a = 1, b = 1
let [a = 3, b = a] = [1, 2]; // a = 1, b = 2


```


* * *
## 对象解构

```javascript
//1.基本（注意声明的变量名与对象中的变量名一致）
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

//2.可忽略
let { foo } = { foo: 'aaa', bar: 'bbb' };

//4.可使用剩余运算符（浅复制）
let obj = {a:1,b:2,c:3};
let {...obj} = obj;//rest: {a:1,b:2,c:3}
// 注意：不是在对象中，而直接...obj是会报错的，在对象中则没事。

//5.当解构的结果是undefined时，触发默认值作为结果
let {a = 10, b = 5} = {a: 3};
// a = 3; b = 5;
let {a: aa = 10, b: bb = 5} = {a: 3};
// aa = 3; bb = 5;

```

* * *

## 应用
```javascript

//1.解构参数对象
let obj = {x:"is x", y:"is y"};
function fn({x,y}){
    console.log(x,y);
}
fn(obj);//is x is y

//2.解构n个参数
aixos.all[]
    .then(aixos.spread((...args)=>{
        args.forEach(arg)
    }))
```