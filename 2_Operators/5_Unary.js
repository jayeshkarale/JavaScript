//5. Unary Operator

// Pre-Increment
let a=5, b=0;
b=++a;
console.log(b);

let x=11, y=0;
y=++x;
console.log(x,y);

// Post-Increment
let j=23, k=0;
k=j++;
console.log(k);

let c=3, d=4;
c=d++;
console.log(c,d);

let m=13, n=12;
m=n++;
console.log(m,n);

// Pre-Decrement
let o=56, p=12;
o=--p;
console.log(o,p);

// Post-Decrement
let r=12, s=0;
s=r--;
console.log(s,r);

let a1=4, b1=3, c1=9;
result=((a1++)+(b1++)-(c1--)+(--a1)+(b1--)-(--c1));
console.log(result);

let a2=10, b2=11, c2=3, d2=7;
// console.log(++(a2+4));
result1=(a2++ - b2++ + ++c2 + ++d2 - ++a2 - a2++ - c2-- + m--);
console.log(result1);