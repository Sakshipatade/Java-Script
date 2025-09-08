for (let i = 0; i <= 10; i++ ) {
    const element = i;
   // console.log(element); 
}
//This is the simple loop


for (let i = 0; i <= 10 ; i++) {
   // console.log(`Outer Scope Value : ${i}`);

        for (let j = 0; j <= 10; j++) {
        
           // console.log(`Inner Scope values : ${j} and Outer Scope: ${i}`);
            
    }
}

//nested for loop



const myArray = ["Sakshi" , "Vaishu", "Mummy", "Pappa"];

for (let i = 0; i < myArray.length; i++) {
    //this is the first way to print the array values
    const element = myArray[i];
    console.log(element);
    
    //this is the second way to print the array values
    console.log(`Array elements are: ${myArray[i]}`);
    
}

//finding the value in array using below code:
function findIndex () {
    console.log(myArray[2]);
    
}
findIndex();