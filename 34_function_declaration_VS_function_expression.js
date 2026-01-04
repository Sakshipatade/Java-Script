//function declaration or function statement are the same thing

function a(){
    console.log("A is called")
}
a();
//this is function declaration


//function expression

var b = function (){
    console.log("B is called");
    
}
b();


/*the major difference between this two is Hoisting
 because where normal function statement is called before its initialization like below

 a();

 function a(){
    console.log("A is called");
 }

 it will print the output



 but in the below case
 b();

 var b = function (){
    console.log("B is called");
 }

 it will give the TypeError because b is undefined so when the value is undefined it cannot be called
*/
