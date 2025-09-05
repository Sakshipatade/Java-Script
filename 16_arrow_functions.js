const addNum = (num1, num2) => {
    return num1 + num2
}

console.log(addNum(3,6));

//this is explicit arrow function
//written inside the curly braces


// const mulNum = (num1,num2) => {
//     return num1 * num2
// }

//So without writing this we can write the code is as follows:

const mulNum = (num1, num2) => num1 *num2
console.log(mulNum(2,7));
//this is called as implicit function 
//implicit function cannot write in {} braces


//we can also write the implicit function as follows:
const mulNumers = (num1, num2) => (num1 * num2)
console.log(mulNumers(3,2));

//in () round brackets,, it is mostly used in react
