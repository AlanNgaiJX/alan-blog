---
title: CRUD
sidebarDepth: 2
---
## 创建文档

```
db.集合名.insertOne(JSON对象)

db.集合名.insertMany(JSON数组)
```

若集合不存在就自动创建集合。

## 删除文档

### remove

删除单个文档或与指定过滤器匹配的所有文档。

```
db.集合名.remove(条件，是仅否删除一条)
```

### deleteOne

即使多个文档可能与指定过滤器匹配，也最多删除一个与指定过滤器匹配的文档。 *3.2版中的新功能*

### deleteMany

删除单个文档或与指定过滤器匹配的所有文档。

## 查询文档

```
db.集合名.find(条件 [,期望返回的列])

可以追加.pretty() 格式化打印结果
```

条件：{列: {运算符: 值}}

* 所有：{}或不写
* 查询age=6：{age: 6}
* 查询age=6，sex=男：{age:6, sex:男}
* 查询大于6岁：{age: {$gt: 6}}
* 查询6岁、18岁：{age: {$in: [6,18]} }

运算符有：

* $lt、$lte：less than、lest than equal
* $gt、$gte：great than、great than equal
* $in、$nin：in、not in

查询的列（第二参数）

* 默认显示所有的列
* 只显示age列 {age:1}
* 显示除了age列 {age:0}

### 查询运算符一览

### 查询运算符（比较）

#### eq

匹配等于指定值的值。

```
# 查询 nickname 为 alex
db.students.findOne({nickname:{ $eq: "alex" }})
```

#### ne

匹配不等于指定值的值。

```
# 查询 nickname 不为 alex
db.students.findOne({nickname:{ $ne: "alex" }})
```

#### gt

匹配大于指定值的值。

```
# 查询 age 大于20 的一项
db.students.findOne({age:{ $gt: 20 }})
```

#### gte

匹配大于等于指定值的值。

```
# 查询 age 大于或等于20 的一项
db.students.findOne({age:{ $gte: 20 }})
```

#### lt

匹配小于指定值的值。

```
# 查询 age 小于20 的一项
db.students.findOne({age:{ $lt: 20 }})
```

#### lte

匹配小于或等于指定值的值。

```
# 查询 age 小于或等于20 的一项
db.students.findOne({age:{ $lte: 20 }})
```

#### in

匹配与数组中指定的任何值相等的值。

```
# 查询 age 为 20, 21 或 25 的一项
db.students.findOne({age:{ $in: [20, 21, 25] }})
```

#### nin

匹配与数组中指定的任何值不相等的值。

```
# 查询 age 不为 20, 21 或 25 的一项
db.students.findOne({age:{ $nin: [20, 21, 25] }})
```

### 查询运算符（逻辑）

#### and

使用逻辑 and 连接查询子句，返回与这两个子句条件匹配的所有文档。

```
# 查询 name 为 alice 且 age 等于 25 的一项
db.students.findOne({ $and: [{name: "alice"},{age: 25}]})
```

#### or

使用逻辑 or 连接查询子句，返回与任一子句条件匹配的所有文档。

```
# 查询 name 为 alice 或 name 为 alex 的一项
db.students.findOne({ $or: [{name: "alice"},{name: "alex"}]})
```

#### not

反转查询表达式的效果，并返回与查询表达式_不_匹配的文档。

```
# 查询 age 非大于27 的一项
db.students.findOne({ age: { $not: { $gt: 27}}})
```

#### nor

用逻辑 `NOR`连接查询子句，返回所有不能匹配这两个子句的文档。

```
# 查询 age 非大于25 且 非0 的一项
db.students.findOne({ $nor: [ {age: { $gt: 25}}, {age: 0 }]})
```

### 查询运算符（元素）

#### exisit

当 true时 若该字段有值 或 为null，则为搜索结果。

```
# 查询 books 字段有值或为null的文档
db.students.findOne({ books: { $exists: true}})
```

#### type

若字段的类型和 type 指定的类型匹配，则返回。

```
# 查询 books 字段为数组的文档
db.students.findOne({ books: { $type: 'array'}})

# 其支持的类型有：double | string | object | array | object id | boolean | date | null | timestamp 等

# 更多请参考 https://www.runoob.com/mongodb/mongodb-operators-type.html

```

### 查询运算符（评估）

#### expr

允许在查询语言中使用聚合表达式

```
# 联合多个运算，选出 age 大于 studyYear 的文档
db.students.findOne({ $expr: { $gt: ["$studyYear","$age"]}})
```

#### jsonSchema

根据给定的JSON Schema验证文档。

