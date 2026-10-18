const redisClient = require("../config/redis");
async function ratelimiter(req,res,next)
{
    try{
        const ip = req.ip;
    //  const cnt=   await redisClient.incr(ip);
    //     if(cnt==1)
    //     {
    //         await redisClient.expire(ip,1800);
    //     }
    //     if(cnt>=10)
    //         throw new Error("limit exceed");
    //     next();
    await redisClient.expire(ip,0);

    }
    catch(err)
    {
        res.send("erorr:"+err);
    }
    next();
}

module.exports = ratelimiter;