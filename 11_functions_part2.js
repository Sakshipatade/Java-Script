function calculateMyCart(...num){
    return num
}
console.log(calculateMyCart(200,400,100)) 
//this is called as rest method or spread method


let myObject = {
    username:'sakshi',
    price:300
}

function returnObjectValue(objValue){
    return `Details are ${objValue.username} and ${objValue.price}}`
    
}
console.log(returnObjectValue(myObject))