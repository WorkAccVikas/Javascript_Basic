// TOPIC : delete Operator

// POINT : Object
let ob1 = {
  id: 1,
  name: "Ram",
  city: "Goa",
  age: 25,
};
console.log(ob1); //  { id: 1, name: 'Ram', city: 'Goa', age: 25 }

console.log(delete ob1); // false
console.log(delete ob1.salary); // true (property not present in object)
console.log(ob1); //  { id: 1, name: 'Ram', city: 'Goa', age: 25 }

console.log(delete ob1.city); // true (property present in object)
console.log(ob1); //  { id: 1, name: 'Ram', age: 25 }

/** DESC :
 * - only works on object properties
 * - It is used to delete the property of object
 * - It returns true if the property is deleted don't matter property is present or not
 */

// POINT : freeze
const obj = Object.freeze({ a: 10, family: { count: 4 } });
console.log(delete obj.a); // false
console.log(obj); // { a: 10, family: { count: 4 } }
console.log(delete obj.family); // false
console.log(obj); // { a: 10, family: { count: 4 } }
console.log(delete obj.family.count); // true
console.log(obj); // { a: 10, family: { } }

/** DESC :
 * - Object.freeze() prevents modifications to top-level properties but does not deep-freeze nested objects.
 * - Properties of nested objects remain deletable
 */

// POINT : variable
var a = 10;
console.log(delete a); // false
console.log(a); // 10

// POINT : Array
let arr = [1, 2, 3, 4];
console.log(delete arr); // false
console.log(arr.length, arr); // 4, [ 1, 2, 3, 4 ]
console.log(delete arr[5]); // true
console.log(delete arr[0]); // true
console.log(arr.length, arr); // 4, [ undefined, 2, 3, 4 ]

/** DESC :
 * - only works on array index
 * - It is used to delete the index of array
 * - It returns true if the index is deleted don't matter index is present or not
 * - After deleting index, array length still remains same
 */

// POINT : null (any primitive value)
let b = null;
console.log(delete b); // false
console.log(b); // null

// POINT : Function
function test(x) {
  console.log(delete x); // false
  return x;
}
console.log(test(5)); // 5

function test1(x) {
  console.log(delete x.id); // true
  return x;
}
console.log(test1({ id: 5, name: "ram" })); // {  name: 'ram' }

// POINT : this : removes the a property from obj.
const obj2 = {
  a: 10,
  b: function () {
    console.log(delete this.a); // true
  },
};
obj2.b();
console.log(obj2);

// POINT : defineProperty

const obj3 = {};
Object.defineProperty(obj3, "x", {
  value: 42,
  configurable: false,
});
console.log(delete obj3.x); // false
console.log(obj3);

/** DESC:
 * - If configurable: false, delete cannot remove the property. ❌
 */

// POINT : Function Class
function Person(city = "Goa") {
  this.city = city;
}
Person.prototype.name = "John";

const p = new Person();
const p2 = new Person();
console.log(p); // { city: 'Goa', name: 'John' }
console.log(delete p.name); // true
console.log(p); // { city: 'Goa', name: 'John' } (property not deleted because name in prototype)
console.log(p2); // { city: 'Goa', name: 'John' }

console.log(delete p.city); // true
console.log(p); // { name: 'John' } (property deleted because city in object itself)

/** DESC :
 *  - If you delete a property that is placed in prototype then it will not be deleted. ❌
 *  - If you delete a property that is placed in object then it will be deleted. ✅
 */

// If you want to remove name from all instances, delete it from Person.prototype:
console.log(delete Person.prototype.name); // true
console.log(p2); // { city :'Goa' }
