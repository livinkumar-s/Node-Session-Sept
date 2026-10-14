import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import UserRouter from "./route/UserRoute.js"
import PostRouter from "./route/PostRoute.js"
import cookieParser from "cookie-parser"

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB Connected!");
}).catch((err) => {
    console.log(err);
})


const app=express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/user",UserRouter)
app.use("/api/post",PostRouter)


app.listen(3000,()=>{
    console.log("Server is listening on 3000") 
})