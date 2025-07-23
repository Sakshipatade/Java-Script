let myArray = [2,3,4,5,6]
// console.log(myArray);

// //we can also create arrays like following

// let myArray2 = new Array(2,3,4,5,6)
// console.log(myArray2);
// myArray2.push(7);
// console.log(myArray2);

// myArray2.pop(7);
// console.log(myArray2);

// console.log(myArray[2]);
// console.log(myArray.indexOf(4));
// console.log(myArray.length);
// console.log(myArray.includes(4));

// myArray.shift();//shift method remove the first element
// console.log(myArray);
// myArray.unshift(9);//The unshift() method adds new elements to the beginning of an array.
// console.log(myArray);

// //Array join() method
// let newArray = myArray.join();//The join() method returns an array as a string.The join() method does not change the original array.Any separator can be specified. The default is comma (,).
// console.log(newArray);
// console.log(typeof newArray);

//Array slice() and splice() method
console.log("Original Array: "+myArray);
console.log("Array after slice: "+myArray.slice(1,4));

console.log("Original Array: "+myArray);
console.log("Array after splice: "+myArray.splice(1,4));

/*
    The slice() method in JavaScript extracts a section of
     an array and returns a new array containing the selected 
     elements, without modifying the original array.

     The splice() method in JavaScript is used to change the
      contents of an array by removing or replacing existing
       elements and/or adding new elements in place, modifying 
       the original array.

*/















