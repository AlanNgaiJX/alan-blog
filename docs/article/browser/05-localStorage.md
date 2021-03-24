---
title: 简析localStorage
sidebarDepth: 2
---

## 性质
* 存储上：每个域都有 5M 的大小，具体大小视浏览器而定。
* 网络上：属于本地存储，不参与网络通讯
* 生命周期上：若不手动清除，则永久性存储

## 如何检测浏览器的 loacalStorage 存储大小

```js
;(function () {
  if (!window.localStorage) {
    console.log('当前浏览器不支持localStorage!')
  }

  var test = '0123456789'

  var add = function (num) {
    num += num

    if (num.length == 10240) {
      test = num

      return
    }

    add(num)
  }

  add(test)

  var sum = test

  var show = setInterval(function () {
    sum += test

    try {
      window.localStorage.removeItem('test')

      window.localStorage.setItem('test', sum)

      console.log(sum.length / 1024 + 'KB')
    } catch (e) {
      alert(sum.length / 1024 + 'KB超出最大限制')

      clearInterval(show)
    }
  }, 0.1)
})()

```

## 如何规避 localStorage 存储过量
已知浏览器对 Local Storage 的大小有限制，请问使用它来实现数据缓存时，如何规避超出大小限制带来的影响？

当Local Storage满载时浏览器即不存储数据，也不会覆盖现有数据。而会引发一个 **quota_exceeded_err**的异常。可以采用这种办法：

1.	遍历 Local Storage估算当前已用存储的大小，
2.	ua判断该浏览器悉知当前存储的上限
3.	存储数据时，先比对是否会超出存储上限，若超出则更换存储策略如使用session storage
4.	以上都只是一种估算，存储时还应使用try…catch捕获 quota_exceeded_err异常，触发异常时更换存储策略。

更极端的处理方式：
在忽略 XSS 攻击等安全隐患的情况下，使用 postMessage 在不同域中通讯，将存储转嫁到别的域的存储空间上。