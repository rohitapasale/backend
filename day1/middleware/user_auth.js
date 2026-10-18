
const jwt = require("jsonwebtoken");
const user = require("../modules/user");
const redisClient = require("../config/redis");
require("dotenv").config();
const jwt_pass = process.env.jwt_pass;
async function user_auth(req,res,next)
{
    try{
   const token = req.cookies?.token;
    if(!token)
    {
          return res.send("token is not given");
    }
    const payload =  jwt.verify(token,jwt_pass);
    if(!payload)
    {
       throw new Error("user not validate");
    }
    const result = await user.findOne({email:payload.email});
    if(!result)
    {
        throw new Error("user not exist");
    }



    req.result = result;
    next();

}
catch(err)
{
 res.send("error:"+err);
}

}

module.exports = user_auth;