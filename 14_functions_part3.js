//Function Declaration (Named Function)
function greet() {
  console.log("Hello, World!");
}
greet(); // Calling the function

//Function with Parameters and Return
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

//Function Expression (Stored in a variable)
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 6)); // 24

//Arrow Function (ES6)
const square = (num) => num * num;
console.log(square(5)); // 25

//Anonymous Function (No name, used inside other functions)
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

//Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE executed!");
})();

