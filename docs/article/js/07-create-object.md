---
title: 创建对象的几种模式
sidebarDepth: 2
---

## （一）Object构造函数模式
```javascript
    var person = new Object();
    person.name = 'alan';
    person.age = '23';
    person.showHim = function(){
        console.log(this.name,this.age);
    }
    console.log(person);
```

* 太多语句

## （二）对象字面量
```javascript
    var person = {
        name : 'alan',
        age : 23,
        show: function(){
            console.log(this.name,this.age);
        }
    }
    console.log(person);
```

* 一次写死，必须全部已知，多个对象重复多次

## （三）工厂模式
```javascript
    function makePerson(name,age){
        return {
            name : name,
            age : age,
            showHim: function(){
                console.log(this.name,this.age);
            }
        }
    }
    var person = makePerson('alan',23);
```

* 没有分类

## （四）自定义构造函数模式
```javascript
    function Person(name,age){
        this.name = name;
        this.age = age;
        this.showHim = function(){
            console.log(this.name,this.age);
        }
    }
    var p = new Person('alan',23);
    p.showHim();
    console.log(p instanceof Person);//true
```

* 每一个对象的方法重复

## （五）构造函数+原型的组合模式
```javascript
    function Person(name,age){
        this.name = name ;
        this.age = age ;
    }
    Person.prototype.showHim = function(){
        console.log(this.name,this.age);
    }
    var p = new Person('alan',23);
    p.showHim();
    console.log(p);
```