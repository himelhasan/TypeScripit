"use strict";
const a = "name";
const b = "model";
const c = "name";
const d = "year";
const e = "year";
console.log(a);
function getProp(obj, prop) {
    return obj[prop];
}
const property = getProp({ name: "Toyota", model: "Primo", year: 2000 }, "name");
