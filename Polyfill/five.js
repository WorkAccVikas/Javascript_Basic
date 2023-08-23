function hello(a, b) {
  console.log(this.id, this.name, a, b);
}

let obj1 = {
  id: 1,
  name: "Ram",
};

hello.call(obj1, 11, 12);

// TOPIC : Polyfill of call

Object.prototype.myCall = function (ob, ...args) {
  ob.ref = this;
  ob.ref(...args);
};
hello.myCall(obj1, 11, 12);

// -------------------------------------------------------------

hello.apply(obj1, [88, 99]);

// TOPIC : Polyfill of apply
Object.prototype.myApply = function (ob, args) {
  ob.ref = this;
  ob.ref(...args);
};
hello.myApply(obj1, [74, 66]);

// -----------------------------------------------

let r1 = hello.bind(obj1);
let r11 = r1(111, 222);

// TOPIC : Polyfill of bind

Object.prototype.myBind = function (ob) {
  ob.ref = this;
  return function (...args) {
    ob.ref(...args);
  };
};

let r2 = hello.myBind(obj1);
let r21 = r2(22, 33);

// -------------------------------------------------

const x = {
  id: 2,
  name: "Jay",
  family: {
    count: 4,
    salary: 1000,
  },
};

const x1 = { ...x };
console.log(x.family === x1.family);
console.log(x.id === x1.id);

x1.id = 11;
// x1.family.count=99
console.log(x);
console.log(x1);

const x2 = Object.assign({}, x);
console.log(x.family === x2.family);
console.log(x.id === x2.id);

const x3 = structuredClone(x);
console.log(x.family === x3.family);
console.log(x.id === x3.id);

const x4 = JSON.parse(JSON.stringify(x));
console.log(x.family === x4.family);
console.log(x.id === x4.id);