---
title: 浅析浏览器内核的运行
sidebarDepth: 2
---

## 进程与线程

1. 进程是应用程序的执行实例，是系统进行资源分配和调度的基本单位。启动一个进程，系统即为其分配私有的内存。
2. 线程是进程内的一些独立执行单元，一个进程的执行往往需要创建多个线程来共同工作。
3. 启动一个进程，系统即为其分配私有的内存，其多个线程间共享这块内存。
4. 线程是CPU的最小调度单元，多核CPU能完成多线程任务。
5. JS是单线程执行的，web worker API提供多线程扩展。

* * *


## 浏览器内核是多线程运行的
浏览器内核控制**主线程**和**分线程**相互配合工作。

**（一）在主线程中运行的有**

* js引擎线程：负责js编译与运行
* 文档解析线程：负责解析html和css文本
* DOM/CSSOM线程：负责dom/css在内存中的相关处理
* GUI渲染线程：负责页面布局和渲染。发生回流和重绘时该线程执行，JS引擎线程执行时该线程暂时会被挂起（互斥关系，JS执行时间过长会导致页面渲染不连贯）。

**（二）在分线程中运行的有**：
* 定时器触发线程
* 事件触发线程
* http异步请求线程

* * *


## 浏览器的渲染过程
<img src="~@blogImages/d1.jpeg" width="600" style="display: block;"/>

1. 解析HTML，生成DOM树，解析CSS，生成CSSOM树
将DOM树和CSSOM树结合，生成渲染树(Render Tree)（在此过程中，外部依赖的JS和CSS有可能会阻塞DOM的解析，后面有总结）（在解析期间如果遇到script标签，会阻塞DOM树的生成，立即下载并执行script，如果这个script标签前还有css，script的执行需要等待CSS下载并解析完成后才会执行）
2. Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
3. Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素
4. Display:将像素发送给GPU，展示在页面上。

### 关于回流和重绘的优化
回流也是有触发范围和程度的，浏览器会根据触发条件对渲染树的部分进行计算，并且回流必然会触发重绘。以下场景中会触发浏览器回流：

* 页面的首屏渲染。
* 当浏览器窗口尺寸改变。
* 添加或删除可见的元素。
* 元素尺寸发生改变（包括盒子模型中margin、padding、border、height、width等）
* 元素的位置发生变化（包括绝对定位的元素，但绝对定位的元素影响别的元素较小，回流程度也相对较小）

回流和重绘频繁可能会造成卡帧问题，比较考验GPU性能。
为此，浏览器通过队列化修改并批量执行的机制来优化体验：一些修改任务入列，当修改任务量达到某个阀值或到某一帧时，清空队列进行重绘。但是，当访问以下属性时会强制刷新一次队列以保证访问结果的正确性：

* offsetTop、offsetLeft、offsetWidth、offsetHeight

* scrollTop、scrollLeft、scrollWidth、scrollHeight

* clientTop、clientLeft、clientWidth、clientHeight

* getComputedStyle()

* getBoundingClientRect

详见：https://gist.github.com/paulirish/5d52fb081b3570c81e3a

#### 可以采用以下方法进行优化

* 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性
* 当大批DOM元素需要进行修改时，应避免循环修改（一个个地改），可以考虑使用document fragment批量更新到DOM。
* 避免频繁访问元素的clientWidth、offsetLeft等属性，避免频繁强制刷新浏览器的优化队列，考虑把这些值缓存起来使用。
* 对于复杂动画，考虑使用绝对定位来减少对其他元素的布局影响，减少回流。
* 某些CSS属性的修改是不会引起回流的，非常节省性能。如transform、opacity、filters、Will-change等，例如使用transform代替使用绝对定位修改x,y性能会好些。

* * *
## 关于JS和CSS阻塞浏览器渲染的总结
<img src="~@blogImages/d2.jpeg" width="600" style="display: block;"/>

### 规律
* 在文档解析的过程中，遇到外链js时会阻塞DOM的解析，下载并执行脚本后再继续DOM的解析；
* 浏览器在遇到script标签时会等待前面的css下载并解析完成，(更新render树把前面已解析完的元素重新渲染一次)，才执行js脚本，(以保证js获取的DOM是最新的)。
* 浏览器并不是等待DOM树解析完成后才开始渲染的，而是会边解析边渲染，解析了哪部分就先渲染哪部分。

