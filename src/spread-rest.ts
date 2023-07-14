// spread operator

const heroArr1: string[] = [" KHNA ", " JALIL", "SHAKIB"];
const heroArr2: string[] = [" NOYA ", " MOYA", "RAKIB"];

heroArr1.unshift(...heroArr2);
console.log(heroArr1);

//rest parameter
const heroScore = (...score: number[]): number => {
  let sum: number = 0;
  score.map((n) => {
    sum = sum + n;
  });
  return sum;
};

console.log(heroScore(1, 2, 3, 4, 5));
