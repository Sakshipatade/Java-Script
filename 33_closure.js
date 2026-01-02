for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//The output is 4 4 4 because var is function-scoped, and all setTimeout callbacks share the same i.
//  By the time callbacks execute, the loop has finished and i equals 4.

for ( let i = 1; i <= 3; i++ ) {
    setTimeout( ()=> {
        console.log(i);
    }, 1000);
}
// let fix the above problem because let is block-scoped
// Each loop iteration gets a new i