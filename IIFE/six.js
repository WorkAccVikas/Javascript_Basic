const x = "Ram";

const greet = () => {
  return "Good Morning";
};

(() => {
  const x = "Vikas";
  const greet = () => {
    return "Good Night";
  };
  console.log("In IIFE = ", x);
  console.log("In IIFE = ", greet());
})();

console.log(x);
console.log(greet());

// * : (2) imp we will call increment function and it will increment counter
const increment = (() => {
  let counter = 0;
  console.log("Counter = ", counter);
  const credits = (num) => console.log(`I have ${num} credits`);
  return () => {
    counter++;
    credits(counter);
  };
})();

increment();
increment();
increment();
increment();
increment();


