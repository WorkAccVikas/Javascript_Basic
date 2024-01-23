// LINK : https://www.youtube.com/watch?v=n6lSxTgOm40&ab_channel=SamMeech-Ward

const player = {
  score: 55,
  name: "Virat",
  sayHello() {
    console.log(`Player name ${this.name} and its score ${this.score}`);
  },
};

player.sayHello(); // * : 'Player name Virat and its score 55'

const p1 = Object.create(player);
const p2 = Object.create(player);

console.log(p1, p2); // * : {} {}

p1.sayHello(); // * : 'Player name Virat and its score 55'
p2.sayHello(); // * : 'Player name Virat and its score 55'

// POINT : Bad way to get prototype
console.log(p1.__proto__); // * : { score: 55, name: 'Virat', sayHello: [λ: sayHello] }

// POINT : Good way to get prototype
console.log(Object.getPrototypeOf(p1)); // * : { score: 55, name: 'Virat', sayHello: [λ: sayHello] }

console.log(Object.getPrototypeOf(p1) === player); // * : true

const p3 = Object.create(player);
const p4 = Object.create(player);

p3.name = "Ram";
p4.name = "Seeta";

console.log(p3, p4); // * : { name: 'Ram' } { name: 'Seeta' }

p3.sayHello(); // * : 'Player name Ram and its score 55'
p4.sayHello(); // * : 'Player name Seeta and its score 55'
