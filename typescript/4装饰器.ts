namespace a {
  function enhancer(target: any) {
    target.prototype.xx = 'zhufeng'
  }

  @enhancer
  class Person {
    constructor() {

    }
  }

  let p = new Person();
  console.log(p);
}

namespace b {
  // 如果属性装饰器修饰的是普通属性，target指向类的原型Person.prototype
  // 如果属性装饰器修饰的是静态属性static，target指向类的定义
  function upperCase(target: any, propertyName: string) {
    let value = target[propertyName]
    Object.defineProperty(target, propertyName, {
      get: () => {
        return value;
      },
      set: (newVal: string) => {
        value = newVal.toUpperCase();
      },
    })
  }

  function methodEnumerable(flag: boolean) {
    return function (target: any, propertyName: string, propertyDescriptor: PropertyDescriptor) {// 属性方法的时候多一个PropertyDescriptor参数
      propertyDescriptor.enumerable = flag;
    }
  }

  function toNumber(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor) {
    let oldMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: any[]) {
      args = args.map((item) => parseInt(item))
      return oldMethod.apply(this, args)
    }
  }

  class Person {
    @upperCase
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    @methodEnumerable(false)
    getName() {
      console.log('getName');
    }
    @toNumber
    sum(...args: any[]) {
      return args.reduce((accu, item) => {
        return accu + item;
      }, 0)
    }
  }
  let p = new Person('zhufeng');
  p.name = 'jiagou';
  console.log(p.name);// JIAGOU
  for (let name in p) {
    console.log(name);
  }
  console.log(p.sum(1, '2', '3'))
}

namespace c {// 参数装饰器
  function md5(target: any, methodName: string, paramsIndex: number) {
    console.log(target, methodName, paramsIndex);
  }
  class Person {
    login(name: string, @md5 password: string) {

    }
  }

  let p = new Person();
  p.login('zhufeng', '10');
}
// 属性方法先执行，谁先写先执行谁
// 方法的时候， 先参数再方法
// 最后是类
// 如果是同类型的，先执行后写的