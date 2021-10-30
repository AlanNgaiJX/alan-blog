(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{540:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"vue的兼容情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的兼容情况"}},[t._v("#")]),t._v(" vue的兼容情况")]),t._v(" "),s("ul",[s("li",[t._v("vue2不兼容ie8以下浏览器，因为vue的响应式原理基于es5的Object.defineProperty。")]),t._v(" "),s("li",[t._v("vue3使用了 es6的 proxy ，全面抛弃ie。")])]),t._v(" "),s("h2",{attrs:{id:"vue的生命周期与简单介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期与简单介绍"}},[t._v("#")]),t._v(" vue的生命周期与简单介绍")]),t._v(" "),s("ol",[s("li",[t._v("beforeCreate：实例创建前被调用；")]),t._v(" "),s("li",[t._v("created：实例创建后被调用，完成数据观测，属性和方法的运算，watch/event事件回调，模板渲染成html前（vm.$el未定义）故数据初始化最好在这阶段完成；")]),t._v(" "),s("li",[t._v("beforeMount：在$el挂载前被调用，相关的 render 函数首次被调用，期间将模块渲染成html,此时vm.$el还是未定义；")]),t._v(" "),s("li",[t._v("mounted：在$el挂载后被调用，此时vm.$el可以调用，不能保证所有的子组件都挂载，要等视图全部更新完毕用vm.$nextTick();")]),t._v(" "),s("li",[t._v("beforeUpdate：数据更新时调用;")]),t._v(" "),s("li",[t._v("updated：数据更新后调用;")]),t._v(" "),s("li",[t._v("activated："),s("keep-alive"),t._v("包裹的组件激活时调用；")],1),t._v(" "),s("li",[t._v("deactivated:"),s("keep-alive"),t._v("包裹的组件离开时调用；")],1),t._v(" "),s("li",[t._v("beforeDestroy:实例销毁之前调用,此时实例仍然完全可用；")]),t._v(" "),s("li",[t._v("destroyed：实例销毁之后调用,此时实例的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。")])]),t._v(" "),s("h2",{attrs:{id:"生命周期的实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期的实例方法"}},[t._v("#")]),t._v(" 生命周期的实例方法")]),t._v(" "),s("ol",[s("li",[t._v("vm.$mount()，主动挂载vue实例到某个dom节点。")]),t._v(" "),s("li",[t._v("vm.$forceUpdate()，强制Vue实例更新渲染，仅仅会影响本组件进入更新阶段。")]),t._v(" "),s("li",[t._v("vm.$nextTick()，指定一个回调，在视图全部更新后执行回调，一般用来获取异步更新的dom节点。")]),t._v(" "),s("li",[t._v("vm.$destory()，销毁一个实例，解除该实例与其他实例的链接，接触其时间监听。但要配合 dom 的 remove方法才能清除该实例所挂载的节点。")])]),t._v(" "),s("h2",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),s("ol",[s("li",[t._v("v-show，")])]),t._v(" "),s("ul",[s("li",[t._v("切换元素的 display 属性。")]),t._v(" "),s("li",[t._v("不可用在 template 上。")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("v-if")])]),t._v(" "),s("ul",[s("li",[t._v("通过销毁和初始化的方式，控制组件和节点的显示。")]),t._v(" "),s("li",[t._v("不适合用在频繁的显示和隐藏场景")]),t._v(" "),s("li",[t._v("适合用在异步渲染的组件上")]),t._v(" "),s("li",[t._v("可以用在template上")]),t._v(" "),s("li",[t._v("对应还有 v-eles-if、v-else 指令")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("v-for")])]),t._v(" "),s("ul",[s("li",[t._v("进行列表渲染，必须为每个单元设置唯一的key")]),t._v(" "),s("li",[t._v("可以渲染 array、object、number、string等数据结构")]),t._v(" "),s("li",[t._v("列表渲染对象时，是按Object.keys()的顺序的遍历，如果需要保证顺序需要转为array或者map数据结构。")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("v-on")])]),t._v(" "),s("ul",[s("li",[t._v("用在 html 节点上，监听原生的事件")]),t._v(" "),s("li",[t._v("用在组件上，监听组件的自定义事件")]),t._v(" "),s("li",[t._v("用在组件上，添加 .native 修饰符，可监听组件根元素的原始事件")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("myVue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.native")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("myVue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v(".stop，对应 e.stopPropagation，阻止冒泡")]),t._v(" "),s("li",[t._v(".prevent，对应 e.preventDefault，阻止默认事件")]),t._v(" "),s("li",[t._v(".self，对应判断e.target是本身，仅点击本身的元素才触发")]),t._v(" "),s("li",[t._v(".capture，在事件capture阶段触发")]),t._v(" "),s("li",[t._v(".passive，在事件冒泡阶段触发")]),t._v(" "),s("li",[t._v(".once，仅触发一次")]),t._v(" "),s("li",[t._v("注!意!修饰符的顺序：@click.prevent.self 会阻止包括子节点的默认时间，而 @click.self.prevent 只会阻止元素自身的默认事件。")]),t._v(" "),s("li",[t._v("event对象默认在第一个参数传入，也可以指定一个位置"),s("code",[t._v('@click="handleOpen(0, $event)"')])]),t._v(" "),s("li",[t._v("v-on可以绑定多个事件，但只支持同样的修饰符。")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("v-bind 动态绑定属性")])]),t._v(" "),s("ul",[s("li",[t._v(".sync可以进行属性的双向绑定")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("comp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("title.sync")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doc.title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("comp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update:title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("v-model")])]),t._v(" "),s("ul",[s("li",[t._v("实现双向数据绑定")]),t._v(" "),s("li",[t._v("可以绑定在组件上，组件需配合作出这样的改造")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  prop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checked'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nprops"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  checked"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更新数据的方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ul",[s("li",[t._v(".lazy 修饰符，绑定的事件从 inpu 改为change，即失去焦点或按下回车键时才触发。")]),t._v(" "),s("li",[t._v(".number，保证用户输入的是数字")]),t._v(" "),s("li",[t._v(".trim，字符串trim")]),t._v(" "),s("li",[t._v("v-model其实是，"),s("code",[t._v('<my-component :value="value" @input="value=$event"></my-component>')]),t._v("的语法糖。")])]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[s("p",[t._v("v-text，输出字符串")])]),t._v(" "),s("li",[s("p",[t._v("v-html")])])]),t._v(" "),s("ul",[s("li",[t._v("输出 html 内容")]),t._v(" "),s("li",[t._v("有 XSS 攻击风险，小心使用，不要显示任何用户提交的内容。")]),t._v(" "),s("li",[t._v("XSS攻击是攻击客户端的方式，对客户端实施串改和偷取，传统有偷cookie，偷输入内容等。")]),t._v(" "),s("li",[t._v("evel、postMessage等都有xss攻击隐患。")])]),t._v(" "),s("ol",{attrs:{start:"9"}},[s("li",[s("p",[t._v("v-once，只渲染组件一次，随后与diff算法无缘，不发生更新，是一种优化手段。")])]),t._v(" "),s("li",[s("p",[t._v("v-cloak")])])]),t._v(" "),s("ul",[s("li",[t._v("在js解析特别慢的时候，页面模板上可能会出现vue的变量名，如'"+t._s(t.userName)+"'")]),t._v(" "),s("li",[t._v("配合css可以不显示变量名，[ v-clock ]{ display: none };")])]),t._v(" "),s("ol",{attrs:{start:"11"}},[s("li",[s("p",[t._v("v-pre，指定这个元素树跳过编译环节，如果这个树很大是值得这么做的，可以加快编译速度。")])]),t._v(" "),s("li",[s("p",[t._v("v-slot")])])]),t._v(" "),s("ul",[s("li",[t._v("插槽命令，用在 template 上")]),t._v(" "),s("li",[t._v('v-slot:插槽名="props"')])]),t._v(" "),s("h2",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),s("p",[t._v("为什么组件中的data必须用函数返回对象？\n答：因为对象是引用类型，如果data是一个对象，组件复用时不同的实例都指向了同一个data对象，data容易被串改。在实例化组件时，使用一个工厂函数返回data对象就不会出现这个问题。")]),t._v(" "),s("h2",{attrs:{id:"watch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),s("ol",[s("li",[t._v("watch用来监听数据变化（来源于data 或 computed的属性 ）")]),t._v(" "),s("li",[t._v("'a.b' 监听对象的某个属性")]),t._v(" "),s("li",[t._v("deep 深度监听对象，小心使用，万一对象太大，且更新频繁，会很消耗性能")]),t._v(" "),s("li",[t._v("immediate 侦听开始即调用")])]),t._v(" "),s("h2",{attrs:{id:"computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),s("ul",[s("li",[t._v("计算属性主要解决了状态派生的问题，如果在模板中派生状态会变得非常恶心。")]),t._v(" "),s("li",[t._v("计算属性基于响应式依赖进行缓存，只有相关依赖发生改变才会重新计算值，非常节省算力。")]),t._v(" "),s("li",[t._v("get在读取数据时触发，也是有缓存的。set在设置数据时触发可以配合v-model使用。")]),t._v(" "),s("li",[t._v("computed、methods、filter那些都不能是箭头函数，这样this是undefind。")]),t._v(" "),s("li",[t._v("computed可以接收参数，做法是返回一个箭头函数")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("computed 和 watch的 区别\n"),s("ul",[s("li",[t._v("watch是监听数据变化，并触发响应的逻辑。computed是派生一个数据状态。")]),t._v(" "),s("li",[t._v("watch没有缓存，computed有缓存。")]),t._v(" "),s("li",[t._v("computed可以传入参数，watch不能。")])])]),t._v(" "),s("li",[t._v("computed 和 method的区别\n"),s("ul",[s("li",[t._v("计算属性基于响应式依赖进行更新，是有缓存的，而method随着组件重新渲染时都会再次执行函数，没有缓存。")])])])]),t._v(" "),s("h2",{attrs:{id:"动态绑定class的四种形态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态绑定class的四种形态"}},[t._v("#")]),t._v(" 动态绑定class的四种形态")]),t._v(" "),s("ul",[s("li",[t._v("对象形态，"),s("code",[t._v(":class=\"{ active: actived , 'active-click': clicked && actived }\"")])]),t._v(" "),s("li",[t._v("数组形态，"),s("code",[t._v(":class=\"[ actived ? 'active': '', clicked && actived ? 'active-click' : '' ]\"")])]),t._v(" "),s("li",[t._v("数组+对象形态，"),s("code",[t._v(':class="[{active: actived}, { active-click: clicked && actived }]"')])]),t._v(" "),s("li",[t._v("计算属性")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//`:class="classOject "`')]),t._v("\ncomputed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clasObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("actived "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active-click'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clicked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("actived\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ul",[s("li",[t._v("同理styles也是差不多，但要注意属性驼峰命名。")])]),t._v(" "),s("h2",{attrs:{id:"正确更新data中的数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正确更新data中的数组"}},[t._v("#")]),t._v(" 正确更新data中的数组")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用变更数组的方法")]),t._v(" "),s("ul",[s("li",[t._v("push() pop() unshift() shift()")]),t._v(" "),s("li",[t._v("reverse() sort() splice()")])])]),t._v(" "),s("li",[s("p",[t._v("替换整个数组 "),s("code",[t._v("this.arr = newArr")])])]),t._v(" "),s("li",[s("p",[t._v("非法的更改：")]),t._v(" "),s("ul",[s("li",[t._v("使用index更改数组元素，如 "),s("code",[t._v("this.arr[0] = newItem")]),t._v(";使用this.$set(this.arr, 0, newItem)纠正；")]),t._v(" "),s("li",[t._v("使用length修改数组长度,如 "),s("code",[t._v("this.arr.lengt = 0")]),t._v(";使用splice纠正；")])])])]),t._v(" "),s("h2",{attrs:{id:"正确更新data中的对象属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正确更新data中的对象属性"}},[t._v("#")]),t._v(" 正确更新data中的对象属性")]),t._v(" "),s("ol",[s("li",[t._v("因为vue2使用 Object.defineProperty 劫持对象属性的方式完成数据监听。")]),t._v(" "),s("li",[t._v("所以动态往对象添加或删除属性，需要用vm.$set、vm.$delete方法刷新劫持属性，才能使新增的对象属性才具有响应式。")]),t._v(" "),s("li",[t._v("vue3使用 proxy的方式监听整个对象，甚至可以监听到属性的增删。")])]),t._v(" "),s("h2",{attrs:{id:"列表渲染的细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染的细节"}},[t._v("#")]),t._v(" 列表渲染的细节")]),t._v(" "),s("h3",{attrs:{id:"列表渲染要指定唯一的key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染要指定唯一的key"}},[t._v("#")]),t._v(" 列表渲染要指定唯一的key")]),t._v(" "),s("p",[t._v("key的作用是能让vue以更小的遍历代价更新视图。")]),t._v(" "),s("h3",{attrs:{id:"v-for-和-v-if-可以同时在一个元素上使用-但不推荐这么做。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-for-和-v-if-可以同时在一个元素上使用-但不推荐这么做。"}},[t._v("#")]),t._v(" v-for 和 v-if 可以同时在一个元素上使用，但不推荐这么做。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user in users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user.isActive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("v-for的优先级比v-if高，所以，v-if会忽略渲染部分li。")]),t._v(" "),s("li",[t._v("可以通过computed 配合 filter过滤出必须显示的li，这样遍历更高效。")])]),t._v(" "),s("h2",{attrs:{id:"混入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混入"}},[t._v("#")]),t._v(" 混入")]),t._v(" "),s("ol",[s("li",[t._v("混入是vue复用逻辑的手段之一。")]),t._v(" "),s("li",[t._v("如果组件间需要共享一份选项时（如data，method，computed等)，可使用mixin混入一份配置。")]),t._v(" "),s("li",[t._v("混入分为全局混入和组件内混入两种方式。")]),t._v(" "),s("li",[t._v("必须小心进行全局混入，因为这样每一个组件中都会混入了选项，包括第三方的组件。")]),t._v(" "),s("li",[t._v("混入的选项与组件内的选项将会合并：")])]),t._v(" "),s("ul",[s("li",[t._v("data选项发生冲突时，以组件内的data优先。")]),t._v(" "),s("li",[t._v("methods、components、directives等冲突时，以组件内的优先。")]),t._v(" "),s("li",[t._v("同名钩子都会触发，且混入的钩子优先触发")]),t._v(" "),s("li",[t._v("watch相同的属性时，混入的watch先触发")]),t._v(" "),s("li",[t._v("可以在vue的全局配置中配置自定义的混入策略")])]),t._v(" "),s("h2",{attrs:{id:"filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" filter")]),t._v(" "),s("ul",[s("li",[t._v("filter通常用于一些常见的文本格式化，如单位、前缀、后缀等。")]),t._v(" "),s("li",[t._v("filter跟computed虽然很像，他们都接收输入以及参数，且必须返回一个结果。")]),t._v(" "),s("li",[t._v("但是filter的计算不依赖任何响应式数据，且没有缓存机制。")]),t._v(" "),s("li",[t._v("filter作为一种纯函数使用，而computed以值的形式存在，而且还有set方法。")]),t._v(" "),s("li",[t._v("filter可以全局注册和局部注册。")])]),t._v(" "),s("h2",{attrs:{id:"组件间的传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件间的传参"}},[t._v("#")]),t._v(" 组件间的传参")]),t._v(" "),s("h3",{attrs:{id:"父子组件传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子组件传参"}},[t._v("#")]),t._v(" 父子组件传参")]),t._v(" "),s("ol",[s("li",[t._v("父组件通过props向子组件传参。")]),t._v(" "),s("li",[t._v("通过 自定义事件 和 $emit，可以完成子组件向父组件传参。")]),t._v(" "),s("li",[t._v("非标准的做法还有，向子组件传递一个回调函数，向子组件传递对象和数组等。")])]),t._v(" "),s("h3",{attrs:{id:"兄弟组件传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兄弟组件传参"}},[t._v("#")]),t._v(" 兄弟组件传参")]),t._v(" "),s("p",[t._v("简单情况下，可以将数据管理的工作提升到兄弟组件的父级组件进行，然后为各个兄弟组件分发数据。")]),t._v(" "),s("h3",{attrs:{id:"多层嵌套组件传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多层嵌套组件传参"}},[t._v("#")]),t._v(" 多层嵌套组件传参")]),t._v(" "),s("ol",[s("li",[t._v("在顶层组件中使用provide，子组件中使用inject可以完成组件的跨级通信。但这样底层的兄弟组件不好通信。")]),t._v(" "),s("li",[t._v("此时多个组件间可以维护一个订阅发布模式的eventBus，进行通信。这种处理方式在组件库开发中是常见的。")]),t._v(" "),s("li",[t._v("更复杂的业务数据维护，多个组件依赖共同状态，且多个组件具有共同改变状态的行为时，用vuex。")])]),t._v(" "),s("h3",{attrs:{id:"更多野路子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多野路子"}},[t._v("#")]),t._v(" 更多野路子")]),t._v(" "),s("ol",[s("li",[t._v("在组件内使用$root、$parent、$children等方式进行组件间通信")]),t._v(" "),s("li",[t._v("不推荐这么做，这样组件太耦合。")])]),t._v(" "),s("h2",{attrs:{id:"vm-refs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-refs"}},[t._v("#")]),t._v(" vm.$refs")]),t._v(" "),s("ul",[s("li",[t._v("ref注册在dom元素上，"),s("code",[t._v("this.$refs.xxx")]),t._v("获取的是dom元素。")]),t._v(" "),s("li",[t._v("ref注册在组件上,"),s("code",[t._v("this.$refs.xxx")]),t._v("获取的是组件实例。")]),t._v(" "),s("li",[t._v("ref注册在v-for的元素上，"),s("code",[t._v("this.$refs.xxx")]),t._v("获取的是一个dom数组或组件数组。")])]),t._v(" "),s("h2",{attrs:{id:"vm-parent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-parent"}},[t._v("#")]),t._v(" vm.$parent")]),t._v(" "),s("p",[t._v("获取该组件的父组件实例")]),t._v(" "),s("h2",{attrs:{id:"vm-children"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-children"}},[t._v("#")]),t._v(" vm.$children")]),t._v(" "),s("p",[t._v("获取该组件的子组件数组")]),t._v(" "),s("h2",{attrs:{id:"vm-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-root"}},[t._v("#")]),t._v(" vm.$root")]),t._v(" "),s("p",[t._v("获取组件的根组件实例")]),t._v(" "),s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),s("ol",[s("li",[t._v("prop的验证类型有String、Number、Boolean、Array、Object、Date、Function、Symbol,此外还可以是一个自定义的构造函数，如")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Personnel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        wokrer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Personnel\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("多个验证类型使用"),s("code",[t._v("[String, Number]")]),t._v("的形式，Object和Array的默认值使用工厂函数返回。")])]),t._v(" "),s("li",[s("p",[t._v("props必须是单向传递的，即组件的props更新会影响子级，子组件不能改变prop；否则多个子组件都能在其内部更新父组件的数据，会导致数据流变得混乱。")])]),t._v(" "),s("li",[s("p",[t._v("子组件修改prop时，vue会发出警告，但不会报错。所以props对象或数组时尽量进行深复制。使用props数据时最好使用计算属性返回一下再使用。")])])]),t._v(" "),s("h2",{attrs:{id:"scoped"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scoped"}},[t._v("#")]),t._v(" scoped")]),t._v(" "),s("ul",[s("li",[t._v("vue通过在DOM结构以及css样式上加上唯一的标记"),s("code",[t._v("data-v-xxxxxx")]),t._v("，保证唯一，达到组件内的样式私有化，不污染全局的作用。")]),t._v(" "),s("li",[t._v("但这样做有个弊端，属性选择器提升了该组件样式的权重，使得难以在组件外修改这个组件样式，尤其在组件库开发这对于组件的使用者来说是致命的。他们只能通过提升自己样式的权重来覆盖组件样式（如叠加选择器，使用!import、使用deep等），如")])]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".father-div /deep/ .child-div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 会编译成\n.father-div[data-v-b45036b2] .child-div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"渲染时保留模板的html注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染时保留模板的html注释"}},[t._v("#")]),t._v(" 渲染时保留模板的html注释")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("comments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"重置data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置data"}},[t._v("#")]),t._v(" 重置data")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"created-和-mounted中请求数据的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#created-和-mounted中请求数据的区别"}},[t._v("#")]),t._v(" created 和 mounted中请求数据的区别")]),t._v(" "),s("p",[t._v("从父组件先创建（等待子组件完成挂载后）后挂载的角度看，在created上发起请求确实抢先了一步时机，节省了等待子组件挂载的时间。")]),t._v(" "),s("h2",{attrs:{id:"组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),s("h3",{attrs:{id:"组件命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件命名规范"}},[t._v("#")]),t._v(" 组件命名规范")]),t._v(" "),s("ol",[s("li",[t._v("name和标签名使用 kebab-case")]),t._v(" "),s("li",[t._v("组件变量名使用大写驼峰式 KebabCase")])]),t._v(" "),s("h3",{attrs:{id:"组件名的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件名的作用"}},[t._v("#")]),t._v(" 组件名的作用")]),t._v(" "),s("ol",[s("li",[t._v("递归组件时，组件调用自身使用；")]),t._v(" "),s("li",[t._v("用is特殊特性和component内置组件标签时使用；")]),t._v(" "),s("li",[t._v("keep-alive内置组件标签中include 和exclude属性中使用。")])]),t._v(" "),s("h3",{attrs:{id:"递归组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归组件"}},[t._v("#")]),t._v(" 递归组件")]),t._v(" "),s("ol",[s("li",[t._v("递归组件是组件调用组件自身，")]),t._v(" "),s("li",[t._v("场景：多级菜单，展示树状结构数据等。")]),t._v(" "),s("li",[t._v("递归组件必须配合v-if终止递归，否则会死循环。")])]),t._v(" "),s("h2",{attrs:{id:"slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" slot")]),t._v(" "),s("ol",[s("li",[t._v("插槽主要应用在复用度较高的组件上，为组件提供嵌入功能模块的功能。")]),t._v(" "),s("li",[t._v("它很像props，但传入的不是属性，而是结构。")]),t._v(" "),s("li",[t._v("站在props的角度来说，props解决了数据上的耦合问题。")]),t._v(" "),s("li",[t._v("slot则是解决结构上耦合的问题。")])]),t._v(" "),s("h2",{attrs:{id:"过渡动画的实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过渡动画的实现方式"}},[t._v("#")]),t._v(" 过渡动画的实现方式")]),t._v(" "),s("ol",[s("li",[t._v("指定过渡类名")])]),t._v(" "),s("ul",[s("li",[t._v("v-enter")]),t._v(" "),s("li",[t._v("v-enter-active")]),t._v(" "),s("li",[t._v("v-enter-to")]),t._v(" "),s("li",[t._v("v-leave")]),t._v(" "),s("li",[t._v("v-leave-active")]),t._v(" "),s("li",[t._v("v-leave-to")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("使用js钩子")])]),t._v(" "),s("ul",[s("li",[t._v("@before-enter")]),t._v(" "),s("li",[t._v("@enter")]),t._v(" "),s("li",[t._v("@after-enter")]),t._v(" "),s("li",[t._v("@enter-cancelled")]),t._v(" "),s("li",[t._v("@before-leave")]),t._v(" "),s("li",[t._v("@leave")]),t._v(" "),s("li",[t._v("@after")]),t._v(" "),s("li",[t._v("@leave-cancelled")])]),t._v(" "),s("h2",{attrs:{id:"捕获组件的错误信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#捕获组件的错误信息"}},[t._v("#")]),t._v(" 捕获组件的错误信息")]),t._v(" "),s("ol",[s("li",[t._v("使用errorCapture 组件钩子，可以捕获组件及子组件的错误信息。")]),t._v(" "),s("li",[t._v("使用 Vue.config.errorHandler, 全局捕获vue实例的错误。")])]),t._v(" "),s("h2",{attrs:{id:"vue-observable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-observable"}},[t._v("#")]),t._v(" Vue.observable")]),t._v(" "),s("ol",[s("li",[t._v("他对应vue3 就是 reactive方法，可以让一个对象具有相应性。")]),t._v(" "),s("li",[t._v("响应式数据可以作为状态分发给组件使用，跟一个简版的vuex一样。")]),t._v(" "),s("li",[t._v("实际上在组件实例化的时候data都使用了这个方法从而成为响应式数据。")])]),t._v(" "),s("h2",{attrs:{id:"如何设置favicon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何设置favicon"}},[t._v("#")]),t._v(" 如何设置favicon")]),t._v(" "),s("ol",[s("li",[t._v("静态配置 "),s("code",[t._v('<link rel="icon" href="<%= BASE_URL %>favicon.ico">')])]),t._v(" "),s("li",[t._v("动态配置")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <link rel="icon" type="image/png" href="">')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" browserImg "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/kong.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//为favicon的默认图片")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imgurl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'后端传回来的favicon.ico的线上地址'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" link "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link[type=\"image/png\"]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imgurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'href'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" imgurl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'href'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" browserImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);