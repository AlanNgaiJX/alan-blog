---
title: 深克隆与浅克隆
sidebarDepth: 2
---

## 深克隆与浅克隆

* 基本类型数据没有深浅克隆现象，所有复制的数据都互不影响
* 引用类型数据存在深浅克隆现象，浅克隆只拷贝了地址，两者的操作互相影响，深克隆 **完全** 拷贝了堆区的数据，两者的操作互不影响

## 克隆数据的方法

|  |  |
| --- | --- |
| = | 相对以下方法，=谈不上是一个克隆方法，只算是一个引用 |
| Object.assign | 浅克隆，用于对象，返回的也是一个新的对象，但操作属性中出现的引用类型仍会造成干扰 |
| concat | 浅克隆，用于数组，返回的也是一个新的数组，但操作元素中出现的引用类型仍会造成干扰 |
| slice | 浅克隆，用于数组，返回的也是一个新的数组，但操作元素中出现的引用类型仍会造成干扰  |
| JSON.parse(JSON.stringfy()) | 深克隆，但数据中的函数和undefined会丢失, Date及RegExp等对象会被toJSON转义，NaN、infinity会转义为null，对象的constructor会变成Object |
选择用什么方式进行数据复制要看数据里的内容来选择，里面都是基本类型的数据那深浅拷贝也无所谓。


* * *

利用数据类型判断、for in遍历数组或对象、递归
## 实现一个深度克隆方法
思路：

* 要克隆数据，那首先得知道目标数据的类型
* 需要深克隆的数据一般为数组和对象
* 不需要深克隆的数据为基本数据类型（这里可以判断为非Array非Object）
* 遍历需要克隆的 数组/对象 的 元素/键=值，扔进新建的空数组/空对象中完成组装
* 考虑到 数组/对象 中的 元素/属性 仍可能为数组或对象，那么这需要判断元素/值的类型 递归组装操作

使用到的方法：判断类型，组装数组/对象（for in遍历）

```javascript
const obj = {
    a: 'alan',
    fun() {
        console.log('fun !!');
    },
    obj: {
        hello: 'hello'
    },
    arr: [1, 2, 3, 4, { world: 'world' }, [4, 3, 2, 1]]
};
const arr = [1, 2, 3, 4, { world: 'world' }, [4, 3, 2, 1]];


/* 
    深度克隆
*/
function deepClone(data) {
    // 判断类型
    function checkDataType(data) {
        return Object.prototype.toString.call(data).slice(8, -1);
    }
    const dataType = checkDataType(data);

    // init newData
    let newData;
    if (dataType === 'Array') newData = [];
    else if (dataType === 'Object') newData = {};
    else return newData = data;

    // compound newData
    for (let key in data) {
        // if：剔除遍历原型上的属性
        if (data.hasOwnProperty(key)) {
            const subDataType = checkDataType(data[key]);            
            if (subDataType !== 'Array' && subDataType !== 'Object') {
                newData[key] = data[key];
            }else{                
                newData[key] = deepClone(data[key]);
            }
        }
    }
    return newData;
}
// testOne
Array.prototype.protoPPPP = '你知道我是谁吗！！！';
const newArr = deepClone(arr);
arr[4].world = 'i change';
console.log(arr);
console.log(newArr);

// testTwo
const newObj = deepClone(obj);
obj.arr[4].world = 'i change';
console.log(obj);
console.log(newObj);
newObj.fun();
```