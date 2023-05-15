``;
// defining type forcefully

type nam = any;
const actorName: nam = "rob ";
(actorName as string).toLocaleUpperCase();
<string>actorName.toLocaleLowerCase(); // we can alos declare it using angle brackets
const upperCaseActorName = (actorName as string).toLocaleUpperCase();
console.log(upperCaseActorName);

let sex: any;
sex = true;
(sex as boolean).valueOf();
console.log((sex as boolean).valueOf());

const kgToGram = (param: string | number): string | number => {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `the value is ${value}`;
  } else if (typeof param === "number") {
    return param * 1000;
  } else {
    return "nothing find";
  }
};

const resultInNumber = kgToGram(4) as number;
const resultInString = kgToGram("4") as string;

console.log({ resultInNumber });
console.log({ resultInString });

type CustomErrType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomErrType).message);
}
