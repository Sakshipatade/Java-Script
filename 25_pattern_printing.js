for(let i = 0; i <= 4; i++){
    for(j = 0; j <= i; j++){
        process.stdout.write("*")
    }
    console.log(" ");  
}
//to prevent the output not printed on next line
//js used process.stdout.write() method like above mentioned


for(let i = 5; i >= 0; i--){
  for(let j = 5; j >= i; j--)
  {
    process.stdout.write("*");

  }
  console.log(" ");
}
//this is also used to print the inverse table


// let myString ="SAKSHI";
// for(let i = 0; i <= myString.length-1 ; i++){
//   for(let j = myString.length-1; j >= i; j-- ){
//    let temp = i;
//     i = j;
//     j = temp;
//   }
//   console.log(myString);
// }
//the code is not working