// TOPIC : Polyfill of forEach
// DESC : MORE : https://chat.openai.com/share/efb2859c-2e2f-4e8a-8144-e07baa338cc5
/** DESC : LINK 1 : https://www.youtube.com/watch?v=nZuER-S9-5w&ab_channel=AnkushSharma
 *         LINK 2 : https://www.youtube.com/watch?v=uYvT0-kwfNE&t=693s&ab_channel=ChaiaurCode
 */
Array.prototype.customForEach = function (cb, context) {
  console.log(context);
  if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }
  let i = 0;
  while (i < this.length) {
    cb.call(context, this[i], i, this);
    i++;
  }
};

function Counter() {
  this.sum = 0;
  this.count = 0;
}

const person = {
  id: 1,
  name: "Ram",
};

Counter.prototype.add = function (arr) {
  // TOPIC : forEach with context
  arr.customForEach((element) => {
    console.log(element);
    this.sum += element;
    ++this.count;
  });
};

let obj1 = new Counter();
console.log(obj1);
obj1.add([5, 6, 7]);
console.log(obj1);

const person1 = { amount: 0 };

const arr2 = [10, 20, 30];

// TOPIC : forEach with context
// NOTE : Mandatory to use normal function in forEach
arr2.customForEach(function (element) {
  console.log(this);
  this.amount += element;
}, person1);

console.log(person1);

arr2.customForEach(12, person1);
