// const item=["apple","grapes","mango","lemon","apple"]
// console.log(item.indexOf("mango"));
// console.log(item.lastIndexOf("apple"));
// console.log((item.indexOf("red")!== -1));
// console.log(item.includes("orange"));

// Reference Array
const stud=[
    { SNo:1, Mark:550 , Name:"Gokul" , Location:"Namakkal" },
    { SNo:2, Mark:600 , Name:"Raj" , Location:"Coimbatore" },
    { SNo:3, Mark:523 , Name:"Mani" , Location:"Salem" },
    { SNo:4, Mark:450 , Name:"Velu" , Location:"Chennai" },
]

let result = stud.findIndex(function(stud){
    return stud.Name === "Raj"
})
console.log(result)
