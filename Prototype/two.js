// Todo : JavaScript objects have a property which is a pointer to another object. This pointer is the object's prototype. Object instances by default share the same prototype:
// * : Link : https://stackoverflow.com/questions/10430794/when-to-use-the-word-prototype-in-adding-new-properties-to-an-object-in-javasc

function Employee(name) {
  this.name = name;
}

console.log(Employee);
console.log(Employee.name);
console.log(Employee.age); // ? : undefined because age is not present in Employee

var bob = new Employee("Bob");
var jim = new Employee("Jim");

console.log("bob name = ", bob.name);
console.log("jim name = ", jim.name);

Employee.prototype.company = "IBM"; // * : add new property in Employee
console.log("bob company name = ", bob.company);
console.log("jim company name = ", jim.company);

Employee.prototype.who = function () {
  console.log("My name is", this.name, "I work for", this.company);
}; // * : add new method in Employee

//  ? : bob and jim are separate objects, but each is linked to the same 'prototype' object.
jim.who(); // ? : jim doesn't have a property called 'who', so it falls back to it's 'prototype', where who exists

bob.who();

// ? : Bob leaves IBM for Microsoft
// * : this work for all simple js objects
bob.company = "Microsoft"; // ? : bob now has a property called 'company'. The value of which is 'Microsoft', which overrides bob's prototype property of the same name.

bob.who();

Employee.prototype.company = "Facebook"; // *: this syntax work for class objects

jim.who();

bob.who(); // ? : Bob is not affected by the change.

console.log(bob);

delete bob.company;

console.log(bob);

bob.who(); // ? : bob no longer has it's own property 'company', so like jim, it drops down to the prototype object.
