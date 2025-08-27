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


