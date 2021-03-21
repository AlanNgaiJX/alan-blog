---
title: HTTP与HTTPS
sidebarDepth: 2
---

## HTTP
### 定义

* HTTP，超文本传输协议（Hyper Text Transfer Protocol）。

* 是基于TCP/IP协议的 **应用层**协议，规定了客户端和服务器间的通信模式（即请求和响应）。

### 特点

* 客户端和服务器间必须先建立TCP连接

* HTTP协议是一种无状态协议，过去的请求与当前的请求没有联系。

### 基础
#### 请求报文
HTTP协议，规定发送请求时，请求报文遵循以下格式：

<img src="~@blogImages/l1.jpeg" width="400" style="display: block;"/>
<br/>

* 请求行，即对应Gneral中的部分属性

* 首部行，即对应Request Header中的属性，详见【HTTP Header属性一览】

#### 响应报文

HTTP协议，规定返回响应时，响应报文遵循以下格式：
<img src="~@blogImages/l2.jpeg" width="400" style="display: block;"/>
<br/>

* 响应行，即对应Gneral中的部分属性

* 首部行，即对应Response Header中的属性，详见【HTTP Header属性一览】

### 历史版本与其功能
| 版本 | 产生时间 | 内容 | 发展现状 |
| --- | --- | --- | --- |
| HTTP/0.9 | 1991年 | 不涉及数据包传输，规定客户端和服务器之间通信格式，只能GET请求 | 没有作为正式的标准 |
| HTTP/1.0 | 1996年 | 传输内容格式不限制，增加PUT、PATCH、HEAD、 OPTIONS、DELETE命令 | 正式作为标准 |
| HTTP/1.1 | 1997年 | 持久连接(长连接)、节约带宽、HOST域、管道机制、分块传输编码 | 2015年前使用最广泛 |
| HTTP/2 | 2015年 | 多路复用、服务器推送、头信息压缩、二进制协议等 | 逐渐覆盖市场 |

#### HTTP/0.9

* 只有GET命令

* 服务器只能响应HTML格式字符串

缺陷：实验性阶段，标准未明确，实用性差。

#### HTTP/1.0

* 新增POST、HEAD命令

* 可发送任何格式的数据，如，图像、视频、二进制文件【主要】

* 确定了报文格式的三层结构

缺陷：每个TCP链接只能发送一个请求，效率很低（如果想用持久性连接，就必须在header中添加Connection: keep-alive）。

#### HTTP/1.1

1. **标准化了持久性连接**【主要】

* TCP连接默认不关闭，可以被多个请求复用，也无需声明Connection。

* 客户端和服务器间发现对方一段时间没有活动，就可以主动关闭连接。

* 对于同一个域名，大多数浏览器允许同时建立6个持久性连接。


2. **引入了管道机制**【主要】

* 在同一个TCP连接里，客户端可同时发送多个请求
    
* 服务器还是按照顺序先后回应请求

3. Header中新增了HOST字段

* 由于一个IP可对应多个域名

* 从此请求可以发送到同一台服务器上的不同域名的网站上。

4. 新增了PUT、PATCH、HEAD、 OPTIONS、DELETE方法。


缺陷：

* 队头堵塞。同一个TCP里虽然可以同时发送多个请求，但是服务器还是顺序进行响应的，这就可能造成前一个响应堵塞后一个响应的问题。

* 应对方法：减少HTTP请求、同时多开持久性连接。

#### Google 提出SPDY

* 在HTTP/1.1到HTTP/2这段时间之间，google提出了SPDY方案。

* 这个方案成为了HTTP/2的基础。

* 主要包括了多工机制、header压缩、服务端推送等内容。

#### HTTP/2

1. **多工机制（Multiplexing）**【主要】

* 在1.1中已经实现了在同一个TCP连接中发送多个请求，但是响应依然是按请求顺序逐个响应的，这样队头堵塞问题是不可避免的。

* 在HTTP/2中，响应不需要按顺序逐个进行响应。

* 在一个TCP连接里面，服务器同时收到了A请求和B请求，于是先回应A请求，结果发现处理过程非常耗时，于是就发送A请求已经处理好的部分， 接着回应B请求，完成后，再发送A请求剩下的部分。

2. **数据流**

* 由于多工机制，服务器每次响应的数据包可能是不完整的，于是会拆分为多次数据包。

* 这些数据包被打上了Id，以区分是属于哪个请求的，这种机制称为数据流。

3. **服务器推送**。允许服务器主动向客户端发送资源。

4. 报文格式既可采用文本，也可采用二进制数据。

5. 报文头信息压缩。过去头信息老长了，还不断重复发送。

#### 图示多工机制
<br/>
<img src="~@blogImages/l3.jpeg" width="600" style="display: block;"/>
<br/>

## HTTPS

### 定义

* 在安全套接层上的HTTP协议，Hyper Text Transfer Protocol over SecureSocket Layer
* 基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护

### 详看【SSL/TLS协议】

### HTTPS与HTTP的具体区别

* HTTPS在通信过程中更安全（体现在数据加密、验证身份、保证数据完整性）

* HTTPS需要花钱买CA证书

* HTTPS在TCP的基础上多出了SSL握手，握手效率较慢一点

* HTTPS要求服务器进行对话密钥解密，较为消耗CPU进行加密计算

## 参考
[阮一峰，HTTP协议入门](http://www.ruanyifeng.com/blog/2016/08/http.html)
[http http2和https的区别](https://blog.csdn.net/come11234/article/details/103031213)
[HTTP和HTTPS协议](https://juejin.cn/post/6844903990648389645#heading-10)

## 遗留问题

HTTP2 与 HTTPS 的区别
HTTPS 与 HTTP 的区别
什么是SSL 和 tls
HTTP与TCP/IP的关系是怎样的
为什么说HTTP是无状态协议
cookie在HTTP中扮演了什么角色，解决了什么问题
什么是长连接