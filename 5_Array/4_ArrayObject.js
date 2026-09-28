let products=[
    {
        Prodid:1,
        Prodname:"Pen",
        price: 10,
        qty:16
    },

    {
        Prodid:2,
        Prodname:"Pencil",
        price: 15,
        qty:52
    },

    {
        Prodid:3,
        Prodname:"Marker",
        price: 20,
        qty:140
    },

    {
        Prodid:4,
        Prodname:"Sketch Pen",
        price: 45,
        qty:95
    },
]

console.log(products);
console.log("================================================================");

// for each
products.forEach((n)=>console.log(n))
console.log("================================================================");

products.forEach((n)=>console.log(n.Prodname))
console.log("================================================================");

// filter
products.filter((products)=>products.price>15).forEach((products)=>console.log(products))
console.log("================================================================");

// map
products.map((products)=>products.qty+15).forEach((products)=>console.log(products))
console.log("================================================================");

// find
let finalprod = products.find((products)=>products.Prodid==3);
console.log(finalprod);
console.log("================================================================");

// reduce
let totalprice=products.reduce((total,products)=>
{
    return total+products.price
},0)
console.log("Total Price = ",totalprice);
