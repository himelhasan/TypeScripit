const cart = ["shoes", " pants", "kurta"];

createOrder(cart, function () {
  proceedToPayment(orderID);
});

const promise = createOrder(cart);

promise.then(function () {
  proceedToPayment(orderID);
});

// promise is a placeholder which will be replaced with the actual value
// promise is  a container for the future value

//* promise is an object that represents the eventual completion or failure of the  asynchronous operation.
