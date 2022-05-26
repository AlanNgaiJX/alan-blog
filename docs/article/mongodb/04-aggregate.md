---
title: 聚合
sidebarDepth: 2
---
## 聚合

聚合操作处理数据记录和 return 计算结果。

聚合操作将来自多个文档的值组合在一起，并且可以对分组数据执行各种操作以返回单个结果。

## 三种聚合方式

* 聚合管道
* map-reduce-function
* 单一目的的聚合方法

## 聚合管道

聚合管道是用于数据聚合的框架，其模型基于数据处理管道的概念。

文档进入多阶段管道，将文档转换为聚合结果。

```
db.orders.aggregate([
    { $match: { status: "A" } },
    { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
])
```

 **第一阶段** ：[`$match`](/aggregation/aggregation-pipeline)阶段按 `status`字段过滤文档，并将 `status`等于 `"A"`的文档传递到下一阶段。

 **第二阶段** ：[`$group`](/aggregation/aggregation-pipeline)阶段按 `cust_id`字段将文档分组，以计算每个 `cust_id`唯一值的金额总和。

## 管道阶段

### match

跟find的第一参数一样


### addFields

向文档添加新字段。类似于project，set是addFields的别名。

```
{
  _id: 1,
  student: "Maya",
  homework: [ 10, 5, 10 ],
  quiz: [ 10, 8 ],
  extraCredit: 0
}
{
  _id: 2,
  student: "Ryan",
  homework: [ 5, 6, 5 ],
  quiz: [ 8, 8 ],
  extraCredit: 8
}
```

```
db.scores.aggregate( [
   {
     $addFields: {
       totalHomework: { $sum: "$homework" } ,
       totalQuiz: { $sum: "$quiz" }
     }
   },
   {
     $addFields: { totalScore:
       { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
   }
] )
```

```
{
  "_id" : 1,
  "student" : "Maya",
  "homework" : [ 10, 5, 10 ],
  "quiz" : [ 10, 8 ],
  "extraCredit" : 0,
  "totalHomework" : 25,
  "totalQuiz" : 18,
  "totalScore" : 43
}
{
  "_id" : 2,
  "student" : "Ryan",
  "homework" : [ 5, 6, 5 ],
  "quiz" : [ 8, 8 ],
  "extraCredit" : 8,
  "totalHomework" : 16,
  "totalQuiz" : 16,
  "totalScore" : 40
}
```

### count

返回聚合管道此阶段的文档数量计数。

```
{ "_id" : 1, "subject" : "History", "score" : 88 }
{ "_id" : 2, "subject" : "History", "score" : 92 }
{ "_id" : 3, "subject" : "History", "score" : 97 }
{ "_id" : 4, "subject" : "History", "score" : 71 }
{ "_id" : 5, "subject" : "History", "score" : 79 }
{ "_id" : 6, "subject" : "History", "score" : 83 }
```

```
db.scores.aggregate(
  [
    {
      $match: {
        score: {
          $gt: 80
        }
      }
    },
    {
      $count: "passing_scores"
    }
  ]
)
```

```
{ "passing_scores" : 4 }
```

### group

按指定的标识符表达式对文档进行分组，并将 累加器表达式(如果指定) ，应用于每个组。

使用所有输入文档并为每个不同的组输出一个文档。

输出文档只包含标识符字段和累积字段(如果指定的话)。

```
{ 
    "_id" : ObjectId("6288a9f57ad413fb1d855e8b"), 
    "age" : 23.0, 
    "type" : 0.0, 
    "name" : "alex", 
    "purse" : [
        5.0, 
        10.0, 
        20.0, 
        100.0
    ]
}
{ 
    "_id" : ObjectId("6288aa0d7ad413fb1d855e8c"), 
    "name" : "alan", 
    "age" : 24.0, 
    "books" : [
        "java", 
        "php", 
        "javascript"
    ], 
    "type" : 0.0, 
    "purse" : [
        5.0, 
        10.0, 
        20.0
    ]
}
{ 
    "_id" : ObjectId("6288b271653dc90af756a29e"), 
    "name" : "alice", 
    "age" : 25.0, 
    "type" : 1.0, 
    "purse" : [
        5.0, 
        10.0, 
        20.0
    ]
}

```

