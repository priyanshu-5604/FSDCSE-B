const fs=require('fs').promise;
const http=require('http');
const PORT=2527;
const server=http.createServer(async(request,response)=>{
    try{
    response.setHeader('Content-Type','text/html');
    response.write("Welcome to Http and FS module");
        const data = await fs.readFile('student.json',{encoding:'utf-8'});
    response.end(data);
    }catch(err){
        console.log("Error while reading file"+err);
    }
})
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})