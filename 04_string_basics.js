/*
There are two types of strings
    1.Primitive
    2.Object

1.Primitive strings are simple strings, like the following

    const name = "Sakshi";

2.String is created by using constructor like the follwoing example
    const name= new String("Sakshi");
*/

    const name1 = "Sakshi";
    console.log(name1);
    //here the output will be only "Sakshi"

    const name2 = new String("Sakshi");
    console.log(name2);
    //here the output will be [String: 'Sakshi']
    //Both ways are used for creating strings
    
    /*
        For the concatenation of two strings following syntax is used.
        it is better not to use + for concatenation
        Note: `` is used for printing the string in better way and the variable is get accessed by using $ sign with{variable_name}
    */

    const first_name = "Sakshi"
    const second_name = "Vaishnavi"
    console.log(`${first_name} is honest girl and ${second_name} is also an honest girl`);
    
