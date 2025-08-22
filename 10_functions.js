function sayMyName(){
    console.log("Hii i am sakshi");
    
}
sayMyName()

//Output: Hii i am sakshi
//This is the normal way to print any body in the function 

function addition(num1, num2){
    //here num1 and num2 are called the parameters not the arguments

    //so we can simply do this
    // let result = num1 + num2
    // return result


    //or we can do this
    return num1 + num2
}

let result =addition(2,3)
console.log(result);
//output: 5
//here the result variable in the function is considered as diffrent than
// result variable in the outside of the function because of different scope 



function isLoggedIn(username){
    return `Welcome ${username} ! You are logged In.`
}
// '' <-This is called as string interpolation 

let username_string= isLoggedIn("Sakshi")
console.log(username_string);
//output: Welcome Sakshi ! You are logged In.
//In this way  we can simply pass the username as a arguments


//If we do not pass any arguments while calling the function it will return the username as undefined
function isLoggedIn1(username){
    if(username === undefined){
        console.log("Please enter user name");
        return
    }
    return `Welcome ${username} ! You are logged In.`
}

let another_user = isLoggedIn1()
console.log(another_user);
//Output: Welcome undefined ! You are logged In.if do not if block



