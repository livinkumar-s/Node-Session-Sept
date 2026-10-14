import mongoose from "mongoose"


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    }
}, {
    timestamps: true
})

const Post = mongoose.model("Post", PostSchema)

export default Post