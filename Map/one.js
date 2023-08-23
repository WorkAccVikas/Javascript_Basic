// TOPIC : Using Object
const b1 = {};
const b2 = { key: "b2" };
const b3 = { key: "b3" };

b1[b2] = 100;
b1[b3] = 200;
console.log(b1);
console.log(b1[b2], b1[b3]);

// TOPIC : Using Map
const v1 = new Map();
const v2 = { key: "v2" };
const v3 = { key: "v3" };

v1.set(v2, 10);
v1.set(v2, 50);
v1.set(v3, 20);

console.log(v1);
console.log(v1.get(v2));
