// Basic Types
let name: string = "Najiha";
let age: number = 24;
let isStudent: boolean = true;

console.log(`${name} is ${age} years old. Student status: ${isStudent}`);

// Arrays and Tuples

// a. Arrays
let fruits: string[] = ["Apple", "Banana", "Cherry"];
let scores: number[] = [95, 85, 76];
let movies: (string | number)[] = ["Interstellar", 2014, "Inception", 2010];

console.log("Fruits:", fruits);
console.log("Scores:", scores);
console.log("Movies:", movies);

// b. Tuples
let user: [string, number] = ["Isaac", 30];
let location: [string, string, number] = ["Puchong", "Malaysia", 47120];
console.log("User:", user);
console.log("Location:", location);

// Objects & Interfaces

// a. without interface
let person: {name: string; age: number} = {
    name: "Jasper",
    age: 25
};

// b. with interface
interface Person {
    name: string;
    age: number;
    location: [string, string, number];
}

let p1: Person = {name: "Najiha", age: 24, location: location};
console.log("Person:", p1);

// diff between type and interface
// a. has declaration merging
interface Car {
    make: string;
    model: string;
}

interface Car {
    year: number;
}

let car1: Car = {make: "Toyota", model: "Corolla", year: 2020};
console.log("Car1:", car1);

// can extend interfaces
interface ElectricCar extends Car {
    batteryCapacity: number; // in kWh
}

// Functions
function add(a: number, b: number): number {
    return a + b;
};

console.log(add(5, 10));

// Enums (its like custom categories)
enum Role {
    Admin,
    User,
    Guest
}

const userRole: Role = Role.Admin; // userRole = 0
console.log("User Role:", Role[userRole]); // Output: Admin


