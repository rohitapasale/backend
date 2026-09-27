const express = require("express");
const app = express();
const main = require("./db_connection");
const bcrypt =  require("bcrypt");
const student = require("./modules/student");
const jwt = require("jsonwebtoken");
const db_auth = require("./utillis/db_auth");
const user_auth = require("./middleware/user_auth");
const cookieParser = require("cookie-parser");
const redisClient = require("../config/redis")
const ratelimiter = require("./middleware/ratelimiter")
app.use(express.json());
app.use(cookieParser());

app.use(ratelimiter);

app.post("/auth/signup",db_auth,async (req,res)=>
{
   // db_auth(req,res);
    const std = req.body;
    std.password =  await bcrypt.hash(std.password,8);
    await student.create(std);

    res.send("done")

})
app.post("/auth/logout", user_auth,async(req,res)=>
{

    const {token}=req.cookies ;
    redisClient.set(`token:${token}`,"blocked");
    redisClient.expireAt(`token:${token}`,1800);



    res.cookie("token",null,{expires:new Date(Date.now())});
    res.send("logout suceesfully")

})
app.post("/auth/login",async (req,res)=>
{
    try{
    const name = req.body.name;
    const password = req.body.password;
    const std = await student.findOne({name:name});
    const valid = await bcrypt.compare(password,std.password);
    if(!valid)
    {
       return  res.send("passsword or username is wrong");
    }
    const token =   jwt.sign({name:name},"pass@123",{
        expiresIn:1800
    });
    res.cookie("token",token);
    res.send("login sucessfully");

}
catch(err)
{
    res.send("error:"+err.message);

}
    

})


app.get("/student_info" ,user_auth,async(req,res)=>
{
res.send(req.result);
})


main().then(async ()=>
{
    await redisClient.connect();
    console.log("redis connected:");


    app.listen(3000,()=>
    {
        console.log("listening at 3000");
    })
})


