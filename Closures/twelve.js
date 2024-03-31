const delay1 = (time = 5) => {
  const end = time * 1000 + new Date().getTime();
  while (new Date().getTime() < end) {}
};

const hello = async (index) => {
  delay1(5);
  const result = [1, 2, 3, 4, 5];
  console.log("Run");

  console.log(result[index]);
};

console.time("Hello");
hello(3);
hello(4);
hello(3);
console.timeEnd("Hello");
// DESC : 15 Seconds

// ####################################################################

// const bye = ()=>{
//     delay1(5);
//     const result = [1,2,3,4,5];
//     console.log("Run");
//     return function(index) {
//         console.log(result[index])
//     }
// }

// console.time("Bye");
// const ob1 = bye();
// ob1(1)
// ob1(2)
// ob1(3)
// console.timeEnd("Bye");
// DESC : 5 Seconds