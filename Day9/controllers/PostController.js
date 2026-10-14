import Post from "../models/Post.js"

export const craetePost = async (req,res)=>{
    try {
        const body=req.body
        await Post.create({title:body.title,content:body.content,userId:req.user._id})
        res.status(200).json({success:true, message:"Post Created!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong!"})
    }
}
export const updatePost = async (req,res)=>{
    try {
        req.user._id
        const postId=req.pramas._id//post data --> userId
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong!"})
    }
}
export const deletePost = async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong!"})
    }
}
