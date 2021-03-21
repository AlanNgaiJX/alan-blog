---
title: promise
sidebarDepth: 2
---

## promise背景与作用

* 回调函数层层嵌套，容易造成回调地狱难以阅读
* 将异步操作以同步的流程优雅表达出来，避免层层嵌套

## promise对象的三个状态

1. pending：初始化状态......new Promise时触发
2. fulfilled：成功状态......resolve()时触发
3. rejected：失败状态......reject()时触发

！必须注意：promise对象在pending时就**已经执行了当中的同步代码**：如事件绑定、定时器开启
* * *

## 实例方法
### Promise.prototype.then(?cb1,?cb2)
then方法可接受两个分别对应 fulfilled 和 rejected状态的回调函的，回调函数分别接收resolve和reject的传参。

### Promise.prototype.catch()
捕获串行链发生的 异常 或 reject

### Promise.prototype.finally()
无论最后是fulfilled 还是rejected 都会执行finally的回调

## 静态方法
### Promise.all()
`Promise.all([p1,p2]).then(([r1,r2])=>{});`
当p1,p2的状态都为resolve才执行then回调。

### Promise.race()
`Promise.race([p1,p2]).then((res)=>{});`
p1,p2其中一个状态到达fulfilled，执行then回调。

### Promise.allSettled()
`Promise.allSettled([p1,p2]).then((result)=>{});`
p1,p2都具有状态时，(无论是fulfilled还是reject)，执行then回调。

### Promise.any()
`Promise.any(promises).then(
  (first) => {
    // Any of the promises was fulfilled.
  },
  (error) => {
    // All of the promises were rejected.
  }
);`
当promises中有一个状态fulfilled执行第一个回调，当所有状态都rejected了执行第二个回调。
any跟race有点像，就是不会因为某个promise变成rejected状态而结束。
### Promise.resolve() 重点
`Promise.resolve('foo')`
**等价于**
`new Promise(resolve=> resolve('foo'))`

该方法接收不同参数时，返回有所不同

1. 参数是一个Promise实例，返回该实例。
2. 参数是一个thenable对象，将对象转为promise实例并返回。 
3. 参数是个普通值，返回一个新的promise对象，状态为resolved。
4. 不传任何参数，返回一个新的promise对象，状态为resolved。

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
返回一个新的Promise实例，该实例的状态为rejected。

* * *

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
    // 返回一个promise对象
    return promise;
}

window.onload = () => {
    AJAX("http://jsonplaceholder.typicode.com/posts")
        .then((data) => {
            console.log("第一次执行成功");
            console.log(JSON.parse(data));
            // 再返回一个promise对象 可以列式调用
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
只要在then的回调方法中**return promise对象**，就能链式使用then
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
// 初始化队列，队列元素是返回promise对象的函数
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



### 例二：使用reduce简化队列执行
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