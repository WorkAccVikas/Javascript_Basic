const t1 = document.getElementById("t1");

const display = (e) => {
  console.log(e.target.value);
};

// t1.addEventListener("keyup", display);

// Todo : With debounce
const show = (e) => {
  console.log(e.target.value);
};
const DEBOUNCE_DURATION = 300; // in milliseconds
const debounce = (fn, timeout = DEBOUNCE_DURATION) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};

t1.addEventListener("keyup", debounce(show));
