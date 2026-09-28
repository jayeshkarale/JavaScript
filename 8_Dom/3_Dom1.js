// accessing element by id
let f1 = document.getElementById('first');
console.log(f1);

// accessing by class
let c = document.getElementsByClassName('box');
console.log(c);

// accessing by tag name
let t = document.getElementsByTagName('div');
console.log(t[3].textContent);

// accessing query
let q = document.querySelector('div');
console.log(q);

let qid = document.querySelector('#first');
console.log(qid);

let qcl = document.querySelector('.box');
console.log(qcl);

// accessing query selector all
let qsa = document.querySelector('.box');
// console.log(qsa[2].textContent);
