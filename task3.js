function Dog(name) {
  this.name = name;

  this.sayHi = function() {
  	alert(this.name + ", says 'Bark'");
  }
};

function Cat(name) {
  Dog.call(this, name);
}

var dog = new Dog("Bob");
var cat = new Cat("Barsik");

dog.sayHi();
cat.sayHi();
