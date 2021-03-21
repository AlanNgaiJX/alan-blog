---
title: MVVM 模型
sidebarDepth: 2
---

## 定义
1. MVVM 是一种客户端的架构模式。
2. MVVM 是 Model-View-ViewModel 的简写。
3. 本质上是 MVC 的改进版。
4. 核心内容是，数据和视图分离、数据绑定 和 视图更新。
5. 底层的技术支撑是，事件循环机制、diff 算法。

## 结构

<img src="~@blogImages/h1.jpeg" width="600" style="display: block;"/>

2. Model，即数据仓库，在vue中对应data。
3. View，即页面视图，在vue中对应Dom。
4. View Model，即视图模型，它基于js事件的机制，通过数据绑定 和 事件监听的方式，连接了 model 和 view 层，使二者形成了一种双向绑定的关系。当在视图中触发事件时能够自动更新数据；当数据发生改变时，能够自动更新视图。

