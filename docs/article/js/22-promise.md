---
title: promise
sidebarDepth: 2
---

## promise背景与作用

* 在过去，回调函数层层嵌套，造成回调地狱，使代码难以阅读
* promise 就是将异步操作以同步流程优雅表达出来，避免了层层嵌套

## Promise 构造函数
接收一个同步回调方法，作为参数

## promise 实例的三个状态

1. pending：初始化状态......new Promise时触发
2. fulfilled：成功状态......resolve()时触发
3. rejected：失败状态......reject()时触发

！必须注意：promise实例在实例化时就**已经执行了当中的同步代码**：如事件绑定、定时器开启、发送请求
* * *

## 实例方法
### Promise.prototype.then(?cb1,?cb2)
then 方法可接受两个分别对应 fulfilled 和 rejected 状态的回调函的。若 then 接收函数以外的值作为参数，则忽略这个 then。

注意：promise的失败具有传递性。then的失败回调会捕获到链上的报错。
```js
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
```
p1后面有四个then，意味依次有四个回调函数。只要前一步的状态变为fulfilled，就会依次执行紧跟在后面的回调函数。
最后一个then方法，回调函数是console.log和console.error，console.log只显示step3的返回值，而console.error可以显示p1、step1、step2、step3之中任意一个发生的错误。

#### then 中两个回调函数的参数
fulfilled 回调中，参数可以是resolve的传参，也可以是上一个then的返回值。
rejected 回调中，参数可以是reject的传参，也可以上之前then链上发生的错误。

观察这个案例：
```js
let func = function() {
    return new Promise((resolve, reject) => {
        resolve('返回值');
    });
};

let cb = function() {
    return '新的值';
}

func().then(function () {
    return cb();
}).then(resp => {
    console.warn(resp);//"新的值"
    console.warn('1 =========<');
});

func().then(function () {
    cb();
}).then(resp => {
    console.warn(resp);//因为上一个回调没有return值，所以是 "undefined"
    console.warn('2 =========<');
});

func().then(cb()).then(resp => {
    console.warn(resp);// 因为上一个then中的参数是字符串不是函数，忽略上一个then，关注前一个then，"返回值"
    console.warn('3 =========<');
});

func().then(cb).then(resp => {
    console.warn(resp);// "新的值"
    console.warn('4 =========<');
});
```

### Promise.prototype.catch()
捕获 promise 实例发生的 异常 或 reject

### Promise.prototype.finally()
无论最后是 fulfilled 还是rejected 都会执行 finally 的回调

## 静态方法
### Promise.all()
`Promise.all([p1,p2]).then(([r1,r2])=>{});`
当p1,p2的状态都为 fulfilled 才执行成功回调。当有一个状态为 rejected 则执行失败回调。

### Promise.allSettled()
`Promise.allSettled([p1,p2]).then((result)=>{});`
p1,p2都具有状态时，(无论是fulfilled 还是 rejected)，都执行成功回调。

### Promise.race()
`Promise.race([p1,p2]).then((res)=>{});`
p1,p2 以第一个到达 settled 状态的 promise 为基准，具体状态是 fulfilled 则调用成功回调，是 rejected 就调用失败回调。后面的 promise 无论其状态如何都不会触发回调。

### Promise.any()
`Promise.any(promises).then(
  (first) => {
    // Any of the promises was fulfilled.
  },
  (error) => {
    // All of the promises were rejected.
  }
);`

p1，p2中，有一个 promise 到达 fulfilled 状态就会触发成功回调，仅当所有的 promise 都到达 rejected 时才会触发错误回调。

### Promise.resolve() 重点
`Promise.resolve('foo')`
**等价于**
`new Promise(resolve=> resolve('foo'))`

接收不同参数时，返回有所不同

1. 参数是一个Promise实例，返回该实例。
2. 不传参或传个普通值，返回一个状态为 fulfilled 的promise实例。
4. 参数是一个 thenable 对象，将对象转为 promise实例并返回。 （罕见）

注意：promise.resolve().then()属于微任务。
```javascript
//2.
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value);  // 42
});
```
```javascript
//3.
const p = Promise.resolve('Hello');

p.then(function (s) {
  console.log(s)
});
// Hello
```

### Promise.reject()
返回一个状态为 rejected 的 Promise 实例。

* * *

### 任务队列类型
* 事件队列中的任务划分有 Macrotasks宏任务 和 Microtasks微任务 两种
* 在每一次事件循环中宏任务只会提取一个执行，而微任务会一直提取，直到微任务队列为空为止

**使用宏任务的API有：**
* setTimeout
* setInterval
* setImmediate
* I/0
* UI rendering

**使用微任务的API有：**
* process.nextTick
* Promise
* MutationObserver

