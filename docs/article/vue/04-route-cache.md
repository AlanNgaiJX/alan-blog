---
title: 实现路由缓存
sidebarDepth: 2
---

## 路由缓存

keep-alive 与 router-view 配合使用可以实现路由缓存的功能。

```html
<keep-alive include="xxx" exclude="xxx">
  <router-view></route-view>
</keep-alive>
```
或使用路由元信息，这种方法可以较好地处理动态缓存策略

```html
 <keep-alive>
     <router-view v-if="$route.meta.keepAlive">
         <!--这里是会被缓存的路由-->
     </router-view>
 </keep-alive>
 <router-view v-if="!$route.meta.keepAlive">
     <!--因为用的是v-if 所以下面还要创建一个未缓存的路由视图出口-->
 </router-view>
```
### exclude 和 include 的匹配规则
1. 首先匹配组件的name选项，如果name选项不可用。
2. 则匹配它的局部注册名称。 (父组件 components 选项的键值)
3. 匿名组件，不可匹配。
4. exclude的优先级大于include
5. 当组件被exclude匹配，该组件将不会被缓存，不会调用activated 和 deactivated。


## 缓存路由的生命周期

#### 没有使用keep-alive的情况下
从A页面跳转B页面：
1. beforeRouteLeave（A的组件内导航守卫）
2. beforeEach（全局前置导航守卫）
3. beforeEnter（路由独享导航守卫）
4. beforeRouteEnter（组件内导航守卫）
5. beforeResolve（全局解析导航守卫）
6. afterEach（全局后置导航守卫）
7. beforeCreate - created - beforeMount （B页面初始化）
8. mounted（B页面实例挂载）
9. 调用beforeRoterEnter next传递的回调

B页面发生数据更新：
10. beforeUpdate - updated

B页面跳转回A页面：
11. beforeRouterLeave（组件内导航守卫）
12. beforeDestroy - destroyed （B页面销毁）

A页面跳转B：重新轮回以上过程

#### 使用keep-alive的情况下

从A页面跳转到B页面：
1. beforeRouteLeave （A的组件内导航守卫）
2. beforeEach （全局前置导航守卫）
3. beforeEnter（路由独享导航守卫）
4. befroeRouteEnter（组件内导航守卫）
5. beforeResolve（全局解析导航守卫）
6. afterEach（全局后置导航守卫）
7. beforeCreate - created - beforeMount （B页面实例的初始化）
8. mounted（B页面实例挂载）
9. activated（*）
10. 调用beforeRoterEnter next传递的回调

B页面发生数据更新：
11. beforeUpdate - updated

B页面跳转回A页面：
12. beforeRouterLeave（组件内导航守卫）
13. beforeEach（全局前置路由）
14. beforeResolve（全局解析路由）
15. afterEach（全局后置路由）
16. deactivated（*）
（此时不走销毁阶段，因为组件没被销毁，被缓存起来了。）

A页面再次跳转到B页面：
1. beforeEach
2. beforeEnter
3. beforeResolve
4. afterEach
5. activated
10. 调用beforeRoterEnter next传递的回调
（此时不走初始化阶段，而是读取缓存的组件）

## 场景一
1. 有 A、B、C 三个页面，
2. 当 A 跳转到 B 时，B 重新获取数据
3. 当 B 跳转到 C，再返回到 B 时，使用缓存

### 方法一，路由传参实现
1. 在 A 跳转到 B 时，路由传参 useCache: true
```js
this.$router.push({path:'/B', params:{useCache: true}});
```
2. 在 B 的 beforeRouteEnter 或 activated 钩子中，判断useCache参数，选择性进行数据请求。
```js
beforeRouteEnter(to, from, next){
  const useCache = to.params.useCache;
  next((vm) =>{
    if(useCache!==undefined && !useCache){
      vm.fetchData();
    }
  })
}
```
### 方法二，使用路由元信息标记
1. 配置路由元信息，useCache: false，表示使用缓存
```js
{
  path: '/B',
  name: 'PageB'
  component: pageB,
  meta:{
    useCache: false
  }
}
```

2. A 跳转 B时，将标记设为 useCache: false
```js
beforeRouterLeave(to, from){
  if(to.name === 'PageB'){
    to.meta.isUseCache = true;
  }
}
```

3. B 在beforeRouteEnter 或activated 钩子中判断标记选择性请求数据
```js
beforeRouteEnter(to, from, next){
  const useCache = to.meta.useCache;
  next((vm)=>{
    if(!useCache){
      vm.fetchData();
    }
  }) 
},
beforeRouterLeave(to, from){
  from.meta.useCache = true;
}
```

## 场景二

1. 有 A、B 两个页面，B需要query参数显示不同内容。
2. 当 A 跳转最近访问的 B 页面时，已读取缓存的方式代替请求数据。
3. 最近跳转的三个B页面，都需要缓存起来。

### 实现思路
1. 仍然选择用元信息来标记。(此时路由传参是写死的一个状态，不够灵活，现在使用一个队列来管理）
```js
{
  path: '/B',
  name: 'PageB',
  component: PageB,
  meta:{
    cacheRule:{
      limit: 3,
      queue:[]
    },
  }
}
```
2. 通过每次进入B页面获取 $route 对象上的 fullPath 属性作为该页面的唯一标记，存入队列中。
3. 在 B 页面的 beforeRouteEnter 或 activated 钩子中判断此时的fullPath有没有在队列中, 选择性获取数据。
```js
beforeRouteEnter(to, from, next){
  const {limit, queue } = to.meta.cacheRule;
  const fullPath = to.fullPath;
  
  next(vm=>{
    if(!queue.includes(fullPath)){
      vm.fetchData();
      if(queue.length >= limit){
        queue.shift();
        queue.push(fullPath);
      }else{
        queue.push(fullPath);
      }
    }
  })
}
```