```
db.createCollection("students", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "name", "year", "major", "gpa" ],
         properties: {
            name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            gender: {
               bsonType: "string",
               description: "must be a string and is not required"
            },
            year: {
               bsonType: "int",
               minimum: 2017,
               maximum: 3017,
               exclusiveMaximum: false,
               description: "must be an integer in [ 2017, 3017 ] and is required"
            },
            major: {
               enum: [ "Math", "English", "Computer Science", "History", null ],
               description: "can only be one of the enum values and is required"
            },
            gpa: {
               bsonType: [ "double" ],
               description: "must be a double and is required"
            }
         }
      }
   }
})

```

#### expr

允许在查询语言中使用聚合表达式

```
# 联合多个运算，选出 age 大于 studyYear 的文档
db.students.findOne({ $expr: { $gt: ["$studyYear","$age"]}})
```

#### mod

取模运算

```
# 取出qty的值，查询其对4取余等于0的数据：

db.inventory.find( { qty: { $mod: [ 4, 0 ] } } )

```

#### regex

选择值与指定的正则表达式匹配的文档。

```
# 搜索 sku 字段匹配指定正则式的文档
db.products.find( { sku: { $regex: /789$/ } } )
```

#### text

执行文本搜索。

```
# 匹配文本中含有coffee的BSON

db.articles.find( { $text: { $search: "coffee" } } )

```

#### where

匹配满足JavaScript表达式的文档。

```

匹配name的值经过md5函数加密后匹配：

db.foo.find( { $where: function() {
   return (hex_md5(this.name) == "9b53e667f30cd329dca1ec9e6a83e994")
} } );

```

### 查询运算符(地理空间)

#### geoIntersects查询运算符

选择与GeoJSON几何形状相交的几何形状。2dsphere索引支持 `$geoIntersects`。

#### geoWithin

选择边界GeoJSON几何内的几何。2dsphere和2D指标支持 `$geoWithin`。

#### near

返回点附近的地理空间对象。需要地理空间索引。2dsphere和2D指标支持 `$near`。

#### nearSphere

返回球体上某个点附近的地理空间对象。需要地理空间索引。2dsphere和2D指标支持 `$nearSphere`。

### 查询运算符(数组)

#### all

匹配包含查询中指定的所有元素的数组。

```
# 搜索 books 包含 java php javascript 的文档
db.students.findOne({books: {$all: ["java", "php", "javascript"]}})
```

#### eleMatch

如果跟指定的数组有交集，则匹配。

```
# 搜索 books 包含 java php javascript 其中一个或多个 的文档
db.students.findOne({books: {$eleMatch: ["java", "php", "javascript"]}})
```

#### size

如果数组字段为指定大小，则选择文档。

```
# 搜索 books 包含 java php javascript 其中一个或多个 的文档
db.students.findOne({books: {$size: 3}})
```

### 查询运算符（按位）

#### bitsAllClear

匹配数字或二进制值，其中一组位的_所有_值均为 `0`。

#### bitsAllSet

匹配数字或二进制值，其中一组位的_所有_值均为 `1`。

#### bitsAnyClear

匹配数值或二进制值，在这些数值或二进制值中，一组位的位置中_任何_位的值为 `0`。

#### bitsAnySet

匹配数值或二进制值，在这些数值或二进制值中，一组位的位置中_任何_位的值为 `1`。匹配数字或二进制值，其中一组位的_所有_值均为 `0`

#### bitsAllClear

匹配数字或二进制值，其中一组位的_所有_值均为 `0`。

### 查询运算符（注释）

#### comment

向查询谓词添加注释。

### 查询运算符（映射)

#### elemMatch

符合指定$elemMatch条件的数组中的第一个元素。

```
db.test.insert({
    "class":"1",
    "student":[
        {"name":"mac","age":18,"sex":true},
        {"name":"jack","age":19,"sex":true},
        {"name":"rose","age":20,"sex":false}
    ]
})

# 查询名字叫mac的同学的班级信息
db.test.find({
"student.name":"mac"
})
# 结果:记录能被查询出来

# 查询名字叫mac,年龄20岁的同学的班级信息
db.test.find({
"student.name":"mac",
"student.age":20
})
# 结果:记录能被查询出来.这并不是我们想要的结果.我们的记录中是有一个叫mac的同学,但是他的年龄并不是20岁,所有这次查询是不正确的.

# 这个时候就需要用到$elemMatch
db.test.find({
"student":{$elemMatch:{"name":"mac","age":20}}
})

```

#### slice

限制从数组中投影的元素数量。支持 `limit`和 `skip`。

```
# 查询输出数组前三个
db.movies.find({title:"Youth Without Youth"},{languages:{$slice:3}}).pretty();

# 查询输出数组后两个
db.movies.find({title:"Youth Without Youth"},{languages:{$slice:-2}}).pretty();

# 查询输出从数组第四个开始，输出前三个
db.movies.find({title:"Youth Without Youth"},{languages:{$slice:[3,3]}}).pretty();

# 查询输出从数组倒数第五个开始，输出前四个
db.movies.find({title:"Youth Without Youth"},{languages:{$slice:[-5,4]}}).pretty();



```

