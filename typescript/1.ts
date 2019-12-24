let zname: string = 'zhufeng';
let age: number = 20;
let married: boolean = true;
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [4, 5, 6];

// 元组  长度和类型都固定的数组
let yuanzu: [string, number] = ['zhufeng', 10];

// 枚举  
// 普通枚举 
enum Gender {
  BOY,
  GIRL
}
let g1: Gender = Gender.BOY;
let g2: Gender = Gender.GIRL;
// 常数枚举
const enum Color {
  RED,
  YELLOW,
  BLUE
}
console.log(Color.BLUE, Color.RED, Color.YELLOW) //常数枚举只能这样使用

let aname: any = 10;
aname = 'zhufeng';
aname = true;

let x: number | undefined | null;
// null和undefined是number类型的子集
x = undefined;
x = null;

// void 表示没有任何类型  当一个函数没有返回值的时候，TS认为他的返回类型是void
function geeter(): void {
  return;
}