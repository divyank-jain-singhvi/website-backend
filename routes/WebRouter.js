const express=require("express");
const router =express.Router();

const {AddPost}=require("../controlers/AddPost")
const {DeletePost}=require("../controlers/DeletePost")
const {UpdatePost}=require("../controlers/UpdatePost")
const {GetPost,GetPostById}=require("../controlers/GetPost")

router.post("/addpost",AddPost);
router.delete("/deletepost/:id",DeletePost);
router.put("/updatepost/:id",UpdatePost);
router.get("/getpost",GetPost);
router.get("/getpostbyid/:id",GetPostById);

module.exports=router;