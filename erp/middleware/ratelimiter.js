const redisClient = require("../../config/redis");

async function ratelimiter(req,res,next)
{
    try{
const cnt = await  redisClient.incr(req.ip);
if(cnt>=6)
{
   throw new Error("limit reached");
}
if(cnt==1)
{
    redisClient.expire(req.ip,3600);
}
next();

    }
    catch(err)
    {
        res.send("error"+ err.message);
    }


}
module.exports = ratelimiter;