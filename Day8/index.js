import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./router/userRouter.js"
import postRouter from "./router/postRouter.js"

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB Connected!");
}).catch((err) => {
    console.log(err);
})

const app = express()

app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/post",postRouter)


app.listen(3000, () => {
    console.log("Listening...!");
})