```
db.students.aggregate([{$group: { _id: "$type"}}])
```

```
{ 
    "_id" : 1.0
}
{ 
    "_id" : 0.0
}

```

#### group可用的操作符

#### push

```
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }
{ "_id" : 6, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-15T12:05:10Z") }
{ "_id" : 7, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T14:12:12Z") }
```

```
db.sales.aggregate(
   [
   { $sort: { date: 1, item: 1 } },
   {
       $group:
         {
           _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
           itemsSold: { $push:  { item: "$item", quantity: "$quantity" } }
         }
     }
   ]
)
```

```
{
   "_id" : { "day" : 46, "year" : 2014 },
   "itemsSold" : [
      { "item" : "abc", "quantity" : 10 },
      { "item" : "xyz", "quantity" : 10 },
      { "item" : "xyz", "quantity" : 5 },
      { "item" : "xyz", "quantity" : 10 }
   ]
}
{
   "_id" : { "day" : 34, "year" : 2014 },
   "itemsSold" : [
      { "item" : "jkl", "quantity" : 1 },
      { "item" : "xyz", "quantity" : 5 }
   ]
}
{
   "_id" : { "day" : 1, "year" : 2014 },
   "itemsSold" : [ { "item" : "abc", "quantity" : 2 } ]
}
```

#### addToSet

```
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:12:00Z") }
```

```
db.sales.aggregate(
   [
     {
       $group:
         {
           _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
           itemsSold: { $addToSet: "$item" }
         }
     }
   ]
)
```

```
{ "_id" : { "day" : 46, "year" : 2014 }, "itemsSold" : [ "xyz", "abc" ] }
{ "_id" : { "day" : 34, "year" : 2014 }, "itemsSold" : [ "xyz", "jkl" ] }
{ "_id" : { "day" : 1, "year" : 2014 }, "itemsSold" : [ "abc" ] }
```

#### sum

```
db.students.aggregate([{$group: { _id: "$type" , sumAge: {$sum: "$age"}}}])
```

```
{ 
    "_id" : 1.0, 
    "sumAge" : 25.0
}
{ 
    "_id" : 0.0, 
    "sumAge" : 47.0
}

```

#### avg

```
db.students.aggregate([{$group: { _id: "$type" , avgAge: {$avg: "$age"}}}])
```

```
{ 
    "_id" : 0.0, 
    "avgAge" : 23.5
}
{ 
    "_id" : 1.0, 
    "avgAge" : 25.0
}

```

#### count

```
db.cakeSales.insertMany( [
   { _id: 0, type: "chocolate", orderDate: new Date("2020-05-18T14:10:30Z"),
     state: "CA", price: 13, quantity: 120 },
   { _id: 1, type: "chocolate", orderDate: new Date("2021-03-20T11:30:05Z"),
     state: "WA", price: 14, quantity: 140 },
   { _id: 2, type: "vanilla", orderDate: new Date("2021-01-11T06:31:15Z"),
     state: "CA", price: 12, quantity: 145 },
   { _id: 3, type: "vanilla", orderDate: new Date("2020-02-08T13:13:23Z"),
     state: "WA", price: 13, quantity: 104 },
   { _id: 4, type: "strawberry", orderDate: new Date("2019-05-18T16:09:01Z"),
     state: "CA", price: 41, quantity: 162 },
   { _id: 5, type: "strawberry", orderDate: new Date("2019-01-08T06:12:03Z"),
     state: "WA", price: 43, quantity: 134 }
] )
```

