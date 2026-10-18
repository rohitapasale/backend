const redisClient = require("../config/redis");


async function ratelimiter(req,res,next) {
try{
    const ip = req.ip;
    const time = Date.now()-600;
    const limit = 10;
    await redisClient.zRemRangeByScore(ip,0,time);
    const cnt = await redisClient.zCard(ip);
    if(cnt>=10)
    {
 throw new Error("limit exced");
    }
    await redisClient.zAdd(ip,{
        score:Date.now(),
        value: `${Date.now()}-${Math.random()}`
    })
   await redisClient.expire(ip, 600);
   next();
}
catch(err)
{
    res.send("error:"+err);
}
    
}