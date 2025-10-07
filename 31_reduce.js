//Basically reduce method is used for example at cart addition

//The example is as follows:
//In the Reduce method there is term called accumalator and we need to initialize it with a value always


let myArray = [100,200,400];
let acc = 0;
const cart_total = myArray.reduce( (accumalator, item) => {
   // console.log(`now acc is ${acc} and item is ${item}`); //firstly its value is '0' and it get add with the 'item' value each time(because it goes one by one into array values)

    return accumalator+item
} )

//console.log(cart_total);


//we can done this also as follows:

let myArray1 = [
    {
        name : 'Java',
        price : 2000
    },

    {
        name : 'python',
        price : 3000
    },
    {
        name : 'C++',
        price : 5000
    }
]

const new_cart = myArray1.reduce( (acc, item) => (acc + item.price), 0)
console.log(new_cart);
