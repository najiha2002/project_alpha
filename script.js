// Variables
var oldVar = "I am var";  // function-scoped
let modernVar = 42;       // block-scoped
const PI = 3.14159;       // constant

console.log(oldVar, modernVar, PI);

// Loops
const fruits = ["apple", "banana", "cherry"];

// For loop
for (let i = 0; i < fruits.length; i++) {
  console.log("For loop:", fruits[i]);
}

// For…of loop
for (const fruit of fruits) {
  console.log("For of loop:", fruit);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// Functions
function greet(name) {
  return `Hello, ${name}!`;
}

const greetArrow = (name) => `Hi, ${name}!`;

console.log(greet("Najiha"));
console.log(greetArrow("Najiha"));

// ES6 Features
// a. Destructuring
const person = { uname: "Najiha", age: 23 };
const { uname, age } = person;
console.log(uname, age);

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);

// b. Spread operator --> expand an iterable
const moreColors = [...colors, "yellow"];
console.log(moreColors);

// Rest operator in function --> collect multiple elements
const sumAll = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumAll(1, 2, 3, 4, 5));

// Async JS
// Promise example
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Data received!");
    else reject("Error occurred");
  }, 1000);
});

fetchData
  .then((data) => console.log("Promise then:", data))
  .catch((err) => console.log(err));

// Async/Await example
const fetchAsync = async () => {
  try {
    const result = await fetchData; // using the same promise
    console.log("Async/Await result:", result);
  } catch (error) {
    console.log(error);
  }
};
fetchAsync();

// Fetch API example (real API)
const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("Fetch API users:", users);
  } catch (error) {
    console.log("Fetch error:", error);
  }
};
getUsers();

