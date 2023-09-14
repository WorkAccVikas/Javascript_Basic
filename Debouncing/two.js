const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");

const display = (e) => {
  console.log(e.target.value);
};

t2.addEventListener("keyup", display);

// Todo : With debounce no parameters
const show = (e) => {
  console.log(e.target.value);
};
const DEBOUNCE_DURATION = 300; // in milliseconds
const debounce = (fn, timeout = DEBOUNCE_DURATION) => {
  let timer;
  return (...args) => {
    // console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};

// t1.addEventListener("keyup", debounce(show));
t1.addEventListener("keyup", debounce(show, 5000));

// Todo : With debounce with multiple parameters
// const show = (param1, param2) => {
//   return (e) => {
//     console.log(param1, param2, e.target.value);
//   };
// };

// const DEBOUNCE_DURATION = 300; // in milliseconds
// const debounce = (fn, timeout = DEBOUNCE_DURATION) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, timeout);
//   };
// };

// const param1Value = "Hello";
// const param2Value = "World";
// t1.addEventListener("keyup", debounce(show(param1Value, param2Value)));
