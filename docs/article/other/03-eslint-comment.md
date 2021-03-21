---
title: eslint注释规则速查
sidebarDepth: 2
---

1.  在整个文件中取消 eslint 检查：
    /_ eslint-disable _/
    alert(‘foo’);

2.  在整个文件中禁用某一项 eslint 规则的检查：
    /_ eslint-disable no-alert _/
    alert(‘foo’);

3.  在整个文件中禁用多项 eslint 规则的检查：
    /_ eslint-disable no-alert, no-console _/
    alert(‘foo’);
    conle.log(‘bar’);

4.  针对某一行禁用 eslint 检查：
    alert(‘foo’); // eslint-disable-line

// eslint-disable-next-line
alert(‘foo’);

5.  针对某一行的某一具体规则禁用 eslint 检查：
    alert(‘foo’); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert(‘foo’);

6.  针对某一行禁用多项具体规则的检查：

alert(‘foo’); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert(‘foo’);
