const title = document.getElementById('title');
title.style.color = 'blue';
title.style.backgroundColor = 'yellowgreen';

const newHeading = document.createElement('h1');
newHeading.textContent = 'Hello, World !';
newHeading.style.color='green';
newHeading.style.backgroundColor='lightblue';

title.before(newHeading);   // content before the id title


const newSubheading = document.createElement('h2');
newSubheading.textContent = 'Welcome to Website';
newSubheading.style.color='purple';
// newSubHeading.style.backgroundColor='lightgreen';

title.after(newSubheading);   // content after the id title

console.log("=================================================");


const firstList = document.getElementsByTagName('ul');

const fli=document.createElement('li');
fli.textContent='Html';

const sli=document.createElement('li');
sli.textContent='Css';

const tli=document.createElement('li');
tli.textContent='JavaScript';

const frli=document.createElement('li');
frli.textContent='SpringBoot';

firstList[0].appendChild(fli);
firstList[0].appendChild(sli);
firstList[0].appendChild(tli);
firstList[0].appendChild(frli);

console.log("======================================");

let names = ['harshada', 'jayesh', 'kalyani', 'gauri', 'sagar', 'dnyaneshwari']
const nameList = document.getElementsByTagName('ul');

for(const name of names){
    const newli = document.createElement('li');
    newli.textContent=name;

    nameList[1].appendChild(newli);

}


let fruits = ['mango', 'banana', 'apple', 'orange','chickoo']
let dispFruits = [];

fruits.forEach((f)=>{
    const newli = document.createElement('li');
    newli.textContent=f;
    dispFruits.push(newli);
})

for (const element of dispFruits){
    nameList[2];
}

// let fragment = document.createDocumentFragment();  // fragment creates temp storage

// const fruitlist = document.getElementsByTagName('li');

