---
title: Object与Object方法总结
sidebarDepth: 2
---

## 属性的可枚举性
对象属性有可枚举和不可枚举之分，主要影响到以下操作。

* for...in 遍历对象的可枚举属性，包括原型链上的属性
* Object.keys() 遍历对象自身的可枚举属性
* Object.entries() 返回对象自身可枚举属性键值对数组（二维数组）
* JSON.stringfy() 仅读取并序列号对象自身的可枚举属性

如何判断属性是否可枚举？

* Object.prototype.propertyIsEnumerable() 仅可用来判断对象自身属性是否可枚举
* Object.getOwnPropertyDescriptor()获取对象自身属性的描述符，查看描述符的enumerable属性


* * *
## 不可扩展对象、密封对象、冻结对象区别

### 不可扩展对象
`Object.preventExtensions`
`Object.isExtensible`

仅限制对象是否能够新增属性，不限制属性的修改和删除。

### 密封对象
`Object.seal`
`Object.isSealed`

限制对象不可新增或删除属性，可以修改自身属性，但不可修改configurable和enumerable属性。

### 冻结对象
`Object.freeze`
`Object.isFrozen`

限制对象的一切属性的增删与修改。
一个冻结对象是密封对象，更是不可扩展对象。

* * *

## Object方法一览

创建
* 1 Object
* 2 Object.create
* 3 Object.fromEntries

修改
* 4 Object.assign
* 5 Object.defineProperty
* 6 Object.defineProperties
* 7 Object.setPrototypeOf
* 8 Object.freeze
* 9 Object.seal
* 10 Object.preventExtensions

遍历
* 11 Object.keys
* 12 Object.values
* 13 Object.entries

判断
* 14 Object.is
* 15 Object.isFrozen
* 16 Object.isSealed
* 17 Object.isExtensible
* 18 Object.prototype.hasOwnProperty
* 19 Object.prototype.isPrototypeOf
* 20 Object.prototype.propertyIsEnumerable

查询
* 21 Object.getPrototypeOf
* 22 Object.getOwnPropertyNames
* 23 Object.getOwnPropertySymbols
* 24 Object.getOwnPropertyDescriptor
* 25 Object.getOwnPropertyDescriptors
* 26 Object.prototype.valueOf
* 27 Object.prototype.toString


* * *
### 1. Object构造函数
传入不同类型的返回值
```javascript
// 1.传入引用类型，返回其值本身
// {a:'a', b:'b'}
const obj = {a:'a', b:'b'}
const o1 = new Object(obj);
obj === o1; // true

// [1,2,3]
const o2 = new Object([1,2,3]);


// 2.传入null 、undefined返回空对象
// {}
const o3 = new Object(null);
const o4 = new Object(undefined);


// 3.传入基础类型，返回其包装类型的对象
// [String: '123']
const o5 = new Object('123');

// [Number: 1]
const o6 = new Object(1);
o6 === 1;// false

// [Bollean: true]
const o7 = new Object(true);
```

### 2.Object.create
以一个对象（第一参数）作为原型，创建一个实例对象，该对象包含（第二参数的）属性。
使用场景：继承
```javascript
const p = {
    nickName: "alan",
    sayHi: function () {
        console.log("i am " + this.nickName);
    },
};
const obj = Object.create(p, {
    age: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "22",
    },
    logInfo: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function() {
            console.log("age："+this.age);
        }
    },
});
obj.sayHi();// i am alan
obj.logInfo();// age：22
obj.__proto__ === p; // true
```
```javascript
const obj = Object.create(func.prototype);

//相当于
const obj = {};
obj.__proto__ = func.prototype;
```

### 3. Object.fromEntries()
与entries相反，它将键值对列表转为对象。
```javascript
const entriesArr = [['a','1'],['b','2'],['c','3']];
const obj = Object.fromEntries(entriesArr);
//{ a: '1', b: '2', c: '3' }
// 可用于Map转对象，如 Object.fromEntries(aMap)
```

* * *


