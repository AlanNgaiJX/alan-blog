---
title: 深度遍历 与 广度遍历
sidebarDepth: 2
---

## 深度遍历
基础：以dom树遍历为例，从起点扎到底后再从起点扎到底的方式遍历。

思路：利用递归，先进后遍历

```html
<!-- 深度优先算法，遍历这个dom树 -->
<div id="root" class="root">
    <div class="container">
        <section class="sidebar">
            <ul class="menu"></ul>
        </section>
        <section class="main">
            <article class="post"></article>
            <p class="copyright"></p>
        </section>
    </div>
</div>
```
```javascript
const rootEl = document.getElementById('root');
const result = [];

// 递归遍历
(function dig(el){
    result.push(el);
    for (const child of el.children) {
        dig(child);
    }
})(rootEl);

console.log(result);
/* 
    0: div#root.root
    1: div.container
    2: section.sidebar
    3: ul.menu
    4: section.main
    5: article.post
    6: p.copyright
*/
```

## 广度遍历
思路：利用队列，先进先遍历

```javascript
const rootEl = document.getElementById("root");

function dig(rootNode) {
    const result = [];
    const queue = [rootNode];

    while (queue.length) {
        const el = queue.shift();
        result.push(el);
        for (const child of el.children) {
            queue.push(child);
        }
    }
    console.log(result);
}
dig(rootEl);
```