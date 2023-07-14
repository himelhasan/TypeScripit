// *** Convert the following JavaScript array into a TypeScript tuple
//  const userInfo = [101, "Ema", "John", true, , "2023"];

const myTuple: [number, string, string, boolean, unknown, string] = [
  //The fifth element is of type undefined. Note that in JavaScript, if there is a missing element in an array,
  //  it is represented by undefined.
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];
console.log(myTuple);

// ***Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare
// the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return
// a new array with the elements 2 and 4 because they are present in both arrays.
// The function should handle arrays of any length and should return the resulting
//array in the same order as they appear in the first array.

const commonNumbers = (
  arrayOfNumbers1: Array<Number>,
  arrayOfNumbers2: Array<Number>
): Array<Number> => {
  let commonArray: Array<Number> = [];

  for (let index = 0; index < arrayOfNumbers1.length; index++) {
    const element = arrayOfNumbers1[index];

    if (arrayOfNumbers2.includes(element)) {
      commonArray.push(element);
    }
  }
  return commonArray;
};

const num1 = [1, 2, 3, 4, 75];
const num2 = [54, 2, 56, 4, 75];

console.log(commonNumbers(num1, num2));

// *** You have an interface for Product, containing the product's id, name, price, and category.
// You want to filter an array of Products based on a specific criterion and value.
// Write a TypeScript generic function that takes this array, a criterion ,a value
// and returns a new array containing only the products that match the given
// criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
    category: "Category A",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    category: "Category B",
  },
  {
    id: 3,
    name: "Product 3",
    price: 14.99,
    category: "Category A",
  },
  {
    id: 4,
    name: "Product 4",
    price: 24.99,
    category: "Category C",
  },
];

const searchProduct = <T extends keyof Product>(
  products: Product[],
  criterion: T,
  value: Product[T]
): Product[] => {
  return products.filter((product) => product[criterion] === value);
};

const searchedProduct = searchProduct(products, "category", "Category A");
console.log(searchedProduct);

//** Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity.
// Write a TypeScript function that calculates the total cost of all the products in the array,
// using a generic type for the tuple and a type alias for the array.

type GenericProduct<T extends [string, number, number]> = [string, number, number];
type product = [string, number, number];

const arrayOfProductTuples: GenericProduct<product>[] = [
  ["Product 1", 9.99, 2],
  ["Product 2", 19.99, 3],
  ["Product 3", 14.99, 1],
  ["Product 4", 24.99, 5],
];

const totalPriceOfProductTuples = <T extends product>(
  products: GenericProduct<T>[]
): number => {
  let totalCost = 0;
  for (const [name, price, quantity] of products) {
    totalCost = totalCost + price * quantity;
  }
  return totalCost;
};

console.log(totalPriceOfProductTuples(arrayOfProductTuples));

// * Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers
//  in the array. How would you approach this problem and write code to solve it ?

type numberArray = number[] | Array<number>;
const ourNumberArray: numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvenNumbers = (numbers: numberArray) => {
  let numbs: numberArray = [];
  let sum = 0;
  const numbersToSum = numbers.map((num) => {
    if (num % 2 === 0) {
      sum += num;
      numbs.push(num);
    }
  });
  console.log(numbs);
  // numbs.map((num) => (sum = sum + num));
  return sum;
};

console.log("total", sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// **Create an interface called Person that includes properties for name (string), age (number), and email (string).
// Then create an array of Person objects and write a function that takes the array and a string email as parameters,
// and returns the Person object that matches the email or null if no match is found.

interface Persona {
  name: string;
  age: number;
  email: string;
}

const persons: Persona[] = [
  { name: "John", age: 25, email: "john@example.com" },
  { name: "Alice", age: 30, email: "alice@example.com" },
  { name: "Bob", age: 28, email: "bob@example.com" },
];

const findPersonByEmail = <T extends keyof Persona>(
  users: Persona[],
  email: Persona[T]
): Persona | null => {
  const result = users.find((user) => user.email === email);
  return result || null;
};

const emailToFind = "alice@example.com";
const personToCheck = findPersonByEmail(persons, emailToFind);
console.log(personToCheck); // Output: { name: "Alice", age: 30, email: "alice@example.com" }

// ** Create a TypeScript program that declares an array of numbers. Use the spread operator to pass the elements
// of the array as arguments to a function that finds the minimum and maximum values of the array.
// Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const maxMinFinder = (...numbers: Array<number>): [number, number] => {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return [max, min];
};

console.log(maxMinFinder(...numbers));
