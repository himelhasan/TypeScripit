"use strict";
// spread operator
const heroArr1 = [" KHNA ", " JALIL", "SHAKIB"];
const heroArr2 = [" NOYA ", " MOYA", "RAKIB"];
heroArr1.unshift(...heroArr2);
console.log(heroArr1);
//rest parameter
const heroScore = (...score) => {
    let sum = 0;
    score.map((n) => {
        sum = sum + n;
    });
    return sum;
};
console.log(heroScore(1, 2, 3, 4, 5));
