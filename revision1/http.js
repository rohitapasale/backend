const http = require("http");
const app = http.createServer((req,res)=>
{
    console.log("serving reqest ");
    //res.end("hello rohit");
    if(req.method = "GET" && req.url=='/')
    {
        res.end("we are at home page");
    }
    else if(req.method ==  "GET" && req.url == '/login')
    {
        res.end("enter usename and password");
    }
    else
    res.end("hello ji");
})
app.listen(3000,()=>
{
    console.log("at 3000 port");
})