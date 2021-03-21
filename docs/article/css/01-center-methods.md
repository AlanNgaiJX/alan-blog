---
title: 居中法总结
sidebarDepth: 2
---

## 行内文本的居中
```css
.wrap{
  height: 100px;
  text-align: center;
  .box{
    line-height: 100px;
    // 多个文本对齐还可以是用 verticle-align 调整自身的垂直位置
  }
}
```

## padding居中
特点：
1. 必须悉知父子元素的宽高，及盒模型
2. 繁琐，需要计算padding

## 子绝父相，三种方法

特点：
1. 同时设置两种定位流，且子元素必须设置高度，灵活性较弱；
2. 除了transofrm属性不兼容ie8外，其他属性的兼容性都比较好。

### 上下左右0，边距自动
```css
.wrap{
  position: relative;
  .box{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
}
```

### 上、左50%，margin位移自身宽高的一半

```css
.wrap{
  position: relative;
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;// 此时div宽高 = 100 * 50
    margin-left: -50px;
  }
}
```

### 使用 transform，（该属性不兼容ie6~8）
```css
.wrap{
  position: relative;
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
```

## table展示居中法
特点
1. 通常是能胜任一些文字居中，但display: table的局限性非常大。
2. 它的外层结构不能随意设置定位流，因为会导致display失效。
3. 内层结构容易出现宽、高、边距无效问题。
3. 往往需要嵌套多层标签去解决上面的问题，这导致代码会很难维护。
4. 除了可以兼容到ie8外，我不推荐平时用这种方法去居中。

```css
.wrap {
  display: table;
  .box {
    display: table-cell;
    vertical-align: middle;
  }
}
```

## flex展示居中法

特点：
1. flex具有自动收缩功能，可以胜任响应式布局。
2. 传统的居中方法都需要在子元素上设置属性，而flex提出了一种抽象模式，通过父元素属性定位子元素。
3. 我认为这个模式是优秀的，在后来的grid 和 webkit-box上都提现了这个模式。
3. 缺点是ie9及以下不兼容，
4. felx 把子元素都升级为弹性盒子，覆盖了 block 和 inline-block原有的特性。

```css
.wrap{
  display: flex;
  justify-content:center;
  align-items: center;
}
```

## grid展示居中法
特点：
1. 比flex更加抽象的居中方式
2. 列表居中推荐使用
3. 对ie、Opera、还有一些手机系统的webview支持不太好

```css
.wrap{
  display: grid;
  justify-content:center;
  align-items: center;
}
```
