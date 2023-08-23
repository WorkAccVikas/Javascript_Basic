const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// TOPIC : polyfill of map
Array.prototype.myMap = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }
  return output;
};

let r1 = arr1.myMap((e, i) => e * 2);
console.log(r1);

// TOPIC : polyfill of filter
Array.prototype.myFilter = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

let r2 = arr1.myFilter((e, i) => e > 2);
console.log(r2);

// TOPIC : polyfill of reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let r3 = arr1.myReduce((acc, curr) => acc + curr, 0);
console.log(r3);
