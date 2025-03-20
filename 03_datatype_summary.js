/* There are two types of datatypes
    1.Primitive datatype
    2.Non-primitive datatype

1.Primitive datatype are called by value 
    There are 7 types in primitive datatype
    ->String, Number, Boolean, Symbol, Undefined, Null,Character

2.Non-primitive datatype are called by reference
    There are basically 3 types in non-primitive datatypes
    ->Arrays, Object, Function
*/

//Now we check the type of the datatype which are primitive
// const firstId=Symbol("123");
// const secondId=Symbol("123")
// const thirdId=Symbol(123)
// let userEmail;
// const score=322;
// let userName="Sakshi";
// const isLoggedIn=false;
// let userAddress=null;


// console.log(typeof firstId);
// console.log(typeof secondId);
// console.log(typeof thirdId);
// console.log(typeof userEmail);
// console.log(typeof score);
// console.log(typeof userName);
// console.log(typeof isLoggedIn);
// console.log(typeof userAddress);

//----------------------------------------------------------------
//Non Primitive datatypes

let fruits=["apple","orange","guava"];
console.log(fruits);


const myObj = {
    name:"Sakshi",
    age:20,
    address:"pune"}
console.log(myObj);


const myFunction = function(){
    console.log("Hello! I am Sakshi");
}

//This are some examples of non-primitive datatypes

/* 
    String => String
    Number => Number
    Boolean => Boolean
    Null => Object
    Undefined => Undefined
    Symbol => Symbol
    function => function
    
*/
