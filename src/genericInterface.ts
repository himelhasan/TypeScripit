// generic interface
interface CrushInterface<T, U = null> {
  name: string; // Property for the name of the crush
  husband: T; // Property for the husband of the crush
  wife?: U; // Optional property for the wife of the crush
}

const crush1: CrushInterface<boolean> = {
  name: "Sadia", // The name of the crush is "Sadia"
  husband: true, // The crush is married and the husband is true (boolean value)
};

const crush2: CrushInterface<string, boolean> = {
  name: "Sadia", // The name of the crush is "Sadia"
  husband: "Himel", // The crush is married and the husband's name is "Himel"
  wife: true, // The wife of the crush exists and is true (boolean value)
};

const crush3: CrushInterface<{ name: string; age: number }, string> = {
  name: "Sadia", // The name of the crush is "Sadia"
  husband: { name: "Himel", age: 28 }, // The crush is married and the husband is an object with name "Himel" and age 28
  wife: "Adiba", // The wife of the crush exists and her name is "Adiba"
};

interface husbandInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface<husbandInterface, object> = {
  name: "Sadia", // The name of the crush is "Sadia"
  husband: { name: "Himel", age: 28 }, // The crush is married and the husband is an object with name "Himel" and age 28
  wife: {
    name: "Adiba",
    age: 18,
  }, // The wife of the crush exists and is an object with name "Adiba" and age 18
};

interface husbandWith2wifeNameInterface {
  name: string;
  age: number;
  wife: string;
}

const crush5: CrushInterface<husbandWith2wifeNameInterface, boolean> = {
  name: "Sadia", // The name of the crush is "Sadia"
  husband: {
    name: "Himel",
    age: 27,
    wife: "Adiba",
  }, // The crush is married and the husband is an object with name "Himel", age 27, and wife named "Adiba"
  wife: true, // The wife of the crush exists and is true (boolean value)
};

interface wifeInterface {
  name: string;
  age: number;
}

const crush6: CrushInterface<{ name: string; age: number }, wifeInterface> = {
  name: "Mira",
  husband: { name: "Himel", age: 28 },
  wife: { name: "Adiba", age: 18 },
};

const crush7: CrushInterface<
  { name: string; age: number },
  { name: string; age: number }
> = {
  name: "Mira",
  husband: { name: "Himel", age: 28 },
  wife: { name: "Adiba", age: 18 },
};

const crush8: CrushInterface<husbandInterface, wifeInterface> = {
  name: "Mira",
  husband: { name: "Himel", age: 28 },
  wife: { name: "Adiba", age: 18 },
};