```
# 统计每个组有多少个文档
db.cakeSales.aggregate( [
   {
      $group: {
         _id: "$state",
         countNumberOfDocumentsForState: {
            $count: {}
         }
      }
   }
] )
```

```
{ "_id" : "CA", "countNumberOfDocumentsForState" : 3 }
{ "_id" : "WA", "countNumberOfDocumentsForState" : 3 }
```

#### first

```
db.sales.insertMany( [
   { "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") },
   { "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") },
   { "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") },
   { "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") },
   { "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") },
   { "_id" : 6, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-15T12:05:10Z") },
   { "_id" : 7, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T14:12:12Z") }
] )
```

```
db.sales.aggregate(
   [
     { $sort: { item: 1, date: 1 } },
     {
       $group:
         {
           _id: "$item",
           firstSale: { $first: "$date" }
         }
     }
   ]
)
```

```
[
   { _id: 'jkl', firstSale: ISODate("2014-02-03T09:00:00.000Z") },
   { _id: 'xyz', firstSale: ISODate("2014-02-03T09:05:00.000Z") },
   { _id: 'abc', firstSale: ISODate("2014-01-01T08:00:00.000Z") }
]
```

#### last

```
{ "_id" : 1, "item" : "abc", "date" : ISODate("2014-01-01T08:00:00Z"), "price" : 10, "quantity" : 2 }
{ "_id" : 2, "item" : "jkl", "date" : ISODate("2014-02-03T09:00:00Z"), "price" : 20, "quantity" : 1 }
{ "_id" : 3, "item" : "xyz", "date" : ISODate("2014-02-03T09:05:00Z"), "price" : 5, "quantity" : 5 }
{ "_id" : 4, "item" : "abc", "date" : ISODate("2014-02-15T08:00:00Z"), "price" : 10, "quantity" : 10 }
{ "_id" : 5, "item" : "xyz", "date" : ISODate("2014-02-15T09:05:00Z"), "price" : 5, "quantity" : 10 }
{ "_id" : 6, "item" : "xyz", "date" : ISODate("2014-02-15T12:05:10Z"), "price" : 5, "quantity" : 5 }
{ "_id" : 7, "item" : "xyz", "date" : ISODate("2014-02-15T14:12:12Z"), "price" : 5, "quantity" : 10 }
```

```
db.sales.aggregate(
   [
     { $sort: { item: 1, date: 1 } },
     {
       $group:
         {
           _id: "$item",
           lastSalesDate: { $last: "$date" }
         }
     }
   ]
)
```

```
{ "_id" : "xyz", "lastSalesDate" : ISODate("2014-02-15T14:12:12Z") }
{ "_id" : "jkl", "lastSalesDate" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : "abc", "lastSalesDate" : ISODate("2014-02-15T08:00:00Z") }
```

#### max

```
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }
```

```
db.sales.aggregate(
   [
     {
       $group:
         {
           _id: "$item",
           maxTotalAmount: { $max: { $multiply: [ "$price", "$quantity" ] } },
           maxQuantity: { $max: "$quantity" }
         }
     }
   ]
)
```

```
{ "_id" : "xyz", "maxTotalAmount" : 50, "maxQuantity" : 10 }
{ "_id" : "jkl", "maxTotalAmount" : 20, "maxQuantity" : 1 }
{ "_id" : "abc", "maxTotalAmount" : 100, "maxQuantity" : 10 }
```

#### min

```
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }
```

```
db.sales.aggregate(
   [
     {
       $group:
         {
           _id: "$item",
           minQuantity: { $min: "$quantity" }
         }
     }
   ]
)
```

```
{ "_id" : "xyz", "minQuantity" : 5 }
{ "_id" : "jkl", "minQuantity" : 1 }
{ "_id" : "abc", "minQuantity" : 2 }
```

#### mergeObjects

