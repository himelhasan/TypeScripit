"use strict";
const names = ["abul", "babul", "mokkbul"];
// 'names' is an array of strings (type annotation: string[]).
// It contains three elements: "abul", "babul", and "mokkbul".
const rollNumbers = [2, 1, 3];
// 'rollNumbers' is an array of numbers (type annotation: number[]).
// It contains three elements: 2, 1, and 3.
const lumiontypes = ["name", 234, true, ,];
// 'lumiontypes' is an array (type inference) that allows mixed types.
// It contains four elements: "name" (string), 234 (number), true (boolean), and undefined (empty element).
// tuple
const user = [3, "wer"];
// 'user' is a tuple with two elements: a number followed by a string.
// It is defined with the type annotation [number, string].
// The first element must be a number, and the second element must be a string.
// In this case, the tuple contains the values 3 and "wer".
// Example 1:
const point = [2, 5];
// 'point' is a tuple with two elements: two numbers representing x and y coordinates.
// It is defined with the type annotation [number, number].
// The first element is the x-coordinate, and the second element is the y-coordinate.
// In this example, 'point' contains the values 2 and 5.
// Example 2:
const person = ["John", 30, true];
// 'person' is a tuple with three elements: a string, a number, and a boolean.
// It is defined with the type annotation [string, number, boolean].
// The first element is the person's name, the second element is their age, and the third element represents their marital status.
// In this case, 'person' contains the values "John", 30, and true.
// Example 3:
const data = [
    "example",
    42,
    false,
    ["data", "values"],
];
const namesOfFamousFootballer = ["ronaldo", "messi"];
const classFiveStudents = [
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
