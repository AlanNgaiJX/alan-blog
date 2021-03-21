---
title: CSS特性 与 选择器效率对比
sidebarDepth: 2
---

## css的三大特性

1. 继承性（子元素继承父元素）
2. 层叠性（多个class层叠）
3. 优先性（权重计算、!important）


## 选择器效率问题
### 选择器效率高到底排序

1. id选择器（#id）
2. 类选择器（.className）
3. 标签选择器（div,h1,p）
4. 相邻选择器（h1+p）
5. 子元素选择器（ul < li）
6. 后代选择器（li a）
7. 通配符选择器 *
8. 属性选择器(a[rel="external"])
9. 伪类选择器（a:hover,li:nth-child）

[关于浏览器css选择器性能优化](https://www.cnblogs.com/subying/p/3661807.html)