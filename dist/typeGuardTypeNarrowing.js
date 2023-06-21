"use strict";
/* In TypeScript, a type guard is a runtime check that allows you
to narrow down the type of a variable within a conditional block.
It helps you make more precise type assertions or perform type-specific
operations based on certain conditions.Type guards can be implemented
using different techniques, such as the typeof operator, the instanceof
operator, discriminated unions, and user-defined type predicates. */
function addSum(param1, param2) {
    if (typeof param1 == "number" && typeof param2 == "number") {
        return param1 + param2;
    }
    else {
        return (param1 === null || param1 === void 0 ? void 0 : param1.toString()) + (param2 === null || param2 === void 0 ? void 0 : param2.toString());
    }
}
function logLength(value) {
    if (typeof value === "string") {
        console.log(value.length); // Type narrowed to 'string', so 'length' property is accessible
    }
    else {
        console.log(value); // Type narrowed to 'number', so direct access is possible
    }
}
// Using the instanceof operator:
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
function calculateArea(shape) {
    if (shape instanceof Circle) {
        console.log(Math.PI * shape.radius ** 2); // Type narrowed to 'Circle', so access to 'radius' is possible
    }
    else {
        console.log(shape.width * shape.height); // Type narrowed to 'Rectangle', so direct access is valid
    }
}
function getUser(user) {
    if ("role" in user) {
        return `${user.name} is an ${user.role}`;
    }
    else {
        return `${user.name} is a normal user`;
    }
}
const normalUser = { name: "Pappu" };
const adminUser = { name: "Himel", role: "admin" };
console.log(getUser(normalUser));
console.log(getUser(adminUser));
