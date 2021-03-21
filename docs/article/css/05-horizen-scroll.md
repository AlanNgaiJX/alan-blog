---
title: 水平滚动的实现
sidebarDepth: 2
---

## 方法一：flex
```css
父{
    width:xxx;
    displaty: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
}

子{
    flex: 1 0 auto;
}

```

## 方法二：inline
```css
父{
    width:xxx;
    displaty: inline;
    white-space: nowrap;
    overflow: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
}

子{
    display: inline-block;
}