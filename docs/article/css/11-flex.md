---
title: flex 总结
sidebarDepth: 2
---

## 前言

布局的传统解决方案是基于盒状模型，依赖 display + position + float 方式来实现，灵活性较差。2009年，W3C提出了一种新的方案-Flex，Flex是Flexible Box的缩写，意为”弹性布局”。Flex可以简便、完整、响应式地实现多种页面布局。

## 定义

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

<img src="~@blogImages/c1.jpeg" width="550px" style="display: block;"/>

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
Flex项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
Flex属性分为两部分，一部分作用于容器称容器属性，另一部分作用于项目称为项目属性。下面我们就分部的来介绍它们。


## flex容器属性

### display: flex
定义容器

### flex-direction
flex-direction属性决定主轴的方向（即项目的排列方向）。

```css
.box {
    flex-direction: row | row-reverse | column | column-reverse;
}

```
* row 表示从左向右排列
* row-reverse 表示从右向左排列
* column 表示从上向下排列
* column-reverse 表示从下向上排列

演示：
<img src="~@blogImages/c2.jpeg" width="550px" style="display: block;"/>


### flex-wrap

默认情况下，Flex项目都排在一条线（又称"轴线"）上。我们可以通过flex-wrap属性的设置，让Flex项目换行排列。

```css
.box {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

* nowrap(缺省)：所有Flex项目单行排列
* wrap：所有Flex项目多行排列，按从上到下的顺序
* wrap-reverse：所有Flex项目多行排列，按从下到上的顺序


演示：
<img src="~@blogImages/c3.jpeg" width="550px" style="display: block;"/>

### flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

```css
.box {
    flex-flow: <‘flex-direction’> || <‘flex-wrap’>
}
```

### justify-content
justify-content属性定义了项目在主轴上的对齐方式及额外空间的分配方式。

```css
.box  {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

* flex-start(缺省)：从启点线开始顺序排列
* flex-end：相对终点线顺序排列
* center：居中排列
* space-between：项目均匀分布，第一项在启点线，最后一项在终点线
* space-around：项目均匀分布，每一个项目两侧有相同的留白空间，相邻项目之间的距离是两个项目之间留白的和
* space-evenly：项目均匀分布，所有项目之间及项目与边框之间距离相等


演示：
<img src="~@blogImages/c4.jpeg" width="550px" style="display: block;"/>

### align-items
align-items属性定义项目在交叉轴上的对齐方式。

```css
.box {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

* stretch(缺省)：交叉轴方向拉伸显示
* flex-start：项目按交叉轴起点线对齐
* flex-end：项目按交叉轴终点线对齐
* center：交叉轴方向项目中间对齐
* baseline：交叉轴方向按第一行文字基线对齐

演示：
<img src="~@blogImages/c5.jpeg" width="550px" style="display: block;"/>

### align-content

align-content属性定义了在交叉轴方向的对齐方式及额外空间分配，类似于主轴上justify-content的作用。
这个属性跟align-item的区别是，在flex容器指定高度并且子项为多行时，align-content: center是将子项作为一个整体，然后这个整体在flex容器的交叉轴上居中对齐的。

```css
.box {
    align-content: stretch | flex-start | flex-end | center | space-between | space-around ;
}
```
* stretch (缺省)：拉伸显示
* flex-start：从启点线开始顺序排列
* flex-end：相对终点线顺序排列
* center：居中排列
* space-between：项目均匀分布，第一项在启点线，最后一项在终点线
* space-around：项目均匀分布，每一个项目两侧有相同的留白空间，相邻项目之间的距离是两个项目之间留白的和

演示：
<img src="~@blogImages/c6.jpeg" width="550px" style="display: block;"/>

## flex项目属性

### order 

缺省情况下，Flex项目是按照在代码中出现的先后顺序排列的。然而order属性可以控制项目在容器中的先后顺序。

```css
.item {
  order: <integer>; /* 缺省 0 */
}
```
按order值从小到大顺序排列，可以为负值，缺省为0。

演示：
<img src="~@blogImages/c7.jpeg" width="550px" style="display: block;"/>

### flex-grow

flex-grow属性定义项目的放大比例，flex-grow 值是一个单位的正整数，表示放大的比例。默认为0，即如果存在额外空间，也不放大，负值无效。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

```css
.item {
  flex-grow: <number>; /* 缺省 0 */
}
```

演示：
<img src="~@blogImages/c8.jpeg" width="550px" style="display: block;"/>

### flex-shrink

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。0表示不缩小，负值无效。

```css
.item {
  flex-shrink: <number>; /* 缺省 1 */
}
```

演示：
<img src="~@blogImages/c9.jpeg" width="550px" style="display: block;"/>

### flex-basis

flex-basis属性定义项目在分配额外空间之前的缺省尺寸。属性值可以是长度（20%，10rem等）或者关键字auto。它的默认值为auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* 缺省 auto */
}
```

演示：
<img src="~@blogImages/c10.jpeg" width="550px" style="display: block;"/>

### flex
flex属性是flex-grow, flex-shrink 和flex-basis的简写，默认值为0 1 auto。后两个是可选属性。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

### align-self

align-self属性定义项目的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

```

除了auto值以外，align-self属性与容器的align-items属性基本一致。

演示：
<img src="~@blogImages/c11.jpeg" width="550px" style="display: block;"/>