const express = require("express");
const auth_route = express.Router();
const validateuser = require("../middleware/validateuser");
const register_user = require("../controllers/registeruser");
const auth_controller = require("../controllers/auth_controller");
const user_auth = require("../middleware/user_auth");
const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
require("dotenv").config();
const jwt_pass = process.env.jwt_pass;

auth_route.post('/signup', validateuser,async(req,res)=>
{

    register_user(req,res);
    //res.send("user register sucessfully");
  

})
auth_route.post('/login',validateuser,async(req,res)=>
{
    auth_controller(req,res);
    
})
auth_route.post('/logout',user_auth,async(req,res)=>
{
    const token = req.cookies.token;
    const payload = jwt.decode(token);


      await redisClient.set(`token:${token}`,"blocked");
      await redisClient.expireAt(`token:${token}`,payload.exp);

   res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true
});



res.send("Logged out successfully")
})





module.exports = auth_route;