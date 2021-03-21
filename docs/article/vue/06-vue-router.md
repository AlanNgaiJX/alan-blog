---
title: vue-router总结
sidebarDepth: 2
---

## 重定向页面
使用 redirect 选项，实施页面重定向。
* 方法一：指定path
```js
const router = new VueRouter({
    routes: [
        { path: '/a', redirect: '/b' }
    ]
})
```
<br/>

* 方法二：指定name
```js
const router = new VueRouter({
    routes: [
        { path: '/a', redirect: { name: 'foo' }}
    ]
})
```
<br/>

* 方法三：指定一个返回目标的函数
```js
const router = new VueRouter({
    routes: [
        { 
            path: '/a', 
            redirect: to =>{
                const { hash, params, query } = to
                if (query.to === 'foo') {
                    return { path: '/foo', query: null }
                }else{
                   return '/b' 
                }
            }
            
        }
    ]
})

```


## 配置404页面
path 配置通配符 *，在最后匹配任意路径，跳转到404页面
```js
const router = new VueRouter({
    routes: [
        {
            path: '*', redirect: {path: '/'}
        }
    ]
})
```

## 实现缓存路由
router-view 配合 keep-alive 实施路由缓存, exclude 的优先级比 include 高
```html
<keep-alive :include="include" :exclude="exclude">
    <router-view></router-view>
 </keep-alive>
```

## hash 、history、abstract 模式

### hash 模式
1. URL 上加上hash tag 的形式，如'#/home'。
2. hash 兼容所有浏览器，包括不支持 history API 的浏览器。
3. hash 改变触发 hashchange 事件。hash模式的原理就是通过监听该事件，实现前端路由的。
```js
// 监听hash变化，点击浏览器的前进后退会触发
window.addEventListener('hashchange', function(event){ 
    let newURL = event.newURL; // hash 改变后的新 url
    let oldURL = event.oldURL; // hash 改变前的旧 url
},false)
```

### history 模式
1. history 模式没有 hash tag，比 hash 模式更简洁，外观上更接近传统的服务端路由。
2. history 模式只能兼容支持 H5 history Api 的浏览器。
3. history 模式需要后端服务器修改配置来兼容，如 nginx 中：
```
location / {
  try_files $uri $uri/ /index.html;
}
```
4. history 模式还需要后端服务器给配置一个404页面，否则会展示默认的404错误。

### abstract 模式
1. abstract 模式支持所有的 js 运行环境，如 node 服务端。
2. 如果发现没有浏览器的API，路由会自动进入这个模式。

## 导航守卫

* 全局导航守卫
  1. beforeEach 全局前置导航守卫
  2. beforeResolve 全局解析导航守卫
  3. afterEach 全局后置导航守卫

* 路由独享的导航守卫
beforeEnter

* 组件内的导航守卫
  1. beforeRouteEnter
  2. beforeRouteUpdate
  3. beforeRouteLeave

## 完整的导航守卫过程

1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave。
3. 调用全局前置导航守卫 beforeEach。
4. 在重用的组件里调用 beforeRouteUpdate
5. 调用路由独享导航守卫 beforeEnter
6. 加载并解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter
8. 在所有 组件内守卫 和 异步路由组件被解析之后，调用全局解析守卫 beforeResolve。
9. 调用全局后置导航守卫 afterEach。
触发 DOM 更新。

## 导航守卫 和 实例生命钩子的执行顺序

1. 总的来说导航守卫都是，在实例生命钩子触发前调用的。
2. 唯一要注意的是 beforeRouteEnter 的next函数中传递的回调，在组件 mounted 甚至 activated 之后执行。

## 导航守卫的三个参数

* to：导航即将进入的目标路由对象。
* from： 导航即将离开的路由对象。
* next：函数，必须保证至少调用一次，否则路由无法解析。
  * next()：进入下一个路由
  * next()：中断当前路由
  * next('/') 或 next({path:'/'})：中断当前路由，并跳转到新的路由，还可以趁机传递一些参数。
  * afterEach 是没有 next 函数这个参数的。
  * 仅 beforeRouteEnter 的 next 函数拥有传递回调函数的能力。

## 关于组件内导航守卫

* beforeRouteEnter：此时实例对象还未初始化，不能访问this实例对象，但能传递一个回调函数，在实例创建完成后调用。
* beforeRouteUpdate：在组件复用时调用，可以访问this。
* beforeRouteLeave：可以访问this实例对象。

## router-link
* router-link 是内置组件，是一种声明式导航。

* to：必填，表示目标路由，可以传递 path 或 name 作为目标路由的标识，也可以传递 params 和 query 等参数
```html
<router-link to="home">Home</router-link>
<router-link :to="'home'">Home</router-link>
<router-link :to="{ path: 'home' }">Home</router-link>
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
<router-link :to="{ path: 'user', query: { userId: 123 }}">User</router-link>
```
** 注意path存在时params不起作用，只能用query，显然命名路由在传参上更加灵活 **

* replace：默认fasle，调用$router.push，true时调用$router.replace，导航后不会留下history记录。
* append：在当前路径添加相对路径。
* tag：让router-link渲染成为某个标签。
* exact：精准匹配 path。
* event：触发导航的事件，默认是click事件。
* exact-active-class：设置路由被激活时router-link的样式class

