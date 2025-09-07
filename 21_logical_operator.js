const isUserLoggedIn = true;
const haveDebitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;


if (isUserLoggedIn && haveDebitCard) {
    console.log("welcome you!!!");
    
}
//use of && operator : both conditions should be true
//we can also take value1 && value2 && value3

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("welcome you!!!");
    
}
//either this or this : any one condtion should be true
//we can also take value1 || value2 || value3
//we can more than 2 condtions using OR operator

