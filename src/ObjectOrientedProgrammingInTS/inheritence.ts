class PersonDetails {
  constructor(public name: string, public age: number, public address: string) {}
  makeDescription() {
    return `${this.name} is ${this.age} years old and abides by ${this.address}`;
  }
}

class Student extends PersonDetails {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const parvez = new Student("Mr Pervez", 26, "Dania,Dhaka");
console.log(parvez.makeDescription());

class teacher extends PersonDetails {
  constructor(name: string, age: number, address: string, public designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(classToTake: number): string {
    return `${this.name} will take ${classToTake} classes`;
  }
}

const ronok = new teacher("Mr Ronok", 26, "Uttara,Dhaka", "Lecturer");
console.log(ronok.takeClass(2));
