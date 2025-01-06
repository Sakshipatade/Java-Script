//part 2 ConversionOperation
//NaN stands for not a number

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
//note: When a string is get converted into boolean format it always returns the value true

//now checking for a string containing both number and alphabets in it
let anyString="34abc"
let test=Number(anyString)
console.log(test);
console.log(typeof test);

//now let us check for the null value
let value=null
let checked=Number(value)
console.log(checked);
console.log(typeof checked);

//now let us check for the ndefined value
let value1=undefined
let checkedd=Number(value1)
console.log(checkedd);
console.log(typeof checkedd);

//let us checking for the empty string 
let randomString=""
let testing=Number(randomString)
console.log(testing);
console.log(typeof testing);
//note: the value of empty string is always comes 0



