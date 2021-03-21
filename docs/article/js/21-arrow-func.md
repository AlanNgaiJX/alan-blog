---
title: 箭头函数
sidebarDepth: 2
---

## 箭头函数 与 普通函数的区别

### this的指向不同

* 箭头函数的this是定义函数时所处的对象
* 普通函数的this是调用它时的对象
    * 箭头函数的this看外层是否有函数
    * 如果有外层的this就是箭头函数的this
    * 如果没有，则this就是global

请对比以下两个例子的区别
```javascript
let btn = document.getElementById('btn');
let obj = {
    name:"箭头函数",
    getName:function (){
        btn.onclick = ()=>{
            console.log(this);
        }
    }
}
obj.getName();
//点击按钮btn，log：obj
```
```javascript
let btn = document.getElementById('btn');
let obj = {
    name:"箭头函数",
    getName:()=>{
        btn.onclick = ()=>{
            console.log(this);
        }
    }
}
obj.getName();
//点击按钮btn，log：window
```

### 箭头函数是一种匿名函数

匿名函数的通病：

* 不可自调用
* 调试调用栈中显示的函数没有名称

### 箭头函数没有prototype
```js
function func(){}
const arrowFunc = ()=>{}

func.prototype;// func {} 
arrowFunc.prototype;// undefined
```