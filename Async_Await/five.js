// TODO : THROW ERROR FROM TRY CATCH BLOCK IN ASYNC FUNCTION TO PARENT FUNCTION

// Asynchronous function
function someAsyncOperation(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve(1);
            reject('Major Problem')
        },2000)
    })
}

async function asyncFunction() {
  try {
    // Some asynchronous code that may throw an error
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    // Handle the error here
    throw error; // Propagate the error
  }
}

// Parent function
function parentFunction() {
  asyncFunction()
    .then((result) => {
      // Handle the result of the asynchronous function here
      console.log("Async function result:", result);
    })
    .catch((error) => {
      // Handle the error from the asynchronous function here
      console.error("Async function error:", error);
    });
}

// Example usage
parentFunction();
