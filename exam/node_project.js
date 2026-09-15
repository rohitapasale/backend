const http = require("http");
const app = http.createServer((req,res)=>
{
    console.log("listeninng server");
    res.end("hello world");

})

app.listen(3000,()=>
{
    console.log("done");
})