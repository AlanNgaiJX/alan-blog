---
title: 解决node服务崩溃问题
sidebarDepth: 2
---

## 导致崩溃的原因

node是单线程的，依赖回调的，所以服务还是蛮脆弱的。一些没有被catch到的的错误都有可能导致整个服务崩溃。可以采取的办法有以下：


## 尽可能捕获错误

编码时尽可能try...catch语句捕获所有可能出错的位置。

## 在uncaughtException事件作兜底捕获错误

uncaughtException是process进程上的一个事件，所有未被捕获的错误最终都触发这个事件，可以在这个事件上将未捕获的错误捕获。

```js
// uncaughtException全局捕获未捕获的Error，
// 同时将此函数的调用栈打印出来，捕获之后可以有效防止node进程退出
process.on("uncaughtException", function (err) {
    //打印出错误
    console.log(err);
    //打印出错误的调用栈方便调试
    console.log(err.stack);
});
```

## 做好日志管理，进程守护

### 使用logger管理网络请求日志

```js

const fs = require("fs");
const logger = require("morgan");
const FileStreamRotator = require("file-stream-rotator");

//设置日志文件目录
const logDirectory = __dirname + "/logs";
//确保日志文件目录存在 没有则创建
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

//创建一个写路由
const accessLogStream = FileStreamRotator.getStream({
    filename: logDirectory + "/accss-%DATE%.log",
    frequency: "daily",
    verbose: false,
});

app.use(logger("combined", { stream: accessLogStream })); //写入日志文件

```

### 使用 forever守护node进程，输出node服务日志

forever是一个nodejs的守护进程, 本质上就是在forever进程之下，创建一个node app的子进程。

#### 安装

全局安装 npm install forever -g

### 启动
```bash 

// 1. 简单的启动
forever start app.js

// 2. 指定forever信息输出文件，当然，默认它会放到~/.forever/forever.log
forever start -l forever.log app.js

// 3. 指定app.js中的日志信息和错误日志输出文件，
// -o 就是console.log输出的信息，-e 就是console.error输出的信息
forever start -o out.log -e err.log app.js

// 4. 追加日志，forever默认是不能覆盖上次的启动日志，
// 所以如果第二次启动不加-a，则会不让运行
forever start -l forever.log -a app.js

// 5. 监听当前文件夹下的所有文件改动，并重启服务
forever start -w app.js

// 6. 显示所有运行的服务
forever list

```

#### 停止

```bash

// 1. 停止所有运行的node App
forever stopall

// 2. 停止其中一个node App
forever stop app.js
// 当然还可以这样
// forever list 找到对应的id，然后：
forever stop [id]

```


#### 重启 

```bash
// 1. 启动所有
forever restartall
// 2. 重启其中一个node App
forever restart app.js
```


#### 开发和线上建议配置

```bash

// 开发环境下
NODE_ENV=development forever start -w server.js
NODE_ENV=development forever start -l forever.log -e err.log -a app.js
// 线上环境下
NODE_ENV=production forever start -w server.js
NODE_ENV=production forever start -l ~/.forever/forever.log -e ~/.forever/err.log -w -a app.js

//参数
-w, –watch Watch for file changes
–watchDirectory Top-level directory to watch from
–watchIgnore To ignore pattern when watch is enabled (multiple option is allowed)
```

#### 实际使用

实际使用想要达到服务一直启动并且可以监听部分代码变化，然后重启服务的效果

忽视某些文件或文件夹，监听其他文件，自动重启服务
NODE_ENV=production forever -w –watchIgnore logs –watchIgnore access.log start server.js

监听文件夹，自动重启服务
NODE_ENV=production forever -w –watchDirectory logs –watchDirectory modules start server.js

判断服务是否重启可以根据forever list，看服务运行时间，如果重启服务，会重新记录服务持续时间！

## 参考
[nodejs如何自动重启](https://blog.csdn.net/aerchi/article/details/73650296)