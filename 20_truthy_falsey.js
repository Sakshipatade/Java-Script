const myArray = []

if (myArray == 0) {
    console.log("array is truthy");
    
}
else {
    console.log("arrays is falsey");
    
}

//truthy values
// [],'false', "0", all values inside "" quotes are truthy values

const myArray1 = {};
if (myArray1 == 0) {
    console.log("array is truthy");
}
else {
    console.log("arrays is falsey");
} 

const myVal2 = " ";
if (myArray1 == 0) {
    console.log("array is truthy");
}
else {
    console.log("arrays is falsey");
} 


const myVal3 = null;
if (myArray1 == 0) {
    console.log("array is truthy");
}
else {
    console.log("arrays is falsey");
} 

//falsey values
// {}, " ", 0, -0, false, null, undefined


const myObj = {}

if (Object.keys(myObj.lenght == 0)) {
    console.log("length is 0");
    
}
else{
    console.log("length is not 0");
    
}


//how to compare array length is equal to zero or not

const myArray3 = []

if (myArray3.length == 0) {
    console.log("length is zero");
    
}
else{
    console.log("length is not zero");
    
}