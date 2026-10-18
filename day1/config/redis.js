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


module.exports = redisClient;