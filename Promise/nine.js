let cart = [1, 2, 3];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("Payment then = ", paymentInfo);
  })
  .catch(function (err) {
    console.log("Error : ", err.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      let er = new Error("Cart not valid");
      reject(er);
    }

    let orderId = 123456;
    setTimeout(function () {
      resolve(orderId);
    }, 5000);
  });
}

function validateCart(cart) {
    return false;
//   return true;
}


function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve("Payment Successful")
    })
}