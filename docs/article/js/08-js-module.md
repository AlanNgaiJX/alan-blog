---
title: JS模块化
sidebarDepth: 2
---

## JS的模块化进程
```javascript
//最早我们这么写代码
function a(){}
function b(){}

//Global被污染，很容易命名冲突
```



```javascript
//简单封装： Namespace模式
var myModule = {
    a: function(){},
    b: function(){}
}
myModule.a();

//减少了全局命名，但是能操作对象，一点都不安全
```

```javascript
//IIFE 匿名闭包模式
var Module = (function(){
    var _private = "safe now";
    function a(){
        console.log("_private");
    }
    return {
        a: a
    }
})()

Module.a();
Module._private; //读不到，undefined

//相对安全
```

```javascript
//再增强一点：引入依赖
//这里依赖了jQuery
var Module = (function($){
    var _body = $("body");
    var a = function(){
        console.log(_body);
    }
    return {
        a: a
    }
})(jQuery);

//但这样在页面引入script也是要按顺序，且请求量非常多
```
## 为什么要模块化

* 降低复杂度、解耦合、降低请求
* 避免命名冲突、按需加载、高复用、可维护

### 模块化规范
## CommonJS规范

说明
* 每个文件都可当做一个模块
* 在服务器端：模块加载是运行时同步加载的
* 在浏览器端：模块需要提前编译打包处理

语法

* module.exports = value;
* exports.xxx = value;
* require(相对路径/包名);
* （暴露的本质都是exports对象与require所得一样,exports.xxx是里面一个属性）

利用browserify编译
```
sudo npm install browserify -g
npm install browserify --save -dev

//编译打包命令
browserify index.js -o dist/bundle.js
```

## AMD规范
说明

* 用requireJS库
* 专门用于浏览器端，模块的加载是异步的

语法
```javascript
//定义没有依赖模块
define(functon(){
    return 模块;
})
```
```javascript
//定义有依赖模块
define(['module1','module2'],functon(m1,m2){
    return 模块;
})
```
```javascript
//requireJS的配置文件
requirejs.config({
    //设置根路径
    baseUrl:"",
    paths:{
     module1:'相对路径',
     module2:'相对路径'
    }
});
require(['module1','module2'],functon(m1,m2){
    return 模块;
});
//在html中引入
//<script data-main="主模块的相对路径" src="requireJS库路径"></script>
```

## ES6
说明
* 依赖模块需要打包处理，使用Babel将ES6编译为ES5代码，使用Browserify编译打包js
语法

* export导出
* import导入
* export default导出单个对象

编译打包过程（此方法是使用插件预设babel-perset-es2015完成的）

1. npm安装好需要件（browserify babel-cli）
2. 定义.babelrc配置文件（当前文档上已经有新的方法创建）
    1. {"presets":["es2015"]}
3. babel编译(build) 使ES6语法转换为ES5语法 和 browserify打包(dist) 使JS能被浏览器识别
```
//babel module -d build
//browserify build -o dist/bundles.js
```
4.html引入bundles.js运行

