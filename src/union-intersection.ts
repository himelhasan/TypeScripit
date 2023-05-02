// union can any types that are defined

type MyUnion = string | number;

const myValue: MyUnion = "hello";
console.log(typeof myValue); // outputs "string"

const anotherValue: MyUnion = 42;
console.log(typeof anotherValue); // outputs "number"

// In this example, we define a type alias MyUnion that is a union of string and number.
// We can then create variables of type MyUnion, like myValue and anotherValue,
// that can hold values of either type.When we log the typeof each variable,
// we can see that TypeScript correctly infers the type of the value stored in the variable.

// declared type of developer
type NoviceDeveloper = {
  name: string;
};

// declared type of developer

type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

// declared type of developer with UNION,
// it will take any of the declared object data types
// newDeveloper can have a value that is either a NoviceDeveloper or a JuniorDeveloper.
const newDeveloper: NoviceDeveloper | JuniorDeveloper = {
  // unionType |
  name: "Mojnu Mia",
  expertise: "React",
  experience: 4,
};

// enums are constants that are defined by us. it contains numerical values or  strings values
// we can define certain enums and those will only work on the filed

enum Level {
  junior = "junior",
  medium = "medium",
  senior = "senior",
}

// Intersection types are created by using the & operator between two or more types.
// The resulting type is a total of all the individual types,
// and a value of this type must satisfy all of the individual types in the intersection

type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  salary: number;
};

type PersonEmployee = Person & Employee;

const personEmployee: PersonEmployee = {
  name: "Alice",
  age: 30,
  company: "Acme Corp",
  salary: 50000,
};

// In this example, we define two types Person and Employee that each have some properties.
// We then create a new type PersonEmployee that is an intersection of Person and Employee,
// meaning a value of this type must have all of the properties of both types.
// Finally, we create a variable personEmployee of type PersonEmployee that has all of the required properties.

type MidLevelDeveloper = NoviceDeveloper & {
  expertise: string;
  experience: number;
};

type ExpertDeveloper = MidLevelDeveloper & {
  skill: string;
  jobYears: number;
  level: Level;
};
// Here we  declared type of developer (mid and expert) with intersection,
// it will take the previously declared objects elements
// and add the new elements

const nextLevel: ExpertDeveloper = {
  name: "Boro Bhai",
  expertise: "React",
  experience: 4,
  skill: "redux",
  jobYears: 4,
  level: Level.senior,
};
