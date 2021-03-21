---
title: 事件委托 与 处理大量节点插入
sidebarDepth: 2
---

## 事件委托

* 对过多元素进行重复的事件监听，如果采用*遍历列表*并添加多个事件监听的方式，*效率将非常低*且耗费内存。

* 这时，可以使用事件委托思想，借用*事件冒泡机制*，仅为父元素添加一个事件监听，判断触发对象(e.target)是否为子元素，是则使用封装好的逻辑。

## 处理大量节点插入

```javascript
// 利用documentFragment 和 requestAnimationFrame 进行大量节点插入
(function addNodeList(parentNode, countAddNode, groupSize = 20) {
    // 片段容器
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < countAddNode; i++) {
        const divEl = document.createElement("div");

        divEl.innerHTML = i;
        fragment.appendChild(divEl);

        // 组末
        const isGroupEnd = i > 0 && i % groupSize === 0;
        // 第3000个
        const isListEnd = i === countAddNode - 1;

        if (isGroupEnd || isListEnd) {
            //深复制片段
            const _fragment = fragment.cloneNode(true);

            // 在下一帧插入片段
            requestAnimationFrame(() => {
                parentNode.appendChild(_fragment);
            });
            
            // 重置片段容器
            fragment = document.createDocumentFragment();
        }
    }
})(document.body, 30000, 20);

// 事件委托
// 避免遍历大量子节点添加过多事件监听
document.body.addEventListener('click', function(e){
    if (e.target.nodeName === 'DIV') {
        alert(e.target.innerHTML);
    }
})
```