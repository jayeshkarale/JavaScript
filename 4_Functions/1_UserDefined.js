// Types of User-Defined Functions in JS

// a. Without Parameters and Return Type.
function SayHello(){ // parameter
    console.log("Hello World...");
}
SayHello(); // argument

// b. With Parameters but not with return type
function m1(name){
    console.log("hello ",name);
}
m1("Jayesh");

// c. With Return type but no parameters
function add(){
    let a=15, b=26, sum=0;
    sum=a+b;
    return sum;
}
let sum=add();
console.log("Sum is: ",sum);

// d. With Prameters and Return type
function mul(a,b){
    let product=a*b;
    return product;
}
let product= mul(6,5);
console.log("Product is:",product);