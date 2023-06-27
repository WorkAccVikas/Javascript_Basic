var x = 10;
let y = 11;

let obj = {
  x: 20,
  y: 22,
  f1: function () {
    console.log("In f1 function this = ", this); // * : current obj
    console.log("In f1 function = ", x, y);
    console.log("In f1 function = ", this.x, this.y);

    function f11() {
      console.log("In f11 function this = ", this); // ! : window obj
      console.log("In f11 function = ", x, y);
      console.log("In f11 function = ", this.x, this.y); // ! : undefined
    }
    f11();

    let f12 = () => {
      console.log("In f12 function this = ", this); // * : current obj
      console.log("In f12 function = ", x, y);
      console.log("In f12 function = ", this.x, this.y);
    };
    f12();
  },
};

obj.f1();

const f2 = () => {
  console.log("In f2 Global function = ", this.x, this.y); // * : 10 undefined
  console.log("In f2 Global function= ", x, y);
};
f2();

function f3() {
  console.log("In f3 Global function = ", this.x, this.y); // * : 10 undefined
  console.log("In f3 Global function= ", x, y);
}
f3();
