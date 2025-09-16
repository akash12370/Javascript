//for loop
for(let i=0;i<5;i++)
{
    console.log(i);
}

//while loop
var i =0;
while (i < 10) {
  console.log(i);
  i++;
}

//do-while loop
var i = 0;
do {
  console.log(i);
  i++;
}while(i < 10);

//for in loop
const person = {fname:"John", lname:"Doe", age:25};

var text = "";
for (let x in person) {
  text += person[x];
  console.log(text);
}

//for of loop
const cars = ["BMW", "Volvo", "Mini"];

var text = "";
for (let x of cars) {
    text += x;
    console.log(text);
}





