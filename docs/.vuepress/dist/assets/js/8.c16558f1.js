(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{407:function(s,t,v){s.exports=v.p+"assets/img/d1.f7749874.jpeg"},408:function(s,t,v){s.exports=v.p+"assets/img/d2.ec2b68b3.jpeg"},409:function(s,t,v){s.exports=v.p+"assets/img/d3.d92b276e.jpeg"},467:function(s,t,v){"use strict";v.r(t);var _=v(26),r=Object(_.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h2",{attrs:{id:"进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[s._v("#")]),s._v(" 进程与线程")]),s._v(" "),_("p",[s._v("1.进程是应用程序的执行实例，是系统进行资源分配和调度的基本单位。启动一个进程，系统即为其分配私有的内存。\n2.线程是进程内的一些独立执行单元，一个进程的执行往往需要创建多个线程来共同工作。\n3.启动一个进程，系统即为其分配私有的内存，其多个线程间共享这块内存。\n4.线程是CPU的最小调度单元，多核CPU能完成多线程任务。\n5.JS是单线程执行的，web worker API提供多线程扩展。")]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"浏览器内核是多线程运行的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核是多线程运行的"}},[s._v("#")]),s._v(" 浏览器内核是多线程运行的")]),s._v(" "),_("p",[s._v("浏览器内核控制"),_("strong",[s._v("主线程")]),s._v("和"),_("strong",[s._v("分线程")]),s._v("相互配合工作。")]),s._v(" "),_("p",[_("strong",[s._v("（一）在主线程中运行的有")])]),s._v(" "),_("ul",[_("li",[s._v("js引擎线程：负责js编译与运行")]),s._v(" "),_("li",[s._v("文档解析线程：负责解析html和css文本")]),s._v(" "),_("li",[s._v("DOM/CSSOM线程：负责dom/css在内存中的相关处理")]),s._v(" "),_("li",[s._v("GUI渲染线程：负责页面布局和渲染。发生回流和重绘时该线程执行，JS引擎线程执行时该线程暂时会被挂起（互斥关系，JS执行时间过长会导致页面渲染不连贯）。")])]),s._v(" "),_("p",[_("strong",[s._v("（二）在分线程中运行的有")]),s._v("：")]),s._v(" "),_("ul",[_("li",[s._v("定时器触发线程")]),s._v(" "),_("li",[s._v("事件触发线程")]),s._v(" "),_("li",[s._v("http异步请求线程")])]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"浏览器的渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染过程"}},[s._v("#")]),s._v(" 浏览器的渲染过程")]),s._v(" "),_("img",{staticStyle:{display:"block"},attrs:{src:v(407),width:"600"}}),s._v(" "),_("p",[s._v("1.解析HTML，生成DOM树，解析CSS，生成CSSOM树\n将DOM树和CSSOM树结合，生成渲染树(Render Tree)（在此过程中，外部依赖的JS和CSS有可能会阻塞DOM的解析，后面有总结）（在解析期间如果遇到script标签，会阻塞DOM树的生成，立即下载并执行script，如果这个script标签前还有css，script的执行需要等待CSS下载并解析完成后才会执行）\n2.Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）\n3.Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素\n4.Display:将像素发送给GPU，展示在页面上。")]),s._v(" "),_("h3",{attrs:{id:"关于回流和重绘的优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于回流和重绘的优化"}},[s._v("#")]),s._v(" 关于回流和重绘的优化")]),s._v(" "),_("p",[s._v("回流也是有触发范围和程度的，浏览器会根据触发条件对渲染树的部分进行计算，并且回流必然会触发重绘。以下场景中会触发浏览器回流：")]),s._v(" "),_("ul",[_("li",[s._v("页面的首屏渲染。")]),s._v(" "),_("li",[s._v("当浏览器窗口尺寸改变。")]),s._v(" "),_("li",[s._v("添加或删除可见的元素。")]),s._v(" "),_("li",[s._v("元素尺寸发生改变（包括盒子模型中margin、padding、border、height、width等）")]),s._v(" "),_("li",[s._v("元素的位置发生变化（包括绝对定位的元素，但绝对定位的元素影响别的元素较小，回流程度也相对较小）")])]),s._v(" "),_("p",[s._v("回流和重绘频繁可能会造成卡帧问题，比较考验GPU性能。\n为此，浏览器通过队列化修改并批量执行的机制来优化体验：一些修改任务入列，当修改任务量达到某个阀值或到某一帧时，清空队列进行重绘。但是，当访问以下属性时会强制刷新一次队列以保证访问结果的正确性：")]),s._v(" "),_("ul",[_("li",[_("p",[s._v("offsetTop、offsetLeft、offsetWidth、offsetHeight")])]),s._v(" "),_("li",[_("p",[s._v("scrollTop、scrollLeft、scrollWidth、scrollHeight")])]),s._v(" "),_("li",[_("p",[s._v("clientTop、clientLeft、clientWidth、clientHeight")])]),s._v(" "),_("li",[_("p",[s._v("getComputedStyle()")])]),s._v(" "),_("li",[_("p",[s._v("getBoundingClientRect")])])]),s._v(" "),_("p",[s._v("详见：https://gist.github.com/paulirish/5d52fb081b3570c81e3a")]),s._v(" "),_("h4",{attrs:{id:"可以采用以下方法进行优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可以采用以下方法进行优化"}},[s._v("#")]),s._v(" 可以采用以下方法进行优化")]),s._v(" "),_("ul",[_("li",[s._v("避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性")]),s._v(" "),_("li",[s._v("当大批DOM元素需要进行修改时，应避免循环修改（一个个地改），可以考虑使用document fragment批量更新到DOM。")]),s._v(" "),_("li",[s._v("避免频繁访问元素的clientWidth、offsetLeft等属性，避免频繁强制刷新浏览器的优化队列，考虑把这些值缓存起来使用。")]),s._v(" "),_("li",[s._v("对于复杂动画，考虑使用绝对定位来减少对其他元素的布局影响，减少回流。")]),s._v(" "),_("li",[s._v("某些CSS属性的修改是不会引起回流的，非常节省性能。如transform、opacity、filters、Will-change等，例如使用transform代替使用绝对定位修改x,y性能会好些。")])]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"关于js和css阻塞浏览器渲染的总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于js和css阻塞浏览器渲染的总结"}},[s._v("#")]),s._v(" 关于JS和CSS阻塞浏览器渲染的总结")]),s._v(" "),_("img",{staticStyle:{display:"block"},attrs:{src:v(408),width:"600"}}),s._v(" "),_("ul",[_("li",[s._v("在文档解析的过程中，遇到外链js时会阻塞DOM的解析，下载并执行脚本后再继续DOM的解析；")]),s._v(" "),_("li",[s._v("浏览器在遇到script标签时会等待前面的css下载并解析完成，更新render树把前面已解析完的元素重新渲染一次，再执行js脚本，以保证js获取的DOM是最新的。")]),s._v(" "),_("li",[s._v("若在script之前还有外链css，js脚本会在css下载并解析完时才会执行。")]),s._v(" "),_("li",[s._v("外链css不阻塞DOM解析，但阻塞DOM渲染，如，在head中的外链css加载完成前，页面都是白屏的。")]),s._v(" "),_("li",[s._v("若一个js外链放在body的最前，且执行时间较长，阻塞了后面的DOM解析,也会造成白屏问题。")]),s._v(" "),_("li",[s._v("若html中顺序存在一个css外链和一个js外链，css的下载用时也会延迟js的执行从而阻塞了DOM解析。（可以使用defer标记解决）")]),s._v(" "),_("li",[s._v("浏览器并不是等待DOM树解析完成后才开始渲染的，而是会边解析边渲染，解析了哪部分就先渲染哪部分。")])]),s._v(" "),_("h3",{attrs:{id:"相关扩展-load和domcontentloaded事件的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关扩展-load和domcontentloaded事件的区别"}},[s._v("#")]),s._v(" 相关扩展，load和DOMContentLoaded事件的区别")]),s._v(" "),_("ul",[_("li",[s._v("DOMContentLoaded: 在 DOM 完成解析并且所有js同步代码都执行完毕后触发;")]),s._v(" "),_("li",[s._v("load: 当页面 DOM 结构中的 js、css、图片，以及 js 异步加载的 js、css 、图片都加载完成之后，触发load事件")])]),s._v(" "),_("h3",{attrs:{id:"相关扩展-defer和async标记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关扩展-defer和async标记"}},[s._v("#")]),s._v(" 相关扩展，defer和async标记")]),s._v(" "),_("ul",[_("li",[s._v("浏览器遇到script将会立即下载js脚本，下载完成后立即执行，下载过程和执行过程会阻塞DOM的解析。")]),s._v(" "),_("li",[s._v("浏览器遇到标记了defer的script将会立即下载js脚本，下载过程不会阻塞DOM的解析，在DOM完成解析，并在DOMContentLoad事件前（即DOM解析完成前）执行js脚本。（近似于把script放在body末执行）")]),s._v(" "),_("li",[s._v("浏览器遇到标记了async的script将会立即下载js脚本，下载过程不阻塞DOM解析，当下载完成后马上阻塞DOM解析，同步执行js脚本。")]),s._v(" "),_("li",[s._v("正常情况下把script放在body底部，那些不依赖首屏DOM的代码例如百度谷歌分析的库可以使用async标记。script标签需要放在元素之前又依赖首屏DOM的可以使用defer标记。")])]),s._v(" "),_("p",[s._v("小结：")]),s._v(" "),_("ul",[_("li",[_("p",[s._v("defer并行加载js文件，会按照页面上script标签的顺序执行。")])]),s._v(" "),_("li",[_("p",[s._v("async并行加载js文件，下载完成立即执行，不会按照页面上script标签的顺序执行。")])])]),s._v(" "),_("h3",{attrs:{id:"相关扩展-域名发散-和-域名收敛"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关扩展-域名发散-和-域名收敛"}},[s._v("#")]),s._v(" 相关扩展，域名发散 和 域名收敛")]),s._v(" "),_("p",[s._v("浏览器在下载js、css、图片等静态资源往往是并行下载的，而且设置有最大的并发量以及同个域名允许的并发量（一般是6，不同浏览器表现不同）。")]),s._v(" "),_("p",[_("strong",[s._v("域名发散")]),s._v("：为了充分利用浏览器的并发下载机制，取得最大的并行度加快对静态资源的加载，可以将pc端站点的静态资源分布在不同域名下存储。")]),s._v(" "),_("p",[_("strong",[s._v("域名收敛")]),s._v("：同样的机制在移动页面上并不适用，从多个域名中下载静态资源同时增加了DNS解析负担，在pc上DNS解析很快，但在2/3/4G移动网络中解析速度一般。因此需要减少域名存储资源。")]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"浏览器的事件处理机制-事件循环"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的事件处理机制-事件循环"}},[s._v("#")]),s._v(" 浏览器的事件处理机制（事件循环）")]),s._v(" "),_("img",{staticStyle:{display:"block"},attrs:{src:v(409),width:"600"}}),s._v(" "),_("ul",[_("li",[s._v("首先，主线程初始化代码，进行事件绑定，包括DOM事件绑定，计时器绑定，发送ajax请求等")]),s._v(" "),_("li",[s._v("然后，分线程监听事件，触发事件后把回调放入队列")]),s._v(" "),_("li",[s._v("最后，在队列中一个个取出回调函数放到主线程中执行")])]),s._v(" "),_("h3",{attrs:{id:"关于宏任务和微任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于宏任务和微任务"}},[s._v("#")]),s._v(" 关于宏任务和微任务")]),s._v(" "),_("ul",[_("li",[_("p",[s._v("事件队列中的任务划分有"),_("strong",[s._v("Macrotasks宏任务")]),s._v("和"),_("strong",[s._v("Microtasks微任务")]),s._v("两种。")])]),s._v(" "),_("li",[_("p",[s._v("在每一次事件循环中宏任务只会提取一个执行，而微任务会一直提取，直到微任务队列为空为止：")])])]),s._v(" "),_("p",[_("strong",[s._v("属macrotasks的API有：")])]),s._v(" "),_("ul",[_("li",[s._v("setTimeout")]),s._v(" "),_("li",[s._v("setInterval")]),s._v(" "),_("li",[s._v("setImmediate")]),s._v(" "),_("li",[s._v("I/0")]),s._v(" "),_("li",[s._v("UI rendering")])]),s._v(" "),_("p",[_("strong",[s._v("属microtasks的API有：")])]),s._v(" "),_("ul",[_("li",[s._v("process.nextTick")]),s._v(" "),_("li",[s._v("Promise")]),s._v(" "),_("li",[s._v("MutationObserver")])]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"定时器的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定时器的问题"}},[s._v("#")]),s._v(" 定时器的问题")]),s._v(" "),_("ul",[_("li",[s._v("定时器并不是真正完全定时的")]),s._v(" "),_("li",[s._v("如果在主线程执行了一个长时间的操作，将导致定时器延时处理（因为JS是单线程的）")])]),s._v(" "),_("hr"),s._v(" "),_("h2",{attrs:{id:"web-workers"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-workers"}},[s._v("#")]),s._v(" web Workers")]),s._v(" "),_("ul",[_("li",[s._v("可以让js在分线程执行一些\n"),_("ul",[_("li",[s._v("缺点：慢、兼容性差、又不能操作DOM更新界面，不能跨域加载js")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);