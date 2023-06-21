class Animal {
  name: string;
  species: string;
  sounds: string;

  // Parameter properties
  constructor(name: string, species: string, sounds: string) {
    this.name = name;
    this.species = species;
    this.sounds = sounds;
  }

  // method =>
  makeSound() {
    console.log(`THE ${this.name} says ${this.sounds}`);
  }

  // when you write a  function in class it calls method
  // in class constructor , array functions docent work. So
  // we will use function
}

const dog = new Animal("German  Sheperd", "Dog", "Gheu Gheu");
const cat = new Animal("Persian", "cat", "Mew Mew");

dog.makeSound();
cat.makeSound();

// class in object oriented programming in typescript
class AnimalObject {
  constructor(public name: string, public species: string, public sounds: string) {}
  makeSound() {
    console.log(`THE ${this.name} says ${this.sounds}`);
  }
}

const dogObject = new AnimalObject("German  Sheperd", "Dog", "Gheu Gheu");
const catObject = new AnimalObject("Persian", "cat", "Mew Mew");

dog.makeSound();
cat.makeSound();

class studentClass {
  constructor(public name: string, public className: number, public roll: number) {}
  makeStudent() {
    console.log(
      `This is ${this.name} and s/he is in ${this.className} and roll is ${this.roll}`
    );
  }
}

const pappu = new studentClass("Pappu", 11, 45);
