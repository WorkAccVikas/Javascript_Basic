function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
let counter = 0;
function saveInput() {
  console.log("Saving data ", counter++);
}
const processChange = debounce(() => saveInput());
