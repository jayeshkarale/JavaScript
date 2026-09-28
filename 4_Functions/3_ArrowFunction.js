let fun=()=>{
    console.log("this is arrow function");
    
}

let name=(sname)=>{
    console.log("my name is ",sname);
    
}

let p=(a,b)=>{
    let power=a**b;
    return power;
}

fun();

name("jayesh");

let result=p(10,3)
console.log("Result: ",result);
