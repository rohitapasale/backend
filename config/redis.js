const  redis = require("redis");
const redisClient = redis.createClient(
    {
            username: 'default',
    password: 'mHNy2W4kBTbZYdeUZGfwHkDA1fr8FdM9',
    socket: {
        host: 'income-magic-violet-59673.db.redis.io',
        port: 18401
    }

    }
);





module.exports = redisClient ;