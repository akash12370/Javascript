
let name = "Akash";
let age = "22";
// we can direct insert variable into string literal...it is called string interpolation
let sentence = `my name is ${name} and i am ${age} years old`;
console.log(sentence);
//escape sequence characters - \',\",\n,\t,\r"

let friend1 = "Akash";
let friend2 = "Mayur";
console.log(friend1.concat(" is a friend of ",friend2));
console.log(friend1.length);
console.log(friend1.toUpperCase());
console.log(friend1.toLowerCase());
console.log(friend1.replace("Aka","Lak"));
let x = "       Hello          ";
console.log(x.trim());