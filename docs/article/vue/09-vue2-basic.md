---
title: vue2知识点
sidebarDepth: 2
---

## vue的兼容情况

* vue2不兼容ie8以下浏览器，因为vue的响应式原理基于es5的Object.defineProperty。
* vue3使用了 es6的 proxy ，全面抛弃ie。

## vue的生命周期与简单介绍

1. beforeCreate：实例创建前被调用；
2. created：实例创建后被调用，完成数据观测，属性和方法的运算，watch/event事件回调，模板渲染成html前（vm.$el未定义）故数据初始化最好在这阶段完成；
3. beforeMount：在$el挂载前被调用，相关的 render 函数首次被调用，期间将模块渲染成html,此时vm.$el还是未定义；
4. mounted：在$el挂载后被调用，此时vm.$el可以调用，不能保证所有的子组件都挂载，要等视图全部更新完毕用vm.$nextTick();
5. beforeUpdate：数据更新时调用;
6. updated：数据更新后调用;
7. activated：<keep-alive></keep-alive>包裹的组件激活时调用；
8. deactivated:<keep-alive></keep-alive>包裹的组件离开时调用；
9. beforeDestroy:实例销毁之前调用,此时实例仍然完全可用；
10. destroyed：实例销毁之后调用,此时实例的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

## 生命周期的实例方法
1. vm.$mount()，主动挂载vue实例到某个dom节点。
2. vm.$forceUpdate()，强制Vue实例更新渲染，仅仅会影响本组件进入更新阶段。
3. vm.$nextTick()，指定一个回调，在视图全部更新后执行回调，一般用来获取异步更新的dom节点。
4. vm.$destory()，销毁一个实例，解除该实例与其他实例的链接，接触其时间监听。但要配合 dom 的 remove方法才能清除该实例所挂载的节点。

## 指令
1. v-show，
  * 切换元素的 display 属性。
  * 不可用在 template 上。

2. v-if
  * 通过销毁和初始化的方式，控制组件和节点的显示。
  * 不适合用在频繁的显示和隐藏场景
  * 适合用在异步渲染的组件上
  * 可以用在template上
  * 对应还有 v-eles-if、v-else 指令

3. v-for
  * 进行列表渲染，必须为每个单元设置唯一的key
  * 可以渲染 array、object、number、string等数据结构
  * 列表渲染对象时，是按Object.keys()的顺序的遍历，如果需要保证顺序需要转为array或者map数据结构。

4. v-on
  * 用在 html 节点上，监听原生的事件
  * 用在组件上，监听组件的自定义事件
  * 用在组件上，添加 .native 修饰符，可监听组件根元素的原始事件
  ```html
   <myVue @click.native="d"></myVue>
  ```
  * .stop，对应 e.stopPropagation，阻止冒泡
  * .prevent，对应 e.preventDefault，阻止默认事件
  * .self，对应判断e.target是本身，仅点击本身的元素才触发
  * .capture，在事件capture阶段触发
  * .passive，在事件冒泡阶段触发
  * .once，仅触发一次
  * 注!意!修饰符的顺序：@click.prevent.self 会阻止包括子节点的默认时间，而 @click.self.prevent 只会阻止元素自身的默认事件。
  * event对象默认在第一个参数传入，也可以指定一个位置`@click="handleOpen(0, $event)"`
  * v-on可以绑定多个事件，但只支持同样的修饰符。

5. v-bind 动态绑定属性
  * .sync可以进行属性的双向绑定
  ```html
  <comp v-bind:title.sync="doc.title"></comp>
  ```
  ```js
  this.$emit('update:title', newTitle)
  ```

6. v-model 
  * 实现双向数据绑定
  * 可以绑定在组件上，组件需配合作出这样的改造
  ```js
  model: {
    prop: 'checked',
    event: 'change'
  },
  props:{
    checked: Boolean
  }
  //更新数据的方法
  this.$emit('change', 'xxxxx');
  ```
  * .lazy 修饰符，绑定的事件从 inpu 改为change，即失去焦点或按下回车键时才触发。
  * .number，保证用户输入的是数字
  * .trim，字符串trim
  * v-model其实是，`<my-component :value="value" @input="value=$event"></my-component>`的语法糖。

7. v-text，输出字符串

8. v-html
  * 输出 html 内容
  * 有 XSS 攻击风险，小心使用，不要显示任何用户提交的内容。
  * XSS攻击是攻击客户端的方式，对客户端实施串改和偷取，传统有偷cookie，偷输入内容等。
  * evel、postMessage等都有xss攻击隐患。

9. v-once，只渲染组件一次，随后与diff算法无缘，不发生更新，是一种优化手段。

10. v-cloak
  * 在js解析特别慢的时候，页面模板上可能会出现vue的变量名，如'{{ userName }}'
  * 配合css可以不显示变量名，[ v-clock ]{ display: none };

