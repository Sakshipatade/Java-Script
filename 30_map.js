let myArray = [1,2,3,4,5,6,7,8,9,10];

let newArray = myArray
                .map( (num) => num + 5 )
                .map ( (num) => num + 10 )
                .filter( (num) => num > 20  )//this is called chaining 
console.log(newArray);
//this is basic map function which always returns value
