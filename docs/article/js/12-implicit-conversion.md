---
title: 隐式转换
sidebarDepth: 2
---
## ToString、ToNumber、ToBoolean、ToPrimitive
先掌握js数据类型之间转换的基本规则。

### ToString 其他类型转string
```javascript
  String(null) // 'null'
  String(undefined) // 'undefined'
  String(true) // 'true'
  String(10) // '10'
  String(1e21) // '1e+21'
  String([1,2,3]) // '1,2,3'
  String([]) // ''
  String([null]) // ''
  String([1, undefined, 3]) // '1,,3'
  String({}) // '[object Objecr]'
  String({toString: function() {return 1}})// '1'
```

### ToNumber 其他类型转number
```javascript
  Number(null) // 0
  Number(undefined) // NaN
  Number('10') // 10
  Number('10a') // NaN
  Number('') // 0 
  Number(true) // 1
  Number(false) // 0
  Number([]) // 0
  Number(['1']) // 1
  Number({}) // NaN
  
  注意：对象、数组分两步骤，先ToPrimitive转为原始类型，再ToNumber。
```

### ToBoolean 其他类型转boolean
```javascript
  //js五大假值
  Boolean(null) // false
  Boolean(undefined) // false
  Boolean('') // flase
  Boolean(NaN) // flase
  Boolean(0) // flase
  
  //除了假值，其他都返回true
  Boolean([]) // true
  Boolean({}) // true
  Boolean(Infinity) // true
  
```

### ToPrimitive 引用类型转原始类型

当引用类型转为原始类型时：
1. 先查找对象的valueOf方法，如果valueOf方法**返回值**为**原始类型**，ToPrimitive结果为该值。
2. 若没有valueOf方法，或valueOf返回**引用类型**，则调用toString方法，返回字符串作为结果。
3. 若valueOf和toString都没有返回原始类型，则抛出异常。

```javascript
 对象类型在ToNumber时 会先ToPrimitive
 
  Number([]) // 0
  Number(['10']) //10

  const obj1 = {
    valueOf () {
      return 100
    },
    toString () {
      return 101
    }
  }
  Number(obj1) // 100

  const obj2 = {
    toString () {
      return 102
    }
  }
  Number(obj2) // 102

  const obj3 = {
    toString () {
      return {}
    }
  }
  Number(obj3) // TypeError
```


## 什么情况下会发生隐式转换？

### == 操作符
==宽松相等在比较中进行隐式转换，===严格相等则不会。
宽松相等只要值相等就返回true，严格相等需要值相等且类型也一致才返回true。

宽松相等中存在以下几个规则：

1. boolean必然会转为数字0、1后再比较
2. 数字和字符串比较，字符串先转为数字再比较。
3. 引用类型和原始类型比较，引用类型会先转为原始类型再比较。
4. null 与 undefined 宽松相等，或其自身与自身宽松相等，但他们与**所有其他类型**都不宽松相等。
5. NaN与任何值都不相等，与自身也不相等。

```javascript
  // 1.boolean必然会先转为数字再做比较
  false == 0 // true
  true == 1 // true
  true == 2 // false
  
  const x = 10
  x == true; // false
  
  
  //2.数字 == 字符串，字符串先转为数字再作比较。
  0 == '' // true
  1 == '1' // true
  1e21 == '1e21' // true
  Infinity == 'Infinity' // true
  true == '1' // true
  false == '0' // true
  false == '' // true
  
  //3.引用类型 == 原始类型， 引用类型先转为原始类型
  '[object Object]' == {} // true
  '1,2,3' == [1, 2, 3] // true
  
  [2] == 2 // true
  [null] == 0 // true
  [undefined] == 0 // true
  [] == 0 // true
  
  const a = {
    valueOf () {
      return 10
    }
    toString () {
      return 20
    }
  }
  a == 10 // true
  
  const a = {
    // 定义一个属性来做累加
    i: 1,
    valueOf () {
      return this.i++
    }
  }
  a == 1 && a == 2 && a == 3 // true
  
 // 4.undefined和null比较
 undefined == null // true
 undefined == false // false
 null == false // false
 
 // 5.NaN
 NaN == NaN // false

```

### + 操作符

1. `number + number | boolean | null | undefined = number`
ps: 属**数学运算操作**
    这里false转换为0; true=>1
    这里null转换为0;  (但 null == 0 // false)
    这里undefined转换为NaN；（NaN参与任何数学计算结果都为NaN）
    
```javascript
    1 + 1 // 2
    1 + false // 1
    1 + true // 2
    1 + null // 1
    1 + undefined // NaN
```

1. `any + string | Object = string`
ps: 属**字符串拼接操作**
    Object会先ToPrimitive转换为原始类型，再拼接


### - * / % 操作符
与+操作符不一样，这些操作符都属于**数学运算操作**，
运算前会把符号两侧的值进行 ToNumber转换，再进行运算。

### > < <= >= 操作符

* string 比较 string ， 比较两者的字符编码值
* number 比较 any， 先将any转换为数值
* 比较中存在boolean， 先将boolean转为0 | 1
* 比较中存在引用类型，先转换为原始类型

### if() for() while() ?: || &&

* if()语句中的条件判断表达式

* for()语句中的条件判断表达式

* while()和do..while()循环条件中的判断表达式

* ?:三元运算中的判断表达式

* 逻辑元算符 || 和 && 左边的操作数

以上场景会将非布尔值按ToBoolean方法，隐式转换为boolean类型。
```javascript
const d = 11
const e = null
let f
const g = f ? d : e

g // null
d && e // null
d || 3 // 11
```

### ! 符

这个比较特殊，先判断该值是否为空值，然后取反。