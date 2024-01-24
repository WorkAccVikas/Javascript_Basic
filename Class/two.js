// TOPIC : function

function Employee() {
  return {
    id: 1,
    name: "Ram",
  };
}

const ob1 = new Employee();
console.log(ob1); // * : { id: 1, name: 'Ram' }
console.log(ob1 instanceof Employee); // * : false

// ###################################################################################
function Employee1() {
  this.id = 2;
  this.name = "Seeta";
}

const ob2 = new Employee1();
console.log(ob2); // * : Employee1 { id: 2, name: 'Seeta' }
console.log(ob2 instanceof Employee1); // * : true

// ###################################################################################

// ###################################################################################
function Employee4() {
  this.id = 5;
  this.name = "Kumbhkaran";

  return {
    id: 6,
    name: "Hanuman",
  };
}

const ob5 = new Employee4();
// DESC : Return get highest priority in Function as compare with this
console.log(ob5); // * : { id: 6, name: 'Hanuman' }
console.log(ob5 instanceof Employee4); // * : false

// ###################################################################################
function Employee5() {
  this.id = 7;
  this.name = "SaiBaba";
  // POINT : private variable in function
  age = 44;
}

const ob6 = new Employee5();
console.log(ob6); // * : Employee5 { id: 7, name: 'SaiBaba' }
console.log(ob6 instanceof Employee5); // * : true
console.log(ob6.age); // ! : undefined (private variable)

/** DESC :
 *  - Without "this" in declare variable, it is not part of object that return when we create object using "new" keyword.
 * 
 */
