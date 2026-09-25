const express=require("express")

const app=express()

let contacts=[
    {name:"ken",phone:9988776655}
]
//database (MongoDB)

app.use(express.json()) // it is middleware that handles json body
//parsed

app.get("/api/contact",(req,res)=>{
    res.status(201).json(contacts)
})

app.post("/api/contact",(req,res)=>{
    const contact=req.body //undefined
    console.log(contact);    
    contacts.push(contact)
    res.status(200).json({
        success:true,
        message:"contact added successfully...!"
    })
})

app.delete("/api/contact/:name",(req,res)=>{
    const n=req.params.name 
    console.log(n);
    
    contacts=contacts.filter((val,ind)=>{
        return val.name!==n.trim()
    })
    res.status(201).json({
        success:true,
        message:"contact deleted successfully...!"
    })
})

app.listen(3333,()=>{
    console.log("App is listening on 3333!");
})