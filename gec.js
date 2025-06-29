/*
author :- Krushna maurya
 when a program runs in js global execution
 process is created by js engine.
 gec is like a container for executing 
 and evaluating the javascript code
 
 
 in which two components are there for evaluating

 and exceting phase where memory allocation comes
 1)Memory(Variable and function declaraion) 
 2)Code

 let us understand through a simple program

before executing a program in the first phase 
variables and function will be declared at 
the local memory in key value pair

Memory components  like this 
a : undefined 

b():{....} block of code in b

in the code block comes when we run the program 
it executes code line by line 
and where as output comes 

this is tough for js engine ro execute it line by line
but java script handles it in a good way 
or we can say in our language a beautiful way 
it is called as the call stack process

as you already know about stack first in this program
gec comes on stack 
and process goes line by line 
we need a diagram to simply undestand it 


note that if there is no code in in jsfile
 but it steal has a lot of documentation in 
empty file. 

when we define any variable outside of block 
it comes under the global executed context 

what is windows object in java script?

windows is global object which is created along with 
the global executed context 
along with it this keyword object is created
this === window object 

this is equivalent to windows object only in global context 
not in local scope

*/

var a = 10;

function b() {
    var a = 100
    console.log(a);
}

b();
console.log(a)
