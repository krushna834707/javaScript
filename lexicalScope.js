/*
scope in java script is directly related with lexical enviroment 

what is scope ?
it defines that where you can access variable or function
in a code.


what is lexical enviroment?
lexical enviroment is a local memory  along with the lexical
enviroment of its parent.


Lexical Environment = 
Variables in the current scope + Reference to outer scope
 

what is scope chain?
the whole chain of lexical enviroment is known as 
scope chain.
it defines whether the variable or function is inside 
the scope or not.

inner scope → outer scope → global scope


what is temporal dead Zone?

The Temporal Dead Zone (TDZ) is the time between 
when a let or const variable 
is hoisted and when it is initialized.
Accessing the variable before initialization 
results in a ReferenceError.


 Why This Happens:
Variables declared with var are hoisted and initialized with undefined.

Variables declared with let or const are hoisted too, but not initialized until the line they appear on.

The time between hoisting and initialization is the Temporal Dead Zone.


*/

function b() {
var a = 10;

    c();
    function c() {
        console.log(a);
    }
}

b();

