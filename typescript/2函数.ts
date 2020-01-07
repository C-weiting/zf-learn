// 函数定义
function geeting(name: string): void {

}

// 函数表达式
type GetUserNameType = (arg1: string, lastName: string) => string
let getUserName: GetUserNameType = function (firstName: string, lastName: string): string {
  return firstName + lastName;
}

// 可选参数
function point(arg1: string, arg2: number, arg3?: string): void {

}
point('arg1', 10);
point('arg1', 10, 'arg3');

// 默认参数
function ajax(url: string, method: string = 'GET') {

}

// 剩余参数
function sum(...number: Array<number>): number {
  return number.reduce((accu, item) => {
    return accu + item;
  }, 0)
}

// 函数重载
function sum2(arg1: string, arg2: number): void
function sum2(arg1: number, arg2: number): void
function sum2(arg1: any, arg2: any): void {

}

sum2(1, 1)
sum2('1', '1')
sum2('1', 1)