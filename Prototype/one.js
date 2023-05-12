let obj1 = {
  id: 1,
  name: "ram",
  run: () => {
    console.log("self run");
  },
  display: () => {
    console.log("self display");
  },
};

console.log(obj1);

console.log(obj1.run());

let obj2 = {
  display: () => {
    console.log("display method");
  },
  deposit: () => {
    console.log("deposit method");
  },
};

obj2.__proto__ = {
  city: "goa",
}; // * : add a new property to an object

console.log("city before = ", obj1.city);

obj1.__proto__.age = 12; // ! : it will added to any new object created in this script
console.log("age obj1 = ", obj1.age);
console.log("age obj2 = ", obj2.age);

obj1.__proto__ = {
  room: 404,
}; //* : right way to add property in object

console.log("room obj1 = ", obj1.room);
console.log("room obj2 = ", obj2.room); //? : undefined because obj2 has not room property

obj1.__proto__ = obj2;

console.log("city obj1 = ", obj1.city);
console.log("city obj2 = ", obj2.city);

console.log(obj1.display()); // ? : both objects have the display method but obj1.display called
console.log(obj1.deposit()); // ? : obj1 have not deposit method so he inherited from obj2
