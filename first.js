const fs=require("fs");
// reading a file
fs.readFile("./hello.txt","utf-8",(err,data) =>{
    if(err){
        return err;
    }
    else{
        console.log(data);
    }
});
// creating a file
const a="YOLO";
fs.writeFile("sample2.txt",a,()=>{
    console.log("file created");
})