### 4. Object.assign
浅复制某对象上的属性到目标对象上
(第二参数复制属性到第一参数)
```javascript
const o = {};
const obj = {
    a:'a',
    arr:[1,2,3,4]
}

Object.assign(o, obj);
obj.a = 'b';
obj.arr[1] = 0;
o// { a:'a', arr: [1,0,2,4] }
```

### 5. Object.defineProperty
为某对象（第一参数），
定义一个属性（第二参数属性名），
该属性的遵循描述符约定（第三参数）

描述符主要有两种形式：
1. 数据描述符
   value 
   属性值，默认undefined
   
   configurable 
   描述符除value和writable外的属性是否可改变，默认false
   
   enumerable 
   属性是否可枚举，默认false
   
   writable 
   属性是否能被'='重新赋值，默认false

2. 存储描述符
   
   configurable、enumerable可选
   
   get 
   访问属性时会调用getter函数。
   
   set 
   属性值被修改时调用setter函数。
   
   注意，存储描述符使用value、writable是无意义的。
   
   

由此可见此类定义属性的方式，与'='赋值的理念有所不同，后者默认都是可枚举的。通过此类方式，可以定义不被枚举的属性。

```javascript
const obj = {};

Object.defineProperty(obj, 'nickName', {
    value:'Alex',
    configurable: true,
    enumerable: true,
    writable: true
})
// 等价于 obj.nickName = '22';

Object.defineProperty(obj, 'age', {
    configurable: false,
    enumerable: true,

    get: function () {
        return '22';
    },

    set: function(){
        console.log("set value");
    }
});

obj; // { nickName: 'Alex', age: [Getter/Setter] }
```
以上只是defineProperty的简单使用，详见文章

### 6. Object.defineProperties
跟defineProperty类似，该方法能一次处理多个属性。
```javascript
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

### 7. Object.setPrototypeOf
设置对象新的原型
```javascript
function A(){}
function B(){}

const a = new A();
console.log(a.__proto__);// A{}
console.log(Object.getPrototypeOf(a));// A{}

Object.setPrototypeOf(a, B.prototype);

console.log(a.__proto__);// B{}
console.log(Object.getPrototypeOf(a));// B{}
```

### 8~10 Object.freeze()
浅冻结对象或数组，使其属性不能增删改；
判断是否冻结Object.isFrozen();

注意：
一个冻结的对象，
也是一个密封对象（seal、isSealed）
更是一个不可扩展对象（preventExtensions、isExtensible）


递归实现深冻结。
```javascript
// 深冻结函数.
function deepFreeze(obj) {

  // 取回定义在obj上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果prop是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身(no-op if already frozen)
  return Object.freeze(obj);
}
```

* * *

### 11. Object.keys()
返回自身可枚举属性的属性名列表。
```javascript
const obj = {
    a: '1',
    b: '2',
    c: '3'
}

Object.defineProperty(obj, 'd', {
    value:'4',
    enumerlable: false
})

Object.keys(obj);// [ 'a', 'b', 'c' ]
```

### 12. Object.values()
返回自身可枚举属性的值列表。
```javascript
const obj = {
    a: '1',
    b: '2',
    c: '3'
}

Object.defineProperty(obj, 'd', {
    value:'4',
    enumerlable: false
})
Object.values(obj);// [ '1', '2', '3' ]
```

### 13. Object.entries()
返回对象自身可枚举属性的键值对列表（二维数组）
“entry: 条目”

```javascript
const obj = {
    a: '1',
    b: '2',
    c: '3'
}

const entriesArr = Object.entries(obj);
// [ [ 'a', '1' ], [ 'b', '2' ], [ 'c', '3' ] ]
// 接下来可以进行for...of遍历，转Map结构等操作
```
* * *

### 14. Object.is()
判断两个值是否相等，不会像==一样会发生隐式转换，与===很相似，但也不全是。
```javascript
console.log(Object.is(1,1));// true
console.log(Object.is(1,'1'));// false
```

### 18. Object.prototype.hasOwnProperty()
查询对象自身是否存在该属性
```javascript
const obj = {
    a: "a",
    hasOwnProperty: function () {
        return false;
    },
};

