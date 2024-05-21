const Web=require("../models/Web");

exports.DeletePost=async(req,res)=>{
    try{
        const id = req.params.id;
        await Web.findByIdAndDelete({_id:id});
        res.json({
            success:true,
            message:"data deleted",
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message,
            data:"server error"
        })
    }
}