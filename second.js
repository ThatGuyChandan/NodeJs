/* const os=require("os");
console.log(os.freemem());
console.log(os.hostname());
console.log(os.totalmem() );   
*/
//port=80 is default
const fs=require("fs");
const http=require("http");
const port=4000;
const hostname="localhost";
const home= fs.readFileSync("./index.html","utf-8");
//console.log(__dirname);
//console.log(__filename);


const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        return response.end(home);
    }
    else{
        return response.end("4040 page not found");
    }

});
server.listen(port,hostname,()=>{
console.log(`server is working on http://${hostname}:${port}`);
});
