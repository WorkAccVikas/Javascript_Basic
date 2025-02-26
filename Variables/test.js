let a = 111; // in script scope

function fn() {
//   console.log(a); // undefined
  a = 10; // in function scope
  console.log(a); // 10
}

fn();

console.log(a); // 111