```
db.sales.insertMany( [
   { _id: 1, year: 2017, item: "A", quantity: { "2017Q1": 500, "2017Q2": 500 } },
   { _id: 2, year: 2016, item: "A", quantity: { "2016Q1": 400, "2016Q2": 300, "2016Q3": 0, "2016Q4": 0 } } ,
   { _id: 3, year: 2017, item: "B", quantity: { "2017Q1": 300 } },
   { _id: 4, year: 2016, item: "B", quantity: { "2016Q3": 100, "2016Q4": 250 } }
] )
```

```
db.sales.aggregate( [
   { $group: { _id: "$item", mergedSales: { $mergeObjects: "$quantity" } } }
] )
```

```
{
  _id: 'A',
  mergedSales: { '2017Q1': 500, '2017Q2': 500, '2016Q1': 400, '2016Q2': 300, '2016Q3': 0, '2016Q4': 0 }
},
{
  _id: 'B',
  mergedSales: { '2017Q1': 300, '2016Q3': 100, '2016Q4': 250 }
}
```

### limit

返回前5条文档给下个管道，一般配合sort使用

```
db.article.aggregate([
   { $limit : 5 }
]);
```

### sort

按某种方式排序文档

```
db.users.aggregate(
   [
     { $sort : { age : -1, posts: 1 } }
   ]
)
```

### skip

```
db.article.aggregate([
    { $skip : 5 }
]);
```

### unwind

```
db.inventory.insertOne({ "_id" : 1, "item" : "ABC1", sizes: [ "S", "M", "L"] })
```

```
db.inventory.aggregate( [ { $unwind : "$sizes" } ] )
```

```
{ "_id" : 1, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "L" }
```


### project

文档种保留指定的列送给下一个管道，0 隐藏 | 1 保留。

```
{
  "_id" : 1,
  title: "abc123",
  isbn: "0001122223334",
  author: { last: "zzz", first: "aaa" },
  copies: 5
}
```

```
db.books.aggregate( [ { $project : { title : 1 , author : 1 } } ] )
```

```
{ "_id" : 1, "title" : "abc123", "author" : { "last" : "zzz", "first" : "aaa" } }
```


### lookup

连表查询

#### 例一

查普通属性中的

```
db.orders.insertMany( [
   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
   { "_id" : 3  }
] )

db.inventory.insertMany( [
   { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },
   { "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 },
   { "_id" : 3, "sku" : "cashews", "description": "product 3", "instock" : 60 },
   { "_id" : 4, "sku" : "pecans", "description": "product 4", "instock" : 70 },
   { "_id" : 5, "sku": null, "description": "Incomplete" },
   { "_id" : 6 }
] )
```

```
db.orders.aggregate( [
   {
     $lookup:
       {
         from: "inventory",
         localField: "item",
         foreignField: "sku",
         as: "inventory_docs"
       }
  }
] )
```

```
{
   "_id" : 1,
   "item" : "almonds",
   "price" : 12,
   "quantity" : 2,
   "inventory_docs" : [
      { "_id" : 1, "sku" : "almonds", "description" : "product 1", "instock" : 120 }
   ]
}
{
   "_id" : 2,
   "item" : "pecans",
   "price" : 20,
   "quantity" : 1,
   "inventory_docs" : [
      { "_id" : 4, "sku" : "pecans", "description" : "product 4", "instock" : 70 }
   ]
}
{
   "_id" : 3,
   "inventory_docs" : [
      { "_id" : 5, "sku" : null, "description" : "Incomplete" },
      { "_id" : 6 }
   ]
}
```

#### 例二

连表查数组中的项

