// wap which display even numbers beteen 23 to 61
console.log("Even Numbers:");
for(let n=23; n<=61; n++){
    if (n%2==0) {
        console.log(n);   
    }
}

// WAP which displays the odd numbers between 29 to 54.
console.log("Odd Numbers:");
for(let n=29; n<=54; n++){
    if(n%2!=0){
        console.log(n);
    }
}

// wap which display sum of odd numbers beteen 57 to 13
let sum=0;
for(let n=57; n>=13; n--){
    if (n%2!=0) {
        sum=sum+n;   
    }    
}
console.log("Sum of Odd Numbers: ",sum);

// wap which displays max and 2nd max digit from numbers.
let max=-1,smax=-1;
let number=56712;

while (number>0) {
    let digit=number%10;
    digit=Math.floor(digit);

    if (digit>max) {
        smax=max;
        max=digit;
    } else if (digit>smax && digit !=max) {
        smax=digit;
    }
    
    number=Math.floor(number/10);
}

console.log("Max Digit: ",max);
console.log("2nd Max Digit: ",smax);