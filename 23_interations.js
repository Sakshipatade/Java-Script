for (let i = 0; i <= 10; i++ ) {
    const element = i;
   // console.log(element); 
}
//This is the simple loop


for (let i = 0; i <= 10 ; i++) {
    console.log(`Outer Scope Value : ${i}`);

        for (let j = 0; j <= 10; j++) {
        
            console.log(`Inner Scope values : ${j} and Outer Scope: ${i}`);
            
    }
}

//nested for loop