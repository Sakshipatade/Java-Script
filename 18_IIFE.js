
//IIFE : Immediately Invoked Function Expression


//IIFE is used to immediately called the function 

//named iife
//unnamed iife


//named iffe is as follows:

// ( function addName() {
//     console.log("Hii, Sakshi");
    
// })()
//simple named iife

( function addName(name) {
    console.log(`Hii, ${name}`);
    
})("sakshi");
//iife by passing parameter




//un-named iife

// ( () => {
//     console.log("welcome sakshi");
    
// })()

//this is simple un-named iife without passing parameter


( (name) => {
    console.log(`Welcome ${name}`);
    
})("sakshi")


//how javascipt call stack works
function one(){
    console.log("one");    
    two()
}

function two() {
    console.log("two");
    three()
}

function three() {
    console.log("three");  
}

one()
two()
three()
