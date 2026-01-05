// //function declaration or function statement are the same thing

function a(){
    console.log("A is called")
}
a();
//this is function declaration

//************************************************************************************
//function expression

var b = function (){
    console.log("B is called");
}
b();

//***************************************************************************************
//the major difference between this two is Hoisting
//because where normal function statement is called before its initialization like below

 a();
 function a(){
    console.log("A is called");
 }//it will print the output

//but in the below case
 b();
 var b = function (){
    console.log("B is called");
 }

//  it will give the TypeError because b is undefined so when the value is undefined it cannot be called
// ***************************************************************************************

a();//calling the function before intialization or function declaratiob give "Undefined"
function a(){
    console.log(val1);
    if(true){
        var val1 = 10; 
    }    
}
//a();

function b() {
    if (true) {
        let val2 = 20;
    }
    console.log(val2);//trying to access val2 outside its scope gives reference error
}
b();

