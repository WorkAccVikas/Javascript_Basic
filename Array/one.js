let arr1 = [1, 2, false, null, undefined, "ram"];
console.log(arr1, " = ", typeof arr1);
console.log("length = ", arr1.length);
console.log(arr1[2]);
console.log(arr1[-1]);
console.log(arr1[10]);
// changing of an array
arr1[0] = 100;
console.log(arr1);

// traverse in array
for (let i = 0; i < arr1.length; i++) {
  console.log(i, " = ", arr1[i]);
}

// * : 1. toString
let arr2 = [10, 20, 30];
let s1 = arr2.toString();
console.log(s1, " = ", typeof s1);

// * : 2. join
let s2 = arr2.join("__");
console.log(s2, " = ", typeof s2);

// * : 3. pop
let s3 = arr2.pop();
console.log(arr2, " == ", s3);

// * : 4. push
let s4 = arr2.push(88);
console.log(arr2, " = ", s4);

// * : 5. shift
let s5 = arr2.shift();
console.log(arr2, " = ", s5);

// * : 6. unshift
let s6 = arr2.unshift(55);
console.log(arr2, " = ", s6);

let arr3 = [1, 2, 3, 4, 5];

// * : 7. delete
let s7 = delete arr3[0];
console.log(arr3, " = ", s7, "length = ", arr3.length);

// * : 8. concat
let arr4 = [1, 2, 3];
let arr5 = [11, 12, 13];
let arr6 = [21, 22, 23];
let arr7 = arr4.concat(arr5, arr6);
console.log(arr7);

// * : 9. sort i.e. alphabetically sorting
let arr8 = [78, 10, 5, 51, 1, 66, 6, 7];
arr8.sort();
console.log(arr8);

const sortAscending = (a, b) => {
  return a - b;
};
const sortDescending = (a, b) => {
  return b - a;
};

let arr9 = [78, 10, 5, 51, 1, 66, 6, 7];
arr9.sort(sortAscending);
console.log(arr9);
let arr10 = [78, 10, 5, 51, 1, 66, 6, 7];
arr10.sort(sortDescending);
console.log(arr10);

let arr11 = [10, -10, -5, -8];
arr11.sort();
console.log(arr11);

let arr12 = [10, -10, -5, -8];
arr12.sort(sortAscending);
console.log(arr12);

// * : 10 reverse
let arr13 = [10, -10, -5, -8];
arr13.reverse();
console.log(arr13);

// * : 11. splice
let arr14 = [10, -10, -5, -8, 12, 44, -88, 55, 78];
let deletedValues = arr14.splice(2, 3, 100, 200, 300, 400);
console.log(deletedValues);
console.log(arr14);
let arr14_a = [10, -10, -5, -8, 12, 44, -88, 55, 78];
let deletedValues_a = arr14_a.splice(2, 3);
console.log(deletedValues_a);
console.log(arr14_a);
let arr14_b = [10, -10, -5, -8, 12, 44, -88, 55, 78];
let deletedValues_b = arr14_b.splice(1, 1);
console.log(deletedValues_b);
console.log(arr14_b);
let arr14_c = [10, -10, -5, -8, 12, 44, -88, 55, 78];
let deletedValues_c = arr14_c.splice(1, 1, [10, 20], 30);
console.log(deletedValues_c);
console.log(arr14_c);

// * : 12. slice
let arr15 = [10, -10, -5, -8, 12, 44, -88, 55, 78];
let arr16 = arr15.slice(3);
console.log(arr15);
console.log(arr16);
let arr17 = arr15.slice(3, 7);
console.log(arr17);
let arr17_e = arr15.slice(7, 3);
console.log(arr17_e);
let arr17_f = arr15.slice(7, 7);
console.log(arr17_f);

let arr17_a = arr15.slice(0, -1);
console.log(arr17_a);
let arr17_b = arr15.slice(0, -2);
console.log(arr17_b);
let arr17_c = arr15.slice(-5, 0); // ! : Wrong way
console.log(arr17_c);
let arr17_d = arr15.slice(-5, -1);
console.log(arr17_d);

// * : 13. fill
let arr18 = [1, 2, 3, 4, 5];
console.log(arr18.fill(0));
console.log(arr18);
let arr19 = arr18.fill(100);
console.log(arr19);
console.log(arr18);
let arr20 = [1, 2, 3, 4, 5];
console.log(arr20.fill(10, 1, 4));
console.log(arr20);

function fillInNumbers(n) {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1);
}

console.log(fillInNumbers(10));

// * : 14. includes
let arr21 = ["Ram", "Shyam", "Tom"];
let r21 = arr21.includes("Ram");
console.log(r21);
let r22 = arr21.includes("ram");
console.log(r22);
let r23 = arr21.includes("roy");
console.log(r23);

// * : 15. indexOf & lastIndexOf
let arr22 = ["Ram", "Shyam", "Tom", "Ram", "Shyam", "Tom"];
let r24 = arr22.indexOf("Tom");
console.log(r24);
let r25 = arr22.indexOf("tom");
console.log(r25);
let r26 = arr22.indexOf("roy");
console.log(r26);

let r27 = arr22.lastIndexOf("Tom");
console.log(r27);
let r28 = arr22.lastIndexOf("tom");
console.log(r28);
let r29 = arr22.lastIndexOf("roy");
console.log(r29);

// * : 16. every
let arr23 = [1, 2, 3, 4, 5];
let arr24 = [1, 2, 3, 4, -5];

