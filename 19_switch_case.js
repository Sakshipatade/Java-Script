const color = "red";

switch (color) {
    case "blue":
        console.log("blue"); 
        break;

    case "green":
        console.log("green"); 
        break;

    case "pink":
        console.log("pink"); 
        break;

    case "red":
        console.log("red executed"); 
        break;

    default:
        console.log("black");
        
        break;
}


//If does not use break , the statments after below will all be executed
//Except the default case