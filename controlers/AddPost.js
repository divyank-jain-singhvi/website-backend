const Web=require("../models/Web");

exports.AddPost=async(req,res)=>{
    try{
        const {Post,Comment,Like}=req.body;
        const response=await Web.create({Post,Comment,Like});
        res.status(200).json({
            success:true,
            data:response,
            message:"data stored successfully"
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        });
    }
}