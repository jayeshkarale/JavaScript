// Function in Function
function greet(name){
    console.log("hello...",name);
}

function processUser(callback){
    callback("Jayesh");
}
processUser(greet);

console.log("===========================");

function add(a,b){
    console.log(a+b);
}

function display(sum){
    sum(35,12);
}

display(add);
