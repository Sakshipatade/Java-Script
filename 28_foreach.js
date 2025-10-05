let myArray = [
    {
        'name' : 'Sakshi',
        'subject' : 'Java'
    }, 
    {
         'name' : 'Vaishnavi',
        'subject' : 'Python'
    },
    {
         'name' : 'Mummy',
        'subject' : 'C++'
    }
]

myArray.forEach( (item) =>{
    //console.log(item.name);  
  //console.log(item.subject);
    console.log(`My name is ${item.name} and My favourite Subject is ${item.subject}`);
    
} )
