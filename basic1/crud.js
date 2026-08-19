const express = require("express");
const app = express();
app.use(express.json());
const student = [
    {
        id:1,
        name:"rohit",
        marks:90
    },
    {
        id:2,
        name:"vaibhav",
        marks:88
    }
];

// note query paramters are string so check data types before use 
app.get('/student',(req,res)=>
{
    const name = req.query.name ;
    const obj = student.find((std)=>
    {
        return name==std.name;
    })
    const age = req.query.age ;
    console.log(typeof age);
    console.log(req.query);
    res.send(obj);
})
app.get('/student/:id',(req,res)=>
{
    const id = req.params.id ;
    const std = student.find((std)=>
    {
        return std.id == id ;
    })

     
    res.send(std);
   

})

app.post('/student',(req,res)=>
{
    const std = req.body;
    console.log(std);
    student.push(std);
    res.send("done");
})

app.use('/',(req,res)=>
{
    res.send("in home page");
})

app.listen(3000,()=>
{
    console.log("listen at 3000");
})


// we have three options to pass data form req
// 1st => paramas use : dynamic params req.params :
// 2nd => query paramters these are in pairs we pass in url this all wrap in object all are string ?name=rohit&age=20
// 3rd => req body if we not want to show other people info what we are passing then use 