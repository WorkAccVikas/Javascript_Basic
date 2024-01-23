// LINK : https://www.youtube.com/watch?v=n6lSxTgOm40&ab_channel=SamMeech-Ward

const player = {
  score: 55,
  name: "Virat",
  sayHello() {
    console.log(`Player name ${this.name} and its score ${this.score}`);
  },
  increaseScore() {
    this.score = this.score + 5;
  },
};

const proto1 = Object.getPrototypeOf(player);

console.log(proto1); // * : {}
console.log(Object.getOwnPropertyNames(proto1));

/** 
 * [ 'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString' ]
 */

player.sayHello(); // * : 'Player name Virat and its score 55'

const p1 = Object.create(player);
const p2 = Object.create(player);

console.log(p1, p2); // * : {} {}

p1.sayHello(); // * : 'Player name Virat and its score 55'

p1.name = "Ram";
p1.increaseScore();
p1.increaseScore();
p1.sayHello(); // * : 'Player name Ram and its score 65'
console.log(p1); // * : { name: 'Ram', score: 65 }

const p3 = Object.create(player);
console.log(p3.toString()); // * : '[object Object]'
const prototype = Object.getPrototypeOf(p3);
console.log(prototype); // * : { score: 55, name: 'Virat', sayHello: [λ: sayHello], increaseScore: [λ: increaseScore] }
console.log(Object.getOwnPropertyNames(prototype)); // * : [ 'score', 'name', 'sayHello', 'increaseScore' ]