**promise的微任务队列**
promise的 then链 就是一个个微任务。
当 promise 实例到达 fulfilled 状态时，then中的任务会添加到微任务队列中，等待执行。
intaglio

观察并分析输出：
```js
async function async1() {
  console.log('async1 start')//2
  await async2()
  console.log('async1 end')// 6
}

async function async2() {
  console.log('async2')// 3
}

console.log('script start'); // 1 

setTimeout(() => {
  console.log('setTimeOut')// 8
}, 0)

async1();

new Promise((resolve)=>{
  console.log("promise1");// 4
  resolve();
}).then(function(){
  console.log("promise2");//7
})
console.log("script end"); // 5
```

## promise基础使用
### 例一：封装AJAX
```javascript
function AJAX(url) {
    let promise = new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (
                    (xhr.status >= 200 && xhr.status < 300) ||
                    xhr.status === 304
                ) {
                    // 传入xhr.responseText 作为成功回调的data
                    resolve(xhr.responseText);
                } else {
                    // 传入“失败了” 作为失败回调的error
                    reject(new Error("fail"));
                }
            }
        };
    });
    // 返回一个promise实例
    return promise;
}

window.onload = () => {
    AJAX("http://jsonplaceholder.typicode.com/posts")
        .then((data) => {
            console.log("第一次执行成功");
            console.log(JSON.parse(data));
            // 再返回一个promise实例 可以列式调用
            return AJAX("http://jsonplaceholdsts");
        })
        .then((data) => {
            console.log("第二次执行成功");
            console.log(JSON.parse(data));
        })
        .catch((err) => {
            console.log(err);
        });
};

```

### 例二：链式调用
只要在then的回调方法中**return promise实例**，就能链式使用then
```javascript
const promise = new Promise((resolve) => {
    resolve("hello");
});

promise
    .then((res) => {
        //then中返回一个新的promise
        return new Promise((resolve) => {
            resolve(res + " world");
        });
    })
    .then((res) => {
        // 输出 hello world
        console.log(res);
    });
```


## promise进阶
### 例一：执行异步任务队列
```javascript
// 初始化队列，队列元素是返回promise实例的函数
let tasks = [];
function addAsyncTask(j) {
    const task = function () {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("exec：", j);
                resolve();
            }, 1000);
        });
    };

    tasks.push(task);
}
for (var i = 0; i < 5; i++) {
    addAsyncTask(i);
}

// 执行队列，任务逐个执行
function startQueue(tasks) {
    let index = 0;
    return new Promise((resolv, reject) => {
        (function execTask() {
            if (index === tasks.length) {
                resolve();
                return;
            }
            tasks[index]()
                .then(() => {
                    execTask();
                })
                .catch((err) => {
                    reject(err);
                });
            index++;
        })();
    });
}

startQueue()
    .then(() => {
        // 全部执行完毕
        console.log("执行完毕");
    })
    .catch((err) => {
        // 中间某个任务执行失败，抛出异常
        console.warn(err);
    });

```



### 例二：使用 reduce 更简洁地进行队列的执行
```javascript
function t1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("a");
        }, 1000);
    });
}

function t2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("b");
        }, 1000);
    });
}

function t3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("c");
        }, 1000);
    });
}

const tasks = [t1, t2, t3];
tasks.reduce((chain, task) => {
    return chain.then(() => task()).then((res) => {
        console.log(res);
    });
}, Promise.resolve());

```


### 例三：实现经典0->1->2->3->4->5
```js
// 定义队列
const tasks = (function () {
  return Array.from({ length: 6 }).map((item, index) => {
    return function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(index)
        }, 1000)
      })
    }
  })
})()

// 执行队列
tasks.reduce((chain, task) => {
  return chain
    .then(() => task())
    .then((res) => {
      console.log(res)
    })
}, Promise.resolve())
```

### 例四：根据例三改一下
输出： 0->1->2->3->stop at 4

**为什么会 stop at 4 ？**
* 因为到i===4时，reject 导致返回的promise实例变为了 rejected状态，
* 所以他不继续执行当前轮的第二个 then 回调（即，不会输出 4），
* 也无法在下一轮中执行第一个then回调（即，无法返回最后一个任务的promise实例）

```javascript
let tasks = [];
for (let i = 0; i <= 5; i++) {
    tasks.push(function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (i === 4) {
                    reject(i)
                }
                resolve(i);

            }, 1000);
        });
    });
}

const p = tasks.reduce((chain, task) => {
    return chain
        .then(() => task())
        .then((res) => {
            console.log(res);
        });
}, Promise.resolve());

p.then(()=>{
    console.log("finished");
}).catch(err=>{
    console.log("stop at "+err);
})
```

### 手写 promise