// TOPIC : instanceof Operator

class Person {}
const john = new Person();

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true (because all objects inherit from Object)

function Car(make) {
  this.make = make;
}
const myCar = new Car("Toyota");

console.log(myCar instanceof Car); // true
console.log(myCar instanceof Object); // true

// POINT : Array : BOTH ARRAY & OBJECT
const arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(arr instanceof Function); // false
console.log(arr instanceof String); // false

// POINT : Object : ONLY OBJECT
const obj2 = {};

console.log(obj2 instanceof Array); // false
console.log(obj2 instanceof Object); // true
console.log(obj2 instanceof Function); // false
console.log(obj2 instanceof String); // false

function Foo() {}
Foo.prototype = [];

const obj = new Foo();

console.log(obj instanceof Foo); // true
console.log(obj instanceof Array); // true
console.log(obj instanceof Object); // true
console.log(obj instanceof Function); // false
console.log(obj instanceof String); // false

console.log(Foo instanceof Object); // true
console.log(Foo instanceof Function); // true
console.log(Foo instanceof Array); // false
console.log(Foo instanceof String); // false

// POINT : Function : BOTH FUNCTION & OBJECT
function fn() {}

const obj3 = new fn();

console.log(fn instanceof Function); // true
console.log(fn instanceof Object); // true
console.log(fn instanceof Array); // false
console.log(fn instanceof String); // false

console.log(obj3 instanceof fn); // true
console.log(obj3 instanceof Object); // true
console.log(obj3 instanceof Array); // false
console.log(obj3 instanceof Function); // false
console.log(obj3 instanceof String); // false
