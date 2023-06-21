"use strict";
const a = "model";
const d = "name";
const b = "year";
const c = "model";
console.log(a);
function getProp(obj, prop) {
    return obj[prop];
}
const property = getProp({ name: "Toyota", model: "Primo", year: 2000 }, "name");
