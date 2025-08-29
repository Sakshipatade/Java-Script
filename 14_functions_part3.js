//Function Declaration (Named Function)
function greet() {
  console.log("Hello, World!");
}
greet(); // Calling the function

//Function with Parameters and Return
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8 will be the output

//Function Expression (Stored in a variable)
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 6)); // 24 will be the ouput

//Arrow Function (ES6)
const square = (num) => num * num;
console.log(square(5)); // 25 will be the output

//Anonymous Function (No name, used inside other functions)
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

//Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE executed!");
})();

//Default Parameters in Functions
function greetUser(name = "Guest") {
  console.log("Hello, " + name);
}
greetUser();      // Hello, Guest
greetUser("Sakshi"); // Hello, Sakshi

//Rest Parameters (...args)
//To accept multiple values as an array.
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(2, 4, 6, 8)); // 20
