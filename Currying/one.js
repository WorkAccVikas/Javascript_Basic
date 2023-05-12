function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// ! : bad way
let r1 = add(1);
let r2 = r1(2);
let r3 = r2(3);
console.log(r3);

// * : right way
let res = add(1)(2)(3);
console.log(res);

let obj1 = {
  id: 11,
  name: "ram",
};

function userInfo(obj) {
  return function (property) {
    return obj[property];
  };
}

let res1 = userInfo(obj1)("name");
console.log(res1);

// Todo : Solve infinite currying
function addition(a) {
  return function (b) {
    if (b) return addition(a + b);
    return a;
  };
}

let res2 = addition(1)(2)(3)(4)();
console.log(res2);
