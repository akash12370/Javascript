let num = [45,32,56];

//for each does operation on same array
num.forEach((value,index,array) => {
    console.log(value,index,array  );
})
console.log(num);

//map can create a new array
let temp = num.map((value) => {
    console.log(value);
    return value + 1;
})

console.log(temp);

//filter method
let  arr = [23,5,67,12,54,11];
let temp1 = arr.filter((a) => {
    return a<20;
})

console.log(temp1);

//reduce method
let demo = [1,3,5];
let c = demo.reduce((a,b) => {
    return a + b;
})

console.log(c);