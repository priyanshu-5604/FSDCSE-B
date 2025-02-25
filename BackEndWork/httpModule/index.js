const http=require('http');
const PORT=2527;
const server=http.createServer((req,res)=>{
    console.log("inside server body");
    res.write("<div style='background:yellow'><h1 style='color:red'>welcome to node server  edited<h1><div>");
    res.end("server closed");
})
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})