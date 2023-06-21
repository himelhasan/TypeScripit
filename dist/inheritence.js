"use strict";
class PersonDetails {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeDescription() {
        return `${this.name} is ${this.age} years old and abides by ${this.address}`;
    }
}
class Student extends PersonDetails {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const parvez = new Student("Mr Pervez", 26, "Dania,Dhaka");
console.log(parvez.makeDescription());
class teacher extends PersonDetails {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
        this.designation = designation;
    }
    takeClass(classToTake) {
        return `${this.name} will take ${classToTake} classes`;
    }
}
const ronok = new teacher("Mr Ronok", 26, "Uttara,Dhaka", "Lecturer");
console.log(ronok.takeClass(2));
