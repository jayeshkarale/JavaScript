// textContent vs innerText vs innerHTML
const f1 = document.getElementById('first');
console.log(f1.textContent);  // all text, including hidden, ignores CSS
console.log(f1.innerText);    // only visible text, respects CSS
console.log(f1.innerHTML);    // text plus the HTML tags inside

console.log("======================");

const myh1 = document.getElementById('first');
myh1.textContent = "we are learning dom";
myh1.style.color = "Orange";
myh1.style.fontSize = "50px";
myh1.style.fontFamily= "Calibri";

console.log("=================");

const myb1 = document.getElementsByTagName("body");
myb1[0].style.backgroundColor = 'lightblue';

// Collection: loop over it
const m1 = document.getElementsByClassName('box');
for (const element of m1) {
    element.style.color = 'maroon';
    element.style.backgroundColor = 'yellowgreen';
    element.style.fontSize= "35px";
}

const w1 = document.getElementById('third');
w1.style.backgroundColor = 'black';
w1.style.color = 'white';

// Define the parent before using it
const firstlist = document.querySelectorAll('.box');
firstlist[0].appendChild(w1);