#### meta

项目在$text操作期间分配的文档分数。

```
db.stores.find( 
      { $text: { $search: "java coffee shop" } },
      { score: { $meta: "textScore" } }
  ).sort( { score: { $meta: "textScore" } } )
```

## 更新文档

```
db.集合名.update(条件，更新运算符 [,是否新增, 是否修改多条])
```

### 更新运算符一览

### 更新运算符（字段）

#### set

设置字段的值

```
# 修改 字段nickname 为 alex 的文档，的 nickname 字段为 alice
db.c1.update({nickname:"alex"},{$set:{nickname:"alice"}})
```

#### unset

删除指定字段的值

```
# 修改 字段nickname 为 alex 的文档，删除 nickname 字段的值
db.c1.update({nickname:"alex"}, {$unset: {nickname: true}})
```

#### inc

将字段的值增加指定的数量

```
# 修改 nickname 为 alex 的文档，的 age字段的值 -=2
db.c1.update({nickname:"alex"},{$inc: age: -2})
```

#### mul

将字段的值乘以指定的数量

```
# 修改 nickname 为 alex 的文档，的 age字段的值 *=2
db.c1.update({nickname:"alex"},{$mul: age: 2})
```

#### currentDate

将字段的值设置为当前日期

```
# 修改 nickname 为 alex 的文档，的 age字段的值 为当前时间（date类型）
db.students.updateOne({ nickname: 'alex' }, { $currentDate: { age: true})

# 修改为 date 类型
db.students.updateOne({ nickname: 'alex' }, { $currentDate: { age: { $type: "date"}}})

# 修改为 timestamp 类型
db.students.updateOne({ nickname: 'alex' }, { $currentDate: { age: { $type: "timestamp "}}})
```

#### rename

字段重命名

```
# 修改 nickname 为 alex 的 nickname 字段名为 uname，此时表中增加一个字段为 uname，将该行文档 nickname中的值剪切到uname中
db.c1.update({nickname:"alex"},{$rename:{nickname: 'uname'}})
```

#### min

仅当指定值小于现有字段值时才更新该字段。

```
# 如果 min 中指定的 24 小于当前字段的值，则更新，否则不更新
db.students.updateOne({ name: 'alan' }, { $min: { age: 24}})
```

#### max

仅当指定值大于现有字段值时才更新该字段。

```
# 如果 min 中指定的 24 大于当前字段的值，则更新，否则不更新
db.students.updateOne({ name: 'alan' }, { $max: { age: 24}})
```

#### setOnInsert

如果更新导致插入文档（第三参数{ upsert: true }，并且无匹配的文档时，插入一个文档），则设置字段的值。对修改现有文档的更新操作没有影响。

这个比较抽象，因为是需要配合 第三参数{ upsert: true } 一起使用才有效，否则这个操作符不会产生任何影响。

如果没找到需要更新的那行文档，则创建一行文档，并把值设置进去。否则不会有任何作用。

```
# 查找 name: 'alice'的文档，如果没有，则插入一个文档 {name: 'alice', age: 25}}。如果有则不产生任何影响.
db.students.updateOne({ name: 'alice' }, { $setOnInsert: { age: 25}},{ upsert: true})
```

### 更新运算符（数组）

#### addToSet

仅当元素不存在于集合中时才将它们添加到数组中。

```
# 查找 name: 'alan' 的文档，若有 books数组中无 php，则添加，若有则不操作。
db.students.updateOne({ name: 'alan' },{ $addToSet:{books: "php"}})
```

#### push

将项目添加到数组。

```
# 查找 name: 'alan' 的文档，若有 books字段并且是数组，在books数组下增加 java；若无books字段，则创建并设置为 ["java"]
db.students.updateOne({ name: 'alan' },{ $push:{books: "java"}})
```

#### pop

删除数组的第一项或最后一项。-1是第一个，1是最后一个。

```
# 查找 name: 'alan' 的文档，在books数组下删除 第一 项
db.students.updateOne({ name: 'alan' },{ $pop:{books: -1}})
```

#### pull

删除与指定查询匹配的所有数组元素将项目添加到数组

```
# 查找 name: 'alan' 的文档，在books数组下删除 java 项
db.students.updateOne({ name: 'alan' },{ $pull:{books: "java"}})
```

#### pullAll

从数组中删除所有匹配的值

```
# 查找 name: 'alan' 的文档，在books数组下删除 java 项 和 php 项
db.students.updateOne({ name: 'alan' },{ $pullAll:{books: ["java", "php"]}})
```

### 第二、三参数

* 第二参数，boolean，如果不匹配是否新增文档，默认false
* 第三参数，boolean，是否修改所有匹配的文档，默认false，即只修改第一个匹配
