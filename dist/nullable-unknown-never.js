"use strict";
let myString = "hello";
myString = null;
const searchName = (value) => {
    if (value == null) {
        // we can add null types as well
        console.log("there is nothing to search");
    }
    else {
        console.log("searching: ");
    }
};
searchName(null);
// unknown types
let myUnknown = 42;
const myNumber = myUnknown; // needs to be cast before use
const getMyCarSpeed = (speed) => {
    return ``;
};
function throwError() {
    throw new Error("Something went wrong!");
}
// const myNever: never = throwError(); // this variable will never be assigned a value
// What is the output of the following code?
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(30));
console.log(addTwo(5));
