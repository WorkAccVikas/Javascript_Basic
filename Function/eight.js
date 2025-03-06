function Student() {}

console.log(Student instanceof Function); // true
// IMP : That's because functions are objects
console.log(Student instanceof Object); // true

let obj = new Student();
console.log(obj instanceof Student); // true
console.log(obj instanceof Object); // true
console.log(obj instanceof Function); // false