// Generic Constrain learning file

type myInfoType = {
  name: string;
  age: number;
  salary: number;
  isFreelancer: boolean;
};

const addMeInMyCrushMind = <t extends { name: string; age: number }>(param: t) => {
  const crush = "Kate  Wing let";
  return { ...param, crush };
};

const myPerInfo: myInfoType = {
  name: "Himel",
  age: 100,
  salary: 300000,
  isFreelancer: true,
};

const crushHeart = addMeInMyCrushMind<myInfoType>(myPerInfo);
