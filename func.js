/*
this both are the way of creating function 

so what is the difference between this two

the major difference between this two functions 
is Hoisting which means if i am calling 
a() -> it will run 
b() -> it will throw an error
b is treated as a variable in function expression

Function Statement is also known as 
funtion declaration - a normal function
*/

function a() {
    console.log("a called");
}

//function Expression - Function acts like a value 
//putting function in value b

var b = function () {
    console.log("b callled");
}

a();
b();


/* 
Anonymous function
A function without the name is called as anonymous function 

this are used in a place where function is used as values 


var b = function () {
    console.log("b callled");
}


what is Named Function Expression?
a named function is same as function expression but
we give a function instead of anonymous function 

things to remember it 
we can not use it like xyz()
we can only call it by using b()

xyz() is not created at outer scope 
it has local scope
you can use it inside it by console.log(xyz)


var b = function xyz(){
    console.log("b called");
}

Difference between parameters & arguments
the value which are we passed inside a function is called as arguments
and this labels and identifier those get values are parameters.

what are First Class Functions?
both the same things
First class citizens


it treated a value 
the ability to use function as values is
 known as First class functions
a function can pass as a argument to another
function is called as First class Functions.


Arrow Function?

 */

