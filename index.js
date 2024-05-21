const express=require("express");
const app=express();
require("dotenv").config();
const PORT = process.env.PORT
app.use(express.json());

const todoRoutes=require("./routes/WebRouter");

// mount todo api route
app.use("/",todoRoutes)

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})



// connect db
const dbconnect=require("./config/Database");
dbconnect();

// default route
app.get("/",(req,res)=>{
    res.send("<h1> this is home page body");
})