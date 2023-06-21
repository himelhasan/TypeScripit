"use strict";
``;
const actorName = "rob ";
actorName.toLocaleUpperCase();
actorName.toLocaleLowerCase(); // we can alos declare it using angle brackets
const upperCaseActorName = actorName.toLocaleUpperCase();
console.log(upperCaseActorName);
let sex;
sex = true;
sex.valueOf();
console.log(sex.valueOf());
const kgToGram = (param) => {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `the value is ${value}`;
    }
    else if (typeof param === "number") {
        return param * 1000;
    }
    else {
        return "nothing find";
    }
};
const resultInNumber = kgToGram(4);
const resultInString = kgToGram("4");
console.log({ resultInNumber });
console.log({ resultInString });
try {
}
catch (err) {
    console.log(err.message);
}
