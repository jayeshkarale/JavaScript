// 4. Logical Operators (&&-AND, ||-OR, !-NOT)

// AND (&&)
let a=20, b=10, c=12;
console.log((a>c) && (b<c)); // True && True = True
console.log((a>b) && (c<b)); // True && False = False
console.log((c>a) && (b<a)); // False && True = False
console.log((b>c) && (a<c)); // False && False = False

console.log((b>=b+3) && ('10' === '20')); // False && False = False

// OR (||)
console.log((c**2>a*b) || ('10' !== '20')); // False || True = True


// NOT (!)
