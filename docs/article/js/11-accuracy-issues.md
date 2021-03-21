---
title: 精度问题
sidebarDepth: 2
---

## IEEE 754规范
由于计算机的二进制实现和位数限制，有些数无法有限表示。JS 遵循 IEEE 754 规范，采用双精度存储（double precision），占用 64 bit。
![af69d10d2ad69934b83c6a422912a8bc.png](evernotecid://895A999E-A3C1-40F6-A602-39798D4605E0/appyinxiangcom/12904980/ENResource/p324)

* 1位用来表示符号位，如-、+
* 11位用来表示指数，
* 52位表示尾数, 即1-2^51次方

## 0.1 + 0.2 !== 0.3
0.1转为二进制存储时 0.0001 1001 1001 ....
0.2转为二进制存储时 0.0011 0011 0011 ....

可见某些数字在转换为二进制存储时为无限不循环的，由于计算机存储的精度有限制（能存的位数有限），会取一个近似值进行存储，从而导致 0.1 + 0.2不等于0.3。

除了浮点数会出现无限循环导致超出精度限制的情况。
大整数也有可能超出精度限制。

如，9999999999999999 == 10000000000000001 // true

所以，在进行严格的数学运算时，需考虑精度问题

## 处理数学计算

### 浮点数升级整数再作运算
```javascript
// 浮点升级到整型
function toInt(num) {
    if (typeof num !== "number" || isNaN(num)) {
        throw new Error("num should be a value number");
    }

    const numStr = num + "";
    const tempArr = numStr.split(".");
    const times = tempArr[1] ? tempArr[1].length : 0;

    num = tempArr.join("") * 1;

    return {
        value: num,
        times: times,
    };
}

function floatAdd(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    const coupule = [toInt(a), toInt(b)];
    const maxTimes = Math.max(...coupule.map((item) => item.times));
    const addResult = coupule.reduce((value, item, index) => {
        let itemValue = item.value;
        if (item.times !== maxTimes) {
            console.log(item.value);
            itemValue = (maxTimes - item.times) * 10 * item.value;
        }
        value += itemValue;
        return value;
    }, 0);

    return addResult / Math.pow(10, maxTimes);
}

floatAdd(0.1, 0.2);//0.3
floatAdd(0.7, 0.1);//0.8

```

### 使用权威的数学计算库
[mathjs](https://www.npmjs.com/package/mathjs)



* * *

参考
[JS精度丢失问题](https://juejin.cn/post/6844904002786689037)
[JavaScript 深入之浮点数精度](https://juejin.cn/post/6844904093601759239)