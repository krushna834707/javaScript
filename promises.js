const cart = ["shoes", "pants", "kurta"];

//In callbacks we are passing a callback function to another function

// createOrder(cart, function (orderId) {
//     proccedToPayment(orderId);
// });

/*

promise object is an empty object with some data filed or
not . it stores data in the form of keyValue pair.

In promises we are attaching callback function with promises 

fetch() is an APis  in browser which is used to make
external call.


const promises = createOrder(cart);

promises.then(function (orderId) {
    proccesToPayment(orderId);
});


what is Promise in JavaScript ?

promise object  in javaScript is a placeholder for a 
certain period of time untill we receive a value from 
Asynchronous operation

A container for future values .

from mdn doc - promise is an object representing eventual
completion or failure of an Asynchronous operation.


const myGmail = fetch("https://api.github.com/users/krushna834707");

console.log(myGmail);

myGmail.then(function (data) {
    console.log(data);
})

*/

//callback hell (Pyramid of doom)
createOrder(cart, function (orderId) {
    proccedToPayment(orderId, function (pymtInfo) {
        showOrders(pymtInfo, function (pymtInfo) {
            updateWalletBalance(pymtInfo);
        });
    });
});

//Promise chain 
createOrder(cart)
    .then((orderId) => proccedToPayment(orderId))
    .then((pymtInfo) => showOrders(pymtInfo))
    .then((pymtInfo) => updateWalletBalance(pymtInfo));