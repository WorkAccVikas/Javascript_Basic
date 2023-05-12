function add(x, y) {
  console.log("In add function");
  return x + y;
}

function calc(n) {
  let sum = 0;
  for (let index = 0; index < n; index++) {
    sum += index;
  }
  return sum;
}

function display(f1, time, ...args) {
  return new Promise(function (resolve, reject) {
    console.log("in display = ", f1);
    console.log("in display = ", args);
    console.log("in display = ", ...args);
    console.log("in display time = ", time);
    setTimeout(() => {
      let result = f1(...args);
      console.log({ result });
      resolve(result);
    }, time * 1000);
  });
}

const call_function =
  (fun) =>
  async (...args) => {
    console.log("in async = ", fun);
    console.log("in async = ", args);
    console.log("in async = ", ...args);
    let time = args[args.length - 1];
    let args2 = [...args.slice(0, -1)];
    console.log(args2);
    console.log("in async time = ", time);
    let result = await display(fun, time, ...args2);
    console.log("in async result = ", result);
    return result;
  };

// Todo : pass any regular function with time it will resolve after that time
(async () => {
  let pass_function_parameters = await call_function(add);
  console.log(pass_function_parameters);
  let y = await pass_function_parameters(10, 20, 15);
  console.log("next code");
  console.log({ y });
})();

// *: time = 15 sec i.e. one by one
// (async () => {
//   let pass_function_parameters = call_function(add);
//   console.log(pass_function_parameters);
//   let y = await pass_function_parameters(10, 20, 3);
//   console.log("next code");
//   console.log({ y });
//   let pass_function_parameters1 = call_function(calc);
//   let z = await pass_function_parameters1(10, 12);
//   console.log({ z });
// })();

// * : time = 12 sec i.e. parallel
// (async () => {
//   let pass_function_parameters = call_function(add);
//   console.log(pass_function_parameters);
//   let y = pass_function_parameters(10, 20, 3);
//   console.log("next code");
//   console.log({ y });
//   let pass_function_parameters1 = call_function(calc);
//   let z = pass_function_parameters1(10, 12);
//   console.log({ z });
//   let res = await Promise.allSettled([y, z]);
//   console.log(res);
//   console.log({ res });
// })();
