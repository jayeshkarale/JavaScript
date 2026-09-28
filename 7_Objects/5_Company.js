let company = {
  cid: 1001,
  cname: "Cognizant Pvt Ltd",
  location: "Pune",

  address: [
    { city: "pune", area: "hinjewadi" },
    { city: "nagpur", area: "mihan" },
    { city: "mumbai", area: "dadar" }
  ],

  employee: [
    {
      eid: 1,
      ename: "jayesh k",
      salary: 52000,
      branch: "pune"      // which office/address this employee is based at
    },
    {
      eid: 2,
      ename: "harshada s",
      salary: 38000,
      branch: "nagpur"
    }
  ]
};

console.log(company);
console.log(company.employee[0]);
console.log(company.employee[1].salary);

// bonus: look up the employee's actual branch address
let emp = company.employee[1];
let empAddress = company.address.find(a => a.city === emp.branch);
console.log(empAddress); // { city: 'nagpur', area: 'mihan' }