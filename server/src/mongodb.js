const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LogIn")
.then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>{
    console.error("failed to connect",error);
})

const LogInSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{ 
        type:String,
        required:true
    }
})

const collection= new mongoose.model("collection1",LogInSchema)

module.exports=collection
