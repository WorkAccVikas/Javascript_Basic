console.log("Problem 1");

let arr1 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

const getSumPairZero = () => {
  console.time("first");
  for (let i of arr1) {
    for (let j = 1; j < arr1.length; j++) {
      if (i + arr1[j] == 0) {
        return [i, arr1[j]];
      }
    }
  }
  console.timeEnd("first");
};

let r1 = getSumPairZero();
console.log({ r1 });

// here time complexity = O(n^2) i.e quadratic

// Todo : Optimize Solution
let left = 0;
let right = arr1.length - 1;

const getSumPairZero1 = () => {
  while (left < right) {
    sum = arr1[left] + arr1[right];
    if (sum === 0) {
      return [arr1[left], arr1[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

let r2 = getSumPairZero1();
console.log({ r2 });
