const outer = function (age) {
  console.log(this);
  const inner1 = function (age1) {
    console.log(this);
    console.log(`Inner age is ${age1} and name is  ${this.name}`);
  };
  const inner2 = (age1) => {
    console.log(this);
    console.log(`Inner age is ${age1} and name is  ${this.name}`);
  };
  inner1(age); // ! : undefined for normal function
  // inner1.bind(this)(age); // * : Solution 1 for normal function
  inner2(age); // * : Solution 2 for arrow function
};

let myObj = {
  name: "Ram",
};

outer.call(myObj, 55);
