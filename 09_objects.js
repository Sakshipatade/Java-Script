/*
    There is term called singleton ojects which were get
    created when we create a constructor and it does not get 
    created we create an object in simple form like 
    const myObj = {
        key = value;
    }

    Object.create is used to create a object 
    this is how we can create constructor 
*/


//Normally We create objects like the following
const mySymbol = Symbol("key1");
const jsUser = {
    name : "Sakshi",
    age: 20, 
    email: "sakshivpatade@gmail.com",
    isLoggedIn: false,
    location: "Pune",
    favSubject: ["Science","History"],
    [mySymbol]:"key1"//this is how symbol get created using []sign
}
console.log(jsUser);

/*
    When i write only mySymbol: "key1" in jsUser object,
    JS treats it as a String hence whenever we want to create
    Symbol we need [] to create it in the jsUser object.
*/

/*There are two types to access the Object value 
    1.using .(dot) operator
    2.[]using square bracket

 below examples show how to access object value using . and []   
*/

console.log(jsUser.name);
console.log(jsUser["name"]);//here when we know we want to retrive any value, then its reference value should be write in "" quotes
//output are "sakshi" and both will be same 

console.log(jsUser["age"]);
console.log(jsUser.age);


jsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);//This is called as string interpolation
    //this operator is used to know please take name from jsUser
}
console.log(jsUser.greetingTwo());

//Now if i want to change the address from pune to mumbai

jsUser.location = "Mumbai";
console.log(jsUser);//location get changed
Object.freeze(jsUser);//after using freeze method no one can able to change the data of jsUser, because it is freeze now


//lets check whether it will change or not
jsUser.location = "Pune"
console.log(jsUser);// It doesn't changes as previous data is get freezed






