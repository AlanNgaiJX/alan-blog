/\*

- @Author: your name
- @Date: 2021-03-23 16:50:31
- @LastEditTime: 2021-03-23 16:50:36
- @LastEditors: Please set LastEditors
- @Description: In User Settings Edit
- @FilePath: /alan-blog/docs/article/js/30-debounce-throttle.md
  \*/

---

title: 防抖 与 节流
sidebarDepth: 2

---

## 防抖

定义：事件无论被触发多少次，回调函数只执行一次。

### 两种场景

1. 防止误触：提交数据，首次点击提交立即触发，后面误触不触发。（头触发）
2. 节省运算：连续输入，前面输入不触发，只取最后一次数据执行验证。（尾部触发）

### 实现

```js
/**
 * @description:
 * @param {*} func 回调函数
 * @param {*} delay 延迟时间
 * @param {*} triggleHead 是否头触发
 * @return {*}
 */
function debounce(func, delay = 500, triggleHead = false) {
  // 定时器
  let timer = null

  function debounced() {
    // 执行结果
    let result

    // 保存指针 与 参数
    const self = this
    const args = arguments

    if (timer) {
      clearTimeout(timer)
    }

    // 是否头触发
    if (triggleHead) {
      const isExec = !timer

      // 是否触发
      if (isExec) {
        // 使用 apply 调用回调，保证 this 的正确指向
        result = func.apply(self, args)
      }
      // 开启记时
      timer = setTimeout(function() {
        timer = null
      }, delay)
    } else {
      // 仅尾部延迟触发，开启记时
      timer = setTimeout(function() {
        result = func.apply(self, args)
        timer = null
      }, delay)
    }

    // 返回回调执行的结果
    return result
  }

  // 主动清除计时器的方法
  debounced.remove = function() {
    clearTimeout(timer)
    timer = null
  }

  return debounced
}
```

### 使用

```js
document.getElementById('btn-debounce').addEventListener(
  'click',
  debounce(
    function() {
      //回调
      console.log(this)
    },
    500,
    true
  )
)
```

## 节流

定义：事件触发多少次，但只在一定间隔时间以上，回调函数才执行一次。

### 场景

1. 点按钮抢红包，不是防抖，因为连续点击多次，在一定的时间点上就会执行。

### 实现

```js
/**
 * @description:
 * @param {*} func 回调函数
 * @param {*} duration 时间间隔
 * @param {*} triggerTail 尾部是否触发
 * @return {*}
 */
function throttle(func, duration = 1000, triggerTail = true) {
  // 计时器 和 开始时间
  let timer = null
  let beginTime = 0

  function throttled() {
    let result
    const self = this
    const args = arguments
    const currTime = new Date().getTime()

    clearTimeout(timer)

    // 点击在间隔时间点上
    if (currTime - beginTime > duration) {
      result = func.apply(self, args)
      beginTime = currTime
    } else {
      // 点击不在间隔时间点上，尾部还可以防抖触发一次
      if (triggerTail) {
        timer = setTimeout(function() {
          result = func.call(self, args)
          timer = null
        }, duration)
      }
    }

    return result
  }

  return throttled
}
```

### 使用

```js
document.getElementById('btn-throttle').addEventListener(
  'click',
  throttle(
    function() {
      console.log(this)
    },
    1000,
    true
  )
)
```
