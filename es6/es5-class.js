function Animal(type) {
  this.type = type;
}

Animal.prototype.say = function () {
  console.log('哺乳类');
}

function Tiger(name, type) {
  this.name = name;

  Animal.call(this, type);
}

function create(parentPrototype) {
  function Fn() {}
  Fn.prototype = parentPrototype;

  return new Fn()
}

Tiger.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Tiger
  }
})

let tiger = new Tiger('大老虎', '哺乳类')

console.log(tiger.type)
tiger.say()