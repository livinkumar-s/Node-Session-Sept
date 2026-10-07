import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("DB Connected..!");
}).catch((err) => {
    console.log(err);
})

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

// User.insertMany([{ name: "ken", age: 22, mailId: "ken@gmailo.com", isMarried: true }, { name: "ben", age: 20, mailId: "ben@gmail.com", isMarried: false }, { name: "quen", age: 18, mailId: "Q@gmail.com", isMarried: false }, { name: "naveen", age: 23, mailId: "nav@gmail.com", isMarried: true }, { name: "leo", age: 23, mailId: "leo@gmail.com", isMarried: false }]).then(() => {
//     console.log("Data Added!")

// }).catch((err) => {
//     console.log(err);
// })

// User.find({isMarried:true}).then((d)=>{
//     console.log(d);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age:{$gt:20}}).then((d)=>{
//     console.log(d);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age:{$lt:20}}).then((d)=>{
//     console.log(d);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age:{$lte:18}}).then((d)=>{
//     console.log(d);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({age:{$ne:18}}).then((d)=>{
//     console.log(d);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({$and:[{age:{$nin:[34,43,18,23]}},{isMarried:false}]}).then((d)=>{
//     console.log(d);
// }).catch((err)=>{
//     console.log(err);
// })

// User.find({name:{$regex:"k",$options:'i'}}).then((d)=>{
//     console.log(d);
// }).catch((err)=>{
//     console.log(err);
// })