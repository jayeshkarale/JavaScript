// Anonymous Function (function that is defined without a name)
let afun=function(){
    console.log("hello guys...");
}
afun();
console.log("===========================");

let mod=function(a,b){
    console.log("Remainder is: ",a%b);
}
mod(23,5);
console.log("===========================");

// rest parameter
function sum(...numbers){
    let total=0;
    for(let n of numbers){
        total=total+n
    }
    console.log("sum =>",total);
}
sum(10,20,30,40,50,60);
console.log("===========================");

// default parameter
function greet(name="Jayesh K"){
    console.log("Good Morning..",name);   
}
greet("Kalyani");
greet();  // default parameter