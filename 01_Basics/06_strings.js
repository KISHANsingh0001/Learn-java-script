const name = "Kishan"
const repoCount = 50;
// this is a old way to concatenating the string
// console.log(name + repoCount + " Value"); 

// using backticks here comes String interpulation 
console.log(`Hello this is ${name.toUpperCase()} and my repo count is ${repoCount}`);
// ${} this is place holders which holds string variable's
let gameName = new String(`kishan-Singh-Thakur`)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(`h`));

// let newString = "kishan-singh";
// const substringOfnewString = newString.substring(0,5)
// console.log(substringOfnewString);

const anOtherString = gameName.slice(0 , 5);
console.log(anOtherString);
// if we give negative value in slice so it slice's the string in backword direction
console.log(gameName.slice(-6 , 4)); // kish

const newStringOne = "   kishan     ";
// it has a many white spaces
//Removes the leading and trailing white space and line terminator characters from a string
console.log(newStringOne.trim())

const url = "https://kishan.com/kishan%20thakur";
console.log(url.replace(`%20` , `-`));

console.log(url.includes(`kishan`)); // give true

//Split a string into substrings using the specified separator and return them as an array.
console.log(gameName.split(' ')); // 





