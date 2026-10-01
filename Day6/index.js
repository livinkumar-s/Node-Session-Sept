const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("MongoDB Connected...!");
}).catch((err) => {
    console.log(err);
})


const app = express()

app.use(express.json())


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    id: mongoose.Schema.Types.ObjectId
})

const User = mongoose.model("User", userSchema)


app.get("/api/user", async (req, res) => {

    try {
        const response = await User.find()
        res.status(201).json({
            data: response
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong...!"
        })
    }

})

app.post("/api/user",async (req, res) => {

    const b=req.body

    try {
        await User.create(b)
        res.status(201).json({message:"Data Created!"})

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong...!"
        })
    }
})

app.get("/api/user/:uId", async (req, res) => {

    const id=req.params.uId

    try {
        const data=await User.findById(id)
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong...!"
        })
    }
})


app.put("/api/user/:uId",async (req, res) => {
    const b=req.body 
    const id=req.params.uId
    try {

        await User.findByIdAndUpdate(id,b)
        res.status(200).json({
            message:"Data is updated!"
        })

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong...!"
        })
    }

})

//delete handler

//findByIdAndDelete


app.listen(3000, () => {
    console.log("Server is listening on 3000!");
})