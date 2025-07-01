/* 

whai is closures?
A function along with its parent lexical scope
that bundles together  forms as a closure 

things to remember
 we can return a function
 we can pass a function as a parameter to another function
 
Uses of Closures in javaScript
Module Design Pattern
Currying 
Function Like once
Memoize 
maintaining state in async world
setTimeouts
Iterators 
and many more...


function a() {
    var a = 1;
    return function b() {
        console.log(a);
    }
    // return b;
}
var c = a();
console.log(c);
//it will return a body inside of
// function along with its lexical parent scope

*/