obj.hasOwnProperty("a");// false

//这种方式可以避免访问obj篡改的方法
Object.prototype.hasOwnProperty.call(obj, "a");// true
```

### 19. Object.prototype.isPrototypeOf

A.isPrototypeOf(B)
A对象是否在B对象的原型链上。

注意：跟instanceof有点像，不过instanceof需要A走一步prototype，再判断是否在B的原型链上，所以有
`A.prototype.isPrototypeOf(B)`
等同于
`B instanceof A`
```javascript
function A() {}
function B() {}
function C() {}

B.prototype = Object.create(A.prototype);// B继承A
C.prototype = Object.create(B.prototype);// C继承B

const c = new C();

// C.prototype是否存在实例c的原型链上
console.log(C.prototype.isPrototypeOf(c));// true
console.log(c instanceof C);// 同理，true，C走一步prototype，踏在c的原型链上

// B.prototype是否存在实例c的原型链上
console.log(B.prototype.isPrototypeOf(c));// true
console.log(c instanceof B);// 同理，true，B走一步prototype，踏在c的原型链上

// A.prototype是否存在实例c的原型链上
console.log(A.prototype.isPrototypeOf(c));// true
console.log(c instanceof A);// 同理，true，A走一步prototype，踏在c的原型链上

// Object.prototype是否存在实例c的原型链上
console.log(Object.prototype.isPrototypeOf(c));// true
console.log(c instanceof Object);// 同理，true，Object走一步prototype，踏在c的原型链上
```

### 20. Object.prototype.propertyIsEnumerable()
查询对象属性是否可枚举。
```javascript
const obj = {a:'a'};
obj.propertyIsEnumerable('a');// true
```
* * *

### 21. Object.getPrototypeOf()
获取实例对象的__proto__，即构造函数的prototype
```javascript
function Person(nickName){
    this.nickName =  nickName;
}
const p = new Person('Alice');

console.log(p.__proto__ === Person.prototype);// true
console.log(Object.getPrototypeOf(p) === Person.prototype);// true
console.log(Object.getPrototypeOf(Person));// [Function]
```

### 22. Object.getOwnPropertyNames()
获取对象自身属性的属性名列表。
（包括可枚举与不可枚举）
（不包括Symbol）
```javascript
const obj = { a: "1", b: "2", c: "3" };

// 包括不可枚举属性
Object.defineProperty(obj, 'd', {
    value: '4',
    enumerable: false
});

// 不包括symbol属性
obj[Symbol()] = '5';

const propNameList = Object.getOwnPropertyNames(obj);
// [ 'a', 'b', 'c', 'd' ]
```

### 23. Object.getOwnPropertySymbols()
获取对象自身属性的Symbol属性名列表。
```javascript
const obj = {};
obj[Symbol('a')] = '1';
obj[Symbol('b')] = '2';
obj.c = '3';

const symbolList = Object.getOwnPropertySymbols(obj);
//[ Symbol(a), Symbol(b) ]

```


### 24~25 Object.getOwnPropertyDescriptor
获取对象上自身属性的描述符。Object.getOwnPropertyDescriptors批量处理多个属性。
```javascript
const obj = {
    a: '1',
    b: '2'
}
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
//{ value: '1', writable: true, enumerable: true, configurable: true }

const descriptors = Object.getOwnPropertyDescriptors(obj);
// {
//     a: { value: '1', writable: true, enumerable: true, configurable: true },
//     b: { value: '2', writable: true, enumerable:}
// }
```

### 26. Object.prototype.toString()
返回对象的字符串表示。与、toLocaleString()方法与其功能一样。

### 27. Object.prototype.valueOf()
获取对象转换的原始值。
（原始值不一定是原始类型，也可以是引用类型，对象的原始值就是本身，数组的原始值也是本身）

某些隐式转换会先考虑valueOf()，再考虑toString(),直到返回原始类型。

