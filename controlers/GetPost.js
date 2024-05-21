const Web=require("../models/Web");

exports.GetPost=async(req,res)=>{
    try{
        const webData=await Web.find({});
        res.status(200).json({
            success:true,
            message:"fetched successfully",
            data:webData
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"server error",
            message:err.message
        })
    }
}

exports.GetPostById=async(req,res)=>{
    try{
        const id=req.params.id;
        const webData=await Web.find({_id:id});
        res.status(200).json({
            success:true,
            message:"fetched successfully",
            data:webData
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"server error",
            message:err.message
        })
    }
}