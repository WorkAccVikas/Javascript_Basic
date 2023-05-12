// Todo : Arrow Functions

const x = (name) => console.log("In x function Name = ", name);
x("Ram");

const y = (name, greet) =>
  console.log(`In y function Name = ${name}, Message = ${greet}`);

y("Tom", "Good Morning");

const obj1 = {
  id: 1,
  name: "Vikas",
  city: "Mumbai",
  show: function () {
    console.log("In show Function ", this);
    console.log(`In show Function Name: ${this.name}, City: ${this.city}`);
  },
  show1: function () {
    console.log("In show1 Function ", this);
    // Todo : if you use arrow function in settimeout then all problem solved
    setTimeout(() => {
      console.log("settimeout : In show1 Function ", this);
      console.log(
        `settimeout : In show1 Function Name: ${this.name}, City: ${this.city}`
      );
    }, 2000);
  },
  show2: function () {
    console.log("In show2 Function ", this);
    setTimeout(function () {
      console.log("settimeout : In show2 Function ", this); // ? :  here window object returns
      console.log(
        `settimeout : In show2 Function Name: ${this.name}, City: ${this.city}`
      );
    }, 4000);
  },
  show3: function () {
    console.log("In show3 Function ", this);
    let that = this; //Todo : to solve show2 problem of undefined
    setTimeout(function () {
      // console.log("settimeout : In show3 Function ", this);
      console.log("settimeout : In show3 Function ", that);
      console.log(
        `settimeout : In show3 Function Name: ${that.name}, City: ${that.city}`
      );
    }, 6000);
  },

  show4: () => {
    console.log("In show4 function ", this); // * : window object
  },
};

obj1.show();
obj1.show1();
obj1.show2();
obj1.show3();
obj1.show4();
