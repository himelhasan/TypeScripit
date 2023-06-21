"use strict";
// union can any types that are defined
const myValue = "hello";
console.log(typeof myValue); // outputs "string"
const anotherValue = 42;
console.log(typeof anotherValue); // outputs "number"
// declared type of developer with UNION,
// it will take any of the declared object data types
// newDeveloper can have a value that is either a NoviceDeveloper or a JuniorDeveloper.
const newDeveloper = {
    // unionType |
    name: "Mojnu Mia",
    expertise: "React",
    experience: 4,
};
// enums are constants that are defined by us. it contains numerical values or  strings values
// we can define certain enums and those will only work on the filed
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["medium"] = "medium";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const personEmployee = {
    name: "Alice",
    age: 30,
    company: "Acme Corp",
    salary: 50000,
};
// Here we  declared type of developer (mid and expert) with intersection,
// it will take the previously declared objects elements
// and add the new elements
const nextLevel = {
    name: "Boro Bhai",
    expertise: "React",
    experience: 4,
    skill: "redux",
    jobYears: 4,
    level: Level.senior,
};
