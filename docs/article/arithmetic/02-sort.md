---
title: 冒泡、插入、希尔排序
sidebarDepth: 2
---
## 冒泡排序

### 过程
```
let arr = [5, 4, 3, 2, 1]

// 冒泡排序：5 4 3 2 1    两个数进行对比的次数是固定的：
//    第0轮 4 3 2 1 5    4次
//    第1轮 3 2 1 4 5    3次
//    第2轮 2 1 3 4 5    2次
//    第3轮 1 2 3 4 5    1次
// 总轮数：4

// 观察可得，数学关系如下：
// 总轮数 = arr.length - 1
// 每一轮的次数 = 总轮数 - 第n轮
```

### 实现思路

1. 用外循环控制轮数递增
2. 内循环控制对比次数
3. 多次比较后得出准确结果

```javascript
function bubbleSort(arr) {
  const round = arr.length - 1;
  // 外层控制轮数
  for (let i = 0; i < round; i++) {
    // 内层控制每一轮的对比次数
    for (let j = 0; j < round - i; j++) {
      // 进行对比
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
```

## 插入排序

### 过程

```
let arr = [5, 4, 3, 2, 1]

// 插入排序：[1],[2,3,4,5]
// 类似将数组分割为一前一后两个数组
// 前一个数组保持顺序
// 逐个选取后一个数组中的元素，与前一个数组的元素从尾向头比较
```

### 实现思路

```js
function insertSort(arr) {
  // 外循环，从第[1]位开始，分割数组，并在右边数组中抓取数字即[i]
  for (let i = 1; i < arr.length; i++) {
    // 内循环，从后到前的方向，对前面数组进行遍历比较，
    // i是后一个数组的第一位，那么j=i-1就是前一个数组的最后一位
    for (let j = i - 1; j >= 0; j--) {
      // arr[j+1]的初始就是选取的元素
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      } else {
        break
      }
    }
  }
  return arr
}
```

## 快速排序（中位数排序）


### 过程
```
// 又称中位数排序，二分法排序
// 利用递归的思想，
// 不断地将数组进行二分法（取中位数，小的放左边，大的放右边）
```

### 实现
```js

function quickSort(arr) {
  // 取中位数
  const midIndex = Math.floor(arr.length / 2);
  const midItem = arr.splice(midIndex, 1)[0];
  // 小的放左边，大的放右边
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= midItem) {
          left.push(arr[i])
      } else {
          right.push(arr[i])
      }
  }
  // 递归
  return quickSort(left).concat(midItem,quickSort(right));
}

```

### 希尔排序
#### 过程

```
// 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，
// 待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序。
```

#### 实现

```js
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}
```

### 效率对比

* 严苛条件下：希尔排序>系统sort()>插入排序>冒泡排序>快速排序
* 乐观条件下：插入排序效率最高

参考：[排序效率研究](https://blog.csdn.net/qq_30100043/article/details/72763614)