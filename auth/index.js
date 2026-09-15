const express = require("express");
const app = express();
const main = require("./database");
const mongoose = require("mongoose");
const student = require("./student");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());
main().then(()=>    {


     app.use("/home",(req,res)=>
    {
        res.send("you are at home page");
    })
   
    app.post('/register', async (req,res)=>
    {
        try{
            const std = req.body ;
         std.password = await   bcrypt.hash(std.password,10);
       await   student.create(std);
      
        res.send("done data sumbited for i card");
        }
        catch(err)
        {
            console.log(err.message);
            res.send(err.message)
        }

    }) 
    app.post('/login', async (req,res)=>
    {
        try{
        const {name,password} = req.body ;
        const std = await student.findOne({name});
        const isvalid =  await bcrypt.compare(password,std.password);
        if(isvalid)
        {
            const token = jwt.sign({"name":name},"rohit@12");
            res.cookie("token",token);
            res.send("login sucessuflly");
           
        }
        else
        {
            res.send("wrong info");

        }
    }
    catch(err)
    {
        console.log(err.message);
        res.send(err.message);
    }
    })
    app.get("/info",async (req,res)=>
    {
        try{
            const token = req.cookies.token ;
            const valid = jwt.verify(token,"rohit@12");
            const result= await student.find();
            res.send(result);

        

        }
        catch(err)
        {
            console.log(err.message);
            res.send(err.message);
        }
    })
 


    

    app.listen(3000,()=>
    {
        console.log("listen at 3000 port");
    })
})