let myString: string | null = "hello";
myString = null;

const searchName = (value: string | null) => {
  if (value == null) {
    // we can add null types as well
    console.log("there is nothing to search");
  } else {
    console.log("searching: ");
  }
};
searchName(null);

// unknown types
let myUnknown: unknown = 42;
const myNumber: number = myUnknown as number; // needs to be cast before use

const getMyCarSpeed = (speed: unknown): string => {
  return ``;
};

function throwError(): never {
  throw new Error("Something went wrong!");
}

// const myNever: never = throwError(); // this variable will never be assigned a value

// What is the output of the following code?

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(30));

console.log(addTwo(5));
