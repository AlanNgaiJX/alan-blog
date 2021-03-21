---
title: 遍历对象的几种方法
sidebarDepth: 2
---

## for in

* 循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)
* 使用object.hasOwnProperty(key)来过滤不是自身的属性
```javascript
for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      
    }
  }
```

## Object.keys()

* 返回自身key组成的数组（不含继承，所有可枚举属性）
```javascript
var obj = {'0':'a','1':'b','2':'c'};

Object.keys(obj).forEach(function(key){

     console.log(key,obj[key]);

});
```

## Object.values()

* 返回自身属性组成的数组（不含继承，所有可枚举属性）

## Object.getOwnPropertyNames(obj)
* 返回自身属性组成的数组（包含不可枚举属性）

## Reflect.ownKeys(obj)

* 返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.
```javascript
var obj = {'0':'a','1':'b','2':'c'};
Reflect.ownKeys(obj).forEach(function(key){

console.log(key,obj[key]);

});
```