// "use strict";
// //we are learning the comparison in js 

// console.log(2>1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2>=1);
// console.log(2==1);

// //this are the normal comparison as the datatype of both the value is "number" hence it becomes easy to give the op

// //----------------------------------------------------------------------------------------------------------------
// //now we are checking for the comparison between two diffrent datatypes 

// console.log("2"<1);
// console.log("2">1);

// //here the first value is string and the second value is number , js converts the string into number by defalut and then compare those numbers
// //but it is necessary to compare the value which having same datatype only.

// //----------------------------------------------------------------------------------------------------------------
// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);
// //here in some situations js converts the null into the value of "0" hence the comparison get occurs in betwwn the 0 and 0 and we get result as per it
// //but in some situatons js converts the null into undefined value hence the confusion get occur hence it is necessary to keep the datatype same .


//-----------------------------------------------------------------------------------------------------------------
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

//here the output is always comes as false 

//Note: When we use "==="(triple equal to) for comparison the engine of js strictly check the datatypes of the value and then give result as per it.


console.log("2"===1);//output is false 








