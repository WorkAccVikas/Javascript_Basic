// Todo : Getter and Setter Method
// Todo : instanceof method
class Animals {
  constructor(name) {
    this.name = name; // ? : bad way
    // this._name = name; // * : right way
  }

  fly() {
    console.log("I am flyings");
  }
  get name() {
    // return this.name;   // ! : Error
    return this._name; // * : right way
  }
  set name(newName) {
    this._name = newName; // * : right way
  }
}

let obj1 = new Animals("Tom");
obj1.fly();
console.log(obj1.name);
obj1.name = "Jerry";
console.log(obj1.name);
console.log(obj1 instanceof Animals);

class Rabbit extends Animals {
  eatCarrot() {
    console.log("Eating carrot", this._name);
  }
}

let obj2 = new Rabbit("Puppy");
obj2.eatCarrot();
console.log(obj2 instanceof Rabbit);
console.log(obj2 instanceof Animals);
console.log(obj1 instanceof Rabbit);

console.log("Checking x");
let x = 55;
console.log(x instanceof Rabbit);
console.log(x instanceof Animals);
