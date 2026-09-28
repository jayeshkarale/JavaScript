// Operators in JS

// 1. Arithmetic Operators (+, -, *, /, %, **)
let a=15;
let b=7;
console.log("Addition: "+(a+b));
console.log("Substraction: "+(a-b));
console.log("Multiplication: "+(a*b));
console.log("Division: "+(a/b));
console.log("Modulus: "+(a%b));   // remainder

let expo=2**3; // 2 to the power 3.
console.log("exponential: "+expo);

// Area of Circle
let r=12;
console.log("Area of Circle: "+(3.14*r**2));

//Swap two Numbers
let num1=15;
let num2=25;

let temp=num1; //1st way using temp variable.
num1=num2;
num2=temp;
console.log("After Swapping: ",num1,num2);

[num1, num2]=[num2, num1]; // 2nd way without 3rd variable
console.log("After Swapping: ",num1,num2);

