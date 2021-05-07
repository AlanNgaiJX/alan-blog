(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{428:function(t,s,a){t.exports=a.p+"assets/img/i1.5ff14c7d.jpeg"},494:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"关于最小延迟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于最小延迟"}},[t._v("#")]),t._v(" 关于最小延迟")]),t._v(" "),n("p",[t._v('"setTimeout的最短时间间隔是4毫秒；setInterval的最短间隔时间是10毫秒，也就是说，小于10毫秒的时间间隔会被调整到10毫秒"')]),t._v(" "),n("p",[t._v("所以说，定时器其实并不严谨定时。导致延时的原因常包括。")]),t._v(" "),n("h3",{attrs:{id:"原因一-事件队列阻塞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原因一-事件队列阻塞"}},[t._v("#")]),t._v(" 原因一，事件队列阻塞")]),t._v(" "),n("p",[t._v("依据浏览器的事件处理机制，setTimeout 和 setIntervel在到达定时的那一刻将回调压入事件队列中，如果此时队列的前方还有正在执行的任务，则会阻塞定时器的回调执行。")]),t._v(" "),n("h3",{attrs:{id:"原因二-浏览器的节能限制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原因二-浏览器的节能限制"}},[t._v("#")]),t._v(" 原因二，浏览器的节能限制")]),t._v(" "),n("p",[t._v("为了节省CPU资源，一些浏览器会在用户切换tab时，对不在激活状态的tab的作了节流限制，把定时最小延迟从>=4ms提升至>=1000ms。")]),t._v(" "),n("h2",{attrs:{id:"关于setintervel的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于setintervel的问题"}},[t._v("#")]),t._v(" 关于setIntervel的问题")]),t._v(" "),n("p",[t._v("除了在某些浏览器下setIntervel的延迟有可能比setTimeout要高外，setIntervel还存在一些问题。")]),t._v(" "),n("p",[t._v("当使用setInterval()时，JS引擎会判断事件队列中是否还有该定时器的回调，若无，才将定时器回调压入事件队列，若有，则这个间隔不向事件队列压入回调。")]),t._v(" "),n("img",{staticStyle:{display:"block"},attrs:{src:a(428),width:"600"}}),t._v(" "),n("br"),t._v(" "),n("p",[t._v("假设，某个onclick事件处理程序使用setInterval()设置了200ms间隔的定时器。如果事件处理程序花了300ms多一点时间完成，同时定时器代码也花了差不多的时间，就会同时出现跳过某间隔的情况。")]),t._v(" "),n("h2",{attrs:{id:"更好地应用定时器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更好地应用定时器"}},[t._v("#")]),t._v(" 更好地应用定时器")]),t._v(" "),n("h3",{attrs:{id:"使用settimeout-代替-setintervel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用settimeout-代替-setintervel"}},[t._v("#")]),t._v(" 使用setTimeout 代替 setIntervel")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// kick off")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stop intervel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h3",{attrs:{id:"使用postmessage实现0ms延时"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用postmessage实现0ms延时"}},[t._v("#")]),t._v(" 使用postMessage实现0ms延时")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://dbaron.org/log/20100309-faster-timeouts",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考David Baron的博文与Demo"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"使用raf-系统时间来实现精确的时钟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用raf-系统时间来实现精确的时钟"}},[t._v("#")]),t._v(" 使用RAF + 系统时间来实现精确的时钟")]),t._v(" "),n("p",[t._v("setIntervel是不精确的，可以使用RAF每帧去刷新获取当前系统时间new Date().getTime()并更新当前时间。")]),t._v(" "),n("h2",{attrs:{id:"requestanimationframe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[t._v("#")]),t._v(" RequestAnimationFrame")]),t._v(" "),n("h3",{attrs:{id:"实现平滑动画的要素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现平滑动画的要素"}},[t._v("#")]),t._v(" 实现平滑动画的要素")]),t._v(" "),n("p",[t._v("帧率表示在1秒内视觉内容刷新的次数，单位fps。\n如60fps，表示1秒内刷新60次。（即1000ms/60 = 约16.6ms刷新一次）")]),t._v(" "),n("p",[t._v("过去，定时器一直运用在动画中，设置的延迟时间需要跟上帧率，动画才会更加流畅。鉴于大多数显示器的刷新频率是60Hz，因此最佳的间隔是16.6ms。")]),t._v(" "),n("p",[t._v("然而，定时器的通病是精确度，使用定时器设置动画时，浏览器是被告知式地在整个视图重绘的同时去渲染动画的，如果使用定时器为动画设置的帧率与屏幕的刷新率不同步，就会消耗更多的CPU资源。RequestAnimationFrame正是为了解决这一痛点而诞生。")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" raf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("draw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// kick off")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stop raf")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cancleAnimationFrame")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h3",{attrs:{id:"requestanimationframe为什么更好"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe为什么更好"}},[t._v("#")]),t._v(" requestAnimationFrame为什么更好")]),t._v(" "),n("ul",[n("li",[t._v("RAF会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成。")]),t._v(" "),n("li",[t._v("并且重绘或回流的时间间隔紧跟浏览器的刷新频率（一般是60fps）。")]),t._v(" "),n("li",[t._v("在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流。")]),t._v(" "),n("li",[t._v("上述RAF所创造的条件能有效地节省了CPU和GPU资源。")])]),t._v(" "),n("h3",{attrs:{id:"兼容性与pollyfill"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容性与pollyfill"}},[t._v("#")]),t._v(" 兼容性与pollyfill")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://caniuse.com/?search=requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[t._v("caniuse-requestAnimationFrame"),n("OutboundLink")],1),t._v("\n注意IE10以下以及OperaMini暂不支持RAF，可以使用setTimeout并检测回调之间的执行时间差来做pollyfill。")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://paulirish.com/2011/requestanimationframe-for-smart-animating/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// requestAnimationFrame polyfill by Erik Möller")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fixes from Paul Irish and Tino Zijdel")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lastTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vendors "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ms'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moz'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webkit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" vendors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestAnimationFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestAnimationFrame "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vendors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RequestAnimationFrame'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelAnimationFrame "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vendors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CancelAnimationFrame'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vendors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CancelRequestAnimationFrame'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestAnimationFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("requestAnimationFrame")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" element")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" currTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeToCall "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" lastTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" timeToCall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              timeToCall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            lastTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" timeToCall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelAnimationFrame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("cancelAnimationFrame")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br")])]),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5773183.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解定时器系列（一）"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5777186.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解定时器系列（二）"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5777757.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解定时器系列（三）"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://css-tricks.com/using-requestanimationframe/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using requestAnimationFrame"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"http://creativejs.com/resources/requestanimationframe/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The secret of requestAnimationFrame"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);