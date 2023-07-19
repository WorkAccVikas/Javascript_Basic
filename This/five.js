const outer = function (age) {
  //   const inner = function (age1) {
  //     console.log(`Inner age is ${age1} and name is  ${this.name}`);
  //   };
  const inner = (age1) => {
    console.log(`Inner age is ${age1} and name is  ${this.name}`);
  };
  //   inner(age); // ! : undefined for normal function
  //   inner.bind(this)(age); // * : Solution 1 for normal function
  inner(age); // * : Solution 2 for arrow function
};

let myObj = {
  name: "Ram",
};

outer.call(myObj, 55);
