// TOPIC : class

class Employee2 {
  constructor() {
    this.id = 3;
    this.name = "Laxman";
  }
}

const ob3 = new Employee2();
console.log(ob3); // * : Employee2 { id: 3, name: 'Laxman' }
console.log(ob3 instanceof Employee2); // * : true

// ###################################################################################
class Employee3 {
  id = 4;
  name = "Ravan";
}

const ob4 = new Employee3();
console.log(ob4); // * : Employee3 { id: 4, name: 'Ravan' }
console.log(ob4 instanceof Employee3); // * : true

// ###################################################################################
class Employee6 {
  id = 8;
  name = "Sachin";
  // POINT : private variable in class
  #age = 88;
}

const ob7 = new Employee6();
console.log(ob7); // * : Employee6 { id: 8, name: 'Sachin' }
console.log(ob7 instanceof Employee6); // * : true
console.log(ob7.age); // ! : undefined (private variable)

/** DESC :
 *  - declare variable in both cases it is part of object when we create object using "new" keyword.
 *      - constructor declare variable using this or
 *      - without constructor (declare variable without using this)
 *  - using "#" declare private variable. (not part of object)
 */