```
db.classes.insertMany( [
   { _id: 1, title: "Reading is ...", enrollmentlist: [ "giraffe2", "pandabear", "artie" ], days: ["M", "W", "F"] },
   { _id: 2, title: "But Writing ...", enrollmentlist: [ "giraffe1", "artie" ], days: ["T", "F"] }
] )

db.members.insertMany( [
   { _id: 1, name: "artie", joined: new Date("2016-05-01"), status: "A" },
   { _id: 2, name: "giraffe", joined: new Date("2017-05-01"), status: "D" },
   { _id: 3, name: "giraffe1", joined: new Date("2017-10-01"), status: "A" },
   { _id: 4, name: "panda", joined: new Date("2018-10-11"), status: "A" },
   { _id: 5, name: "pandabear", joined: new Date("2018-12-01"), status: "A" },
   { _id: 6, name: "giraffe2", joined: new Date("2018-12-01"), status: "D" }
] )
```

```
db.classes.aggregate( [
   {
      $lookup:
         {
            from: "members",
            localField: "enrollmentlist",
            foreignField: "name",
            as: "enrollee_info"
        }
   }
] )
```

```
{
   "_id" : 1,
   "title" : "Reading is ...",
   "enrollmentlist" : [ "giraffe2", "pandabear", "artie" ],
   "days" : [ "M", "W", "F" ],
   "enrollee_info" : [
      { "_id" : 1, "name" : "artie", "joined" : ISODate("2016-05-01T00:00:00Z"), "status" : "A" },
      { "_id" : 5, "name" : "pandabear", "joined" : ISODate("2018-12-01T00:00:00Z"), "status" : "A" },
      { "_id" : 6, "name" : "giraffe2", "joined" : ISODate("2018-12-01T00:00:00Z"), "status" : "D" }
   ]
}
{
   "_id" : 2,
   "title" : "But Writing ...",
   "enrollmentlist" : [ "giraffe1", "artie" ],
   "days" : [ "T", "F" ],
   "enrollee_info" : [
      { "_id" : 1, "name" : "artie", "joined" : ISODate("2016-05-01T00:00:00Z"), "status" : "A" },
      { "_id" : 3, "name" : "giraffe1", "joined" : ISODate("2017-10-01T00:00:00Z"), "status" : "A" }
   ]
}
```

#### 例三

与 mergeObject 搭配使用

```
db.orders.insertMany( [
   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 }
] )

db.items.insertMany( [
  { "_id" : 1, "item" : "almonds", description: "almond clusters", "instock" : 120 },
  { "_id" : 2, "item" : "bread", description: "raisin and nut bread", "instock" : 80 },
  { "_id" : 3, "item" : "pecans", description: "candied pecans", "instock" : 60 }
] )
```

```
db.orders.aggregate( [
   {
      $lookup: {
         from: "items",
         localField: "item",    // field in the orders collection
         foreignField: "item",  // field in the items collection
         as: "fromItems"
      }
   },
   {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
   },
   { $project: { fromItems: 0 } }
] )
```

```
{
  _id: 1,
  item: 'almonds',
  description: 'almond clusters',
  instock: 120,
  price: 12,
  quantity: 2
},
{
  _id: 2,
  item: 'pecans',
  description: 'candied pecans',
  instock: 60,
  price: 20,
  quantity: 1
}
```

分阶段看看数据变化，阶段一：

```
db.orders.aggregate( [
   {
      $lookup: {
         from: "items",
         localField: "item",    // field in the orders collection
         foreignField: "item",  // field in the items collection
         as: "fromItems"
      }
   }
] )
```

```
{ 
    "_id" : 1.0, 
    "item" : "almonds", 
    "price" : 12.0, 
    "quantity" : 2.0, 
    "fromItems" : [
        {
            "_id" : 1.0, 
            "item" : "almonds", 
            "description" : "almond clusters", 
            "instock" : 120.0
        }
    ]
}
{ 
    "_id" : 2.0, 
    "item" : "pecans", 
    "price" : 20.0, 
    "quantity" : 1.0, 
    "fromItems" : [
        {
            "_id" : 3.0, 
            "item" : "pecans", 
            "description" : "candied pecans", 
            "instock" : 60.0
        }
    ]
}

```

