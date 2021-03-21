---
title: 关于文本换行
sidebarDepth: 2
---

## white-space 控制换行 和 空白处理
前置知识：

* 能影响换行的因素，文本语义（单词，中文字）、enter换行（不一定能控制换行）、br标签(一定能控制换行)

* 所谓的空白处理，是指多个连续空白符是否会被合并只表现为一个空白符。
1. normal 默认。根据文本语义换行，忽略enter换行。合并空白符。
2. nowrap 忽略语义换行，忽略enter换行。合并空白符。
3. pre    忽略语义换行，enter可以换行。不合并空白符。
4. pre-line 根据语义换行，也能用enter换行。合并空白符。
5. pre-wrap 根据语义换行，也能用enter换行。不合并空白符。

* white-space会影响以下两个（子）属性的功能。

## word-break 语义控制

1. normal
2. break-all 允许在英文单词中间断行
3. keep-all  不允许在英文单词中间断行，根据文本语义断行

## word-wrap（overflow-wrap）  语义控制

1. normal
2. break-word 这行实在没找到换行点时，才在单词中间换行


总结：
1. word-break:break-all正如其名字，所有的都换行。毫不留情，一点空隙都不放过。
2. word-wrap:break-word则带有怜悯之心，如果这一行文字有可以换行的点，如空格，或中文，则就不打英文单词或字符的主意了，让这些换行点换行，至于对不对齐，好不好看，则不关心


```css
 
 /*单行超出省略*/
 .single-Line-Ellipsis{
    width:100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
 }
          
/* 强制不换行 */
.nowrap{white-space:nowrap;}

/* 允许单词内断句，首先会尝试挪到下一行，看看下一行的宽度够不够，不够的话就进行单词内的断句 */
.breakword{word-wrap: break-word;}

/* 断句时，不会把长单词挪到下一行，而是直接进行单词内的断句 */
.breakAll{word-break:break-all;}            

/* 超出部分显示省略号 */
.ellipsis{text-overflow:ellipsis;overflow:hidden;}
```

## 实用案例

### 超过两行后省略

display: inline-block;
font-size: 25rpx;
line-height: 35rpx;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;// 控制行数

### 超过父元素宽度自动换行
  word-wrap: break-word;
  word-break: break-all;