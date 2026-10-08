import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import UserRouter from "./route/UserRoute.js"

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB Connected!");
}).catch((err) => {
    console.log(err);
})


const app=express()

app.use(express.json())

app.use("/api/user",UserRouter)


app.listen(3000,()=>{
    console.log("Server is listening on 3000") 
})