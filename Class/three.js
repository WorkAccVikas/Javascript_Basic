class Employee2 {
  constructor(name, age) {
    this.id = 3;
    this.name = name || "Laxman";
    // TIP : 🔴🔴🔴 We cannot write this in class constructor 🔴🔴🔴
    // age = 99;
    let _age = age; // Private variable

    // Getter for age
    this.getAge = function () {
      return _age;
    };
  }

  display() {
    return `${this.id}, ${this.name}`;
  }
}

const ob3 = new Employee2("Vikas", 99);
console.log(ob3); // * : Employee2 { id: 3, name: 'Laxman' }
console.log(ob3 instanceof Employee2); // * : true
console.log(ob3.display());
// POINT : Correct way to get value of private variable
console.log("Age is ", ob3.getAge()); // * : 'Age is  99'
