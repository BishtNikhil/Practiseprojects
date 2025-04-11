// Data Types --> 1. Primitive
//                   -> Number
//                   -> String
//                   -> Boolean
//                   -> Null
//                   -> Undefined
//                   -> Symbol (ECMAScript 6)
//                   -> BigInt (ECMAScript 2020)

//                --> 2. Non-Primitive
//                   -> Object
//                   -> Array
//                   -> Function
//                   -> Date
//                   -> RegExp
//                   -> Set

// Primitive Data Types

let a = 10;
console.log(a); // Output: 10
console.log(typeof a); // Output: number

let b = "Hello";
console.log(b); // Output: Hello
console.log(typeof b); // Output: string

let bool = true;
console.log(bool); // Output: true
console.log(typeof bool); // Output: boolean

let d = null;
console.log(d); // Output: null
console.log(typeof d); // Output: object  Reason:(The null keyword represents an intentionally defined absence of value. 
//                                               null is a primitive, although the typeof operator returns that null is an object. 
//                                               This is an error that has carried over from the first version of JavaScript and been left 
//                                               intentionally unaddressed to avoid breaking expected behavior across the web.)


let s1 = Symbol("Vibe Tribe");  //Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties.
let s2 = Symbol("Vibe Tribe");  //They help create unique keys in objects, preventing conflicts with other properties.
console.log(s1); // Output: Symbol(Vibe Tribe)
console.log(s2); // Output: Symbol(Vibe Tribe)
console.log(s1 == s2); // Output: false


let big = BigInt("0b1010101001010101001111111111111111");
console.log(big);
console.log(typeof big); // Output: bigint
  
