"use strict";
// instance of
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("Gheu Gheu");
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaow() {
        console.log("Meaow meaow");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(input) {
    return input instanceof Cat;
}
function identifyAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeaow();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog("German Shepard", "Dog"); // instance of DOG
const animal2 = new Cat("Persian", "Cat"); // instance of cAT
identifyAnimal(animal1);
identifyAnimal(animal2);
