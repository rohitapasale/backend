const jwt = require("jsonwebtoken");
const user = require("../modules/user");
const redisClient = require("../../config/redis");
async function user_auth(req,res,next)
{
    
    try{
      const payload = jwt.verify(req.cookies.token,"pass@123");
      const exist = redisClient.exist(`token:${req.cookies.token}`);
      if(exist)
      {
        throw new Error("logout device");
      }
        const username = payload.username ;
        req.username = username;
        const result = await user.findOne(
            {
                username:username
            }
        );
        if(!result)
        {
            return res.send("user not found");
        }
        req.result = result ;
        next();}
        catch(err)
        {
            res.send("erros:"+ err.message);
        }


}
module.exports = user_auth;