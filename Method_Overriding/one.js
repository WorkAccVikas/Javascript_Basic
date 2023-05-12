// Todo : In this method overriding and constructor overriding
class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`);
    this.name = name;
    this.type = "Employee";
  }
  login(type = this.type) {
    console.log(`${type} has logged in`);
  }

  logout(type = this.type) {
    console.log(`${type} has logged out`);
  }

  requestLeaves(leaves, extra_leave = 0) {
    if (extra_leave !== 0) {
      console.log(
        `Employee has requested ${
          leaves + extra_leave
        } leaves - Auto approved, extra leaves = ${extra_leave}`
      );
    } else {
      console.log(`Employee has requested ${leaves} leaves`);
    }
  }
}

let d1 = new Employee("Raju");
d1.login();
d1.requestLeaves(2);
d1.logout();
console.log(d1 instanceof Employee);

let d2 = new Employee("Ramesh");
d2.login();
d2.requestLeaves(2, 3);
d2.logout();

class Programmer extends Employee {
  // Todo : constructor overriding
  constructor(name) {
    super(name); // * : This is important because this is child constructor
    console.log(`Programmer : This is a newly written constructor`);
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(leaves) {
    let extra = 1;
    // Todo : method overriding
    super.requestLeaves(leaves, extra);
    console.log("One extra is granted");
    // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  }
}

let e = new Programmer("Vikas");
e.login("Programmer");
e.requestLeaves(3);
e.requestCoffee(7);
e.logout("Programmer");

class Tester extends Employee {
  // Todo : constructor overriding
  constructor(name) {
    super(name); // * : This is important because this is child constructor
    console.log(`Tester : This is a newly written constructor`);
  }
  // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
  //   super(...args)
  // }
  requestTea(x) {
    console.log(`Employee has requested ${x} tea`);
  }
  requestLeaves(leaves) {
    // Todo : constructor overriding
    super.requestLeaves(leaves);
  }
}

let f = new Tester("Ram");
f.login("Tester");
f.requestLeaves(3);
f.requestTea(7);
f.logout("Tester");