阶段二：取fromItems数组中的第一个，与该文档合并

```
db.orders.aggregate( [
   {
      $lookup: {
         from: "items",
         localField: "item",    // field in the orders collection
         foreignField: "item",  // field in the items collection
         as: "fromItems"
      }
   },
   {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
   }
] )
```

```
{ 
    "_id" : 1.0, 
    "item" : "almonds", 
    "description" : "almond clusters", 
    "instock" : 120.0, 
    "price" : 12.0, 
    "quantity" : 2.0, 
    "fromItems" : [
        {
            "_id" : 1.0, 
            "item" : "almonds", 
            "description" : "almond clusters", 
            "instock" : 120.0
        }
    ]
}
{ 
    "_id" : 2.0, 
    "item" : "pecans", 
    "description" : "candied pecans", 
    "instock" : 60.0, 
    "price" : 20.0, 
    "quantity" : 1.0, 
    "fromItems" : [
        {
            "_id" : 3.0, 
            "item" : "pecans", 
            "description" : "candied pecans", 
            "instock" : 60.0
        }
    ]
}

```

阶段三：隐藏 fromItems数组

```
db.orders.aggregate( [
   {
      $lookup: {
         from: "items",
         localField: "item",    // field in the orders collection
         foreignField: "item",  // field in the items collection
         as: "fromItems"
      }
   },
   {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
   },
   { $project: { fromItems: 0 } }
] )
```

```
{ 
    "_id" : 1.0, 
    "item" : "almonds", 
    "description" : "almond clusters", 
    "instock" : 120.0, 
    "price" : 12.0, 
    "quantity" : 2.0
}
{ 
    "_id" : 2.0, 
    "item" : "pecans", 
    "description" : "candied pecans", 
    "instock" : 60.0, 
    "price" : 20.0, 
    "quantity" : 1.0
}

```

#### 例四

连表计算对比（相关子查询），过滤出合格项。

```
db.orders.insertMany( [
  { "_id" : 1, "item" : "almonds", "price" : 12, "ordered" : 2 },
  { "_id" : 2, "item" : "pecans", "price" : 20, "ordered" : 1 },
  { "_id" : 3, "item" : "cookies", "price" : 10, "ordered" : 60 }
] )

db.warehouses.insertMany( [
  { "_id" : 1, "stock_item" : "almonds", warehouse: "A", "instock" : 120 },
  { "_id" : 2, "stock_item" : "pecans", warehouse: "A", "instock" : 80 },
  { "_id" : 3, "stock_item" : "almonds", warehouse: "B", "instock" : 60 },
  { "_id" : 4, "stock_item" : "cookies", warehouse: "B", "instock" : 40 },
  { "_id" : 5, "stock_item" : "cookies", warehouse: "A", "instock" : 80 }
] )
```

```
db.orders.aggregate( [
   {
      $lookup:
         {
           from: "warehouses",
           let: { order_item: "$item", order_qty: "$ordered" },
           pipeline: [
              { $match:
                 { $expr:
                    { $and:
                       [
                         { $eq: [ "$stock_item",  "$$order_item" ] },
                         { $gte: [ "$instock", "$$order_qty" ] }
                       ]
                    }
                 }
              },
              { $project: { stock_item: 0, _id: 0 } }
           ],
           as: "stockdata"
         }
    }
] )
```

```
{
  _id: 1,
  item: 'almonds',
  price: 12,
  ordered: 2,
  stockdata: [
    { warehouse: 'A', instock: 120 },
    { warehouse: 'B', instock: 60 }
  ]
},
{
  _id: 2,
  item: 'pecans',
  price: 20,
  ordered: 1,
  stockdata: [ { warehouse: 'A', instock: 80 } ]
},
{
  _id: 3,
  item: 'cookies',
  price: 10,
  ordered: 60,
  stockdata: [ { warehouse: 'A', instock: 80 } ]
}
```


