
const express = require('express');
const authrouter = express.Router();
const bcrypt = require("bcrypt");
const user = require("../modules/user");
const jwt = require("jsonwebtoken");
const db_auth = require("../utilis/db_auth")
const user_auth = require("../middleware/user_auth");
const redisClient = require("../../config/redis")
authrouter.post("/signup",db_auth,async (req,res)=>
{
    try{
    const user_data = req.body ;
    const pass = user_data.password ;
    const hashpass = await bcrypt.hash(pass,8);
    user_data.password = hashpass ;
    await user.create(user_data);
    //const 
    res.send("data saved");
  }
  catch(err)
  {
    res.send(err.message);
  }


})

authrouter.post("/login",async(req,res)=>
{
    try
    {
        // check pass and  then 
        const username = req.body.username ;
        const password = req.body.password ;
        const user1 = await user.findOne(
            {
                username:username
            }
        );
        if(!user1){
            throw new Error("user not exist");
             return ;
        }
        const valid = await bcrypt.compare(password,user1.password);
        if(!valid)
        {
            throw new Error("pass or username not exist");
            return ;
        }
        const token = jwt.sign({"username":username},"pass@123");
        res.cookie("token",token);
        res.send("login sucessfully");
    }
    catch(err)
    {
        res.send(err.message);

    }

})
authrouter.post("/logout",  user_auth,async (req,res)=>
{
    try{
        const {token} = req.cookies;
        const payload = jwt.decode(token);
        await redisClient.set(`token:${token}`,"blocked");
        await redisClient.expireAt(`token:${token}`,payload.exp);
        res.cookies("token",null,{expires:new Date(Date.now())});
        res.send("done sucessfully logout")



    
    }
    catch(err)
    {
        res.send(err.message);
    }
})
module.exports = authrouter ;