---
title: for...in 与 for...of 的区别
sidebarDepth: 2
---
## for of 适合遍历数组

* 适合遍历拥有迭代器接口的数据（Symbol.iterator）
* 即数组、字符串、map集合、set集合、类数组
* for of其实也可以遍历对象，可以考虑以下方法；

```javascript
// 1.利用 keys 或 entires 方法

const obj ={
    'a':'1',
    'b':'2',
    'c':'3'
}

for (const i of Object.keys(obj)) {
    console.log(obj[i]);
}

for (const [key,value] of Object.entires(obj)) {
    console.log(obj[i]);
}
```
```javascript
// 2.手动部署遍历器

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
```
```javascript
// 3.使用generator函数包装

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

for (let [key, value] of entries(obj)) {
  console.log(key, '->', value);
}
```

* for of返回的是目标的"每一项",需要借助entries访问索引
```javascript
for([index,item] of [1,2,3].entires()){
    
}
```

## for in 适合遍历对象

* 适合用来遍历对象
* 可以遍历到对象原型上的方法与属性
* 他用来遍历数组的时候很蹩脚，不仅会遍历到数组自身的属性，还会遍历到其在原型上的属性，且它的指针为字符串无法进行数学运算
* 技巧：for in不想遍历原型的方法和属性的话可以使用obj.hasOwnProperty()来判断属性时否为实例对象自身的属性

纵使如此，for in还是能完成一些业务场景
例如实现深度克隆，如果使用for循环来遍历也可以，但需要更多变量和判断
```javascript
function tools(){
    function checkType(data) {
        return Object.prototype.toString.call(data).slice(8, -1);
    }
    function deepClone(data) {
        let copy;

        if (checkType(data) === "Array") {
            copy = [];
        } else if (checkType(data) === "Object") {
            copy = {};
        } else {
            return;
        }

        for (let k in data) {
            let currentValue = data[k];
            if (checkType(currentValue) !== "Array" && checkType(currentValue) !== "Object") {
                copy[k] = currentValue;
            } else {
                copy[k] = deepClone(currentValue);
            }
        }
        return copy;
    }
    return { checkType, deepClone }
}
```
参考[https://www.jianshu.com/p/c43f418d6bf0](https://www.jianshu.com/p/c43f418d6bf0)