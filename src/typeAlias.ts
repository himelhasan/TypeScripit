// Type alias and optional types

// type alias for object properties
type StudentDataType = {
  // Alias Name should be started with Capital letter

  name: string;
  age: number;
  isMarried: boolean;
  class?: number; // optional type
  hobbies: string[];
};

const himelData: EmployeeDataType = {
  name: "Himel",
  age: 13,
  isMarried: false,
  class: 10,
  hobbies: ["fishing", "riding"],
};
console.log(himelData);

// type alias for array properties

type ArrayData = string[]; // array of string
const namesOfFames = ["ronaldo", "messi"];

// array of objects
type AllStudentDataTypes = EmployeeDataType[]; // this array will contain all the objects that are employee data type

const classFive: AllStudentsDataTypes = [
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

console.log(classFiveStudents);

//  function alias

const mathFunction = (
  a: number,
  b: number,
  operator: (x: number, y: number) => number // this function parameter will do any math operations
) => {
  return operator(a, b);
};

mathFunction(2, 5, (x, y) => x + y);
mathFunction(2, 5, (x, y) => x - y);
mathFunction(2, 5, (x, y) => x * y);
mathFunction(2, 5, (x, y) => x / y);

type OperationsType = (x: number, y: number) => number;

const mathFunctionWithTypeDefined = (
  a: number, //5
  b: number, //10
  calculationOperator: OperationsType // (x, y) => x + y) // this will receive function as parameter
) => {
  return calculationOperator(a, b);
};
mathFunctionWithTypeDefined(5, 10, (x, y) => x + y);
