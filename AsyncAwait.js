/*
what is async?
async is a keyword that is used before a function to create a
async function
this async function always returns promises 

there are two cases 
either you return a promise from this function
suppose you return a value which is not promise 

it will wrap this value inside promise and then returns a promise

what is await?
await is a function that is always use inside a async function

how fetch() works?
it is a promise it gives you a response 
it has body which is readable string
you have to convert this in json
this reponse.json is again a promise it will give you a 
json value.

fetch returns ab object 
 */

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("async will waiting JavaScript BRother ");
    }, 2000);

})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("react ");
    }, 4000);

})

//handle this using async - await
async function handlePromise() {
    console.log("it is above then it will be printed");

    //javascript will suspend the function execution and come after it resolved time will completed

    const val = await p;
    //javaScript is waiting for promise to be resolved

    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    //javaScript is waiting for promise to be resolved
    console.log("Namaste JavaScript");
    console.log(val2);
}

/*

how you handle error in async /await
you can use try and cathc block to handle errors

*/

handlePromise();
