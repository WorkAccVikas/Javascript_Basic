// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

let arr = [1, 2, 3, 4, 5];

let [a1, a2] = arr;
console.log("Value of a");
console.log(a1, a2);

let [b1, b2, b3, b4, b5] = arr;

console.log("Value of b");
console.log(b1, b2, b3, b4, b5);

let [c1, c2, ...rest] = arr;
console.log("Value of c");
console.log(c1, c2);
console.log(rest, typeof rest);

let [d1, ...d] = arr;
console.log("Value of d");
console.log(d1);
console.log(d);

let [e1, , e3, ...e] = arr;
console.log("Value of e");
console.log(e1, e3);
console.log(e);

let obj = {
  f1: 1,
  f2: 2,
  f3: 3,
};

let { f1, f2, f3 } = obj;
console.log("Value of f");
console.log(f1, f2, f3);

// Todo : Spread Operator
let arr1 = [10, 20, 30];
console.log(arr1, typeof arr1);
let obj1 = { ...arr1 };
console.log(obj1, typeof obj1);

function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}

console.log(sum(...arr1));

let arr2 = [10, 20, 30, 40];
function sum_of_values(...args) {
  console.log(args);
  console.log(typeof args);
  console.log(...args);
  let total = 0;
  const add = (x, y) => {
    return x + y;
  };

  let sm = args.flat(Infinity);
  console.log(sm);

  let q = sm.reduce(add);
  console.log(q);
  return q;
}

console.log(sum_of_values(arr2));
console.log(sum_of_values([12, 8, 99, 22, 334, 55, 678, 55, 556]));
console.log(sum_of_values(1, 2, 3));

let obj3 = {
  id: 101,
  name: "Ram",
  city: "Pune",
};

// * : changing some value of obj3
console.log({ ...obj3, name: "Tom", city: "Goa" }); // ? : It will not overwrite original object
console.log(obj3);
console.log({ name: "Tom", city: "Goa", ...obj3 }); // ! : not work because ...obj3 must be first
obj3 = {
  ...obj3,
  city: "Mumbai",
};

console.log(obj3);

const obj4 = {
  a: 10,
  b: 20,
};

const { a: aa = 100, b: bb = 200, c: cc = 300 } = obj4;
console.log(aa, bb, cc);

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}
function userIdName({ id, displayName }) {
  return [id, displayName];
}
function userDetails({
  id,
  displayName: dname,
  fullName: { firstName: fname, lastName: lname },
}) {
  return [id, dname, fname, lname];
}

console.log(userId(user)); // *: 42
console.log(userIdName(user));
console.log(userDetails(user));

function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  size: "tiny",
  coords: { x: 18, y: 30 },
  radius: 30,
});

drawChart();

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
      lastEdit,
    },
  ],
  url,
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
console.log(url);
console.log(lastEdit);

const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
  age,
} of people) {
  console.log(`Name: ${n}, Father: ${f}, age : ${age}`);
}

const key = "z";
const key1 = "y";
// const { [key]: foo, key1: testy } = { z: "bar", y: "lemon" }; // ! : here key1 inserted is wrong correct way see key => output of testy = undefined
const { [key]: foo, y: testy } = { z: "bar", y: "lemon" };

console.log(foo); // "bar"
console.log(testy);

const foo1 = { "fizz-buzz": "Ramu" };
const { "fizz-buzz": fizzBuzz } = foo1;

console.log(fizzBuzz); // Ramu

const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"

const obj5 = {
  ab: "123",
  __proto__: {
    cd: "456",
  },
};
const { ab, cd } = obj5;
console.log(ab, cd);
// self "123"
// prot "456" (Access to the prototype chain)
