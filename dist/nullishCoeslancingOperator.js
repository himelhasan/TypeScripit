"use strict";
let myVariable = null;
const myDefault = "default value";
// if myVariable is null, or undefined then it will print the default value
const result1 = myVariable !== null && myVariable !== void 0 ? myVariable : myDefault; // result1 will be "default value"
myVariable = "non-null value";
const result2 = myVariable !== null && myVariable !== void 0 ? myVariable : myDefault; // result2 will be "non-null value"
