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
