const myArray = [1,2,3,4,5,6,7,8,9,10];

const newArray = myArray.filter( (num) => {
    return num > 6
} )

//console.log(newArray);
//we can print array using scope but need to always return value 




const myArray1 = [1,2,3,4,5,6,7];

const newArray1 = myArray1.filter( (num) => num > 4  )
//console.log(newArray1);
//we can also print array in one line only like the above example


//filter method is game of only true and false 


const books = [
    {
        name : 'book 1', genre : 'history', publish : 1990,  publish : 2000
    },
     {
        name : 'book 2', genre : 'sports', publish : 2000,  publish : 2003
    },
     {
        name : 'book 3', genre : 'history', publish : 1999,  publish : 2025
    },
     {
        name : 'book 4', genre : 'technicaal', publish : 2003,  publish : 2013
    },
     {
        name : 'book 5', genre : 'arts', publish : 2005,  publish : 2010
    },
     {
        name : 'book 6', genre : 'history', publish : 1980,  publish : 1996
    },
     {
        name : 'book 7', genre : 'sports', publish : 2000,  publish : 2004
    },
     {
        name : 'book 8', genre : 'technical', publish : 1980,  publish : 2022
    },
     {
        name : 'book 9', genre : 'arts', publish : 2014,  publish : 2025
    },
     {
        name : 'book 10', genre : 'technical', publish : 2020,  publish : 2025
    }
]

const book_details = books.filter( (bk) => {
    return bk.genre === 'history' && bk.publish >= 2000
} )

console.log(book_details);
//This is how we can apply condition to specifically fetch the details 
