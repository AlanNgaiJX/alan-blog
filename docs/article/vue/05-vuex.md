---
title: vuex总结
sidebarDepth: 2
---

## 定义

Vuex vue的状态管理插件。采用集中式存储，管理应用的所有组件的状态。

## 解决的问题

* 多个组件依赖于同一状态时，组件的传参非常繁琐，尤其是兄弟组件间的状态传递。
* 不同组件需要变更同一状态时，往往需要父子组件通过回调或者事件的方式，来同步状态的多份拷贝。这种模式非常脆弱，代码不好维护。

## 5大核心概念
* state，状态中心
* getters，派生状态中心
* mutations，改变状态的方法集合
* actions，提交mutation的方法，可以进行异步操作
* modules，子模块

## state

1. vuex 的状态都存储在 state中，改变state的唯一途径是commit mutation。
2. 当状态是引用类型时，要注意使用深克隆复制对象。
3. 可以使用 mapState 将 state 混入到 computed中。
4. 组件v-model一般配合get、set方法读取和修改state。

## getters

1. 使用 getter 从 state 派生出状态可供多个组件使用。
2. getter可以传参，通过参数来获取state状态。
```js
getters:{
  getPhotoById: (state)=>(id)=>{
    return state.photos.find(p=> p.id === id);
  }
}
// 调用
this.$store.getter.getPhotoById(id);
```
3. 使用 mapGetters ，将 getter 混入到computed中。

## actions
1. action 提交的是 mutation 而不是变更状态。
2. action可以是异步操作。
3. 使用 mapActions，将 action 混入到method中。
4. 异步的 action，一般返回 Promise 或者 执行传入的回调。
5. 继发 action 可以使用 async 和 await 实现。
6. action 的第一个参数是 context，与 $store 一致。
```js
actions:{
    async actionA({commit}){
        //...
    },
    async actionB({dispatch}){
        await dispatch ('actionA')//等待actionA完成
        // ... 
    }
}
```

## mutations

1. mutation必须是同步函数。
2. 使用 mapMutations，将 mutationh 混入到methods中。

## modules

1. 业务复杂的时候状态树比较庞大，要设法模块化管理状态和逻辑方法，此时需要用 module 去分割模块。
2. 模块中还可以嵌套子模块。
3. 模块中 getter 和 mutation 的 state参数是当前模块的state。
4. 模块中 getter 可通过第三参数 rootState 和 第四参数 rootGetters 访问全局的 state 和 getter。
5. 模块中 action 可通过第一参数 context.rootState 和 context.rootGetters 访问全局的 state 和 getter。
6. mutation只能访问当前模块的state，但也可以通过外部引入 $store 实例对象来访问全局state和getter。
7. 默认情况下，模块除了 state 外，getters、actions、mutations都是注册在全局命名空间，此时不同模块访问它们的"路径"都是一样的。
8. 这样访问虽然方便，但模块间的 getters、actions、mutations 是耦合的。为了使模块封装度更高，会使用命名空间。使用命名空间后，需要通过"命名/state | action | mutation"这样的路径访问。

## 严格模式
1. 在严格模式下，无论何时发生了状态变更且不是由 mutation函数引起的，将会抛出错误。
2. 这能保证所有的状态变更都能被调试工具跟踪到。
```js
const store = new Vuex.Store({
    strict:true,
})
```
3. 不要在生产环境中启用严格模式，严格模式会深度监测状态树来检测不合规的状态变更，非常消耗性能。

## 插件
* 定义插件工厂函数
```js
export default function createPlugin(param){
    return store =>{
        //...
        // 使用 store.subscribe 监听 mutation
        // 使用 store.subscribeAction 监听 action
    }
}

```
* 在 plugins 选项中使用插件
```js
import createPlugin from './plugin.js'
const myPlugin = createPlugin()
const store = new Vuex.Store({
  // ...
  plugins: [myPlugin]
})
```