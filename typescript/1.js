"use strict";
var zname = 'zhufeng';
var age = 20;
var married = true;
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
// 元组  长度和类型都固定的数组
var yuanzu = ['zhufeng', 10];
// 枚举  
// 普通枚举 
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
var g1 = Gender.BOY;
var g2 = Gender.GIRL;
console.log(2 /* BLUE */, 0 /* RED */, 1 /* YELLOW */); //常数枚举只能这样使用
var aname = 10;
aname = 'zhufeng';
aname = true;
var x;
// null和undefined是number类型的子集
x = undefined;
x = null;
// void 表示没有任何类型  当一个函数没有返回值的时候，TS认为他的返回类型是void
function geeter() {
    return;
}
