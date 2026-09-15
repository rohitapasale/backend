const express = require("express");
const app = express();



app.use("/home",(req,res)=>
{
    console.log("at home page");
    res.send("at home page");

})
app.get("/student",(req,res)=>
{
    res.send("this is student data");
})
app.post("/student",(req,res)=>
{
    res.send("data is posted");
})

app.listen(3000,()=>
{
    console.log("listening at 3000");
})