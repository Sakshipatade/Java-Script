// var a =10;
// function b() {
//     var x = 100;
//     console.log(x); 
// }
// console.log(a);

// //What ever we put outside of the function is called as Global Space


// var a = 10;
// let b = 20;
// const c = 30;

// a = 40;
// b = 50;
// // c = 60;

// console.log(a, b, c);
  

// function hello() {
//   console.log("Hello World");
// }
// hello();



// var hi = function () {
//   console.log("Hi");
// };
// hi();
// var a = 10;
// var a = 20;
// console.log(a);

// let b = 10;
// let b = 20;

// const c = 10;
// c = 20;

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const fn = outer();
// fn();
// fn();
// fn();
  


function outer() {
  let x = 10;
  return function inner(y) {
    console.log(x + y);
  };
}

const a = outer();
a(5);
a(20);

