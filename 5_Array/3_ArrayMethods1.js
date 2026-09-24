// More Methods of Array

let arr=[1,2,3,4,5,6,7,8,9,10];

// 1. for each
arr.forEach((n)=>console.log(n))   // lambda function
console.log("======================================");

let arr1=["apple", "mango", "watermelon", "banana"];
arr1.forEach((fruit)=>console.log(fruit))
console.log("======================================");

// 2. >>>>>filter
let evennum = arr.filter((n)=>n%2==0)
console.log("Even Numbers: ",evennum)
console.log("======================================");

// multiples of 3
arr.filter((p)=>p%3==0).forEach((n)=>console.log(n))
console.log("======================================");

//3. map (transforms the element)
arr.map((n)=>n*n).forEach((p)=>console.log(p))
console.log("======================================");

// 4.find
let result = arr.find((n)=>n==8)
console.log(result);

