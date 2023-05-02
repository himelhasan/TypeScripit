const userProfile: {
  companyName: "CodersCrown";
  readonly name: string;
  email: string;
  age: number;
  isMarried: boolean;
  wife?: string;
} = {
  companyName: "CodersCrown",
  name: "user",
  email: "user@example.com",
  age: 23,
  isMarried: false,
  wife: "bibi",
};

const balanceOfHimel: {
  name: string;
  currBalance: number;
  addBalance(newMoney: number): number;
} = {
  name: "Himel",
  currBalance: 500,
  addBalance(newMoney) {
    return this.currBalance + newMoney;
  },
};

// Type alias and optional types

// type alias for object properties
type EmployeeDataType = {
  // Alias Name should be started with Capital letter
  name: string;
  age: number;
  isMarried: boolean;
  class?: number; // optional type
  hobbies: string[];
};

const riyadhData: EmployeeDataType = {
  name: "Riyadh",
  age: 13,
  isMarried: false,
  class: 10,
  hobbies: ["fishing", "riding"],
};
console.log(himelData);
