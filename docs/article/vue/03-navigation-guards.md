---
title: vue-router导航守卫详解
sidebarDepth: 2
---
## 前言

使用场景：
1. 验证用户权限，满足条件时进入导航，否则重定向到登录页面。
2. 实现不同的页面缓存策略，如单个页面缓存，动态路由缓存。

<br/>

vue-router提供了三个不同维度的导航守卫：
1. 全局守卫
2. 路由独享守卫
3. 组件内的守卫

## 全局守卫
1. 全局前置守卫（导航触发时调用）
2. 全局解析守卫（在导航确认前，并在所有组件内守卫解析完调用）
3. 全局后置守卫（导航已完成时调用）

### 使用方法
```js
// main.js 入口文件
import router from './router'; // 引入路由

// 全局前置守卫
router.beforeEach((to, from, next) => { 
  next();
});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  next();
});

// 全局后置守卫
router.afterEach((to, from) => {
  
});
```

### to、from、next 这三个参数

1. to、from 分别对应，"将要进入" 和 "将要离开" 的路由对象，即平时通过 `this.$route` 获取到的对象。
2. next函数，保证至少调用一次，否则不会进入下一个钩子。
  * next()，进入下个路由
  * next(false)，停止，并回到上一个路由
  * next({path})，停止，并跳转到另外一个路由
  * next方法允许设置一些参数

## 路由独享守卫
仅一个enter
```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => { 
        // 在全局前置守卫后调用，
        // 所以不会被全局守卫覆盖
        // ...
      }
    }
  ]
})
```

## 组件内导航守卫 
1. beforeRouteEnter
2. beforeRouteUpdate
3. beforeRouteLeave

```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 确认 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // 但可以在传递的回调中访问实例
    // next((vm)=>{ vm即实例 })
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

## 路由导航解析流程
1. 触发进入其他路由。
2. 调用要离开路由的组件守卫beforeRouteLeave
3. 调用局前置守卫：beforeEach
4. 在重用的组件里调用 beforeRouteUpdate
5. 调用路由独享守卫 beforeEnter。
6. 解析异步路由组件。
7. 在将要进入的路由组件中调用beforeRouteEnter
8. 调用全局解析守卫 beforeResolve
9. 导航被确认。
10. 调用全局后置钩子的 afterEach 钩子。
11. 触发DOM更新(mounted)。
12. 执行beforeRouteEnter 守卫中传给 next 的回调函数

