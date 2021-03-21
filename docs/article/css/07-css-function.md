---
title: css函数总结
sidebarDepth: 2
---

## counters
### 使用过程：
1. 使用counter-reset: item; 初始化变量名item，并重置计数器为0
2. couter-increment: item; 计数器+1
3. content: counter(item); 展示item现在的值

```css
body {
  counter-reset: section;            
}

h3::before {
  counter-increment: section;        
  content: "Section " counter(section) ": ";                             
}
```
### 复杂场景，嵌套标题
```html
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>

```

```css
ol {
  counter-reset: section;        
  list-style-type: none;
}

li::before {
  counter-increment: section;        
  content: counters(section, ".") " ";
}

```
counter和counters有区别，counters可以指定一个分隔符把各级的item给连接起来。

[参考MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
[参考codepen 例一](https://codepen.io/AlanNgaiJX/pen/KKgddON)
[参考codepen 例二](https://codepen.io/AlanNgaiJX/pen/vYXNLEM)
