const userProfile: {
  companyName: "CodersCrown"; // (string literal type) In TypeScript, the syntax companyName: "CodersCrown"
  // is an example of a string literal type.It means that the companyName property of the userProfile
  // object can only have the exact string value "CodersCrown".
  readonly name: string; // (read-only property) readonly keyword is used to indicate
  // that a property or variable can only be assigned a value during initialization and cannot be modified afterward.
  email: string; // (string type)
  age: number; //(number type)
  isMarried: boolean; //(boolean type)
  wife?: string; // Optional property (string or undefined)
} = {
  companyName: "CodersCrown", // The company name is set to "CodersCrown"
  name: "user", // The user's name is set to "user"
  email: "user@example.com", // The user's email address is set to "user@example.com"
  age: 23, // The user's age is set to 23
  isMarried: false, // The user is not married (false)
  wife: "bibi", // The user's wife's name is set to "bibi"
};

const balanceOfHimel: {
  name: string; // The name property representing a string value
  currBalance: number; // The currBalance property representing a number value
  addBalance(newMoney: number): number; // The addBalance method accepting a number parameter and returning a number
} = {
  name: "Himel", // The name property is set to "Himel"
  currBalance: 500, // The currBalance property is set to 500
  addBalance(newMoney) {
    // The addBalance method is defined
    return this.currBalance + newMoney; // The method returns the sum of currBalance and newMoney
  },

  // The method addBalance is defined using a function shorthand syntax,
  // without using the function keyword. It calculates the new balance
  //by adding newMoney to the currBalance property.
};

// Type alias and optional types

// type alias for object properties

type EmployeeDataType = {
  // Alias Name should be started with Capital letter
  name: string; // The name property representing a string value
  age: number; // The age property representing a number value
  isMarried: boolean; // The isMarried property representing a boolean value
  class?: number; // The class property representing an optional number value
  hobbies: string[]; // The hobbies property representing an array of strings
};

const riyadhData: EmployeeDataType = {
  name: "Riyadh",
  age: 13,
  isMarried: false,
  class: 10,
  hobbies: ["fishing", "riding"],
};
console.log(riyadhData);
