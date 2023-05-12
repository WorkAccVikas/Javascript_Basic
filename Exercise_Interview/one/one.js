console.log("Problem 1");

let arr1 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

const getSumPairZero = () => {
  for (let i of arr1) {
    console.log("Outer loop : getSumPairZero = ", i);
    for (let j = 1; j < arr1.length; j++) {
      console.log("Inner loop : getSumPairZero = ", arr1[j]);
      if (i + arr1[j] == 0) {
        return [i, arr1[j]];
      }
    }
  }
};
(async () => {
  console.time("first loop");
  let r1 = await getSumPairZero();
  console.log({ r1 });
  console.timeEnd("first loop");
})();

//  * : here time complexity = O(n^2) i.e quadratic, time = 4 sec

// Todo : Optimize Solution
let left = 0;
let right = arr1.length - 1;

const getSumPairZero1 = () => {
  while (left < right) {
    sum = arr1[left] + arr1[right];
    console.log("loop : getSumPairZero1 sum = ", sum);
    if (sum === 0) {
      return [arr1[left], arr1[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
(async () => {
  console.time("Second loop");
  let r2 = await getSumPairZero1();
  console.log({ r2 });
  console.timeEnd("Second loop");
})();

//  * : here time complexity = O(n) i.e linear, time = 1 sec
