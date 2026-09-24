// String Methods

let s1="JavaScript Learning"
console.log(s1);

console.log(s1.length);  // Length of string
console.log(s1.charAt(2));  // Character at index
console.log(s1.toUpperCase());  // Uppercase
console.log(s1.includes('ava'));
console.log(s1.includes('2va'));

let s2="java developement"
console.log(s2.trimStart);
console.log(s2.indexOf('a'));
console.log(s2.replace('a','x'));  // replaces only first occurence
console.log(s2.replaceAll('a', 'A'));  // replaces all characters

console.log(s2.slice(1,7));

console.log(s2.substring(5,12));  // prints substring

let SplitString =s2.split(' ')  // splits the string into ' '
console.log(SplitString);

let m= new String("Hello...");
console.log(typeof m);

let n=m.valueOf();
console.log(typeof n);
