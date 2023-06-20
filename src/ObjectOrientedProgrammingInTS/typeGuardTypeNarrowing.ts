/* In TypeScript, a type guard is a runtime check that allows you
to narrow down the type of a variable within a conditional block. 
It helps you make more precise type assertions or perform type-specific 
operations based on certain conditions.Type guards can be implemented 
using different techniques, such as the typeof operator, the instanceof 
operator, discriminated unions, and user-defined type predicates. */

// Using the typeof operator:

type alphanumeric = string | number;

function addSum(param1: alphanumeric, param2?: alphanumeric): alphanumeric {
  if (typeof param1 == "number" && typeof param2 == "number") {
    return param1 + param2;
  } else {
    return param1?.toString() + param2?.toString();
  }
}

function logLength(value: alphanumeric) {
  if (typeof value === "string") {
    console.log(value.length); // Type narrowed to 'string', so 'length' property is accessible
  } else {
    console.log(value); // Type narrowed to 'number', so direct access is possible
  }
}

// Using the instanceof operator:
class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
}

class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

function calculateArea(shape: Circle | Rectangle) {
  if (shape instanceof Circle) {
    console.log(Math.PI * shape.radius ** 2); // Type narrowed to 'Circle', so access to 'radius' is possible
  } else {
    console.log(shape.width * shape.height); // Type narrowed to 'Rectangle', so direct access is valid
  }
}

// in guard

type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `${user.name} is an ${user.role}`;
  } else {
    return `${user.name} is a normal user`;
  }
}

const normalUser: NormalUserType = { name: "Pappu" };
const adminUser: AdminUserType = { name: "Himel", role: "admin" };

console.log(getUser(normalUser));
console.log(getUser(adminUser));
