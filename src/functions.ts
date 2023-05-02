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

const balanceOfHimel: {
  name: string;
  currBalance: number;
  addBalance(newMoney: number): number;
} = {
  name: "Himel",
  currBalance: 500,
  addBalance(newMoney) {
    return this.currBalance + newMoney;
  },
};

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

// Type alias and optional types

// type alias for object properties
type studentDataType = {
  name: string;
  age: number;
  isMarried: boolean;
  class?: number; // optional type
  hobbies: string[];
};

const himelData: studentDataType = {
  name: "Himel",
  age: 13,
  isMarried: false,
  class: 10,
  hobbies: ["fishing", "riding"],
};
// console.log(himelData);

// type alias for array properties

type arrayData = string[];
const namesOfFames = ["ronaldo", "messi"];

// array of objects

type AllStudentDataTypes = studentDataType[];

const classFive: AllStudentDataTypes = [
  {
    name: "Mishu",
    age: 15,
    isMarried: false,
    class: 5,
    hobbies: ["fishing", "riding"],
  },
  {
    name: "Mim",
    age: 16,
    isMarried: false,
    class: 5,
    hobbies: ["fishing", "riding"],
  },
  himelData, // this will word as this object align with the allStudentDataType's studentDataType object
  // namesOfFames, //--- this wont work as the datatype isn't matching with the allStudentDataType
];

console.log(classFive);
