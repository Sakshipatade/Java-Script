let arr = [1,2,3,4,5]
for (const element of arr) {
   console.log(element);
    
}

//now iterate in String
let greetings = "Hello World!";
for (const greet of greetings) {
    if (greet == " ") {
        break; // for breaking the execution of the code if any space occurs 
    }
    console.log(greet);
}

let myName = "sakshi is my best friend";
for (const element of myName) {
    if (element == " ") {
        console.log("-----");//dahs is printed where space detected
        
    }
    console.log(element);
    
}

