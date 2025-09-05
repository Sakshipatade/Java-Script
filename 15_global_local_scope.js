
const username = "sakshi"

function addUser(){
    const userid = 13
    console.log(username);//it will be printed because username is globally declared.
    
}
addUser()

//console.log(userid);//usewr id will not be printed because it has local scope and we can not access outside that scope



//----------------------------------------------

//now let's check the scope accessibilty in the "if" loop

if(username==="sakshi"){
    const color = "red";

    if(color==="red"){
        const channel = "youtube"
        console.log(color);
        console.log(username);
        
    }

}


//function is stored in the variable 

const function_exmaple = function addNum(num1, num2){
    return num1+num2
}
console.log(function_exmaple(4,3));

//here function_example is variable and addNum function is added in that variable