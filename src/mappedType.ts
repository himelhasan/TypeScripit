const arrayOfNumbers = [1, 2, 3]; // convert it to string

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type AreaNumber = {
  height: number;
  width: number;
};

const obj = {
  name: "Himel",
};

type Volume = {
  height: number;
  width: number;
  depth: string;
};

type Area = {
  [key in keyof Volume]: Volume[key];
};

type AreaGeneric<T> = {
  [key in keyof T]: T[key];
};

const area11: AreaGeneric<{ height: number; width: number }> = { height: 12, width: 121 };

area11.height = 453;
