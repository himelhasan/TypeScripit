type alumni = {
  name: string;
  age: number;
};

type proAlumni = alumni & {
  isEmployed: boolean;
};

const generalStudent: alumni = {
  name: "Student",
  age: 4,
};

const superbStudent: alumni = {
  name: "Student",
  age: 4,
};

interface IAlumni {
  name: string;
  age: number;
}

interface IProAlumni extends IAlumni {
  isEmployed: boolean;
}

const proStudent: proAlumni = {
  name: "Student",
  age: 4,
  isEmployed: true,
};
