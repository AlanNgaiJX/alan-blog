---
title: process.env详解
sidebarDepth: 2
---


## 定义

process是一个node全局变量，process.env返回包含用户环境的对象，也就是平时所设置的环境变量。

node框架经常会看到类似的代码：

```js
if (process.env.NODE_ENV === 'production') {
module.exports = require('./prod.js')
} else {
module.exports = require('./dev.js')
}
```

表示Node所处的当前进程，允许开发者输入一个变量与该进程互动。

## 如何设置该变量

### 方法一：运行进程前，在终端设置

* window的cmd下

```bash

set GENERATE_SOURCEMAP=false&& node app.js

```
                                     

* linux下
```bash

export GENERATE_SOURCEMAP=false&& node app.js

```

* 你也可以在config.json.scripst中配置命令
```json
{
  "scripts": {
    "start": "node scripts/start.js",
    "build": "set GENERATE_SOURCEMAP=false&& node scripts/build.js",
    "build-linux": "export GENERATE_SOURCEMAP=false && node scripts/build.js",
    "test": "node scripts/test.js"
  },
}

```

### 方法二：直接修改js，不推荐


```js
process.env.NODE_ENV = 'production';
```

### 方法三：设置全局变量

这种方法持续时间比较长，一般设置了不去动就行。但不够灵活。

## 注意

1. 设置变量时`export GENERATE_SOURCEMAP=false&& node app.js` &&是紧挨的，没有空格的，否则你的变量可能就会成为'false '了。

2. 由于该变量是一个字符串，在js作变量判断时必须使用字符串进行严格比较。

## 参考
[node文档：process.env](http://nodejs.cn/api/process.html#process_process_env)