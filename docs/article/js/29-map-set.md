---
title: map 与 set
sidebarDepth: 2
---

## Map容器

### 特点：键值有序的key=>value集合

<u>**Map与Object类似（都有键值对关系）**</u>

1. Object 的键只能是字符串或者 Symbols，但Map 的键可以是任意值（对象，函数等都可以）。

2. Map 中的键值是有序的，而对象中的键则不是。

3. Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。

4. Object有原型，原型链上的键名有可能和在对象上的键名产生冲突。

* * *


<u>**Map与二维数组**</u>

1. Map和二维数组的转换
```
    二维数组 => Map : new Map(二维数组)
    Map => 二维数组 : Array.from(map) 或 [...map]
```

2. **Map的合并** 需转成 二维数组进行合并
```javascript
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
 
// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
var merged = new Map([...first, ...second]);
```

3.for of 遍历（解构为数组）
```javascript
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
```
* * *
**Map常用api**
```javascript
map.set(key,value) //设置
map.get(key) //获取
map.delete(key) //删除
map.has(key) //查有无
map.clear() //清空
map.size //属性，调用get方法，惰性
```

* * *

* * *

## Set容器

### 特点：无序不可重复的value集合

**Map常用api**
```javascript
set.add(v) //增
set.delete(v) //减
set.has(v) //查
set.clear() //清空
set.size //大小

//与 Array 互相转换
array => set : new set(array)
set  => array: Array.from(set) 或 [...set]

// 数组去重
var s = new Set([1,1,1,2,2,3])
[...s] // [1,2,3]

// 合并set
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]); // {1, 2, 3, 4}
```


* * *
## 总结map和set

1. 两者都是数据容器，且都可以转换为数组（map转二维数组，set转一维数组）
2. 两者都具有唯一性，map的键具有唯一性，set的值具有唯一性
3. 两者都可以用for of遍历 或 ...符 遍历
4. Map特有 get set 方法， Set特有add方法, 其他的delete 、clear 、has 、 size都一样



* * *
#### 拓展
### WeakMap
#### 特点：键弱保持

* 也是一种键值对集合，但它的键必须是对象类型。不能是基础类型,如symbol，string。
* 键弱保持，当键所指向的对象没有其他地方引用时，会被回收内存。
* 与Map相同的Api
* 键不可枚举，列表是否存在某个键值对取决于有无被垃圾回收器回收。

场景: Vue的targetMap 、使用weakMap存Dom
