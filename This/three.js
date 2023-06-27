let obj = {
  id: 1,
  name: "Ram",
  f1() {
    console.log("In f1 function = ", this); // * : refer obj
    console.log("In f1 function = ", this.id, this.name);
    let that = this;
    setTimeout(function () {
      console.log("In f1 settimeout this = ", this); // ! : refer window obj
      console.log("In f1 settimeout id & name = ", this.id, this.name); // ! : refer window obj hence undefined
      console.log(
        "In f1 settimeout correct way id & name = ",
        that.id,
        that.name
      );
    }, 1000);

    setTimeout(() => {
      console.log("In f1 settimeout1 this = ", this); // * : refer obj
      console.log("In f1 settimeout1 id & name = ", this.id, this.name);
    }, 2000);
  },
  f2: () => {
    console.log("In f2 function this = ", this); // ! : refer window obj
    console.log("In f2 function id & name = ", this.id, this.name); // ! : refer window obj hence undefined
  },

  f3: function () {
    console.log("In f3 function = ", this); // * : refer obj
    console.log("In f3 function = ", this.id, this.name);
    let that = this;
    setTimeout(function () {
      console.log("In f3 settimeout this = ", this); // ! : refer window obj
      console.log("In f3 settimeout id & name = ", this.id, this.name); // ! : refer window obj hence undefined
      console.log(
        "In f3 settimeout correct way id & name = ",
        that.id,
        that.name
      );
    }, 1000);

    setTimeout(() => {
      console.log("In f3 settimeout1 this = ", this); // * : refer obj
      console.log("In f3 settimeout1 id & name = ", this.id, this.name);
    }, 2000);
  },
  family: {
    father: "Samir",
    mother: "Rekha",
    f4() {
      console.log("In f4 function = ", this); // * : refer obj.family
      console.log("In f4 function = ", this.father, this.mother);
      let that = this;
      setTimeout(function () {
        console.log("In f4 settimeout this = ", this); // ! : refer window obj
        console.log("In f4 settimeout id & mother = ", this.father, this.mother); // ! : refer window obj hence undefined
        console.log(
          "In f4 settimeout correct way father & mother mother = ",
          that.father,
          that.mother
        );
      }, 1000);

      setTimeout(() => {
        console.log("In f4 settimeout1 this = ", this); // * : refer obj.family
        console.log(
          "In f4 settimeout1 father & mother mother = ",
          this.father,
          this.mother
        );
      }, 2000);
    },
    f5: () => {
      console.log("In f5 function this = ", this); // ! : refer window obj
      console.log("In f5 function father & mother mother = ", this.father, this.mother); // ! : refer window obj hence undefined
    },

    f6: function () {
      console.log("In f6 function = ", this); // * : refer obj.family
      console.log("In f6 function = ", this.father, this.mother);
      let that = this;
      setTimeout(function () {
        console.log("In f6 settimeout this = ", this); // ! : refer window obj
        console.log(
          "In f6 settimeout father & mother mother = ",
          this.father,
          this.mother
        ); // ! : refer window obj hence undefined
        console.log(
          "In f6 settimeout correct way father & mother mother = ",
          that.father,
          that.mother
        );
      }, 1000);

      setTimeout(() => {
        console.log("In f6 settimeout1 this = ", this); // * : refer obj.family
        console.log(
          "In f6 settimeout1 father & mother mother = ",
          this.father,
          this.mother
        );
      }, 2000);
    },
  },
};

// obj.f1();
// obj.f2();
// obj.f3();
// obj.family.f4();
// obj.family.f5();
obj.family.f6();
