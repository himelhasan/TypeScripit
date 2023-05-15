const names: string[] = ["abul", "babul", "mokkbul"];
// 'names' is an array of strings (type annotation: string[]).
// It contains three elements: "abul", "babul", and "mokkbul".

const rollNumbers: number[] = [2, 1, 3];
// 'rollNumbers' is an array of numbers (type annotation: number[]).
// It contains three elements: 2, 1, and 3.

const lumiontypes = ["name", 234, true, ,];
// 'lumiontypes' is an array (type inference) that allows mixed types.
// It contains four elements: "name" (string), 234 (number), true (boolean), and undefined (empty element).

// tuple
const user: [number, string] = [3, "wer"];
// 'user' is a tuple with two elements: a number followed by a string.
// It is defined with the type annotation [number, string].
// The first element must be a number, and the second element must be a string.
// In this case, the tuple contains the values 3 and "wer".

// Example 1:
const point: [number, number] = [2, 5];
// 'point' is a tuple with two elements: two numbers representing x and y coordinates.
// It is defined with the type annotation [number, number].
// The first element is the x-coordinate, and the second element is the y-coordinate.
// In this example, 'point' contains the values 2 and 5.

// Example 2:
const person: [string, number, boolean] = ["John", 30, true];
// 'person' is a tuple with three elements: a string, a number, and a boolean.
// It is defined with the type annotation [string, number, boolean].
// The first element is the person's name, the second element is their age, and the third element represents their marital status.
// In this case, 'person' contains the values "John", 30, and true.

// Example 3:
const data: [string, number, boolean, string[]] = [
  "example",
  42,
  false,
  ["data", "values"],
];
// 'data' is a tuple with four elements: a string, a number, a boolean, and an array of strings.
// It is defined with the type annotation [string, number, boolean, string[]].
// The first element represents some example data, the second element is a numerical value,
// the third element indicates a condition, and the fourth element is an array of string values.
// In this example, 'data' contains the values "example", 42, false, and ["data", "values"].

// You can continue creating tuples with different element types and lengths,
// as long as the order and types of the elements match the defined type annotation.

// type alias for array properties

type FootballerNameData = string[]; // array of string
const namesOfFamousFootballer = ["ronaldo", "messi"];

// array of objects
type AllStudentsDataTypes = EmployeeDataType[]; // this array will contain all the objects that are employee data type

const classFiveStudents: AllStudentsDataTypes = [
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
