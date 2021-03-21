---
title: Iterator遍历器
sidebarDepth: 2
---

## Iterator是什么

1. 为各种数据结构，提供一个统一的、简便的访问接口
2. 实质是对象上具有[Symbol.iterator]属性
3. 拥有遍历器的数据可以用for of和...遍历

## 工作原理
手写iterator步骤：
1. 创建一个指针对象，指向数据结构的起始位置（index = 0）
2. 第一次调用next方法，指针自动指向数据结构的第一个成员
3. 接下来不断调用next方法，指针会一直往后移动，知道指向最后一个成员(index++)
4. 每调用next方法返回的是包含value和done的对象。

```javascript
let arr = [6, 3, 4, 6, 2, 0];
function it(arr) {
    let index = 0;
    return {
        next: function () {
            return index < arr.length
                ? { value: arr[index++], done: false }
                : { value: arr[index++], done: true };
        },
    };
}

let obj = it(arr);
console.log(obj.next());//{value: 6, done: false}
console.log(obj.next());//{value: 3, done: false}
console.log(obj.next());//{value: 4, done: false}
console.log(obj.next());//{value: 6, done: false}
console.log(obj.next());//{value: 2, done: false}
console.log(obj.next());//{value: 0, done: false}
console.log(obj.next());//{value: undefined, done: true}
```

## 哪些数据结构已经部署了Iterator

* 数组
* 字符串
* set
* map
* nodeList
* arguments

## 自己部署Iterator接口
### 方法1
这种具体部署，可以遍历key不是数字的对象
```javascript
const obj = {
    [Symbol.iterator]: function () {
        let index = 0;
        const keys = Object.keys(obj);
        return {
            next: function () {
                return { value: keys[index++], done: index >= keys.length };
            },
        };
    },
    a: "1",
    b: "2",
    c: "3",
};

for (i of obj) {
    console.log(i);
}// 1 、2 、3

//主动调用下遍历器
const gen = obj[Symbol.iterator]();
const n1 = gen.next();// {value: '1', done: false}
const n2 = gen.next();// {value: '2', done: false}
const n3 = gen.next();// {value: '3', done: true}
const n3 = gen.next();// {value: undefined, done: true}
```

### 方法二
偷Array的遍历器作为自己的遍历器，这种方法只能遍历key为数字的对象，且必须有length。
```javascript
const obj= {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    length: 4,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}
...obj;// 'a' 'b' 'c' 'd'
```

### 方法三
利用generator函数部署迭代器（generator函数执行后返回的就是遍历器）
```javascript
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    [Symbol.iterator]: function* () {
        for (const i of Object.keys(this)) {
            yield [i,this[i]];
        }
    },
};

//[ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ] [ 'd', 4 ] [ 'e', 5 ]
console.log(...obj);
```
