class Player1 {
  id = 1;
  name = "Ram";
  #age = 22; // ACTION : Private variable
}

const ob1 = new Player1();
console.log(ob1); // * : Player1 {id: 1, name: 'Ram', age: undefined}
// NOTE : Private variable not included in object
console.log(ob1 instanceof Player1); // * : true
console.log(ob1.id, ob1.name); // * : 1, "Ram"
console.log(ob1.age); // * : undefined (because private variable)

// ###########################################################

class Player2 {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;

    // Private property
    let _age = age;

    this.getAge = () => {
      // Privileged method to access private property
      return _age;
    };
  }
}

const ob2 = new Player2(2, "Radha", 55);
console.log(ob2); // * : Player2 { id: 2, name: 'Radha', getAge: [λ] }
// NOTE : Private variable not included in object
console.log(ob2 instanceof Player2); // * : true
console.log(ob2.id, ob2.name); // * : 2, "Radha"
console.log(ob2.age); // * : undefined (because private variable)
// ACTION : How to access private varible outside of class
console.log(ob2.getAge()); // * : 55
