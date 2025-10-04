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