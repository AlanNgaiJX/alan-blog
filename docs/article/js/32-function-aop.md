---
title: 函数劫持思想
sidebarDepth: 2
---

## 定义

* 函数劫持，又称 AOP（面向切面编程），主要是把一些模块从流程中抽离出来，保证了模块的纯净和高聚合性。再通过动态植入的方式掺入业务逻辑中，完成整体功能。
* 在 js 中，主要的实现形式，就是把一个函数，动态植入到另一个函数。

## 场景

* vue2 劫持数组方法，当执行push等方法后，执行数据更新。
* react 的 setState 方法，在设置状态后，执行视图更新。

## 例一：简单改写push方法
```js
Array.prototype.newPush = function (...args) {
  console.log("before push");
  this.push(...args);
  console.log('after push')
  return this.length;
}

const result = [0].newPush(1);
console.log(result);
```

## vue数组函数劫持源码

```js
const arrayProto = Array.prototype//原生Array的原型
export const arrayMethods = Object.create(arrayProto);
[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  const original = arrayProto[method]//缓存元素数组原型
  //这里重写了数组的几个原型方法
  def(arrayMethods, method, function mutator () {
    //这里备份一份参数应该是从性能方面的考虑
    let i = arguments.length
    const args = new Array(i)
    while (i--) {
      args[i] = arguments[i]
    }
    const result = original.apply(this, args)//原始方法求值
    const ob = this.__ob__//这里this.__ob__指向的是数据的Observer
    let inserted
    switch (method) {
      case 'push':
        inserted = args
        break
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})

//定义属性
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
```
