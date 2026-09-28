// Objects in JS

// 1t Way to Create Object
let student={
    sid:1001,
    sname:"Jayesh Karale",
    rollno:26
}

console.log(student);
console.log(student.sname);  // by value
console.log(student["rollno"]);  // by key

// 2nd Way to Create Object 
let employee= new Object();
employee.eid=1;
employee.name="Harshada";
employee.salary=38000;

console.log(employee);
console.log(employee.name);
console.log(employee["salary"]);