11. v-pre，指定这个元素树跳过编译环节，如果这个树很大是值得这么做的，可以加快编译速度。

12. v-slot
  * 插槽命令，用在 template 上
  * v-slot:插槽名="props"

## data
为什么组件中的data必须用函数返回对象？
答：因为对象是引用类型，如果data是一个对象，组件复用时不同的实例都指向了同一个data对象，data容易被串改。在实例化组件时，使用一个工厂函数返回data对象就不会出现这个问题。

## watch

1. watch用来监听数据变化（来源于data 或 computed的属性 ）
2. 'a.b' 监听对象的某个属性
3. deep 深度监听对象，小心使用，万一对象太大，且更新频繁，会很消耗性能
4. immediate 侦听开始即调用

## computed

* 计算属性主要解决了状态派生的问题，如果在模板中派生状态会变得非常恶心。
* 计算属性基于响应式依赖进行缓存，只有相关依赖发生改变才会重新计算值，非常节省算力。
* get在读取数据时触发，也是有缓存的。set在设置数据时触发可以配合v-model使用。
* computed、methods、filter那些都不能是箭头函数，这样this是undefind。
* computed可以接收参数，做法是返回一个箭头函数
```js
t() {
    return num => {
        return this.arr[num];
    };
}
```
* computed 和 watch的 区别
  * watch是监听数据变化，并触发响应的逻辑。computed是派生一个数据状态。
  * watch没有缓存，computed有缓存。
  * computed可以传入参数，watch不能。
* computed 和 method的区别
  * 计算属性基于响应式依赖进行更新，是有缓存的，而method随着组件重新渲染时都会再次执行函数，没有缓存。

## 动态绑定class的四种形态

* 对象形态，`:class="{ active: actived , 'active-click': clicked && actived }"`
* 数组形态，`:class="[ actived ? 'active': '', clicked && actived ? 'active-click' : '' ]"`
* 数组+对象形态，`:class="[{active: actived}, { active-click: clicked && actived }]"`
* 计算属性
```js
//`:class="classOject "`
computed:{
  clasObject(){
    return {
      active: this.actived , 
      'active-click': this.clicked && this.actived
    }
  }
}
```
* 同理styles也是差不多，但要注意属性驼峰命名。

## 正确更新data中的数组

* 使用变更数组的方法
  * push() pop() unshift() shift()
  * reverse() sort() splice()

* 替换整个数组 `this.arr = newArr `

* 非法的更改：
  * 使用index更改数组元素，如 `this.arr[0] = newItem`;使用this.$set(this.arr, 0, newItem)纠正；
  * 使用length修改数组长度,如 `this.arr.lengt = 0`;使用splice纠正；
  
## 正确更新data中的对象属性

1. 因为vue2使用 Object.defineProperty 劫持对象属性的方式完成数据监听。
2. 所以动态往对象添加或删除属性，需要用vm.$set、vm.$delete方法刷新劫持属性，才能使新增的对象属性才具有响应式。
3. vue3使用 proxy的方式监听整个对象，甚至可以监听到属性的增删。

## 列表渲染的细节
### 列表渲染要指定唯一的key
key的作用是能让vue以更小的遍历代价更新视图。

### v-for 和 v-if 可以同时在一个元素上使用，但不推荐这么做。
```html
<li v-for="user in users" v-if="user.isActive"></li>
```
* v-for的优先级比v-if高，所以，v-if会忽略渲染部分li。
* 可以通过computed 配合 filter过滤出必须显示的li，这样遍历更高效。

## 混入

1. 混入是vue复用逻辑的手段之一。
2. 如果组件间需要共享一份选项时（如data，method，computed等)，可使用mixin混入一份配置。
3. 混入分为全局混入和组件内混入两种方式。
4. 必须小心进行全局混入，因为这样每一个组件中都会混入了选项，包括第三方的组件。
5. 混入的选项与组件内的选项将会合并：
  * data选项发生冲突时，以组件内的data优先。
  * methods、components、directives等冲突时，以组件内的优先。
  * 同名钩子都会触发，且混入的钩子优先触发
  * watch相同的属性时，混入的watch先触发
  * 可以在vue的全局配置中配置自定义的混入策略

## filter

* filter通常用于一些常见的文本格式化，如单位、前缀、后缀等。
* filter跟computed虽然很像，他们都接收输入以及参数，且必须返回一个结果。
* 但是filter的计算不依赖任何响应式数据，且没有缓存机制。
* filter作为一种纯函数使用，而computed以值的形式存在，而且还有set方法。
* filter可以全局注册和局部注册。

## 组件间的传参

### 父子组件传参

1. 父组件通过props向子组件传参。
3. 通过 自定义事件 和 $emit，可以完成子组件向父组件传参。
4. 非标准的做法还有，向子组件传递一个回调函数，向子组件传递对象和数组等。

### 兄弟组件传参
简单情况下，可以将数据管理的工作提升到兄弟组件的父级组件进行，然后为各个兄弟组件分发数据。

