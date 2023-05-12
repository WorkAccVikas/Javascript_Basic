class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  shout() {
    console.log(`${this.name} is shouting, color = ${this.color}`);
  }
  run() {
    console.log(`${this.name} is running, color = ${this.color}`);
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log(`${this.name} is eating banana`);
  }
  hide() {
    console.log(`${this.name} is hiding`);
  }
}

let ani = new Animal("Bruno", "white");
ani.shout();
// ani.hide() //! : This will throw an error
let m = new Monkey("Chimpu", "orange");
m.eatBanana();
m.hide();
m.shout();