// *: Arrow Function
// const isPositive = (element, index, array) => {
//   return element > 0;
// };

// *: on linear arrow function
const isPositive = (element, index, array) => element > 0;

const r30 = arr23.every(isPositive);
console.log(r30);
const r31 = arr24.every((e) => e > 0);
console.log(r31);

// function isPositive(element, index, array) {
//   return element > 0;
// }

let persons = [
  { name: "Ram" },
  { name: "Tom" },
  { name: "Raj" },
  { surname: "Mohite" },
];
const r32 = persons.every((element) => element.name !== undefined);
console.log(r32);

let persons1 = [
  { name: "Ram" },
  { name: "Tom" },
  { name: "Raj" },
  { name: "Mohite" },
];
const r33 = persons1.every((element) => element.name !== undefined);
console.log(r33);

let arr25 = [[1, 2], [3, 4, 5], [7]];
// *: Checking array contains all array
let r34 = arr25.every((element) => Array.isArray(element));
console.log(r34);

let arr26 = [[1, 2], [3, 4, 5], "Ram"];
let r35 = arr26.every((element) => Array.isArray(element));
console.log(r35);

// * : 17. some
let arr27 = [1, 2, 3, 4, 5];
const numberGreaterThanFour = (e) => e > 4;

let r36 = arr27.some(numberGreaterThanFour);
console.log(r36);

let arr28 = [1, 2, 3, 4];
let r37 = arr28.some(numberGreaterThanFour);
console.log(r37);

let arr29 = [1, -2, 3, 4];
let r38 = arr29.some(numberGreaterThanFour);
console.log(r38);

// * : 18. find
let arr30 = ["Ram", "Raj", "Tom", "Ram"];
const findRam = (element, index, array) => element === "Ram";
let r39 = arr30.find(findRam);
console.log(r39);

// Todo: here we pass extra argument in callback function
const findName = (externalParameter, element, index, array) =>
  element === externalParameter;
let r41 = arr30.find(findName.bind(null, "Ram"));
console.log(r41);
let r42 = arr30.find(findName.bind(null, "Ajay"));
console.log(r42);

let persons2 = [
  {
    name: "Ram",
    age: 18,
  },
  {
    name: "Shyam",
    age: 8,
  },
  {
    name: "Tom",
    age: 25,
  },
  {
    name: "Ram",
    age: 100,
  },
  {
    name: "Ram",
    age: 188,
  },
];
const findRamInPerson2 = (element, index, array) => element.name === "Ram";
let r40 = persons2.find(findRamInPerson2);
console.log(r40);
console.log(r40.age);

// Todo: here we pass extra argument in callback function
const findNameInPerson2 = (externalParameter, element, index, array) =>
  element.name === externalParameter;
// Todo: here we pass 2 extra argument in callback function
const findNameInPerson3 = (externalParameter, extra, element, index, array) => {
  console.log(externalParameter);
  console.log(extra);
  console.log(element);
  console.log(index);
  return element.name === externalParameter && element.age === extra;
};
let m = persons2.find(findNameInPerson3.bind(null, "Ram", 18));
console.log(m);

let r43 = persons2.find(findNameInPerson2.bind(null, "Ram"));
console.log(r43);
console.log(r43.age);
let r44 = persons2.find(findNameInPerson2.bind(null, "Pooja"));
console.log(r44);
console.log(r44?.age);

// * : 19. findIndex
let arr31 = [1, 2, 3, 4, 5, 3];
const findNumberInArray = (externalParameter, element) =>
  element === externalParameter;
let r45 = arr31.findIndex(findNumberInArray.bind(null, 3));
console.log(r45);
let r46 = arr31.findIndex(findNumberInArray.bind(null, 31));
console.log(r46);
let n = persons2.findIndex(findNameInPerson3.bind(null, "Ram", 18));
console.log(n);
let n1 = persons2.findIndex(findNameInPerson3.bind(null, "Ram", 25));
console.log(n1);

// * : 20. from
const s8 = "1234567";
const r47 = Array.from(s8);
// array contain string
console.log(r47);
// *: Array contain number : 1st way
const convertIntoNumber = (element) => Number(element);
let r48 = Array.from(s8, convertIntoNumber);
console.log(r48);

// *: Array contain number : 2nd way
let r49 = Array.from(s8, Number);
console.log(r49);

// *: Remove duplicate from array
let arr32 = [1, 2, 3, 4, 1, 2, 3, 4, 5];
let set1 = new Set(arr32);
console.log(set1);
let r50 = Array.from(set1);
console.log(r50);
let arr33 = [1, 2, 3];
console.log(Array.from(arr33, (x) => x ** 2));
console.log(arr33);

// * : 21. isArray
let arr34 = [1, 2, 3];
console.log(Array.isArray(arr34));
let no1 = 10;
console.log(Array.isArray(no1));
let s9 = "vikas";
console.log(Array.isArray(s9));

// * : 22. flat
let arr35 = [1, [2, [3, [4, 5]]]];
let r51 = arr35.flat(3);
console.log(r51);
console.log(arr35);
let arr36 = [1, [2, [3, [4, [5, [6]]]]]];
let r52 = arr36.flat(4);
console.log(r52);
let r53 = arr36.flat(5);  // * : total 6 so used 5
console.log(r53);
let r54 = arr36.flat(6);
console.log(r54);
let r55 = arr36.flat(Infinity);
console.log(r55);
