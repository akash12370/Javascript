function average(x,y)
{
    return (x+y)/2;
}

let a = 5;
let b = 6;

console.log("Avergae:",average(a,b));

//arrow function
const sum = (p,q) => {
    return p+q;
}

console.log("Sum:",sum(2,7));

const hello = () => {
    console.log("Hello");
}

hello();