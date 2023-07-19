// Todo : Same code at Promise nine.js
let cart = [1, 2, 3];

createOrder(cart, function (err, orderId) {
  if (err) {
    console.log("Error : ", err.message);
  } else {
    console.log(orderId);
    proceedToPayment(orderId, function (err, paymentInfo) {
      if (err) {
        console.log("Error : ", err.message);
      } else {
        console.log("Payment then = ", paymentInfo);
      }
    });
  }
});

function createOrder(cart, callback) {
  if (!validateCart(cart)) {
    let er = new Error("Cart not valid");
    callback(er);
    return;
  }

  let orderId = 123456;
  setTimeout(function () {
    callback(null, orderId);
  }, 5000);
}

function validateCart(cart) {
  //   return false;
  return true;
}

function proceedToPayment(orderId, callback) {
  console.log("OrderId = ", orderId);
  callback(null, `Payment Successful = ${orderId}`);
}
