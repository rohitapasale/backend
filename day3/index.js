const express = require("express");
const app = express();
const main = require("../day3/config/db_connection.js");
const auth_route = require("./routes/auth.js");
const user_route = require("./routes/user_route.js");
const cookieParser = require("cookie-parser");
const redisClient = require("./config/redis.js");
const ratelimiter = require("./middleware/ratelimiter.js")
app.use(express.json());
app.use(cookieParser());
app.use(ratelimiter);
app.use('/user/auth',auth_route);
app.use('/user',user_route);




async function intilize()
{
    await redisClient.connect();
    console.log("redis connected");
    await main();
    console.log("db connected");
    app.listen(3000,()=>
    {
        console.log("listening at 3000");
    })
}
intilize();