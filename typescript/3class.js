"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
(function (a) {
    // 声明类需要初始化属性值
    var Person = /** @class */ (function () {
        function Person() {
            this.name = '珠峰';
            this.age = 10;
        }
        return Person;
    }());
    var p1 = new Person();
    console.log(p1.name);
    console.log(p1.age);
})(a || (a = {}));
var b;
(function (b) {
    // 存取器getter setter
    var Person = /** @class */ (function () {
        function Person(name) {
            this.myname = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this.myname;
            },
            set: function (val) {
                this.myname = val.toUpperCase();
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p = new Person('zhufeng');
    console.log(p.name);
    p.name = 'jiagou';
    console.log(p.name);
})(b || (b = {}));
var c;
(function (c) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var p = new Person('zhufeng');
    console.log(p.name);
    p.name = 'jiagou'; // name属性为只读readonly
})(c || (c = {}));
// 继承
// 访问修饰符 pubilc protected private
/**
 * pubilc 公开的，自己和自己的子类中和其他地方都能访问
 * protected 受保护的，自己和自己的子类中可以访问，其他地方不能访问
 * private 私有的，只能自己内部访问
 */
var d;
(function (d) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
            this.amount = 100;
        }
        Person.prototype.getName = function () {
            return this.name + this.amount;
        };
        Person.prototype.setName = function (newName) {
            this.name = newName;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, stuNo) {
            var _this = _super.call(this, name, age) || this;
            _this.stuNo = stuNo;
            return _this;
        }
        Student.prototype.getStuNo = function () {
            return this.name + this.age + this.amount + this.stuNo; // 属性“amount”为私有属性，只能在类“Person”中访问
        };
        Student.prototype.setStuNo = function (newStuNo) {
            this.stuNo = newStuNo;
        };
        Student.type = 'student';
        return Student;
    }(Person));
    var student1 = new Student('zhufeng', 10, 1);
    console.log(student1);
    console.log(student1.name);
    console.log(student1.age); // 属性“age”受保护，只能在类“Person”及其子类中访问
    console.log(student1.amount); // 属性“amount”为私有属性，只能在类“Person”中访问
    console.log(Student.type); // 静态属性为类的方法
})(d || (d = {}));
