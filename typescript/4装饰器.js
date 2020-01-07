"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var a;
(function (a) {
    function enhancer(target) {
        target.prototype.xx = 'zhufeng';
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p);
})(a || (a = {}));
var b;
(function (b) {
    // 如果属性装饰器修饰的是普通属性，target指向类的原型Person.prototype
    // 如果属性装饰器修饰的是静态属性static，target指向类的定义
    function upperCase(target, propertyName) {
        var value = target[propertyName];
        Object.defineProperty(target, propertyName, {
            get: function () {
                return value;
            },
            set: function (newVal) {
                value = newVal.toUpperCase();
            },
        });
    }
    function methodEnumerable(flag) {
        return function (target, propertyName, propertyDescriptor) {
            propertyDescriptor.enumerable = flag;
        };
    }
    function toNumber(target, propertyName, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value;
        propertyDescriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseInt(item); });
            return oldMethod.apply(this, args);
        };
    }
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.getName = function () {
            console.log('getName');
        };
        Person.prototype.sum = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return args.reduce(function (accu, item) {
                return accu + item;
            }, 0);
        };
        __decorate([
            upperCase
        ], Person.prototype, "name", void 0);
        __decorate([
            methodEnumerable(false)
        ], Person.prototype, "getName", null);
        __decorate([
            toNumber
        ], Person.prototype, "sum", null);
        return Person;
    }());
    var p = new Person('zhufeng');
    p.name = 'jiagou';
    console.log(p.name); // JIAGOU
    for (var name_1 in p) {
        console.log(name_1);
    }
    console.log(p.sum(1, '2', '3'));
})(b || (b = {}));
var c;
(function (c) {
    function md5(target, methodName, paramsIndex) {
        console.log(target, methodName, paramsIndex);
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.login = function (name, password) {
        };
        __decorate([
            __param(1, md5)
        ], Person.prototype, "login", null);
        return Person;
    }());
    var p = new Person();
    p.login('zhufeng', '10');
})(c || (c = {}));
// 属性方法先执行，谁先写先执行谁
// 方法的时候， 先参数再方法
// 最后是类
// 如果是同类型的，先执行后写的
