"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Basic Types
let name = "Najiha";
let age = 24;
let isStudent = true;
console.log(`${name} is ${age} years old. Student status: ${isStudent}`);
// Arrays and Tuples
// a. Arrays
let fruits = ["Apple", "Banana", "Cherry"];
let scores = [95, 85, 76];
let movies = ["Interstellar", 2014, "Inception", 2010];
console.log("Fruits:", fruits);
console.log("Scores:", scores);
console.log("Movies:", movies);
// b. Tuples
let user = ["Isaac", 30];
let location = ["Puchong", "Malaysia", 47120];
console.log("User:", user);
console.log("Location:", location);
// Objects & Interfaces
// a. without interface
let person = {
    name: "Jasper",
    age: 25
};
let p1 = { name: "Najiha", age: 24, location: location };
console.log("Person:", p1);
let car1 = { make: "Toyota", model: "Corolla", year: 2020 };
console.log("Car1:", car1);
// Functions
function add(a, b) {
    return a + b;
}
;
console.log(add(5, 10));
// Enums (its like custom categories)
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const userRole = Role.Admin; // userRole = 0
console.log("User Role:", Role[userRole]); // Output: Admin
//# sourceMappingURL=index.js.map