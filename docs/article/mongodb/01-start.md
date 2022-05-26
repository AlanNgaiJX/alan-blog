---
title: 初始
sidebarDepth: 2
---

## 初始

### 文档

官网：https://www.mongodb.com/

中文手册：https://docs.mongoing.com/the-mongo-shell

mongoose中文网：http://www.mongoosejs.net/docs/index.html （有广告）

mongoose英文文档：https://mongoosejs.com/docs/api/aggregate.html#aggregate_Aggregate-addFields

### 安装

#### Linux下

方案一：推荐使用堡塔安装，省心省力。

方案二：

* 参考 [https://www.cnblogs.com/zhunong/p/12736471.html](https://www.cnblogs.com/zhunong/p/12736471.html)
* 下载包文件，mongodb-linux-x86_64-rhel70-5.0.8.tgz，并放置到 /root/software/mongodb 下
* 解压包文件 tar -zxvf mongodb-linux-x86_64-rhel70-5.0.8.tgz
* 配置环境变量 vi /etc/profile
* export PATH=   (之前已添加的path):/root/software/mongodb/mongodb-linux-x86_64-rhel70-5.0.8/bin:$PATH
* source /etc/profile
* 在mongodb文件夹下创建 logs 和 data 文件夹
* 在 /root/software/mongodb/mongodb-linux-x86_64-rhel70-5.0.8/bin 下创建配置文件 mongodb.conf
* ```
  # mongodb 配置文件
  port=27017 #端口
  bind_ip=0.0.0.0 #默认是127.0.0.1
  dbpath=/root/software/mongodb/data #数据库存放文件夹
  logpath=/root/software/mongodb/logs/mongodb.log #日志文件
  fork=true #设置后台运行
  #auth=true #开启认证
  ```
* 配置防火墙（但发现FirewallD is not running，防火墙未启动）(去阿里云配置防火墙端口)
* ```
  # 放行 27017 端口号 使用默认的
  firewall-cmd --zone=public --add-port=27017/tcp --permanent

  # 查看放行端口号
  firewall-cmd --list-ports

  # 重启防火墙
  firewall-cmd --reload
  ```
* 启动 mongodb
* ```
  mongod --config /root/software/mongodb/mongodb-linux-x86_64-rhel70-5.0.8/bin/mongodb.conf
  ```
* ```
  见此即是成功启动

  [root@izbp181hjb2ku62j55vo8cz software]# mongod --config /root/software/mongodb/mongodb-linux-x86_64-rhel70-5.0.8/bin/mongodb.conf
  about to fork child process, waiting until server is ready for connections.
  forked process: 7696
  child process started successfully, parent exiting
  ```
* 本地连接客户端 mongo
* 用可视化工具远程连接 Studio 3T
* 创建账号，修改配置启动认证，重启mongodb
* ```
  use admin db.createUser({ "user": "rootAdmin", "pwd": "...JYQ1", "roles": [{ role: "root", db: "admin" }] })

  // use database 后 认证命令
  db.auth('rootAdmin','...YQ1')
  ```


#### MacOs下

* 配置文件：/usr/local/etc/mongod.conf
* 日志文件路径：/usr/local/var/log/mongodb
* 数据存放路径：/usr/local/var/mongodb
