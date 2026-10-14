import jsonwebtoken from "jsonwebtoken"

const authCookie=(req,res,next)=>{
    const token=req.cookies.token; // not parsed yet
    if(!token){
        res.status(400).json({success:false,message:"Please Log in"})
    }

    console.log(token);
    

    try {
        const userData=jsonwebtoken.verify(token,process.env.SECTRET_KEY) //payload
        console.log(userData);
        
        req.user=userData
        next()
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Something went wrong!"})
    }
}

export default authCookie;