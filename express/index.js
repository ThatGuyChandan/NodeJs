const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const app=express();
const port=4000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
  /*  res.json({
        username:"chandan",
        passwoed:"xyzsj",
    }); */
});

app.post("/api/v1/register",(req,res)=>{
    const userName=req.body.username;
    const password=req.body.password;
    res.json({
        success:true,
        username:userName,
        password: password,
    });
}); 
app.listen(port,()=>{
    console.log(`it is working: ${port}`);
});