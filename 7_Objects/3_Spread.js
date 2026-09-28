let student={
    sid:1001,
    sname:"Jayesh Karale",
    rollno:26,
}
console.log(student);
console.log("========================================");

let address={
    area:"Sai Nagar",
    city:"Shegaon"
}
console.log(address);
console.log("========================================");

let studentdetails={   // ... spread is used to cpy the object.
    ...student,
    ...address
}
console.log(studentdetails);