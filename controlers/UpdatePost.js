const Web = require("../models/Web");

exports.UpdatePost=async(req,res)=>{
    try{
        const id =req.params.id;
        const {Post,Comment,Like}=req.body
        await Web.findByIdAndUpdate({_id:id},
            {Post,Comment,Like}
        );
        res.status(200).json({
            success:true,
            message:"update successfully",
            data:Web
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:err.message,
            success:true,
            data:"server error"
            
        })
    }
}