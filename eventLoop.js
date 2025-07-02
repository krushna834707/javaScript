/*
part of browser

setTimeOut
DOM APIs
Fetch()
local Storage
Console
Location

what is global object?
global object is small little window.

browser gives js engine to facilty to 
use all this timer through window

if you do window.setTimeOut  it will give you a 
timer.

window.console.log for console

after console.log all the things global execution context is pop
from call stack 

and 

callback() is running on webAPIs 

callback function can not directly move into the call stack
After time expiration,

it moves to the callback queue 

where event loop comes and if something on callback queue 
it takes the function and move it to call stack.

it monitors the callback queue and call stack.
when it takes the fnc callback from call back
queue it also removes it from callback queue.


fetch() does not move the data to callback queue
fetch moves the data to Microtask queue which has 
higher priority 
the function that comes inside the microtask queue will
execute first and then after it execute callback queue


what is come inside microtask queue?
all the callback functions which comes through promises 
will go inside microtask queue


*/

console.log("start");

setTimeout(function cbT() {
    console.log("CB timeout");
}, 5000);

fetch("").then(function cbf() {
    console.log("CB Netflix");
})
console.log("end");

/* 
JS Engine?

to run javascript code we have js engine
every browser has its own javascript engine

googele has V8
microsoft has chakra
Firefox has spiderMonkey

EcmaScript is standard language
js engine is not a machine

how it works? or we can say architecture

human readable code-> parsing-> complilation ->  execution

 var a = 7 ;
 everything is token
syntax parser takes the code and convert it into AST
(abstract syntax tree)

*/
