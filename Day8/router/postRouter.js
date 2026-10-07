import express from "express"
import {createpost,getAllPost,postById,postByUserId} from "../controllers/postController.js"

const Router=express.Router()

Router.post("/",createpost)
Router.get("/",getAllPost)
Router.get("/:id",postById)
Router.get("/user/:userId",postByUserId)

export default Router;