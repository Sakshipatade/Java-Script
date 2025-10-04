
//Use of forin loop on the Object
let myObj = {
    'name': 'Sakshi',
    'city': 'Pune',
    'village': 'Bori',
    'college': 'Modern College of Eng'
}

for (const key in myObj) {
   console.log(`My key is ${key} and its value is ${myObj[key]}`);  //here i wrote myObj[key] that is the value of object 
   console.log(myObj[key]); //here only values will be printed
   console.log(key); // here only key will be print like name, city etc
    
}



//Use of forin loop on arrays

let myArr = ["Pune", "Mumbai", "Nashik", "Banglore", "Delhi"];

for (const cityName in myArr) {
    console.log(cityName); //it will print only the key values like 0 1 2 3 even if we dont give the key values like in the object example
    console.log(myArr[cityName]); //so here the array values will get print
}