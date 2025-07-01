/*
1) What is callback function in javaScript ?
you can take a function and pass it into another function 
and when you do so 
the function which you are passing is called as ...


2)javaScript is a synchronous and single threaded language
it means that it can do only one thing at a time 
in a specific order due to callback you can do Asynchronous thing
inside it.

*/


//function inside setTimeout is a example of callback function
setTimeout(function () {
    console.log("Timer");
}, 2000);

function x(y) {
    console.log("x");
    y();
}
function y() {
    console.log("y");
}