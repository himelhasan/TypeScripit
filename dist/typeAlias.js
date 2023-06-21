"use strict";
// Type alias and optional types
const himelData = {
    name: "Himel",
    age: 13,
    isMarried: false,
    class: 10,
    hobbies: ["fishing", "riding"],
};
console.log(himelData);
const namesOfFames = ["ronaldo", "messi"];
const classFive = [
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
const mathFunction = (a, b, operator // this function parameter will do any math operations
) => {
    return operator(a, b);
};
mathFunction(2, 5, (x, y) => x + y);
mathFunction(2, 5, (x, y) => x - y);
mathFunction(2, 5, (x, y) => x * y);
mathFunction(2, 5, (x, y) => x / y);
const mathFunctionWithTypeDefined = (a, //5
b, //10
calculationOperator // (x, y) => x + y) // this will receive function as parameter
) => {
    return calculationOperator(a, b);
};
mathFunctionWithTypeDefined(5, 10, (x, y) => x + y);
