// * : 1. without try catch
// setTimeout(() => {
//   console.log("Hi 1 ");
// }, 1000);

//!: stop here and rest code not executed
// setTimeout(() => {
//   console.log(rahul);
// }, 100);

// setTimeout(() => {
//   console.log("Hi 2 ");
// }, 2000);

// setTimeout(() => {
//   console.log("Hi 3 ");
// }, 3000);

// * : 2. with try catch
try {
  console.log("Start");
  setTimeout(() => {
    console.log("Hi 1 ");
  }, 1000);

  //  ? : error occurred in catch block and rest of code will be executed
  // setTimeout(() => {
  //   console.log(x);
  // }, 100);

  //! : error occurred in catch block and rest of code will not been executed
  console.log(md);

  console.log("middle");

  console.log("End");
} catch (error) {
  console.log("Error Catch = ", error);
} finally {
  console.log("Finally Block");
}
