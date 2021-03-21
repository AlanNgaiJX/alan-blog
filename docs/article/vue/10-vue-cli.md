---
title: vue cli知识点
sidebarDepth: 2
---

## 修改Vue项目打包后生成文件路径
* 在Vue Cli2中修改config/index.js文件中的build.assetsPublicPath的值；
* 在Vue Cli3中配置publicPath的值。

## 配置文件夹别名
```js
configureWebpack: {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            'assets': resolve('src/assets'),
            'css': resolve('src/assets/css'),
            'images': resolve('src/assets/images'),
        }
    },
},
```
## 解决动态设置img的src不生效的问题
```html
<template>
    <img class="logo" :src="logo" alt="公司logo">
</template>
<script>
export default {
    data() {
        return {
            logo:require("assets/images/logo.png"),
        };
    }
};
</script>
```

## 外链引入第三方库的方法
1. 先在主入口页面 index.html 中用 script 标签引入`<script src="./static/jquery-1.12.4.js"></script>`,如果你的项目中有用ESLint检测，会报'$' is not defined，要在文件中加上/* eslint-disable */

2. 然后在webpack 中配置一个 externals，即可在项目中使用。

```js
externals: {
    'jquery': 'jQuery'
}
```
3. 先在webpack中配置alias，最后在main.js中用import $ from 'jquery'，即可在项目中使用。
```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
        '@': resolve('src'),
        'jquery': resolve('static/jquery-1.12.4.js')
    }
}
```
4. 在webpack中新增一个plugins，即可在项目中使用
```js
plugins: [
    new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
    })
]
```