"use strict";
// 函数定义
function geeting(name) {
}
var getUserName = function (firstName, lastName) {
    return firstName + lastName;
};
// 可选参数
function point(arg1, arg2, arg3) {
}
point('arg1', 10);
point('arg1', 10, 'arg3');
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
}
// 剩余参数
function sum() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (accu, item) {
        return accu + item;
    }, 0);
}
function sum2(arg1, arg2) {
}
sum2(1, 1);
sum2('1', '1');
sum2('1', 1);
