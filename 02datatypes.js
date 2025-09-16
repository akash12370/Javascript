//Primitive - Number,String,Boolean,Undefined,Null,Bigint,Symbol

// Numbers:
let length = 16;
let weight = 7.5;
console.log(typeof length);
console.log(typeof weight);

// Strings:
let color = "Yellow";
console.log(typeof color);

//BigInt
let a = BigInt(100) + BigInt(50);
console.log("A:",a);
console.log(typeof a);

// Booleans
let x = true;
let y = false;
console.log(typeof x);

//symbol
let b = Symbol("Hello World");
console.log(typeof b);


//Non-Primitive - Objects,Dates,Arrays,etc.
// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person.firstName);
person['middleName'] = "Akash";
console.log(person);
console.log(typeof person);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars);

// Date object:
const date = new Date("2022-03-25");
console.log(typeof date);
