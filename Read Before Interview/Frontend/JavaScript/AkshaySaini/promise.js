const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
.then(function (orderId) {
  console.log(orderId);
  return orderId;
})
.catch(function(err){
  console.log(err.message);
}) // it only check top of it, below then will always be called it does not have anything to do with it
.then(function (orderId) {
  return proceedToPayment(orderId); 
})
.then(function (paymentInfo) {
  console.log(paymentInfo);
})
// .catch(function(err){
//   console.log(err.message);
// }) 


// creating a promise

function createOrder(cart) {

  const pr = new Promise(function (resolve, reject) {

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {

      setTimeout(function () {
        resolve(orderId);
      }, 5000);

    }

  });

  return pr;

}

function validateCart(cart) {
  // return true;
  return false;
}

function proceedToPayment (orderId){

  return new Promise(function (resolve, reject){
    resolve("Payment Successful");
  })

}