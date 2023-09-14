// TOPIC : Polyfill of reverse

const x = [1, 2, 3, 4, 5];

const y = x.reverse();

console.log(y);

Array.prototype.myReverse = function () {
  let i = 0;
  while (i < this.length) {
    let current = this[i];
    this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = current;
    i++;
  }
  return this;
};

const z = x.myReverse();
console.log(z);
