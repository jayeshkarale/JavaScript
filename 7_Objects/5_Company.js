let company={
    cid:1001,
    location:"pune",
    
    employee:[
        {
        eid: 1,
        ename:"jayesh k",
        salary:52000,
        company:{
            cname:  "TCS Ltd",
            address:[
                {
                    city: 'pune',
                    area:'hinjewadi'
                }
            ]
        }
    },

    {
        eid: 2,
        ename:"jagdish",
        salary:52000,
        company: "TCS Ltd"
    },

    {
        eid: 3,
        ename:"jagdish",
        salary:52000,
        company: "TCS Ltd"
    }
    ]

}

console.log(company);
console.log(company.employee[0]);
console.log(company.employee[2].salary);

