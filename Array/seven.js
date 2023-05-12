// Todo : nullish coalescing operator

Array.prototype.last = function () {
  console.log(this);
  console.log(this.length);
  console.log(this[this.length - 1]);

  console.log(this[this.length - 1] ?? -1);

  console.log((this.length === 0 ? undefined : this.length) ?? -1);

  console.log(undefined ?? "default value");
};

let arr1 = [1, 2, 3, 8];
arr1.last();

let arr2 = [];
arr2.last();
