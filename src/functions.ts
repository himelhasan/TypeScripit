// we need to define the input types and the result type
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// we need to define the input types and the result type

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = arr.map((el: number) => el * el);

// default value in function cant be assigned to first parameter
// we need to assign it to the last parameter
const sumDefaultParam = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};

sumDefaultParam(10); // this will work on the last parameter

// Spread operator

const myBros: string[] = ["abul", "babul", "mokkbul"];
const mySis: string[] = ["lamia", "atika", "mridula"];

myBros.push(...mySis);
console.log(myBros);
