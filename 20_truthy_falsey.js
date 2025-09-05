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