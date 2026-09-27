const redisClient = require("../../config/redis");

async function ratelimiter2(req,res,next)
{
   try{ 
    const key = req.ip ;
    const score = Date.now();
    const window = 60 * 60 * 1000;
    await redisClient.zRemRangeByScore(key,0,score-window);
    const cnt =  await redisClient.zCard(key);
    if(cnt>=60)
        throw new Error("limit reached");
    await redisClient.zAdd(
        key,
        {
            score:score,
            value:`${score}-${Math.random()}`
        }

        
    )


    await redisClient.expire(key,window/1000);
    next();
    }
catch(err)
{
    return res.send("error:"+err.message);
}

}
module.exports = ratelimiter2;