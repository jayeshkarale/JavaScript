// Event: Click, Double click, mouse up, key up, input, change

const mybtn=document.getElementById('btn1');
console.log(mybtn);

mybtn.addEventListener('click',()=>{
    alert("click me.")
})

const myadd=document.getElementById('add');
const mysub=document.getElementById('sub');
const myh2=document.getElementById('myh2');

let count=0;
myadd.addEventListener('click',()=>{
    count++;
    myh2.textContent=count;
})

mysub.addEventListener('click',()=>{
    count--;
    myh2.textContent=count;
})
