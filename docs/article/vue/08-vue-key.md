---
title: key的作用与原理
sidebarDepth: 2
---

## key的作用
1. Key的作用主要是为了高效更新虚拟DOM。
2. 原理是vue在patch过程中通过key精准判断了两个节点是否同一个，从而避免了频繁更新不同元素，使得patch过程更加高效，减少DOM操作，提高性能。
3. 不设置key或使用index作为key的时候会引发一些bug。常见的就是删除节点和翻转列表。
4. 在过渡切换时也用到key，为了让vue可以区分它们，否则只会替换其内部属性而不触发过渡效果。

## patch的过程
列表渲染一个数组 `[A,B,C,D,E]`，并追加为`[A,B,F,C,D,E]`，观察此时的patch过程

### 没有指定key的情况下
```
ABCDE // 需要更新为
ABFCDE
```
1. 因为没有指定key，只能为每个标签都更新内容，最后多出了E，并追加上去了。
2. 这里一共发生了5次更新，外加1次追加 = 6个dom更新操作。
3. 效率非常拉跨。

### 指定key的情况下
```
// 第 1 次循环patch A
A B C D E
A B F C D E

// 第 2 次循环patch B
B C D E
B F C D E

// 第 3 次循环patch E （首尾策略）
C D E
F C D E

// 第 4 次循环patch D
C D
F C D

// 第 5 次循环patch C
C
F C

// 至此，旧数组的所有元素都处理完了，剩下F，则创建F虚拟节点，并插入到C前面
```
1. 可见，有key的情况下，patch是高效的，最后只需要一次插入dom即可。

### 使用 index 作为 key 的后果

### 场景一，删除节点
列表渲染`[1,2,3]`,并以index作为key

1. 删除第一个节点后
2. 此时的结构是 [ {val: 2, key:0 }, {val:3, key:1}]
3. 因为key：0，key：1还存在，patch是感知不到里面的值变化的（想看sameVNoded的条件）
4. 因此 `<span>1</span><span>2</span>`会被复用，而把`<span>3</span>`给删掉了。这是个天大的错误。

### 场景二，列表渲染组件
1. 首先渲染如下结构的组件，他们用index作为key
```js
[
  {
    tag: "item",
    key: 0,
    props: {
      num: 1
    }
  },
  {
    tag: "item",
    key: 1,
    props: {
      num: 2
    }
  },
  {
    tag: "item",
    key: 2,
    props: {
      num: 3
    }
  }
];
```
2. 使用reverse翻转数组
```js
[
  {
    tag: "item",
    key: 0,
    props: {
+     num: 3
    }
  },
  {
    tag: "item",
    key: 1,
    props: {
+     num: 2
    }
  },
  {
    tag: "item",
    key: 2,
    props: {
+     num: 1
    }
  }
```
3. 此时，他们的key没有变化，但props发生了变化。
4. 因为props变化了，三个组件在patch时都重新初始化创建了。
5. 这是可怕的，因为如果key是正常的，他们只需要结构上调换位置就好了。


## sameVNode的条件
1. key相同，没有指定key的情况也会判断相同，因为undefined === undefined 
2. 标签相同
3. props相同


