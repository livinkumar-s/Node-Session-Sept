import express from "express"
import {addUser,deleteUser,getAllUser,getOneUser,updateUser} from "../controllers/userController.js"

const Router=express.Router()

Router.post("/",addUser)
Router.get("/",getAllUser)
Router.get("/:id",getOneUser)
Router.put("/:id",updateUser)
Router.delete("/:id",deleteUser)

export default Router;