### 白屏的原因
* 外链css不阻塞DOM解析，但阻塞DOM渲染，如，在head中的外链css加载完成前，页面都是白屏的。
* 若一个js外链放在body的最前，且执行时间较长，阻塞了后面的DOM解析,也会造成白屏问题。
* 若html中顺序存在一个css外链和一个js外链，css的下载用时也会延迟js的执行从而阻塞了DOM解析。（可以使用defer标记解决）

### 相关扩展，load和DOMContentLoaded事件的区别

* DOMContentLoaded: 在 DOM 完成解析并且所有js同步代码都执行完毕后触发;
* load: 当页面 DOM 结构中的 js、css、图片，以及 js 异步加载的 js、css 、图片都加载完成之后，触发load事件


### 相关扩展，defer和async标记

* 浏览器遇到script将会立即下载js脚本，下载完成后立即执行，下载过程和执行过程会阻塞DOM的解析。
* 浏览器遇到标记了defer的script将会立即下载js脚本，下载过程不会阻塞DOM的解析，在DOM完成解析，并在DOMContentLoad事件前（即DOM解析完成前）执行js脚本。（近似于把script放在body末执行）
* 浏览器遇到标记了async的script将会立即下载js脚本，下载过程不阻塞DOM解析，当下载完成后马上阻塞DOM解析，同步执行js脚本。
* 正常情况下把script放在body底部，那些不依赖首屏DOM的代码例如百度谷歌分析的库可以使用async标记。script标签需要放在元素之前又依赖首屏DOM的可以使用defer标记。

小结：

* defer并行加载js文件，会按照页面上script标签的顺序执行。

* async并行加载js文件，下载完成立即执行，不会按照页面上script标签的顺序执行。

### 相关扩展，prefetch 和 preload
* prefetch：其利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档。`<link href="/js/xx.js" rel="prefetch">`

* preload : 可以指明哪些资源是在页面加载完成后即刻需要的，浏览器在主渲染机制介入前就进行预加载，这一机制使得资源可以更早的得到加载并可用，且更不易阻塞页面的初步渲染，进而提升性能。 `<link href="/js/xxx.js" rel="preload" as="script">`需要 as 指定资源类型目前可用的属性类型有如下：
```
audio: 音频文件。
document: 一个将要被嵌入到<frame>或<iframe>内部的HTML文档。
embed: 一个将要被嵌入到<embed>元素内部的资源。
fetch: 那些将要通过fetch和XHR请求来获取的资源，比如一个ArrayBuffer或JSON文件。
font: 字体文件。
image: 图片文件。
object: 一个将会被嵌入到<embed>元素内的文件。
script: JavaScript文件。
style: 样式表。
track: WebVTT文件。
worker: 一个JavaScript的web worker或shared worker。
video: 视频文件。
```

### 相关扩展，域名发散 和 域名收敛
浏览器在下载js、css、图片等静态资源往往是并行下载的，而且设置有最大的并发量以及同个域名允许的并发量（一般是6，不同浏览器表现不同）。


**域名发散**：为了充分利用浏览器的并发下载机制，取得最大的并行度加快对静态资源的加载，可以将pc端站点的静态资源分布在不同域名下存储。

**域名收敛**：同样的机制在移动页面上并不适用，从多个域名中下载静态资源同时增加了DNS解析负担，在pc上DNS解析很快，但在2/3/4G移动网络中解析速度一般。因此需要减少域名存储资源。



* * *



## 浏览器的事件处理机制（事件循环）
<img src="~@blogImages/d3.jpeg" width="600" style="display: block;"/>

* 首先，主线程初始化代码，进行事件绑定，包括DOM事件绑定，计时器绑定，发送ajax请求等
* 然后，分线程监听事件，触发事件后把回调放入队列
* 最后，在队列中一个个取出回调函数放到主线程中执行

### 关于宏任务和微任务
* 事件队列中的任务划分有**Macrotasks宏任务**和**Microtasks微任务**两种。

* 在每一次事件循环中宏任务只会提取一个执行，而微任务会一直提取，直到微任务队列为空为止：

**属macrotasks的API有：**

* setTimeout
* setInterval
* setImmediate
* I/0
* UI rendering

**属microtasks的API有：**
* process.nextTick
* Promise
* MutationObserver

* * *


## 定时器的问题

* 定时器并不是真正完全定时的
* 如果在主线程执行了一个长时间的操作，将导致定时器延时处理（因为JS是单线程的）

* * *

## web Workers

* 可以让js在分线程执行一些
    * 缺点：慢、兼容性差、又不能操作DOM更新界面，不能跨域加载js