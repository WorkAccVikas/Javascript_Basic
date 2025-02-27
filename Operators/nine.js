// TOPIC : in Operator

// POINT : Function Class
function Person(city = "Goa") {
  this.city = city;
}

Person.prototype.name = "John";

const p = new Person();

console.log("name" in p); // true (because `name` is inherited from the prototype)
console.log(p.hasOwnProperty("name")); // false (because `name` is not an own property)

delete p.name;
console.log("name" in p); // still true (because `name` is on the prototype)

delete Person.prototype.name;
console.log("name" in p); // false (since `name` is now removed from the prototype)

/** DESC :
 *  - in operator is used to check if a property is present in an object or its prototype chain
 *  - hasOwnProperty() is used to check if a property is an own property of an object
 */

// POINT : Object

const user = { name: "Alice", age: 25 };

console.log("name" in user); // true
console.log("age" in user); // true
console.log("email" in user); // false

const obj = { a: 1, b: undefined, c: null };

console.log("a" in obj); // true
console.log("b" in obj); // true
console.log("c" in obj); // true
console.log("d" in obj); // false

// POINT : Array

const arr = [10, 20, 30];

console.log(0 in arr); // true (index 0 exists)
console.log(2 in arr); // true (index 2 exists)
console.log(5 in arr); // false (index 5 does not exist)

// POINT : Object.create(null)
const obj2 = Object.create(null);
console.log(obj2); // {}
obj2.a = 1;
console.log(obj2); // { a: 1 }

console.log("a" in obj2); // true
console.log("toString" in obj2); // false
