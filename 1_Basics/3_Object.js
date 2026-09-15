// 2. Non-Primitive Datatype- Object
let student={
    name: "Jayesh",
    rollno:2001,
    city:'Shegaon'
}

console.log(student);
console.log(student.city);
console.log(student.name);
console.log(student['rollno']);

student.course='java';
console.log(student);
delete student.rollno
console.log(student);

console.log(typeof student);
