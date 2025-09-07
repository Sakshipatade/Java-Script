// const username = "sakshi";
// if (username === "sakshi") {
//     let isLoggedIn = true;
//     const userid = 13;
//     if (isLoggedIn === true) {
        
//         function welcomeUser() {
//             console.log(`${this.userid} , welcome to your account`);
            
//         }
//         welcomeUser()
    
//     }
// }


// const username = "sakshi";
// if (username === "sakshi") {
//     let isLoggedIn = true;
//     const userid = 13;

//     if (isLoggedIn === true) {
//         function welcomeUser() {
//             console.log(`${userid}, welcome to your account`);
//         }
//         welcomeUser();
//     }
// }

//Conclusion

// In normal functions: this ≠ local variables → you get undefined.

// In objects or classes: this refers to the object/instance → you can use this.userid.

// So your statement is correct:
// “this.userid works in objects/classes, not in standalone functions.”

const myUser = {
    name: "sakshi",
    id:13,
    isLoggedIn :true,

    showWelcomeMessage: function(){
        console.log(` ${this.name} , welcome user`);
        
    }  
}
myUser.showWelcomeMessage()



const myAccountDetails = {
    acc_id : 1234,
    acc_holder_name : "sakshi",
    acc_branch : "narayangaon",
    acc_balance : 20000,

    checkDetails(){
        console.log(` your account id is : ${this.acc_id}`);
        console.log(` your bank balance is : ${this.acc_balance} `);
        
    }

}

myAccountDetails.checkDetails()

//In this way the this operator works in "Object" only

