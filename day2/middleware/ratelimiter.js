const redisClient = require("../config/redis");

async function ratelimiter(req,res,next)
{
    const ip = req.ip;
    const cnt = await redisClient.incr(ip);
    if(cnt==1)
    {
        redisClient.expire(ip,1800);
    }
    if(cnt>=6)
    {
      return   res.send("limit exceed");

    }
    next();
}

module.exports = ratelimiter;