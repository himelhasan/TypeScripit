"use strict";
const userProfile = {
    companyName: "CodersCrown",
    name: "user",
    email: "user@example.com",
    age: 23,
    isMarried: false,
    wife: "bibi", // The user's wife's name is set to "bibi"
};
const balanceOfHimel = {
    name: "Himel",
    currBalance: 500,
    addBalance(newMoney) {
        // The addBalance method is defined
        return this.currBalance + newMoney; // The method returns the sum of currBalance and newMoney
    },
    // The method addBalance is defined using a function shorthand syntax,
    // without using the function keyword. It calculates the new balance
    //by adding newMoney to the currBalance property.
};
const riyadhData = {
    name: "Riyadh",
    age: 13,
    isMarried: false,
    class: 10,
    hobbies: ["fishing", "riding"],
};
console.log(riyadhData);
