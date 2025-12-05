"use strict";// it treats all js code as newer version of js  but there is no need to write it, js do it automaticaaly

let name1 = "sakshi"
let age = 20
let city = "Pune"
console.log(typeof "sakshi");
console.log(typeof age);
console.log(typeof city);


//In this assignment we learned the use of "use strict" and use of "typeof"




const accountId=67622
let accountEmail="sakshi@gmail.com"
let accountCity="pune"
let accountPassword="76548"
let accountStatus;

console.log(accountId);
console.log("10"+5);

console.table([accountId, accountEmail, accountCity,accountPassword,accountStatus]);
// //prefer not to use var datatype ,use let most of the time because var creates problem in functional scope and block scope
// //constant declared using const variable


console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof null);

function capitalizeSentences(text) {
  return text
    .split(/([.!?]\s*)/) // Split by punctuation + space, keep the delimiter
    .map(sentence => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    .join('');
}


//part 2 ConversionOperation
//NaN stands for "Not a number"

let score=33
let anyNumber = Number(score)// here Number method is used to convert the value into number format
console.log(anyNumber);
console.log(typeof anyNumber);


//converting the boolean true or false into value format like 0/1
//1 => true; 0 => false
let isLoggedIn=true
let anyNumber1 = Number(isLoggedIn)
console.log(anyNumber1);
console.log(typeof anyNumber1);

//converting the number value into boolean value
let isLoggedInCheck=0
let check= Boolean(isLoggedInCheck)
console.log(check);
console.log(typeof check);

//converting a string into boolean format
let name='sakshi'
let checking= Boolean(name)
console.log(checking);
console.log(typeof checking);
// note: When a string is get converted into boolean format it always returns the value true

// now checking for a string containing both number and alphabets in it
let anyString="34abc"
let test=Number(anyString)
console.log(test);
console.log(typeof test);

//now let us check for the null value
let value=null
let checked=Number(value)
console.log(checked);
console.log(typeof checked);

// //now let us check for the undefined value
let value1=undefined
let checkedd=Number(value1)
console.log(checkedd);
console.log(typeof checkedd);

// //let us checking for the empty string 
let randomString=""
let testing=Number(randomString)
console.log(testing);
console.log(typeof testing);

// //note: the value of empty string is always comes 0










