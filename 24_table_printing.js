for (let i = 1; i <= 10; i++) {
     console.log(`Table of ${i}`)

    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i*j);
    }  
}



//if we want to break the control flow then we will use "break" keyword
for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        console.log("5 is detected");
        break; //here we use break to break the flow of the control
    }
    console.log(`value of i is ${i}`) //this code will not printed because of the break keyword
    
}    


