// Todo : nullish coalescing operator

Array.prototype.last = function () {
  console.log(this);
  console.log(this.length);
  console.log(this[this.length - 1]);

  console.log(this[this.length - 1] ?? -1);

  console.log((this.length === 0 ? undefined : this.length) ?? -1);

  console.log(undefined ?? "default value");
  console.log("Ram" ?? "default value");

  return (this.length === 0 ? undefined : this.length) ?? -1;
};

let arr1 = [1, 2, 3, 8];
console.log(arr1.last());

let arr2 = [];
console.log(arr2.last());
