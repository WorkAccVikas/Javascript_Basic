// Todo : Array to Object

const arr1 = [
  ["id", 1],
  ["name", "Ram"],
];

const obj1 = Object.fromEntries(arr1);
console.log(obj1);

// Todo : Object to Array
const obj2 = {
  id: 2,
  name: "Seeta",
};

const arr2 = Object.entries(obj2);
console.log(arr2);
