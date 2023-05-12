function hello() {
  var name = "vikas";
  function innerFunc() {
    console.log("In innerFunc = ", this); // * : window object because regular function call
    console.log("In innerFunc = ", this.name);
    console.log("In innerFunc = ", name);
  }
  innerFunc();
}

hello();

// console.log(name); // !: Error

const hello1 = () => {
  var name = "pooja";
  function innerFunc1() {
    console.log("In innerFunc1 = ", this); // * : window object because regular function call
    console.log("In innerFunc1 = ", this.name);
    console.log("In innerFunc1 = ", name);
  }
  innerFunc1();

  const innerFunc2 = () => {
    console.log("In innerFunc2 = ", this); // * : window object because regular function call
    console.log("In innerFunc2 = ", this.name);
    console.log("In innerFunc2 = ", name);
  };
  innerFunc2();
};

hello1();

// console.log(name); //!: Error