#### 例五

使用 $lookup 执行不相关子查询（两个表没关系的，只是想把一个表上的内容增量到另一个表上）

```
db.absences.insertMany( [
   { "_id" : 1, "student" : "Ann Aardvark", sickdays: [ new Date ("2018-05-01"),new Date ("2018-08-23") ] },
   { "_id" : 2, "student" : "Zoe Zebra", sickdays: [ new Date ("2018-02-01"),new Date ("2018-05-23") ] },
] )

db.holidays.insertMany( [
   { "_id" : 1, year: 2018, name: "New Years", date: new Date("2018-01-01") },
   { "_id" : 2, year: 2018, name: "Pi Day", date: new Date("2018-03-14") },
   { "_id" : 3, year: 2018, name: "Ice Cream Day", date: new Date("2018-07-15") },
   { "_id" : 4, year: 2017, name: "New Years", date: new Date("2017-01-01") },
   { "_id" : 5, year: 2017, name: "Ice Cream Day", date: new Date("2017-07-16") }
] )
```

```
db.absences.aggregate( [
   {
      $lookup:
         {
           from: "holidays",
           pipeline: [
              { $match: { year: 2018 } },
              { $project: { _id: 0, date: { name: "$name", date: "$date" } } },
              { $replaceRoot: { newRoot: "$date" } }
           ],
           as: "holidays"
         }
    }
] )
```

```
{
  _id: 1,
  student: 'Ann Aardvark',
  sickdays: [
    ISODate("2018-05-01T00:00:00.000Z"),
    ISODate("2018-08-23T00:00:00.000Z")
  ],
  holidays: [
    { name: 'New Years', date: ISODate("2018-01-01T00:00:00.000Z") },
    { name: 'Pi Day', date: ISODate("2018-03-14T00:00:00.000Z") },
    { name: 'Ice Cream Day', date: ISODate("2018-07-15T00:00:00.000Z")
    }
  ]
},
{
  _id: 2,
  student: 'Zoe Zebra',
  sickdays: [
    ISODate("2018-02-01T00:00:00.000Z"),
    ISODate("2018-05-23T00:00:00.000Z")
  ],
  holidays: [
    { name: 'New Years', date: ISODate("2018-01-01T00:00:00.000Z") },
    { name: 'Pi Day', date: ISODate("2018-03-14T00:00:00.000Z") },
    { name: 'Ice Cream Day', date: ISODate("2018-07-15T00:00:00.000Z")
    }
  ]
}
```


### replaceRoot

```
db.collection.insertMany([
   { "_id": 1, "name" : { "first" : "John", "last" : "Backus" } },
   { "_id": 2, "name" : { "first" : "John", "last" : "McCarthy" } },
   { "_id": 3, "name": { "first" : "Grace", "last" : "Hopper" } },
   { "_id": 4, "firstname": "Ole-Johan", "lastname" : "Dahl" },
])
```

```
# 如果这样干会报错 因为id：4中无 name字段
db.collection.aggregate([
   { $replaceRoot: { newRoot: "$name" } }
])
```

```
# 可以利用 mergeObject 来优化
db.collection.aggregate([
   { $replaceRoot: { newRoot: { $mergeObjects: [ { _id: "$_id", first: "", last: "" }, "$name" ] } } }
])
```

```
# 或者在第一个管道先过滤一次没有name字段的文档
db.collection.aggregate([
   { $match: { name : { $exists: true, $not: { $type: "array" }, $type: "object" } } },
   { $replaceRoot: { newRoot: "$name" } }
])
```

```
# 如果你想单独提取这个没有name字段的文档也可以
db.collection.aggregate([
   { $replaceRoot: { newRoot: { $ifNull: [ "$name", { _id: "$_id", missingName: true} ] } } }
])
```

#### 例一

提取子文档中属性组合成数组

