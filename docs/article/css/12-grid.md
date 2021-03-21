---
title: grid 总结
sidebarDepth: 2
---

## Grid优点：
grid提供了一种比flex更高维度的布局，

* 在布局一个列表 或 实现简单的布局，显然flex比较容易理解、高效

* 而面对表单，网状，复杂的布局，仍使用flex布局则会利用很多div和嵌套来完成

* grid布局可以使用 容器>项目 两层div即可胜任以上的工作

## 容器属性：

### grid-template-columns
列宽
### grid-template-rows
行宽

### grid-auto-columns
为所有没有设置到列宽的列，给予一个统一的列宽，默认为元素自己的宽度

### grid-auto-rows 
为所有没有设置到行宽的行，给予一个统一的行宽，默认为元素自己的宽度

### column-gap
列间距

### row-gap  
行间距

### gap 

行，列间距

### grid-template-areas
划分区域 'a b c' 'd e f' 'g h i'; 某些区域不用利用则用 . 占位。
划分区域影响网格线，和grid-auto-flow的布局。

### grid-auto-flow  
排列方式：默认row 先行后列, column 先列后行，以对角线 左上 到 右下 对折转换 （有点类似flex-direction）

row desen | column desen

### justify-items
这两个属性都是设置单元格内内容的排列方式，相当于给每个单元格设置 flex justify-content 和 align-items属性,

### align-items 
默认值为stretch(拉伸)，其他 start end center

### place-items
place-items: align-items justify-items; 以上两个属性的简写

### justify-content
相当于设置整个内容区域在容器里的水平位置

### align-content
相当于设置整个内容区域在容器里的垂直位置

### place-content
place-content : justi justify-items; 以上两个属性的简写

### grid-template
是grid-template-columns、grid-template-rows和grid-template-areas这三个属性

### grid
是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。

## 项目属性

### grid-column-star
左边框所在的垂直网格线

### grid-column-end
右边框所在的垂直网格线

### grid-row-start
上边框所在的水平网格线

### grid-row-end 
下边框所在的水平网格线

## ps

 除了指定为第几个网格线，还可以指定为网格线的名字。
                                                 grid-template-areas，指定了格子名，自此有了网线名
                                                  比如，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end

### grid-column
简写 grid-column: start-line / end-line;

### grid-row
简写 grid-row: start-line / end-line;

### grid-area
指定当前块要放在哪个区域, 也可以用作以上两个属性的简写
grid-area: row-start / column-start / row-end / column-end;

### justify-self
### align-self
### place-self

指定内容块 在单元格内的位置, 与容器属性中的 xx-items表现一致，不过-self只是排版当前内容的
