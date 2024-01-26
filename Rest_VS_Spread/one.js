// Todo : Array

// * : Rest

let arr1 = [1, 2, 3, 4, 5];
console.log(...arr1); // ? : Template literal (Spread)
// * : below spread operator
let arr2 = [...arr1]; // ? : here arr2 has completely new reference
console.log(arr2);
console.log(arr1);

let arr4 = arr1;
console.log(arr1 == arr2);
console.log(arr1 == arr4);

arr2.push(6);
arr1.push(7);
console.log(arr1);
console.log(arr2);
console.log(arr4);

function add(a, b, c, ...rest) {
  console.log(rest);
  console.log(...rest);
  return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));

// * : Spread
let arr3 = [10, 20, 30];

function display(n1, n2, n3) {
  console.log(n1, n2, n3);
}

display(arr3[0], arr3[1], arr3[2]);
display(...arr3);
display(arr3); // ! : pass as array
