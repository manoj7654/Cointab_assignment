// importing express for creating app
const express=require("express")
const app=express();

// importing connection for making server 
const {connection}=require("./config/db");
const { userRouter } = require("./routes/userRouter");

// importing dotenv for accessing data from .env file
require("dotenv").config()

// importing cors
const cors=require("cors");
const { postRouter } = require("./routes/postRouter");
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home page of this api")
})

app.use("/users",userRouter)
app.use("/post",postRouter)


// running server on specific port no and connection to database
app.listen(process.env.port,async()=>{
    try {
        console.log(`Server is listening on port no ${process.env.port}`)
    } catch (error) {
        console.log("Getting Error while running server")
    }
  
})