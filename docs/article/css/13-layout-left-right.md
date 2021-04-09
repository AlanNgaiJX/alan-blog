---
title: 左定宽，右自适应布局
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
}

.box2 {
  background-color: pink;
  height: 100%;
  flex-grow: 1;
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
  background-color: pink;
  height: 100%;
  /* 方案一 */
  margin-left: 120px;

  /* 方案二 */
  width: calc(100% - 120px);
  float: left;
}
```