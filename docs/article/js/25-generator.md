---
title: Generator函数
sidebarDepth: 2
---

## Generator函数

1. 一种异步编程解决方案
2. 它是一个状态机，封装了多个内部状态。
3. 它也是一个遍历器生成函数，执行Generator函数返回遍历器对象。
5. 与iterator的原理相似，generator函数返回一个指针对象，
6. 指针对象具有next方法，用于启动，执行至遇见下一个yield停止，其中next方法传递的参数将赋值给上一个yield片段。

## Generator三个原型方法
next()、throw()、return() 这三个方法本质上是同一件事：
它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。

1. next() 是将yield 表达式替换成一个值。（该值就是next的传参）
2. throw() 是将yield 表达式替换成一个throw语句。
3. return()是将yield表达式替换成一个return语句。

## yield*
作用：在Generator函数中调用另一个Generator函数
注意：yield* 后面必须是一个遍历器（如，执行generator函数返回遍历器）
```javascript
function* a(){
    yield 'a1';
    yield 'a2';
}

function* b(){
    yield 'b1';
    yield* a();
    yield 'b2';
}

// b1 a1 a2 b2
console.log(...b());
```
等同于
```javascript
function* a(){
    yield 'a1';
    yield 'a2';
}

function* b(){
    yield 'b1';
    for (const i of a()) {
        yield i
    }
    yield 'b2';
}

// b1 a1 a2 b2
console.log(...b());
```

如果a中有return语句，则在next()时自动将return的值传给b的yield；（无需在next中传参）
```javascript
function* a(){
    yield 'a1';
    return 'hello';
}

function* b(){
    yield 'b1';
    var resA = yield* a();
    var resB = yield resA + ' world';
    console.log(resB);
}

const i = b();
const n1 = i.next();//{ value: 'b1', done: false }
const n2 = i.next();//{ value: 'a1', done: false }
const n3 = i.next();//{ value: 'hello world', done: false }
```

## 手撕 Generator

## Generator 应用场景

### 异步操作同步化表达
例一：处理Ajax请求
```javascript
function* main() {
  var result = yield request("http://some.url");
  var resp = JSON.parse(result);
    console.log(resp.value);
}

function request(url) {
  makeAjaxCall(url, function(response){
    it.next(response);
  });
}

var it = main();
it.next();
```

例二：分两步进行请求
```javascript
function AJAX(url,index){
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("GET",url);
    xhr.send();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("成功执行-次数："+index);
                console.log(xhr.responseText);
                // 模拟获得第二个url
                let urlB = "http://jsonplaceholder.typicode.com/posts";
                pointer.next(urlB);
            }else{
                console.log("失败执行-次数："+index);
            }
        }
    }
}

function* getTwice() {
    let url = yield AJAX("http://jsonplaceholder.typicode.com/posts",1);
    yield AJAX(url,2);
}
let pointer = getTwice();
pointer.next();
```

### 流程管理
采用回调的方式进行一个多步操作可能会造成回调地狱；
Generator是个不错的解决方法；
```javascript
function* longRunningTask(value1) {
    try {
        var value2 = yield step1(value1);
        var value3 = yield step2(value2);
        var value4 = yield step3(value3);
        var value5 = yield step4(value4);
        console.log(value5);
    } catch (e) {}
}

function exec(i) {
    let n = null;
    while (!n || !n.done) {
        const value = n ? n.value : undefined;//传递参数
        n = i.next(value);
    }
}

const i = longRunningTask("hello");
exec(i);
```