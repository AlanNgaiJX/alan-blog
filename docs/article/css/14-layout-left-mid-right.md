---
title: 左右定宽，中间自适应布局
sidebarDepth: 2
---

## flex 实现

```css
.wrap {
  background-color: yellow;
  height: 150px;
  width: 100%;
  display: flex;
}

.box1 {
  background-color: blue;
  width: 120px;
  height: 100%;
  flex-shrink: 0;
}

.box2 {
  background-color: pink;
  height: 100%;
  flex: 1;
}

.box3{
  background-color: red;
  width: 120px;
  height: 100%;
  flex-shrink: 0;
}
```

## float 实现
```css
.wrap {
  background-color: yellow;
  height: 150px;
  width: 100%;
}

.box1 {
  background-color: blue;
  width: 120px;
  height: 100%;
  float: left;
}

.box2 {
  background-color: red;
  width: 120px;
  height: 100%;
  float: right;
}

.box3 {
  background-color: pink;
  height: 100%;
  
  /* 方案一 */
  margin: 0 120px;

  /* 方案二 */
  /* width: calc(100% - 240px); */
  /* margin-left: 120px; */
}
```