## router-view
1. router-view 是展示路由的区域
2. 通常只需要一个router-view，但也可以使用命名视图，用多个router-view来展示路由中配置的组件，这很像slot。
3. 如果一个页面中布局很复杂拥有sidebar、nav、main、aside时，可以这分割。
```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```
```js 
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```

## 在组件中监听路由的变化

* 方法一：使用组件内导航守卫

* 方法二：使用 watch
```js
watch: {
    '$route'(to, from) {
        //这里监听
    },
},
```

## scrollBehavior滚动行为
savedPosition参数，当通过浏览器前进/后退按钮触发才可用。
```
scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
```

## 嵌套路由的使用场景

1. 嵌套路由将页面结构分割为父子两级，父级的视图为通用的，子级的视图是变化的。
2. 譬如管理系统，顶部栏和左侧菜单栏是全局通用的，那就应该放在父路由，而右下的页面内容部分放在子路由。

## 关于命名视图

1. 在同级路由中展示多个视图，使用命名视图。
2. 命名视图跟命名插槽很像。
3. 例如项目首页，有头部导航，侧边栏导航、主内容区域。头部导航、侧边栏导航，不想用组件方式引入，就可以用视图方式展示。
如：
```html
<template>
  <div>
    <div>
        //...头部导航
        <router-view name='header'></router-view>
    <div>
        //...侧边栏导航
        <router-view name='sider'></router-view>
    </div>
    <div>
        //...主内容
        <router-view/>
    </div>
  </div>
</template
```

```js
function load(component) {
    return resolve => require([`views/${component}`], resolve);
}
const routes=[
    {
        path: '/',
        redirect: '/home',
        name: 'layout',
        component: load('layout'),
        children: [
            {
                path: '/home',
                name: 'home',
                components: {
                    default: load('main'),
                    header: load('header'),
                    sider: load('sider')
                },
                meta: {
                    title: '首页'
                },
            },
        ]
    }
]

```

## 路由传参的方式

1. meta：路由元信息传参
特点：参数有"记忆能力"，使用不同的数据结构，如容器、队列等可以存储所传递过的所有参数。

初始化：
```js
{
    path: '/home',
    name: 'home',
    component: load('home'),
    meta: {
        photoId: '123'
    },
},
```
传递参数：
```js
beforeRouteLeave(to, from ,next){
  if(to.name === 'home'){
    to.meta.photoId = '321'
  }
}
```

* query：url的查询参数传参

特点：会把参数写到url上，刷新页面参数还存在
缺点：
  * query污染了url，如果服务器需要获知客户端当前的url时要考虑把query参数弄干净。
  * 不安全，不建议把用户的个人信息放在URL上，如果url被转发到别的系统，会影响网站的安全评级。

* params：parmas参数传参。
特点：
 * 只有命名路由可以使用，当指定了path时，params不生效。
 * params可供动态路由使用。如，
 ```js
 // '/userInfo/:id'
 this.$router.push({name:'userInfo', params:{id: '123'}});
 ```
 * 刷新后参数会丢失

## 路由组件和路由解耦

1. 在组件上使用 $route （通常是为了获取参数），会使这个组件只能在特定的路由中使用。形成了耦合关系。

2. 如果该组件有复用场景，最好把组件跟路由解耦。

3. 使用props向路由组件传递参数的方式解耦。

路由的配置项有 props 选项，可以设置向路由组件传参的行为。
* props为true，route.params将会被设置为组件属性。
* props为对象，则按原样设置为组件属性。
* props为函数，http://localhost:8036/home?id=123 会把123传给组件Home的props的id。
```js
routes: [
    { path: '/home/:id', component: Home, props: true},
    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
        path: '/home/:id',
        components: { default: Home, sidebar: Sidebar },
        props: { default: true, sidebar: false }
    }
    { path: '/home', component: Home, props: {id:123} },
    { path: '/home', component: Home, props: (route) => ({ id: route.query.id }) },
]
```

## 动态加载路由

1. 使用 `this.$router.addRoutes(routes)` 可以动态加载路由。
2. 使用场景：实现不同用户权限，使用不同的路由。

## 实现路由懒加载

1. 场景：当单页面应用的路由变得庞大的时候，所有路由组件打包的体积也随着变大，最终会影响首屏渲染速度。
2. 使用webpack 的 import 方法，可以定义组件的代码分块，进而利用这块代码制作一个异步组件，供路由使用，如：
```js
// Foo就是一个异步组件
const Foo = () => import('./Foo.vue')

routes: [
  { path: '/foo', component: Foo }
]
```
3. 当导航触发时，会先加载这块代码，并解析为组件。从而达到分包加载的效果。

4. 可以给异步组件做一个加载态的过渡动画，当网络很慢，解析组件时不至于一片空白。


## route 和 router 的区别

1. route是 “路由信息对象” ，包括path，params，hash，query，fullPath，matched，name等路由信息参数。 而
2. router是 “路由实例对象” ，包括了路由的跳转方法，钩子函数等。

## 跳转一个新的页面
1. push、replace等方法只能在当前的窗口打开页面
2. 使用 $router.resolve 和 window.open的方式打开一个新的页面，并且跳转到对应的前端路由中。

```js
open() {
    const { href } = this.$router.resolve({
        path: "/cookbook/cookbookList"
    });
    // '#/cookbook/cookbookList'
    window.open(href, "blank");
    // 此时会弹出一个新的窗口，并加载到 index.html#/cookbook/cookbookList 路由下
}
```