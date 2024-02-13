// importing express for creating userRouter
const express=require("express");
const userRouter=express.Router();

// importing ,fetchData,addData from controller
const {fetchData,addData} = require("../controller/userController");


// fetching ALL data 
userRouter.get("/fetchData",fetchData)

// fetching single data and storing database
userRouter.get("/create",addData)





// exporting userRouter
module.exports={userRouter}