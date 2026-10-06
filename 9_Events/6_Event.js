let myip = document.getElementById('ip1');
let myh2 = document.getElementById('h2');
let mydiv = document.getElementById('div1');

myip.addEventListener('input', (e) => {
    let text1 = e.target.value;
    console.log(text1);

    if (text1.length < 8) {
        myh2.textContent = "minimum 8 characters required.";
        myh2.style.color = "red";
        myh2.style.fontFamily = "calibri";
    } else {
        myh2.textContent = "text is: " + text1;
        myh2.style.color = "green";
    }
});

mydiv.addEventListener('mouseover', () => {
    mydiv.style.backgroundColor = 'yellowgreen';
    mydiv.style.display='flex';
    mydiv.style.alignItems='center';
    mydiv.style.justifyContent='center';
    mydiv.style.color='white';
});

mydiv.addEventListener('mouseleave', () => {
    mydiv.style.backgroundColor = 'maroon';
    mydiv.style.display='';
    mydiv.style.alignItems='';
    mydiv.style.justifyContent='';
});