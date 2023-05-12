// Todo: Without Finally
// try {
//   let a = 0;
//   console.log({ a });
//   console.log(amit);
//   console.log("In try running");
// } catch (error) {
//   console.log("This is error");
//   console.log(xy);
// }
// console.log("End 1");    // ! : not executed because error at catch

// Todo : With Finally
// try {
//   let a = 0;
//   console.log({ a });
//   console.log(amit);
//   console.log("In try running");
// } catch (error) {
//   console.log("This is error = ", error);
//     console.log(xy);
// } finally {
//   console.log("End 2");
// }
// console.log("Out of Try catch and finally block"); // ! : not executed because error at catch

// Todo : With finally try return value
const hello = () => {
  try {
    let a = 120;
    console.log({ a });
    console.log("In try running");
    return a;
  } catch (error) {
    console.log("This is error");
    // console.log(mm);
  } finally {
    console.log("End 3");
  }
};

let c = hello();
console.log("Return value of hello function = ", c);

// Todo : With try..catch..finally
// try {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) {
//       console.log("ok");
//       throw new Error("Please stop.....");
//     }
//   }
//   console.log("end try");
// } catch (error) {
//   console.log("This is error = ", error.message);
// } finally {
//   console.log("End 2");
// }
// console.log("Out of Try catch and finally block");
