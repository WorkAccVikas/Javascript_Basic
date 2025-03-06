// Todo : Operators
console.log("Operators");

// * : 1. Arithmetic Operator
let a = 11;
let b = 2;

console.log(`a + b ̥= ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("a-- = ", a--);
console.log("a = ", a);

// * : 2. Assignment Operator
let assignment = 11;
assignment += 5; // same as assignment = assignment + 5
console.log("a is now = ", assignment);
assignment -= 5; // same as assignment = assignment - 5
console.log("a is now = ", assignment);
assignment *= 5; // same as assignment = assignment * 5
console.log("a is now = ", assignment);
assignment /= 5; // same as assignment = assignment / 5
console.log("a is now = ", assignment);
assignment **= 5; // same as assignment = assignment **5
console.log("a is now = ", assignment);
assignment %= 5; // same as assignment = assignment % 5
console.log("a is now = ", assignment);

// * : 3. Comparison Operator
let c1 = 6;
let c2 = 7;
let c3 = "6";
let c4 = 6;
let c5 = "6";
let c6 = "5";
let c7 = 7;
const age = 19;

console.log(`c1 == c2 ${c1 == c2}`);
console.log(`c1 != c2 ${c1 != c2}`);
console.log(`c1 !== c2 ${c1 !== c2}`);

console.log(`c1 == c4 ${c1 == c4}`);
console.log(`c1 === c4 ${c1 === c4}`);
console.log(`c1 != c4 ${c1 != c4}`);
console.log(`c1 !== c4 ${c1 !== c4}`);

console.log(`c3 == c5 ${c3 == c5}`);
console.log(`c3 === c5 ${c3 === c5}`);
console.log(`c3 != c5 ${c3 != c5}`);
console.log(`c3 !== c5 ${c3 !== c5}`);

console.log(`c1 == c5 ${c1 == c5}`);
console.log(`c1 === c5 ${c1 === c5}`);
console.log(`c1 != c5 ${c1 != c5}`);
console.log(`c1 !== c5 ${c1 !== c5}`);

console.log(`c1 > c2 ${c1 > c2}`);
console.log(`c1 >= c4 ${c1 >= c4}`);
console.log(`c1 < c2 ${c1 < c2}`);
console.log(`c2 <= c7 ${c2 <= c7}`);

const men = age > 18 ? "Yes" : "No";
console.log(men);

// * : 4. Logical Operator
let d1 = 12;
let d2 = 18;
let d3 = true;

console.log(`d1 < d2 && d2 == 18 ${d1 < d2 && d2 == 18}`);
console.log(`d1 < d2 && d2 != 18 ${d1 < d2 && d2 != 18}`);
console.log(`d1 < d2 || d2 != 18 ${d1 < d2 || d2 != 18}`);
console.log(!d3);

// * : 5. typeof operator
console.log(`typeof "John" = ${typeof "John"}`);
console.log(`typeof 3.14 = ${typeof 3.14}`);
console.log(`typeof NaN = ${typeof NaN}`);
console.log(`typeof false = ${typeof false}`);
console.log(`typeof [1,2,3,4] = ${typeof [1, 2, 3, 4]}`);
console.log(
  `typeof {name:'John', age:34} = ${typeof { name: "John", age: 34 }}`
);
console.log(`typeof new Date() = ${typeof new Date()}`);
console.log(`typeof function () {}  = ${typeof function () {}}`);
console.log(`typeof myCar = ${typeof myCar}`);
console.log(`typeof null = ${typeof null}`);
let person = null;
console.log(`person = ${person} && typeof person = ${typeof person}`);

console.log(`typeof x = ${typeof x}`);
let y;
console.log(`y = ${y} && typeof y = ${typeof y}`);
let car = "";
console.log(`car = ${car} && typeof car = ${typeof car}`);

console.log(`typeof undefined = ${typeof undefined}`);

// Todo :  Difference Between Undefined and Null
// Todo :  undefined and null are equal in value but different in type:
console.log(`null === undefined ${null === undefined}`);
console.log(`null == undefined ${null == undefined}`);

let m1 = null;
let m2;
console.log(`m1 = ${m1} & it's type = ${typeof m1}`);
console.log(`m2 = ${m2} & it's type = ${typeof m2}`);
console.log(`m1 === m2 : ${m1 === m2}`);
console.log(`m1 == m2 : ${m1 == m2}`);

console.log(`typeof "John".constructor = ${typeof "John".constructor}`);
console.log(`typeof (3.14).constructor = ${typeof (3.14).constructor}`);
console.log(`typeof false.constructor = ${typeof false.constructor}`);
console.log(
  `typeof [1,2,3,4].constructor = ${typeof [1, 2, 3, 4].constructor}`
);
console.log(
  `typeof {name:'John',age:34}.constructor = ${typeof { name: "John", age: 34 }
    .constructor}`
);
console.log(`typeof new Date().constructor = ${typeof new Date().constructor}`);
console.log(
  `typeof function () {}.constructor = ${typeof function () {}.constructor}`
);

const fruits = ["Banana", "Orange", "Apple"];
// Todo : checking is array
console.log(
  `fruits array ? 1st way = ${
    fruits.constructor.toString().indexOf("Array") > -1
  }`
);
console.log(`fruits array ? 2nd way = ${fruits.constructor === Array}`);

// * : 6. instanceof operator
const xy = ["Saab", "Volvo", "BMW"];
console.log(`typeof (xy instanceof Array) = ${xy instanceof Array}`);
console.log(`typeof (xy instanceof Object) = ${xy instanceof Object}`);
console.log(`typeof (xy instanceof String) = ${xy instanceof String}`);
console.log(`typeof (xy instanceof Number) = ${xy instanceof Number}`);

// * : 7. void operator
console.log(`void 0 = ${void 0}`);
console.log(`void (console.log("hi")) = ${void console.log("hi")}`);

function getName(str) {
  let name = "Ram";
  console.log(name + " => " + str);
  return str;
}

getName("Sita");

const btnClick = () => getName("Tom");
console.log(`Call function without void = ${btnClick()}`);
const btnClick1 = () => void getName("Amit");
console.log(`Call function with void = ${btnClick1()}`);

// * : 8. Bitwise Operator
let n1 = 5;
let n2 = 1;
console.log(`n1 & n2 = ${n1 & n2}`);
console.log(`n1 | n2 = ${n1 | n2}`);
console.log(`~n1 = ${~n1}`);
console.log(`n1 << n2 = ${n1 << n2}`);
console.log(`n1 >> n2 = ${n1 >> n2}`);
console.log(`n1 >>> n2 = ${n1 >>> n2}`);
console.log(`n1 ^ n2 = ${n1 ^ n2}`);
console.log(10 << n2);

// * : 9. in Operator
const arr1 = [100, 200, 300];
console.log(100 in arr1); // * : false
console.log(0 in arr1); // * : true (Check index as key)
console.log(3 in arr1); // * : false (because arr size is 3 means we can access 0,1,2)

const ob1 = {
  id: 1,
  name: "Ram",
};

console.log("id" in ob1); // * : true
console.log("mobile" in ob1); // * : false

// This is single line comment

/* This is 
multiple line
comment */
