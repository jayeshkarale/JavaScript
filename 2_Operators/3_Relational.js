// 3. Relational Operators (<, >, ==, !=)

let a=20, b=10; c=11, d='11';

console.log(a>b); // 20>10 -- true
console.log(a<b); // 20<10 -- false
console.log(a<=c); // 20<=11 -- false

console.log(c==d); // 10 == '10' --- content check so -- True
console.log(c===d); // 10 === '10' --- content + datatype check & datatype is different so -- False

console.log(c!=d); // 11!='11' -- False
console.log(c!==d); // 11!=='11' -- True