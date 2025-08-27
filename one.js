const accountId=67622
let accountEmail="sakshi@gmail.com"
let accountCity="pune"
let accountPassword="76548"
let accountStatus;

console.log(accountId);
console.log("10"+5);

console.table([accountId, accountEmail, accountCity,accountPassword,accountStatus]);
// //prefer not to use var datatype ,use let most of the time because var creates problem in functional scope and block scope
// //constant declared using const variable


console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof null);

function capitalizeSentences(text) {
  return text
    .split(/([.!?]\s*)/) // Split by punctuation + space, keep the delimiter
    .map(sentence => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    })
    .join('');
}









