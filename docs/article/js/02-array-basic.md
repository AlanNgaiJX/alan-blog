---
title: 数组与数组方法总结
sidebarDepth: 2
---

## 判断数组
typeof [] 返回 'object'，无法判断为数组，
可以使用以下几种方法判断数组。

##### instanceof
```javascript
[] instanceof Array // true
```
##### toString
```javascript
Object.prototype.toString.call([])// [object Array]
```
##### isArray
```javascript
Array.isArray([])// true
```

* * *


## 数组方法（增删改查 转连截 遍历）


* 增删改（增返长度，删返值）
    * push、pop 尾部操作
    * unshift、shift 头部操作
    * delete关键字删除会留下空洞（长度不变，数据却不见了）
    * splice进行删除或添加元素
    * 使用length访问来增加，arr[length] = item

* * *
* 查（ES6、7）
    * indexof(value)、lastIndexof()
    * includes(value) 返回true/false
* * *

* 数组转字符串
    * toString()
    * join(分割符)
* * *
* 连接和截取（不会改变原数组）（与字符串方法一样）
    * concat(arr1,arr2)    
    * slice(起始，结束)     


* * *
* 遍历（ES5/6）
    * 普通for遍历，可以break
    * for of遍历，可以break
    * forEach 普通遍历，可惜不能return或break
    * map 遍历，并重新组织数组
    * filter 遍历，并返回一个符合过滤条件的数组
    * find 遍历，并返回第一个符合条件的item
    * every 遍历，每一项都符合条件才返回true
    * some 遍历，但是如果有一项符合条件就成立
    * reduce 遍历，一般是累加操作
    * sort 遍历，排序


## 更多数组技巧

#### 简洁地创建一个临时数组：
```javascript
Array.apply(null, {length: 5}) 
//length为特殊字段，意思是生成一个长度为5的数组，由于没赋值，所以都是undefined;


//如果要赋值，可以这样
Array.apply(null, {0:'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', length:5}); //["a", "b", "c", "d", "e"]
//和ES6的Array.from有点类似, Array.from
```

#### 优雅地求数组中的最大最小值：
```javascript 
//ES5
var arr = [22,13,6,55,30];

var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);

console.log(max, min) // 55,6

//ES6
 var arr = [22,13,6,55,30];
 
 console.log(Math.max(...arr)); // 55
```

#### 简洁地清空数组，并往数组重新添加一组数据
```javascript
arr.splice(0,arr.length,...arr);//在vue中要求使用splice
arr = [...arr]// 不硬性要求splice
```

#### 将类数组（arguments, NodeList）转为数组
```javascript
function fun(){
    const args = Array.prototype.slice.call(arguments);
}
```

#### reduce的妙用
reduce的语法
```javascript
Array.prototype.reduce(function(previousVal, currentVal, index, _this) {
  // 函数体
}, initVal);
```
1.reduce函数也是对数组迭代的过程
2.第一次循环的时候,previousVal==initVal的
3.从第二次开始,previousVal==reducer函数中的返回值了
4、index表示当前数组的序列化
5、_this表示当前的数组

**利用reduce进行继发请求**
```javascript
function t1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("a");
        }, 1000);
    });
}
...

const tasks = [t1, t2, t3];
tasks.reduce((chain, task) => {
    return chain.then(() => task()).then((res) => {
        console.log(res);
    });
}, Promise.resolve());
```


#### 数组，字符串反转
```javascript
//          1 2 3 4 5 6 7 8
// 第一轮    8 2 3 4 5 6 7 1
// 第二轮    8 7 3 4 5 6 2 1
// 第三轮    8 7 6 4 5 3 2 1
// 第四轮    8 7 6 5 4 3 2 1
// 轮数 = arr.length/2

var str = 'iVnalA'
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//方法1
function reverse(str) {
  let arr = str.split('')
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr.join('')
}

//方法2
function reverse(str) {
  let arr = str.split('')
  return arr.reverse().join('')
}
```


#### 字符串驼峰转换
```javascript
var str = "hello-my-friend-alan";

function camelize(str) {
    return str
        .split('-')
        .map((substr) => {
            return substr.charAt(0).toUpperCase() + substr.slice(1);
        })
        .join('');
}
console.log(camelize(str));
```


#### 数组去重
```javascript
let arr = [1, 2, 3, 4, 5, 1, 2, 2, 1];

/* 方法一
    ES6 set对象
*/

function derepeat(arr){
    return Array.from(new Set(arr));
}
console.log(derepeat(arr));

/* 
方法二
*/

function dereapet(arr) {
    let targetArr = [];
    for (let item of arr) {
        if (targetArr.indexOf(item) === -1) targetArr.push(item);
    }
    return targetArr;
}
console.log(dereapet(arr));

```
参考：[去重锦集 与 效率研究](https://www.cnblogs.com/wisewrong/p/9642264.html)
