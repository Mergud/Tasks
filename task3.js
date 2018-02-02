function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHi = function() {
  	alert(this.name + ", says 'Meow'");
}

function Cat(name) {
  Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);

var animal = new Animal("Someone");
var cat = new Cat("Barsik");

animal.sayHi();
cat.sayHi();