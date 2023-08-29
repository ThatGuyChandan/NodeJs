const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/sample").then(()=>{
    console.log("connection successfully")
}).catch((err)=>{
   console.log(err)
})

const student= new mongoose.Schema({
    name:String,
    age:Number,
    height:Number
})
const Student =new mongoose.model("Student",student);
const adder=async()=>{
   /* const ss= await Student.create({
        name:"ashBorn",
        age :20,
        height: 5.4

    }); */
    const ss=await Student.find();
    console.log(ss);
}
adder();