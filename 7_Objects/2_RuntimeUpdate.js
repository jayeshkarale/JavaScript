// Runtime Methods of Object.

let student={
    sid:1001,
    sname:"Jayesh Karale",
    rollno:26,

    greet: function(){
        console.log("Good Morning...! My name is: ",this.sname);
        
    }
}

console.log(student);
console.log(student.sname);
console.log(student["rollno"]);

// runtime update
student.city="Shegaon";  // to add key & value
console.log(student);

delete student.rollno;  // to delete key & value
console.log(student);

student.greet();  // to call function