"use strict";
const crush1 = {
    name: "Sadia",
    husband: true, // The crush is married and the husband is true (boolean value)
};
const crush2 = {
    name: "Sadia",
    husband: "Himel",
    wife: true, // The wife of the crush exists and is true (boolean value)
};
const crush3 = {
    name: "Sadia",
    husband: { name: "Himel", age: 28 },
    wife: "Adiba", // The wife of the crush exists and her name is "Adiba"
};
const crush4 = {
    name: "Sadia",
    husband: { name: "Himel", age: 28 },
    wife: {
        name: "Adiba",
        age: 18,
    }, // The wife of the crush exists and is an object with name "Adiba" and age 18
};
const crush5 = {
    name: "Sadia",
    husband: {
        name: "Himel",
        age: 27,
        wife: "Adiba",
    },
    wife: true, // The wife of the crush exists and is true (boolean value)
};
const crush6 = {
    name: "Mira",
    husband: { name: "Himel", age: 28 },
    wife: { name: "Adiba", age: 18 },
};
const crush7 = {
    name: "Mira",
    husband: { name: "Himel", age: 28 },
    wife: { name: "Adiba", age: 18 },
};
const crush8 = {
    name: "Mira",
    husband: { name: "Himel", age: 28 },
    wife: { name: "Adiba", age: 18 },
};
