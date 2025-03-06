// TOPIC : Logical Operators

// IMP : FALSY VALUES : false, 0, empty string, NaN, null, undefined

let d1 = 12;
let d2 = 18;
let d3 = true;

// POINT : Logical AND (&&)

/** DESC :
 *  - Returns true if both operands are true, otherwise returns false.
 *  - It short-circuits, meaning if the first operand is false, the second operand is not evaluated.
 *  - If the first operand is falsy, then second operand is not evaluated.
 */

console.log(`d1 < d2 && d2 == 18 ${d1 < d2 && d2 == 18}`); // true
console.log(`d1 < d2 && d2 != 18 ${d1 < d2 && d2 != 18}`); // false
console.log(false && console.log("Hello World")); // false
console.log(true && console.log("hi")); // hi and then undefined
console.log(100 < 50 && console.log("bye")); // false
console.log(100 > 50 && console.log("bye")); // bye and then undefined

// POINT : Logical OR (||)

/** DESC :
 *  - Returns true if either operand is true, otherwise returns false.
 *  - It short-circuits, meaning if the first operand is true, the second operand is not evaluated.
 *  - If the first operand is falsy, then only second operand is evaluated.
 */

console.log(`d1 < d2 || d2 != 18 ${d1 < d2 || d2 != 18}`); // true
console.log(`d1 > d2 || d2 != 18 ${d1 > d2 || d2 != 18}`); // false
console.log(false || console.log("Hello World")); // Hello World and then undefined
console.log(true || console.log("hi")); // true
console.log(100 < 50 || console.log("bye")); // bye and then undefined
console.log(100 > 50 || console.log("bye")); // true

// POINT : Logical NOT (!)

/** DESC :
 *  - Returns true if the operand is false, otherwise returns false.
 */

let d4 = false;
console.log(!d4); // true

let d5 = true;
console.log(!d5); // false

let obj1 = {
  id: 1,
  name: "Vikas",
  age: 0,
  city: "",
  mobile: null,
  is_active: true,
  is_valid: false,
};

console.log(obj1);

// Todo : 0, empty string, false, undefined and null => result : RHS
// DESC : If the first operand is falsy, then only second operand is returned
console.log(obj1.id || 100);
console.log(obj1.name || "XYZ");
console.log(obj1.age || 999);
console.log(obj1.city || "Unknown_City");
console.log(obj1.marks);
console.log(obj1.marks || 1000);
console.log(obj1.mobile || 9876547892);
console.log(obj1.is_active || "Ram");
console.log(obj1.is_valid || "Seeta");

// TOPIC : Nullish Coalescing Operator (??)
// Todo : It check only for undefined and null => result : RHS
// DESC : If the first operand is undefined or null, then only second operand is returned
console.log(obj1.id ?? 100);
console.log(obj1.name ?? "XYZ");
console.log(obj1.age ?? 999);
console.log(obj1.city ?? "Unknown_City");
console.log(obj1.marks);
console.log(obj1.marks ?? 1000);
console.log(obj1.mobile ?? 9876547892);
console.log(obj1.is_active ?? "Ram");
console.log(obj1.is_valid ?? "Seeta");
