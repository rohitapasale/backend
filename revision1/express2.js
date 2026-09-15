const express = require("express");
const app = express();

let  student = [];

app.use(express.json());
app.post("/student/:id",(req,res)=>
{
    const id = req.params.id ;
    const std = req.body;
    std.id = id ;
    student.push(std);
    res.send("student info uploaded sucessfully");

})
app.get("/student",(req,res)=>
{
    res.send(student);

})
app.get("/student/:id",(req,res)=>
{
    const id = req.params.id;
    const std = student.find((std) =>std.id==id);
    res.send(std);
})
app.delete("/student/:id",(req,res)=>
{
    const id = req.params.id ;
     student = student.filter(std => std.id !=id);


    res.send(`delete successfully`);
})

app.listen(3000,()=>
{
    console.log("we are at 3000 port");
})