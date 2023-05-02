const names: string[] = ["abul", "babul", "mokkbul"];
const rollNumbers: number[] = [2, 1, 3];
const lumiontypes = ["name", 234, true, ,];

// touple

const user: [number, string] = [3, "wer"];

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
