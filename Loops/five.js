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
    this.sum += element;
    ++this.count;
  });
};

let obj1 = new Counter();
console.log(obj1);
obj1.add([5, 6, 7]);
console.log(obj1);

const person = { amount: 0 };

const arr2 = [10, 20, 30];

// TOPIC : forEach with context
// NOTE : Mandatory to use normal function in forEach
arr2.forEach(function (element) {
  console.log(this);
  this.amount += element;
}, person);

console.log(person);
