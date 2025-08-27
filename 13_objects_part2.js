//Object with Functions (Methods)
const car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022,
  start: function() {
    return `${this.brand} ${this.model} is starting...`;
  }
};

console.log(car.start()); // Toyota Fortuner is starting...


//Nested Objects

const student = {
  name: "Sakshi",
  grade: 9,
  subjects: {
    math: 85,
    english: 90,
    science: 88
  }
};

console.log(student.subjects.math);   // 85
console.log(student.subjects.english); // 90


//Function with Parameters
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30


//Function with Default Parameters
function multiply(x, y = 2) {
  return x * y;
}

console.log(multiply(5));    // 10 (y defaults to 2)
console.log(multiply(5, 3)); // 15


