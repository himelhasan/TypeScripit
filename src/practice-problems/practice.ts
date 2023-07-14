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
