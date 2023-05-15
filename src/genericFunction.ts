// arrow functions in generic

// Function that takes a string parameter and returns an array of strings
const createArray = (param: string): Array<string> => {
  // Creates an array with the given parameter as its only element
  return [param];
};

// Function that takes a generic parameter 't' and returns an array of that type
const createGenericArray = <T>(param: T): T[] => {
  // Creates an array with the given parameter as its only element
  return [param];
};

// Invoking the createArray function and storing the result in resultArray1
const resultArray1 = createArray("HEY");

// Invoking the createGenericArray function with string type parameter and storing the result in resultArray2
const resultArray2 = createGenericArray<string>("HEY Browser");

// Invoking the createGenericArray function with number type parameter and storing the result in resultArray3
const resultArray3 = createGenericArray<number>(456);

// Invoking the createGenericArray function with boolean type parameter and storing the result in resultArray4
const resultArray4 = createGenericArray<boolean>(true);

// Printing the results of the above invocations
console.log({ resultArray1, resultArray2, resultArray3, resultArray4 });

// Function that takes two generic parameters 'x' and 'y' and returns an array with those parameters as elements in a tuple
const createGenericTupleArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  // Creates a tuple array with the given parameters as its elements
  return [param1, param2];
};

// Invoking the createGenericTupleArray function with string and number type parameters and storing the result in resultArray5
const resultArray5 = createGenericTupleArray<string, number>("Hey", 365);

// Invoking the createGenericTupleArray function with boolean and number type parameters and storing the result in resultArray6
const resultArray6 = createGenericTupleArray<boolean, number>(true, 365);

// Invoking the createGenericTupleArray function with object and number type parameters and storing the result in resultArray7
const resultArray7 = createGenericTupleArray<object, number>({ name: "Joey" }, 365);

// Printing the results of the above invocations
console.log({ resultArray5, resultArray6, resultArray7 });

// Creating a type alias 'user' for an object with name and email properties
type User = { name: string; email: string };

// Invoking the createGenericTupleArray function with user and array of string type parameters and storing the result in resultArray8
const resultArray8 = createGenericTupleArray<User, Array<string>>(
  { name: "Joey", email: "joey@friends.com" },
  ["3650"]
);

// Printing the result of the above invocation
console.log({ resultArray8 });

// Function that takes two generic parameters 'x' and 'y' and returns an object by spreading the properties of the given parameters
const createGenericArrayWithSpread = <X, Y>(param1: X, param2: Y) => {
  // Combines the properties of param1 and param2 into a single object
  return { ...param1, ...param2 };
};

// Invoking the createGenericArrayWithSpread function with two objects as parameters and storing the result in myInfo
const myInfo = createGenericArrayWithSpread(
  { Name: "Chandler Being", age: 43 },
  { profession: "transponder" }
);

console.log(myInfo);
myInfo.age;
