let myVariable: string | null = null;
const myDefault: string = "default value";

// if myVariable is null, or undefined then it will print the default value

const result1 = myVariable ?? myDefault; // result1 will be "default value"

myVariable = "non-null value";
const result2 = myVariable ?? myDefault; // result2 will be "non-null value"
