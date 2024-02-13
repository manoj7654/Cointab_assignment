// importing express for creating postRouter
const express=require("express");
const postRouter=express.Router();

// importing ,fetchData,addData from controller
const {addPost} = require("../controller/postController");


// fetching ALL data 
postRouter.get("/fetchPost",addPost)

// fetching single data and storing database
// postRouter.get("/create",addData)





// exporting postRouter
module.exports={postRouter}