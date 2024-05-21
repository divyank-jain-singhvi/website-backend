const mongoose=require("mongoose")
require("dotenv").config();
const Database=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("connection successful");
    })
    .catch((error)=>{
        console.log("error")
    })
}
module.exports=Database;