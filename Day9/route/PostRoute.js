import express from "express"
import {craetePost,deletePost,updatePost} from "../controllers/PostController.js"
import authCookie from "../middleware/authMiddleware.js"

const Router=express.Router()

Router.post("/create",authCookie,craetePost)
Router.put("/update/:id",authCookie,updatePost)
Router.delete("/delete/:id",authCookie,deletePost)

//req.user

export default Router