---
title: async
sidebarDepth: 2
---

## async

* 真正意义上用同步流程表达异步操作
* 本质是Generator函数的语法糖，是自动版的generator

## 语法
```javascript
async function foo(){
    await 异步操作；
    await 异步操作;
}
```
## 重点
**举例一：**
```javascript
function* fun(){
    const a = yield '1';
    const b = yield '2';
    return a+b;
}

const i = fun();
const n1 = i.next();
const n2 = i.next(n1.value);
const n3 = i.next(n2.value);//{value: '12', done: true}
```
```javascript
async function fun(){
    const a = await '1';
    const b = await '2';
    return a + b;
}

fun().then(res=>{
    console.log(res);//12
})
```
```js
async function getData() {
  const res =  await Promise.resolve("I made it!");
  console.log(res);//2 I made it
  return res;
}

const data = getData();
console.log(data);//1 Promise<pendding>
```
* async函数调用即执行，不需要像Generator一样调用next方法才继续执行。
* 从语法的角度比较，async取代了Generator的星号，await取代了Generator的yield，语义更好。
* async函数返回Promise对象，return语句返回的值，成为下一次调用then方法回调函数的参数。

**举例二：**
```javascript
async function fun() {
    const r1 = await new Promise((resolve, reject) => {
        resolve("1");
    });
    console.log(r1); // '1'
    const r2 = await Promise.reject("2");//reject被fun().catch()捕获
    const r3 = await "3";// 前面已经reject了，这里不执行
    return r1 + r2 + r3;
}

fun()
    .then((res) => {
        console.log(res);// 不执行
    })
    .catch(err=>{
        console.log(err);// '2'
    });

```
* 如果await后面是promies对象，则等待，并返回对象的结果（若成功则返回resolve的值，若失败则终止执行，reject结果被async的catch方法所捕获。）

**举例三：**
```javascript
async function fun() {
    let r2, r3;
    try {
        r2 = await Promise.reject("2"); //reject被fun().catch()捕获
    } catch (err) {
        console.log(err);
    }
    r3 = await "3"; // 前面已经reject了，这里不执行
    return r2 + r3;
}

fun()
    .then((res) => {
        console.log(res);// undefined3
    })
    .catch((err) => {//在 fun 内部已经 catch 了，这里就不会再catch到了
        console.log(err); 
    });

```

* 使用try catch包裹await可以保证后面的await也能正常执行。
* async函数内部catch错误后，在外部是catch不到的。

**举例三：**
```javascript
async function fun(){
    const a = await 'a';
    console.log(a);
}

console.log('b');
// 先输出 'b' , 再输出 'a'
```
* 如果await后面是值，则把值resovle出去，如`await '2'`相当于`await Promise.resolve('2')`。

## 使用注意

1. await后面的promise有可能返回reject而终止掉了后续的流程，最好使用try catch包裹；
2. 异步操作不存在继发关系，需要注意做并发处理。否者会拖延了流程的执行。
```javascript
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
```

## 应用场景

### 场景一：await实现sleep
完成经典0 -> 1 -> 2 -> 3 -> 4 -> 5
```javascript
function sleep() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

(async function () {
    var i;
    await (async function () {
        for (i = 0; i < 5; i++) {
            await sleep();
            console.log(i);
        }
    })();

    await sleep();
    console.log(i);
})();

```

### 场景二：请求失败重发
```javascript
const superagent = require('superagent');
const NUM_RETRIES = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get('http://google.com/this-throws-an-error');
      break;
    } catch(err) {}
  }
  console.log(i); // 3
}

test();
```
### 场景三：执行异步任务队列
```javascript
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}
```
## 手撕Async