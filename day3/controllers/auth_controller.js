
const user = require("../modules/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_pass = process.env.jwt_pass;
async function auth_controller(req,res)
{
    try{
    const user_login = req.body;
    
    const user1 = await user.findOne({
        name:user_login.name
    });
    if(!user1)
        throw new Error("user not exist");

    const valid = bcrypt.compare(user_login.password,user1.password);
if(!valid)
    throw new Error("password doesnt match");
const token =  jwt.sign({name:user1.name,email:user1.email
},jwt_pass,
 { expiresIn: "30m" }
);
res.cookie('token',token);
res.send("login sucessfully");

}
catch(err)
{
    return res.send("error:"+err);

}



}
module.exports = auth_controller;
















