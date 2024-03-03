let score = "33"; // this is the string type
let scoree = "33aB";
console.log(typeof(score)); // it gives the type string

let valueInNumber = Number(score);
let valueInNumbers = Number(scoree);
console.log(typeof valueInNumber); // it gives the type number
console.log(typeof valueInNumbers); // it gives the type number
console.log(valueInNumbers); // it gives NaN (means Not a Number)

// "33" => 33
// "33abc" => NaN
//  true => 1; false =>0

let isLoggedIn = "";

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn);

// 1 => true ; 0 => false
// "" => false
// "kishan" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);