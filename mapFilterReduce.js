/*
Map function in javaScript is used to take the all elements
of array and  transform it and returns new array

Filter in javascript is used to that created a new array
and test the case that and return elements.

Reduce() is powerful function in array which takes all the 
element from array and returns a single value 


const arr = [5, 3, 4, 6, 1];

function doubleTrans(x) {
    return x * 2;
}
let output = arr.map(x => x * 2);
console.log(output);


function isEven(x) {
    return x % 2 === 0;
}
let result = arr.filter(isEven);
console.log(result);


accumulator is work as a variable and curr iterate the array
and at last return arr like sum


let sumOfAll = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);

console.log(sumOfAll);


function MaxFind(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}


let maxFind = arr.reduce(function (max, curr) {
    if (max < curr) {
        max = curr;
    }

    return max;
}, 0);
console.log(maxFind);

*/

const users = [
    { firstname: "krushna", lastname: "maurya", age: 21 },
    { firstname: "raj", lastname: "maurya", age: 23 },
    { firstname: "vipul", lastname: "maurya", age: 16 },
    { firstname: "dipanshu", lastname: "maurya", age: 21 },
    { firstname: "Saurabh", lastname: "maurya", age: 18 }
];


let result = users.map(name => name.firstname + " " + name.lastname);
console.log(result);



let output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output);


let ageGreater30 = users.filter((x) => x.age < 20).map((x) => x.firstname);
console.log(ageGreater30);