const arr1 = [1, 2, 3, 4, 5];

// TOPIC : forEach without context
arr1.forEach((element, index, array) => {
  console.log(element, index, array);
});

function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (arr) {
  arr.forEach((element) => {
    console.log(element);
    console.log(this);
    this.sum += element;
    ++this.count;
  });
};

let obj1 = new Counter();
console.log(obj1);
obj1.add([5, 6, 7]);
console.log(obj1);

// TOPIC : forEach with context
const person = { amount: 0 };

const arr2 = [10, 20, 30];

// NOTE : Mandatory to use normal function in forEach
arr2.forEach(function (element) {
  console.log(this);
  this.amount += element;
}, person);

console.log(person);

function Printer(prefix) {
  this.prefix = prefix;
}

Printer.prototype.print = function (items) {
  items.forEach(function (item) {
    console.log(this.prefix + item);
  }, this); // Set `this` correctly
};

const p = new Printer("Item: ");
p.print(["A", "B", "C"]);
// Output:
// Item: A
// Item: B
// Item: C


// ##############################################################################

const obj2 = { a: 1, b: 2, c: 3 };

Object.prototype.z = 26;

Object.keys(obj2).forEach((key) => {
  console.log(key, obj2[key]); // a,1 b,2 c,3
});

// ##############################################################################
// POINT : ❌ forEach is not async
[1, 2, 3].forEach(async (num) => {
  await new Promise((r) => setTimeout(r, 100));
  console.log(num); // Logs 1,2,3 almost instantly
});

// ##############################################################################

// ##############################################################################
