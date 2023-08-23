// TOPIC : Polyfill reduce

function myReduce(cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
}

Array.prototype.myReduce = myReduce;

let arr5 = [11, 12, 13, 14];
let r5 = arr5.myReduce((acc, e, i) => acc + e, 0);
console.log({ r5 });
let r6 = arr5.myReduce((acc, e, i) => acc + e);
console.log({ r6 });
