// The following code demonstrates the usage of generics in TypeScript.

// Creating arrays with specific types
const rollNumbersClassSix: number[] = [0, 1, 2, 3, 4, 5, 6, 7]; // Array of numbers
const rollNumbersClassFive: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7]; // Array of numbers (alternative syntax)
const studentsClassFive: Array<string> = [
  "John",
  "Jonathan",
  "Jack",
  "Jackson",
  "Jamin",
  "Jesse",
  "Joe",
]; // Array of strings

const studentWithNameAndRoll: Array<{ name: string; roll: number }> = [
  {
    name: "John",
    roll: 3,
  },
]; // Array of objects with name and roll properties

// ** Declaring generic array

// Defining a generic array type using a single parameter
type GenericNumberArray<T> = Array<T>;
const rollNumbersClassFour: GenericNumberArray<number> = [0, 1, 2, 3, 4, 5, 6, 7]; // Generic array of numbers

const studentWithNameAndClass: GenericNumberArray<{ name: string; class: number }> = [
  {
    name: "John",
    class: 3,
  },
]; // Generic array of objects with name and class properties

type studentWithAge = { name: string; age: number };
const studentWithNameAndAge: Array<studentWithAge> = [{ name: "John", age: 12 }]; // Array of objects with name and age properties

// Generic tuple

// Defining a generic tuple type with two parameters
type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Himel", "Anny"]; // Generic tuple with two strings

const impressGF: GenericTuple<object, string> = [{ name: "Himel" }, "Anny"]; // Generic tuple with an object and a string

// Creating a specific type for impressWife tuple
type impressWithSalary = { name: string; salary: number };
const impressWife: GenericTuple<impressWithSalary, string> = [
  { name: "Himel", salary: 2500000 },
  "Anny",
]; // Generic tuple with an object (impressWithSalary) and a string

const impressFatherInLaw: GenericTuple<impressWithSalary, string> = [
  { name: "Himel Hasan", salary: 250000 },
  "Anny",
]; // Generic tuple with an object (impressWithSalary) and a string

interface impressWithSalaryInterface {
  name: string;
  salary: number;
}

const impressWithInterface: GenericTuple<impressWithSalaryInterface, string> = [
  { name: "Himel", salary: 2500000 },
  "Anny",
];

// Notes for best practices:
// 1. Generics allow for writing reusable and flexible code by creating parameterized types.
// 2. Use meaningful and descriptive names for generic type parameters to improve code readability.
// 3. When creating generic types, consider using uppercase letters for type parameter names (e.g., T, U) to follow conventions.
// 4. Commenting code to describe its purpose, usage, and expected input/output helps improve code maintainability and collaboration.
// 5. Avoid using the "any" type in generics unless absolutely necessary, as it reduces type safety and can lead to runtime errors.
// 6. Use generics when you want to create reusable components or functions that can work with multiple types.
// 7. Be mindful of the constraints and assumptions associated with generic types to ensure type safety
