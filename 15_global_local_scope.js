
const username = "sakshi"

function addUser(){
    const userid = 13
    console.log(username);//it will be printed because username is globally declared.
    
}
addUser()

//console.log(userid);//usewr id will not be printed because it has local scope and we can not access outside that scope
