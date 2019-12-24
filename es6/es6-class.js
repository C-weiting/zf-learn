class Animal {
  type = '哺乳类'; // 声明到实例上的属性，es7写法，需要webpack插件
  constructor() {
    // this.type = '哺乳类'; // 声明到实例上的属性
  }
  say() { // 声明到原型上面的方法 == Animal.prototype.say
    // console.log(this)
    console.log('父类say')
  }
  get a() { // 声明到原型上的属性 == Animal.prototype.a = 1
    return 1
  }
  // 静态属性就是定义到类上的属性 es6只有静态方法 Animal.flag，静态方法在es6中也会被子类继承
  static flag = '动物' // es7写法，需要webpack插件
  static get flag() {
    return '动物'
  }
}

let animal = new Animal();
let say = animal.say; // 如果将类中的方法拿出来用必须绑定this，否则es6规范默认指向undefined

say()

console.log(animal)


class Tiger extends Animal {
  constructor() {
    super(); // constructor中必须写super， 相当于Animal.call(tiger)
  }
  static getAnimal() {
    console.log(super.flag) // 静态方法中的super指代的是父类
  }
  say() {
    super.say() // 原型方法上的super指代的是父类的原型
  }
}

let tiger = new Tiger()

Tiger.getAnimal()
tiger.say()
console.log(tiger)