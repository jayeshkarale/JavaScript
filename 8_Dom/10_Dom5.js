const title =document.getElementById('title')
title.style.color='blue';

const newHeading=document.createElement('h1');
newHeading.textContent="hello world";

newHeading.style.color='green';
newHeading.style.backgroundColor='lightblue'

title.before(newHeading);

const newsubheading=document.createElement('h1');
newsubheading.textContent='welcome to webpage';
newsubheading.style.color='orange';
newsubheading.style.backgroundColor='lightgreen'
title.after(newsubheading);

console.log("=====================");

const firstlist=document.getElementsByTagName('ul');

const fli=document.createElement('li');
fli.textContent='html';

const sli=document.createElement('li');
sli.textContent='css'

const js=document.createElement('li');
js.textContent="javascript";

firstlist[0].appendChild(fli);
firstlist[0].appendChild(sli);
firstlist[0].appendChild(js);

let names=['mauli','suraj','raj','saurabh','vaibhav'];
const namelist=document.getElementsByTagName('ul');

for (const name of names) {
    const neli=document.createElement('li');
    neli.textContent=name;

    namelist[1].appendChild(neli);}
    
    console.log("===================");

let fruits=document.createElementByTagName('ul')

let namess=['mauli','suraj','raj','saurabh','jayesh'];

let fregment=document.createDocumentFragment;
const namelistt=document.getElementsByTagName('ul');

for(const name of namess){
    const newli=document.createElement('li');
    newli.textContent=name;
    fregment.appendChild(fregment);

}
newlist[1].appendChild(fregment);
console.log("=============================");

let myh1=document.getElementById("myh");
console.log(my1);
myh1.remove();
