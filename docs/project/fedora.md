---
title: 基于vue3 组件库 fedora
sidebarDepth: 2
---
# fedora

## 简介

Fedora 是一个基于 Vue 3.0 的、简约通用的 UI 组件库，为基础业务提供了方便。其样式基于 SCSS 构建，可进一步定制业务主题。

## 文档地址

[文档传送门](https://alanngaijx.github.io/fedora/#/)

## 现已支持
* Icon 图标
* Button 按钮
* Radio 单选
* Switch 开关
* Select 下拉选择
* Slider 滑动输入
* Input 输入框
* Textarea 块输入
* Menu 菜单
* Tabs 标签页
* Popover 弹出
* Bubble 回收
* Skeleton 骨架屏
* LazyImg 图片懒加载
* SuqareImg 方形图
* Spin 加载态
* Loading 加载中
* Toast 吐司消息
* ...

## install 安装

```
npm install fedora-ui -save
```

## 全局引入

```js
import fedora from 'fedora-ui'
import 'fedora-ui/fedora.css'
app.use(fedora)
```

## 按需引入

```js
import { Button, Modal } from 'fedora-ui'
import 'fedora-ui/fedora.css'

app.component(Button.name, Button)
app.use(Modal)
```