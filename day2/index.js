const express = require("express");
const app = express();
const main  = require("./db_connection")
const student = require("./modules/student");
const bcrypt =require("bcrypt");


app.use(express.json());
app.get("/student",async(req,res)=>
{
    try{
    const result = await student.find();
    res.send(result);
    }
    catch(err)
    {
        res.send(err.message);
    }
})

app.get("/student/:name",async(req,res)=>
{
    try{
    const name = req.params.name;
    const result = await student.find(
        {
            name:name
        }
    );
    res.send(result);
}
catch(err)
{
    res.send(err.message);
}
})
app.post("/student",async(req,res)=>
{
    try{
    const std = req.body;
    const pass = std.password;
    const salt = await bcrypt.genSalt(8);
    const passhash = await bcrypt.hash(pass,salt);
    std.password = passhash;
    await student.create(std);
    res.send("response send");
    }
    catch(err)
    {
        res.send("error"+ err.message);
    }
})
app.patch("/student/:name",async(req,res)=>
{
    try{
    const name = req.params.name ;
    await student.updateMany(
        {
            name:name
        },
        req.body

    );
    res.send("update saved");
} 
catch(err)
{
    res.send(err.message);
}
})
app.post("/student/login",async(req,res)=>
{
    try{
    const name = req.body.name;
    const pass = req.body.password;
    const data =  await student.findOne(
        {
            name:name
        }
    );
    const hashpass =data.password;
    const valid = await bcrypt.compare(pass,hashpass);
    if(!valid)
        res.send("error wrong pass or name");
    else
        res.send("login sucessfully");
} 
catch(err)
{
    res.send(err.message);
}
})



main().then(async ()=>
{

    app.listen(3000,()=>
    {
        console.log("listening at 3000");
    })
})
