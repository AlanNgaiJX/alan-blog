---
title: keep-alive详解
sidebarDepth: 2
---

## keep-alive

* 使用keep-alive包裹动态组件（即v-if、router-view等内容）时，会缓存该组件实例。
* 使用keep-alive的组件，多出了 activated、deactivated钩子。
* 该组件的所有组件树中，都有以上两个新钩子。

注意：以上钩子服务器端渲染期间，不被调用。
<br/>

### 生命周期 

使用keep-alive，组件的生命周期会这样走：

#### 初始化阶段 （v-if="true"）
1. beforeCreate
2. created
3. beforeMount
4. mounted
5. activated (*)

#### 更新阶段（update some data）
1. beforeUpdate
2. updated

#### 失活阶段（v-if="false"）
1. deactivated (*)

#### 活跃阶段（v-if="true"）
1. activated（*）

#### 销毁阶段（父组件销毁才会触发该阶段）
1. deactivated（*）
2. beforeDestroy
3. destroyed




