const redis = require("redis");
require("dotenv").config();
const redisClient = redis.createClient( {   username: 'default',
    password: process.env.redis_pass,
    socket: {
        host: process.env.host,
        port:Number(process.env.port)
    }

}
);
redisClient.on("error", (err) => {
    console.error("Redis Client Error:", err.message);
});


module.exports = redisClient;