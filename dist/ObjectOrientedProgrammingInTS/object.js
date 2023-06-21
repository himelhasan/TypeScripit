"use strict";
class Animal {
    // Parameter properties
    constructor(name, species, sounds) {
        this.name = name;
        this.species = species;
        this.sounds = sounds;
    }
    // method =>
    makeSound() {
        console.log(`THE ${this.name} says ${this.sounds}`);
    }
}
const dog = new Animal("German  Sheperd", "Dog", "Gheu Gheu");
const cat = new Animal("Persian", "cat", "Mew Mew");
dog.makeSound();
cat.makeSound();
// class in object oriented programming in typescript
class AnimalObject {
    constructor(name, species, sounds) {
        this.name = name;
        this.species = species;
        this.sounds = sounds;
    }
    makeSound() {
        console.log(`THE ${this.name} says ${this.sounds}`);
    }
}
const dogObject = new AnimalObject("German  Sheperd", "Dog", "Gheu Gheu");
const catObject = new AnimalObject("Persian", "cat", "Mew Mew");
dog.makeSound();
cat.makeSound();
class studentClass {
    constructor(name, className, roll) {
        this.name = name;
        this.className = className;
        this.roll = roll;
    }
    makeStudent() {
        console.log(`This is ${this.name} and s/he is in ${this.className} and roll is ${this.roll}`);
    }
}
const pappu = new studentClass("Pappu", 11, 45);
