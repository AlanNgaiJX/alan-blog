---
title: Mongo Shell
sidebarDepth: 2
---
## mongo shell概念

mongo shell 是mongoDB的命令行工具，它使用js引擎构建，可以使用js语法。

mongod 开启服务后
mongod 进入mongo shell

## mongoDB的核心

* 数据库 => 仓库
* 集合 => 架子
* 文档 => 物品

## 进入Mongo Shell

```
# 本地连接
mongo

# 远程连接
mongo "mongodb://alice@mongodb0.examples.com:28015/?authSource=admin"

# 等价上面的语句
mongo --username alice --password --authenticationDatabase admin --host mongodb0.examples.com --port 28015

```

## 退出 Mongo Shell

```
quit()


```

## 清屏

cls

## 查看所有数据库

show databases

```
> show databases
admin   0.000GB
config  0.000GB
local   0.000GB
```

## 查看当前数据库

```
db
```

## 选择(创建)数据库

```
> use admin
switched to db admin
```

## 创建集合

```
db.createCollection('集合名')
{ "ok" : 1 }// 即是创建成功
```

若数据库不存在则创建数据库。

## 查看数据库所有集合

```
> show collections
test1
```

## 删除集合

```
db.集合名.drop()
```

```
> db.test1.drop()
true
```

## 删除数据库

```
use 数据库名
db.dropDatabase()
```

## 创建文档

```
db.集合名.insertOne(JSON对象)

db.集合名.insertMany(JSON数组)
```

若集合不存在就自动创建集合。

## 查询文档

```
db.集合名.find(条件 [,期望返回的列])

可以追加.pretty() 格式化打印结果
```

## 更新文档

```
db.集合名.update(条件，更新运算符 [,是否新增, 是否修改多条])
```

## 删除文档

db.集合名.remove(条件，是仅否删除一条)

## 排序

db.c1.find().sort(条件)

1是升序，-1是降序

* 所有文档按年龄升序：db.c1.find().sort({age: 1})

## 分页

db.c1.find().sort(条件).skip(数字).limit(数字)

* skip跳过指定数量
* limt限制查询数量

## 统计

db.c1.find().count()

## 聚合查询

聚合查询是一种统计手段。

db.集合名称.aggregate([ {管道1: {} }, {管道2: {}},...])
（aggregate：合计 | ˈaɡriɡət |）

### 常用管道

管道语法：{ $group: { 表达式 } }

* $group 分组
* $match 过滤
* $sort 排序
* $skip 跳过
* $limit 限制

### 常用表达式

* $sum 求和， $sum:1等同于count统计
* $avg 平均
* $min 最小
* $max 最大

### 现有文档如下

```bash
{ "uname" : "a0", "age" : 0, "sex" : 1 }
{ "uname" : "a1", "age" : 1, "sex" : 2 }
{ "uname" : "a2", "age" : 2, "sex" : 1 }
{ "uname" : "a3", "age" : 3, "sex" : 2 }
{ "uname" : "a4", "age" : 4, "sex" : 1 }
```

* 分别统计男生女生的总年龄

```bash
> db.c1.aggregate([
    {
        $group:{
            _id: "$sex", 
            totalAge: {$sum: "$age"}
        }  
    }
])

{ "_id" : 2, "totalAge" : 4 }
{ "_id" : 1, "totalAge" : 6 }
> 

```

* 分别统计男生女生的总人数

```bash
> db.c1.aggregate([
    {
        $group:{
            _id: "$sex", 
            count: {$sum: 1}
        }  
    }
])

{ "_id" : 2, "count" : 2 }
{ "_id" : 1, "count" : 3 }
> 

```

* 统计总人数和平均年龄

```bash

# 不需要分组时，_id : null
> db.c1.aggregate([
    {
        $group:{
            _id: null, 
            count: {$sum: 1},
            avgAge: {$avg: "$age"}
        }  
    }
])

{ "_id" : null, "count" : 5, "avgAge" : 2 }
> 

```

