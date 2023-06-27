function hello() {
  var name = "vikas";
  function innerFunc() {
    console.log("In innerFunc = ", this); // * : window object because regular function call
    console.log("In innerFunc = ", this.name); // ? : Empty String
    console.log("In innerFunc = ", name); // ? : vikas
  }
  innerFunc();
}

hello();

// console.log(name); // !: Error

const hello1 = () => {
  var name = "pooja";
  function innerFunc1() {
    console.log("In innerFunc1 = ", this); // * : window object because regular function call
    console.log("In innerFunc1 = ", this.name); // ? : Empty String
    console.log("In innerFunc1 = ", name); // ? : pooja
  }
  innerFunc1();

  const innerFunc2 = () => {
    console.log("In innerFunc2 = ", this); // * : window object because regular function call
    console.log("In innerFunc2 = ", this.name); // ? : Empty String
    console.log("In innerFunc2 = ", name); // ? : pooja
  };
  innerFunc2();
};

hello1();

// console.log(name); //!: Error