```
{ "_id" : 1, "name" : "Arlene", "age" : 34, "pets" : { "dogs" : 2, "cats" : 1 } }
{ "_id" : 2, "name" : "Sam", "age" : 41, "pets" : { "cats" : 1, "fish" : 3 } }
{ "_id" : 3, "name" : "Maria", "age" : 25 }
```

```
db.people.aggregate( [
   { $replaceRoot: { newRoot: { $mergeObjects:  [ { dogs: 0, cats: 0, birds: 0, fish: 0 }, "$pets" ] }} }
] )
```

```
{ "dogs" : 2, "cats" : 1, "birds" : 0, "fish" : 0 }
{ "dogs" : 0, "cats" : 1, "birds" : 0, "fish" : 3 }
{ "dogs" : 0, "cats" : 0, "birds" : 0, "fish" : 0 }
```


#### 例二

展开子文档数组，并过滤他们，返回指定条件的数组

```
db.students.insertMany([
   {
      "_id" : 1,
      "grades" : [
         { "test": 1, "grade" : 80, "mean" : 75, "std" : 6 },
         { "test": 2, "grade" : 85, "mean" : 90, "std" : 4 },
         { "test": 3, "grade" : 95, "mean" : 85, "std" : 6 }
      ]
   },
   {
      "_id" : 2,
      "grades" : [
         { "test": 1, "grade" : 90, "mean" : 75, "std" : 6 },
         { "test": 2, "grade" : 87, "mean" : 90, "std" : 3 },
         { "test": 3, "grade" : 91, "mean" : 85, "std" : 4 }
      ]
   }
])
```

```
db.students.aggregate( [
   { $unwind: "$grades" },
   { $match: { "grades.grade" : { $gte: 90 } } },
   { $replaceRoot: { newRoot: "$grades" } }
] )
```

```
{ "test" : 3, "grade" : 95, "mean" : 85, "std" : 6 }
{ "test" : 1, "grade" : 90, "mean" : 75, "std" : 6 }
{ "test" : 3, "grade" : 91, "mean" : 85, "std" : 4 }
```

#### 例三

计算文档属性，返回全新文档

```
{ "_id" : 1, "first_name" : "Gary", "last_name" : "Sheffield", "city" : "New York" }
{ "_id" : 2, "first_name" : "Nancy", "last_name" : "Walker", "city" : "Anaheim" }
{ "_id" : 3, "first_name" : "Peter", "last_name" : "Sumner", "city" : "Toledo" }
```

```
db.contacts.aggregate( [
   {
      $replaceRoot: {
         newRoot: {
            full_name: {
               $concat : [ "$first_name", " ", "$last_name" ]
            }
         }
      }
   }
] )
```

```
{ "full_name" : "Gary Sheffield" }
{ "full_name" : "Nancy Walker" }
{ "full_name" : "Peter Sumner" }
```


#### 例四

补全缺省字段，形成新文档

```
$$ROOT 指原始文档
```

```
db.contacts.insertMany( [
   { "_id" : 1, name: "Fred", email: "fred@example.net" },
   { "_id" : 2, name: "Frank N. Stine", cell: "012-345-9999" },
   { "_id" : 3, name: "Gren Dell", home: "987-654-3210", email: "beo@example.net" }
] )
```

```
db.contacts.aggregate( [
   { $replaceRoot:
      { newRoot:
         { $mergeObjects:
             [
                { _id: "", name: "", email: "", cell: "", home: "" },
                "$$ROOT"
             ]
          }
      }
   }
] )
```

```
{
  _id: 1,
  name: 'Fred',
  email: 'fred@example.net',
  cell: '',
  home: ''
},
{
  _id: 2,
  name: 'Frank N. Stine',
  email: '',
  cell: '012-345-9999',
  home: ''
},
{
  _id: 3,
  name: 'Gren Dell',
  email: 'beo@example.net',
  cell: '',
  home: '987-654-3210'
}
```
