// instance of

class Animal {
  constructor(public name: string, public species: string) {}
  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("Gheu Gheu");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaow() {
    console.log("Meaow meaow");
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function isCat(input: Animal): input is Cat {
  return input instanceof Cat;
}

function identifyAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeaow();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Shepard", "Dog"); // instance of DOG
const animal2 = new Cat("Persian", "Cat"); // instance of cAT

identifyAnimal(animal1);
identifyAnimal(animal2);

export {};