### 多层嵌套组件传参
1. 在顶层组件中使用provide，子组件中使用inject可以完成组件的跨级通信。但这样底层的兄弟组件不好通信。
2. 此时多个组件间可以维护一个订阅发布模式的eventBus，进行通信。这种处理方式在组件库开发中是常见的。
3. 更复杂的业务数据维护，多个组件依赖共同状态，且多个组件具有共同改变状态的行为时，用vuex。

### 更多野路子
1. 在组件内使用$root、$parent、$children等方式进行组件间通信
2. 不推荐这么做，这样组件太耦合。


## vm.$refs

* ref注册在dom元素上，`this.$refs.xxx`获取的是dom元素。
* ref注册在组件上,`this.$refs.xxx`获取的是组件实例。
* ref注册在v-for的元素上，`this.$refs.xxx`获取的是一个dom数组或组件数组。

## vm.$parent
获取该组件的父组件实例

## vm.$children
获取该组件的子组件数组

## vm.$root
获取组件的根组件实例

## props
1. prop的验证类型有String、Number、Boolean、Array、Object、Date、Function、Symbol,此外还可以是一个自定义的构造函数，如
```js
function Personnel(name,age){
    this.name = name;
    this.age = age;
}
export default {
    props:{
        wokrer:Personnel
    }
}
```
2. 多个验证类型使用`[String, Number]`的形式，Object和Array的默认值使用工厂函数返回。

3. props必须是单向传递的，即组件的props更新会影响子级，子组件不能改变prop；否则多个子组件都能在其内部更新父组件的数据，会导致数据流变得混乱。

4. 子组件修改prop时，vue会发出警告，但不会报错。所以props对象或数组时尽量进行深复制。使用props数据时最好使用计算属性返回一下再使用。

## scoped
* vue通过在DOM结构以及css样式上加上唯一的标记`data-v-xxxxxx`，保证唯一，达到组件内的样式私有化，不污染全局的作用。
* 但这样做有个弊端，属性选择器提升了该组件样式的权重，使得难以在组件外修改这个组件样式，尤其在组件库开发这对于组件的使用者来说是致命的。他们只能通过提升自己样式的权重来覆盖组件样式（如叠加选择器，使用!import、使用deep等），如
```css
.father-div /deep/ .child-div{color:red;}
// 会编译成
.father-div[data-v-b45036b2] .child-div{color:red;}
```

## 渲染时保留模板的html注释
```html
<template comments> ... <template>
```

## 重置data
```js
Object.assign(this.$data, this.$options.data())
```

## created 和 mounted中请求数据的区别
从父组件先创建（等待子组件完成挂载后）后挂载的角度看，在created上发起请求确实抢先了一步时机，节省了等待子组件挂载的时间。


## 组件

### 组件命名规范
1. name和标签名使用 kebab-case
2. 组件变量名使用大写驼峰式 KebabCase

### 组件名的作用
1. 递归组件时，组件调用自身使用；
2. 用is特殊特性和component内置组件标签时使用；
3. keep-alive内置组件标签中include 和exclude属性中使用。

### 递归组件
1. 递归组件是组件调用组件自身，
2. 场景：多级菜单，展示树状结构数据等。
3. 递归组件必须配合v-if终止递归，否则会死循环。

## slot
1. 插槽主要应用在复用度较高的组件上，为组件提供嵌入功能模块的功能。
2. 它很像props，但传入的不是属性，而是结构。
3. 站在props的角度来说，props解决了数据上的耦合问题。
4. slot则是解决结构上耦合的问题。

## 过渡动画的实现方式

1. 指定过渡类名
  * v-enter
  * v-enter-active
  * v-enter-to
  * v-leave
  * v-leave-active
  * v-leave-to

2. 使用js钩子
  * @before-enter
  * @enter
  * @after-enter
  * @enter-cancelled
  * @before-leave
  * @leave
  * @after
  * @leave-cancelled

## 捕获组件的错误信息
1. 使用errorCapture 组件钩子，可以捕获组件及子组件的错误信息。
2. 使用 Vue.config.errorHandler, 全局捕获vue实例的错误。

## Vue.observable
1. 他对应vue3 就是 reactive方法，可以让一个对象具有相应性。
2. 响应式数据可以作为状态分发给组件使用，跟一个简版的vuex一样。
3. 实际上在组件实例化的时候data都使用了这个方法从而成为响应式数据。

## 如何设置favicon
1. 静态配置 `<link rel="icon" href="<%= BASE_URL %>favicon.ico">`
2. 动态配置 
```js
// <link rel="icon" type="image/png" href="">
import browserImg from 'images/kong.png';//为favicon的默认图片
const imgurl ='后端传回来的favicon.ico的线上地址'
let link = document.querySelector('link[type="image/png"]');
if (imgurl) {
    link.setAttribute('href', imgurl);
} else {
    link.setAttribute('href', browserImg);
}
```