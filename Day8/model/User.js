import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mailId: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)

export default User