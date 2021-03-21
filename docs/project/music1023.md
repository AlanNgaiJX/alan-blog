---
title: 复刻网易云音乐 1023music
sidebarDepth: 2
---

# 1023music

前端使用 vue2.x + vuex 复刻了旧版网易云音乐。

是一个SPA移动端项目，已实现了登录、主页、我的歌单、热门推荐、歌曲搜索、播放器等页面与功能。

后端使用了跨站请求伪造 (CSRF), 伪造请求头 , 调用官方 API。

# 预览地址
[传送门](http://18.163.192.144:9001/1023music/)

或扫描QRcode

<img src="~@projectImages/onlineQRcode1023.jpeg" width="100" style="display: block;"/>

* ps：预览服务器身处中国境外，走的国际带宽；如果您是中国的访问者，这可能会有点慢，请谅解。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
