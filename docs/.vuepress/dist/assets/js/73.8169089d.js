(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{519:function(s,a,t){"use strict";t.r(a);var n=t(26),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"导致崩溃的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导致崩溃的原因"}},[s._v("#")]),s._v(" 导致崩溃的原因")]),s._v(" "),t("p",[s._v("node是单线程的，依赖回调的，所以服务还是蛮脆弱的。一些没有被catch到的的错误都有可能导致整个服务崩溃。可以采取的办法有以下：")]),s._v(" "),t("h2",{attrs:{id:"尽可能捕获错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尽可能捕获错误"}},[s._v("#")]),s._v(" 尽可能捕获错误")]),s._v(" "),t("p",[s._v("编码时尽可能try...catch语句捕获所有可能出错的位置。")]),s._v(" "),t("h2",{attrs:{id:"在uncaughtexception事件作兜底捕获错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在uncaughtexception事件作兜底捕获错误"}},[s._v("#")]),s._v(" 在uncaughtException事件作兜底捕获错误")]),s._v(" "),t("p",[s._v("uncaughtException是process进程上的一个事件，所有未被捕获的错误最终都触发这个事件，可以在这个事件上将未捕获的错误捕获。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// uncaughtException全局捕获未捕获的Error，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同时将此函数的调用栈打印出来，捕获之后可以有效防止node进程退出")]),s._v("\nprocess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uncaughtException"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打印出错误")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打印出错误的调用栈方便调试")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"做好日志管理-进程守护"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#做好日志管理-进程守护"}},[s._v("#")]),s._v(" 做好日志管理，进程守护")]),s._v(" "),t("h3",{attrs:{id:"使用logger管理网络请求日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用logger管理网络请求日志"}},[s._v("#")]),s._v(" 使用logger管理网络请求日志")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" logger "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"morgan"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" FileStreamRotator "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file-stream-rotator"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置日志文件目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" logDirectory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" __dirname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/logs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//确保日志文件目录存在 没有则创建")]),s._v("\nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("existsSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logDirectory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdirSync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logDirectory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建一个写路由")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" accessLogStream "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" FileStreamRotator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getStream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" logDirectory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/accss-%DATE%.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    frequency"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daily"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    verbose"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("logger")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"combined"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stream"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" accessLogStream "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//写入日志文件")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"使用-forever守护node进程-输出node服务日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-forever守护node进程-输出node服务日志"}},[s._v("#")]),s._v(" 使用 forever守护node进程，输出node服务日志")]),s._v(" "),t("p",[s._v("forever是一个nodejs的守护进程, 本质上就是在forever进程之下，创建一个node app的子进程。")]),s._v(" "),t("h4",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("全局安装 npm install forever -g")]),s._v(" "),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 简单的启动\nforever start app.js\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 指定forever信息输出文件，当然，默认它会放到~/.forever/forever.log\nforever start -l forever.log app.js\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 指定app.js中的日志信息和错误日志输出文件，\n// -o 就是console.log输出的信息，-e 就是console.error输出的信息\nforever start -o out.log -e err.log app.js\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". 追加日志，forever默认是不能覆盖上次的启动日志，\n// 所以如果第二次启动不加-a，则会不让运行\nforever start -l forever.log -a app.js\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(". 监听当前文件夹下的所有文件改动，并重启服务\nforever start -w app.js\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(". 显示所有运行的服务\nforever list\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h4",{attrs:{id:"停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[s._v("#")]),s._v(" 停止")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 停止所有运行的node App\nforever stopall\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 停止其中一个node App\nforever stop app.js\n// 当然还可以这样\n// forever list 找到对应的id，然后：\nforever stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[s._v("#")]),s._v(" 重启")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 启动所有\nforever restartall\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 重启其中一个node App\nforever restart app.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h4",{attrs:{id:"开发和线上建议配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发和线上建议配置"}},[s._v("#")]),s._v(" 开发和线上建议配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n// 开发环境下\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("development forever start -w server.js\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("development forever start -l forever.log -e err.log -a app.js\n// 线上环境下\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production forever start -w server.js\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_ENV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("production forever start -l ~/.forever/forever.log -e ~/.forever/err.log -w -a app.js\n\n//参数\n-w, –watch Watch "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changes\n–watchDirectory Top-level directory to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" from\n–watchIgnore To ignore pattern when "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" is enabled "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multiple option is allowed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h4",{attrs:{id:"实际使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际使用"}},[s._v("#")]),s._v(" 实际使用")]),s._v(" "),t("p",[s._v("实际使用想要达到服务一直启动并且可以监听部分代码变化，然后重启服务的效果")]),s._v(" "),t("p",[s._v("忽视某些文件或文件夹，监听其他文件，自动重启服务\nNODE_ENV=production forever -w –watchIgnore logs –watchIgnore access.log start server.js")]),s._v(" "),t("p",[s._v("监听文件夹，自动重启服务\nNODE_ENV=production forever -w –watchDirectory logs –watchDirectory modules start server.js")]),s._v(" "),t("p",[s._v("判断服务是否重启可以根据forever list，看服务运行时间，如果重启服务，会重新记录服务持续时间！")]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/aerchi/article/details/73650296",target:"_blank",rel:"noopener noreferrer"}},[s._v("nodejs如何自动重启"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);