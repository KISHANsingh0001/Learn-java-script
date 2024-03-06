// Types of data type in javaScript
// * Primitive data types  (These are all call by value)
//   These are 7 types : 
// 1.Number: Represents both integer and floating - point numbers.Example: 5, 3.14.
 
// 2.String: Represents a sequence of characters enclosed in single or double quotes.Example: "Hello, world!".

// 3, Boolean: Represents a binary value, either true or false, often used for conditional logic.

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type.Example: 
//          let y = null;

// 6.Symbol(ES6): it is mostly used used to find uniqnece.

// 7.BigInt(ES11): Represents large integers that cannot be represented by the Number type.

//     Refence(Object Data Types):

// 1.Object: Represents a collection of key - value pairs(properties and methods).Example: { name: "John", age: 30 }.
   let myObj = {
              name: "kishan",
              age : 19,
   }
// 2.Array: Represents a list - like collection of values, indexed by numbers(integer indices).Example: [1, 2, 3, 4].
   const cars = ["BMW" ,"Audi" , "Jeguar" , "RangeRover"];
// 3.Function: Represents a reusable block of code that can be invoked or called with arguments.
//             Example: function add(x, y) { return x + y; }.
  const myFunction = function(){
        console.log("Hello World");
  }

// Reference (non-primitive)
//   Array , Object , Functions
//**********************************************************************************
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
//***********************************************************************************
// So javaScript are the dymnamically typed

