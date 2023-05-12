const x = 10;

console.log(x);
const a = () => {
  const y = 20;
  console.log(x, y);
  const b = () => {
    let z = 30;
    console.log(x, y, z);
  };
  b();
};

a();

console.log(x);
// console.log(y, z); //! : Error
