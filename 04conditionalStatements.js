//if statement
let a = 1;
if (a > 0) {
  console.log(a," is positive");
}

//else statement
let hour = 20;
if (hour < 18) {
  console.log("Good Day");
} else {
    console.log("Good Morning");
}

//else if
let time = 21;
if (time < 10) {
    console.log("Good Morning");
} else if (time < 20) {
    console.log("Good Day");
} else {
    console.log("Good Evening");
}

//switch statement
let day;
switch (new Date().getDay()) {
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
     day = "Tuesday";
     console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
  case 7:
    day = "Sunday";
    console.log(day);
    break;
}


