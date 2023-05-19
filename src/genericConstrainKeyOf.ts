type carType = {
  name: string;
  model: string;
  year: number;
};

type newCarType = "name" | "model" | "year";
type newCarTypeKeyOf = keyof carType;

const a: newCarType = "model";
const d: newCarTypeKeyOf = "name";
const b: newCarTypeKeyOf = "year";
const c: newCarTypeKeyOf = "model";

console.log(a);

function getProp<x, y extends keyof x>(obj: x, prop: y) {
  return obj[prop];
}

const property = getProp({ name: "Toyota", model: "Primo", year: 2000 }, "name");
