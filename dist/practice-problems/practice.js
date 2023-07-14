"use strict";
// *** Convert the following JavaScript array into a TypeScript tuple
//  const userInfo = [101, "Ema", "John", true, , "2023"];
const myTuple = [
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
const commonNumbers = (arrayOfNumbers1, arrayOfNumbers2) => {
    let commonArray = [];
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
const searchProduct = (products, criterion, value) => {
    return products.filter((product) => product[criterion] === value);
};
const searchedProduct = searchProduct(products, "category", "Category A");
console.log(searchedProduct);
const arrayOfProductTuples = [
    ["Product 1", 9.99, 2],
    ["Product 2", 19.99, 3],
    ["Product 3", 14.99, 1],
    ["Product 4", 24.99, 5],
];
const totalPriceOfProductTuples = (products) => {
    let totalCost = 0;
    for (const [name, price, quantity] of products) {
        totalCost = totalCost + price * quantity;
    }
    return totalCost;
};
console.log(totalPriceOfProductTuples(arrayOfProductTuples));
const ourNumberArray = [1, 2, 3, 4, 5, 6, 7, 8];
const sumOfEvenNumbers = (numbers) => {
    let numbs = [];
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
const persons = [
    { name: "John", age: 25, email: "john@example.com" },
    { name: "Alice", age: 30, email: "alice@example.com" },
    { name: "Bob", age: 28, email: "bob@example.com" },
];
const findPersonByEmail = (users, email) => {
    const result = users.find((user) => user.email === email);
    return result || null;
};
const emailToFind = "alice@example.com";
const personToCheck = findPersonByEmail(persons, emailToFind);
console.log(personToCheck); // Output: { name: "Alice", age: 30, email: "alice@example.com" }
// ** Create a TypeScript program that declares an array of numbers. Use the spread operator to pass the elements
//of the array as arguments to a function that finds the minimum and maximum values of the array.Use destructuring
// to assign the minimum and maximum values to separate variables, and log them to the console.
