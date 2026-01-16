let myFavNames = ["sakshi", "vaishu", "mummy"];
// console.log(myFavNames);


let myFavFruits = ["pune", "mumbai", "nashik"];
// console.log(myFavFruits);


myFavNames.push(myFavFruits);
console.log(myFavNames);//here whenever we push one content of file into another it will look like array within array like [1,2,[3,4]] 1 and 2 are content if file 1 and 3, content of file 2


let myChoice =myFavNames.concat(myFavFruits);
console.log(myChoice);//concat method solve the problem of push() method

let myRealChoice = [...myFavFruits, ...myFavNames];//this is the spread method which is widely used for the joining two or more string together
console.log(myRealChoice);

let myArray = [2,3,4,5,[6,7,8],9,[4,5,[6,4]]];
myNewArray = myArray.flat(Infinity);//flat() method is used to print array in a brackets without enclosed in another bracket. and infinity is used to solve many brackets within brackets
console.log(myNewArray);

let array1 = Array.from("Sakshi");
console.log(array1);
//when i want a word in the form of array from is used


let score1 = 100
let score2 = 200
let score3 = 300
let array2 = Array.of(score1,score2,score3);
console.log(array2);


