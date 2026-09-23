const express = require("express");
const main = require("./db_connection");
const bcrypt = require("bcrypt");
const user = require("./modules/user");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')
const user_auth = require("./middleware/user_auth");
const db_auth = require("./utilis/db_auth");
const app = express();
app.use(cookieParser());
app.use(express.json());
const authrouter = require("./routes/auth");
const user_route = require("./routes/user");




app.use("/auth",authrouter);
app.use("/user",user_route);


main().then(()=>
{
    app.listen(3000,()=>
    {
        console.log("listening at 3000");
    })
})