* 分别查询男生女生的总人数，按人数升序排列

用多个管道处理。

```bash

> db.c1.aggregate([
    {
        $group:{
            _id: "$sex",
            count: { $sum: 1}
        }
    },
  
    {
        $sort:{
                count: 1
        }
    }
])

{ "_id" : 2, "count" : 2 }
{ "_id" : 1, "count" : 3 }
>
```

## 索引

* 优点：提高查询效率，降低IO成本，降低CPU消耗
* 缺点：占用磁盘，每次插入和修改数据都需要更新索引

### 创建索引

db.集合名.createIndex(带创建索引的列 [,额外选项])

创建uname升序索引
db.c1.createIndex({uname: 1})

创建uname升序索引，并为其指定索引名
db.c1.createIndex({uname: 1}, {name: "the uname index"})

创建复合索引（多个键组合成的索引）
db.c1.createIndex({uname: 1, age: 1})

创建唯一索引
db.c1.createIndex({mail: 1}, { unique: "mail"})

设置了mail的唯一索引之后，所有文档的mail的值都必须不重复。跟_id很像。

### 查看索引

db.集合名.getIndexes()

### 删除索引

db.集合名.dropIndexes()

db.集合名.dropIndex(索引名)

### 分析索引

db.集合名.find(条件).explain('excutionStats')

* COLLSCAN：全表扫描（最慢）
* IXSCAN：索引扫描（较快）
* FETCH：根据索引去检索指定文档（较快）

注意查看executionStats字段中的信息，它们是检索的性能指标，其中executionTimeMillis表示检索到目标的耗时。

### 应该为哪些列添加为索引？

* 经常作条件、排序、分组等操作的字段
* 唯一性较强的字段，如性别（同值较少？）
* 选择较小的数据列，为较长的字符串使用前缀索引，这样索引文件更小

## 权限管理

db.createUser({
    "user": 账号,
    "pwd": 密码,
    "roles": [{
        role: 角色,
        db: 所属数据库
    }]
})

### 角色种类

#### Built-In Roles（内置角色）：

    1. 数据库用户角色：read、readWrite;
    2. 数据库管理角色：dbAdmin、dbOwner、userAdmin；
    3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
    4. 备份恢复角色：backup、restore；
    5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
    6. 超级用户角色：root
    // 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）
    7. 内部角色：__system

#### 具体角色：

Read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
root：只在admin数据库中可用。超级账号，超级权限。

### 开启验证模式

指用户需要账号密码才能登录使用

1. 添加超级管理员

```
use admin

db.createUser({
    "user": "rootAdmin",
    "pwd": "123456",
    "roles": [{
        role: "root",
        db: "admin"
    }]
})
```

2. 退出服务

```

mongod --remove

...stopped
...removed

```

3.安装需要身份验证的MongoDB服务，启动服务（其实就是启动服务时多了--auth参数，表示服务内需要验证身份）

sudo mongod  --dbpath ~/mongo_data_log/data/db --logpath ~/mongo_data_log/logs/mongodb.log --auth

4.通过超级管理员账号登录

方式一：
mongo 服务器ip地址:端口/数据库 -u 用户名 -p 密码

方式二：

mongo

use 数据库

db.auth(用户名，密码)

5. 继续给数据库创建一个readWrite权限的用户

```
db.createUser({
    "user": "devGroupup",
    "pwd": "123456",
    "roles": [{
        role: "readWrite",
        db: "groupupdb"
    }]
})
```

### 查看所有数据库用户

db.system.users.find().pretty()

## 数据备份

### 备份

mongodump -h -prot -u -p -d -0

-h host 服务器Ip地址（默认本机）
-port 端口
-u user，账号
-p pwd，密码
-d database 数据库
-o 输出到指定目录下

### 还原

mongorestore -h -port -u -p --drop

-d 不写则还原全部数据
--drop 先删除再导入
