// // const score = 400
// // console.log(score);
// // // //This is the simple form to print the number and op=400

// // const balance = new Number(1000)
// // console.log(balance);
// // //We can also use Object method to print the number like string 
// // //Output is: [Number:1000]

// // //There are various methods in javascript used for numbers

const num1=2000.92838
// console.log(num1.toString().length);
// console.log(typeof num1);

// //to string method is use to convert the number into string
// //here output is still 2000 but when we check the type of the number it is String

// // //Note: valueOf() method is use to change the Object string into primitive string 
// console.log(num1.valueOf());
// console.log(typeof num1);//see here typeof num1= number


// console.log(num1.toFixed(2));//tofixed method is used for how many numbers after . we need
// // //output:2000.92

console.log(num1.toPrecision(2));//The toPrecision() method formats a number to a specified length.A decimal point and nulls are added (if needed), to create the specified length.
const num3=10000000
// console.log(num3.toLocaleString('en-IN'));//this method is used for get clear understanding of number
// // //en-IN divides the number of zeros in indian format 



// //------------------------MATH FUNCTIONS---------------------------

// // console.log(Math.abs(-4));//it will convert the neg value into positive value
// // //it do not convert the positive value to neg value(positive value remains positive)
// // //OP:4

// // console.log(Math.round(9.4));
// // console.log(Math.ceil(9.2));//Round the value of its highest value here it will become 10
// // console.log(Math.floor(9.9));//Round the value of its lowest value i.e 9

// // console.log(Math.min(1,4,2,5));//Find min value
// // console.log(Math.max(1,4,2,5))//Find max value;
// // console.log(Math.sqrt(25));//Return square root value


// console.log(Math.floor(Math.random() * 10)+1);
console.log(Math.floor(Math.random() *10));












