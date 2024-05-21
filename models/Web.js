const mongoose=require("mongoose")

const Webdata= new mongoose.Schema({
    Post:{
        type:String,
        require:true,
        maxLength:200
    },
    Comment:{
        type:String,
        require:true,
        maxLength:200
    },
    Like:{
        type:String,
        require:true,
        maxLength:4
    }
})

module.exports=mongoose.model("Web",Webdata);