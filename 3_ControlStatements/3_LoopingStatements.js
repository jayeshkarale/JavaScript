// Looping Statements.

// for
for(let i=1; i<=10; i++){
    console.log("i=> ",i);
}

// while
let j=14;
while(j<=20){
    console.log("j=> ",j);
    j++;
}

// do while
let k=26;
do{
    console.log(k);
    k++;
} while(k<=35);

// for-of
course="JavaScript";
for(let l of course){
    console.log(l);
}

// for-in
let student={
    sname:"jayesh",
    rollno:35,
    marks:70,
    result:"pass",
}

console.log(`rollno: ${student.rollno}`); // to print single key and value

for(let key in student){   // for-in access key
    console.log(key,student[key]);
}