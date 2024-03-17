const score = 400
// console.log(score);

const balance = new Number(100); 
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // for giveing precision value in manual form

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString(hundreds));
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math); // it print object
// console.log(Math.pow(2,4)); // for x to the power y
// console.log(Math.abs(-65));
// console.log(Math.round(4.56644)); // for round offf the pricision
// console.log(Math.floor(4.9)); // takes lowest value
// console.log(Math.min(4,5,67,7));
// console.log(Math.max(4,5,67,7));

console.log(Math.random()); // it will give always between 0 and 1
console.log((Math.random()*10) + 1 );

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//  A simple explanation that I always think about is "Math.random() sirf 0 se 1 tk random number generate krta hai 0 is inclusive, 1 is exclusive....So in this statement Math.random() * 10, the result can never be equal to 10 qki 10 lane k lie usko 1 se mulitply hona pdega jo ki possible nahi hai, to result hmesha 10 se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....that is if you do Math.floor(Math.random() * 11) to result [0,10] tk aaega both inclusive.....and at last isme bas aap 1 add kr doge to result [1,10] m convert ho jaega....
 
//  similarly, is concept ko max min m bhi leke jaa skte hai

