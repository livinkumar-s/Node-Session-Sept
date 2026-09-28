const express = require("express")

const app = express()

app.use(express.json())

let userDetails = [
    { id: 1, name: "Leo", age: 23 }
]


app.get("/api/user", (req, res) => {
    res.status(200).json({
        success: true,
        data: userDetails
    })
})

app.post("/api/user", (req, res) => {
    const b = req.body
    userDetails.push({ id: userDetails.length + 1, ...b })
    res.status(200).json({
        success: true,
        message: "User data added"
    })
})

app.get("/api/user/:uId", (req, res) => {
    const id = req.params.uId
    const userData = userDetails.find((d, ind) => {
        return d.id == id
    })

    if (userData) {
        res.status(200).json({
            success: true,
            data: userData
        })
    } else {
        res.status(400).json({
            success: false,
            message: "No such user...!"
        })
    }
})


app.put("/api/user/:uId",(req,res)=>{
    const b=req.body 
    const id=req.params.uId

    const userData = userDetails.find((d, ind) => {
        return d.id == id
    })

    if (!userData) {
         return res.status(400).json({
            success: false,
            message: "No such user...!"
        })
    }


    userDetails=userDetails.map((d,ind)=>{
        if(d.id==id){
            return {id:d.id,...b}
        }
        return d
    })

    res.status(200).json({
        success:true,
        message:"Updated"
    })

})

//delete handler



app.listen(3000, () => {
    console.log("Server is listening on 3000!");
})