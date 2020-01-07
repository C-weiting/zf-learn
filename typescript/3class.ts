namespace a {
  // 声明类需要初始化属性值
  class Person {
    name: string = '珠峰';
    age: number;
    constructor() {
      this.age = 10;
    }
  }
  let p1 = new Person();
  console.log(p1.name);
  console.log(p1.age);
}

namespace b {
  // 存取器getter setter
  class Person {
    myname: string;
    constructor(name: string) {
      this.myname = name;
    }
    get name() {
      return this.myname;
    }
    set name(val: string) {
      this.myname = val.toUpperCase();
    }
  }

  let p = new Person('zhufeng');
  console.log(p.name);
  p.name = 'jiagou';
  console.log(p.name);
}

namespace c {
  class Person {
    constructor(public readonly name: string) {// public name: string 为在实例上增加name属性的简写

    }
  }

  let p = new Person('zhufeng');
  console.log(p.name);
  p.name = 'jiagou'; // name属性为只读readonly
}

// 继承
// 访问修饰符 pubilc protected private
/**
 * pubilc 公开的，自己和自己的子类中和其他地方都能访问
 * protected 受保护的，自己和自己的子类中可以访问，其他地方不能访问
 * private 私有的，只能自己内部访问
 */
namespace d {
  class Person {
    public name: string;
    protected age: number;
    private amount: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this.amount = 100;
    }
    getName() {
      return this.name + this.amount;
    }
    setName(newName: string) {
      this.name = newName;
    }
  }

  class Student extends Person {
    static type = 'student'
    stuNo: number;
    constructor(name: string, age: number, stuNo: number) {
      super(name, age);
      this.stuNo = stuNo;
    }
    getStuNo() {
      return this.name + this.age + this.amount + this.stuNo // 属性“amount”为私有属性，只能在类“Person”中访问
    }
    setStuNo(newStuNo: number) {
      this.stuNo = newStuNo;
    }
  }

  let student1 = new Student('zhufeng', 10, 1);
  console.log(student1);
  console.log(student1.name);
  console.log(student1.age); // 属性“age”受保护，只能在类“Person”及其子类中访问
  console.log(student1.amount); // 属性“amount”为私有属性，只能在类“Person”中访问
  console.log(Student.type) // 静态属性为类的方法
}