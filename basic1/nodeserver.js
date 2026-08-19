const http = require("http");
const app = http.createServer((req,res)=>
{
    console.log("start server");
    res.end("hello world!");

})
app.listen(3000,()=>
{
    console.log("start listening ");
})
// this is sufficent we have only to know how server created in node 
