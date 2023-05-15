// Defining a function with input types and result type
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Defining a function with input types and result type using arrow function syntax
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using the map method on an array and specifying the input and output types
const newArray = arr.map((el: number) => el * el);

// Note: In TypeScript, default values for function parameters can only be assigned to the last parameter.
const sumDefaultParam = (num1: number, num2: number = 10): number => {
  return num1 + num2;
};

sumDefaultParam(10); // The default value will be used for the second parameter

// Spread operator

const myBros: string[] = ["abul", "babul", "mokkbul"];
const mySis: string[] = ["lamia", "atika", "mridula"];

myBros.push(...mySis); // Using the spread operator to push all elements of mySis into myBros array
console.log(myBros);

// Notes for best practices:

// 1. Specify input types and result types in function declarations to ensure type safety and improve code readability.
// 2. Use arrow function syntax (() => {}) when declaring functions, as it provides a concise and modern syntax.
// 3. Consider using the map method on arrays to transform elements based on a provided function, improving code readability and maintainability.
// 4. When using default parameter values in functions, assign them to the last parameter to avoid confusion and ensure correct usage.
// 5. Take advantage of the spread operator (...) to easily combine or copy elements from one array to another.
// 6. Consistently use descriptive variable names to improve code understanding and maintainability.
// 7. Use meaningful comments to explain the purpose and behavior of code sections, making it easier for others (including yourself) to understand and maintain the code.
