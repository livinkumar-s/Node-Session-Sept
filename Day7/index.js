import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express()
mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB Connected..!");
}).catch((err) => {
    console.log(err);
})

// User --> name, age, mailId, isMarried
// Schema --> Model(Collection)

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        trim: true,
        // lowercase:true,
        // uppercase:true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 99
    },
    mailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    isMarried: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)


// User.create({name:"    Leo      ",age:23,mailId:"livinkumar@thestackly.com"}).then(()=>{
//     console.log("Data added");
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([{ name: "Naveen", age: 23, mailId: "nav@thestackly.com" }, { name: "Kamal", age: 23, mailId: "kamal@thestackly.com", isMarried: true }]).then(() => {
//     console.log("Data Added");

// }).catch((err) => {
//     console.log(err);
// })


// User.find({name:"Leo"}).then((data)=>{
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// User.findOne().then((data)=>{
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// User.findById("6ac36b24ff3e5a684442bcfa").then((data)=>{
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// User.findByIdAndUpdate("6ac36a7fad42da0164e88e95", {
//     "name": "Leo",
// }).then(() => {
//     console.log("Rec updated");
// }).catch((err) => {
//     console.log(err);
// })

// User.findOneAndUpdate({age:23}, {
//     age:22
// }).then(() => {
//     console.log("Rec updated");
// }).catch((err) => {
//     console.log(err);
// })

// User.updateMany({isMarried:false}, {
//     age:23
// }).then(() => {
//     console.log("Rec updated");
// }).catch((err) => {
//     console.log(err);
// })

// User.findOneAndDelete({isMarried:false}).then(() => {
//     console.log("Rec updated");
// }).catch((err) => {
//     console.log(err);
// })

User.deleteMany({isMarried:false}).then(() => {
    console.log("Rec updated");
}).catch((err) => {
    console.log(err);
})


app.listen(3333, () => {
    console.log("Listening on 3333");
})