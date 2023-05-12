class Animals {
  constructor(name, city) {
    console.log("Construct called");
    this.name = name;
    this.city = Animals.capitalize(city);
    // this.city = this.capitalize(city)    // ! : Error
    // this.city = capitalize(city)     // ! : Error
  }

  walk() {
    console.log(`Animal ${Animals.capitalize(this.name)} is walking`);
  }
  color() {
    console.log(`Animal city = ${this.city}`);
  }
  static capitalize(x) {
    return x.charAt(0).toUpperCase() + x.substr(1, x.length);
  }
}

let obj1 = new Animals("dog", "goa");
obj1.walk();
obj1.color();
// obj1.capitalize("ram")      // ! : Error