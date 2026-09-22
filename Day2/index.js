// function greet(){ //Declaration
//     console.log("Hello");
//     console.log("Hi");
//     console.log("Welcome");
// }

// const greet = ()=>{ //Expression
//     console.log("Hello");
//     console.log("Hi");
//     console.log("Welcome");
// }

// ()=>{ //Arrow Function
//     console.log("Hello");
//     console.log(1+3);
// }

// greet()



// function add(a,b){
//     console.log(a+b);   
// }

// let num1=56
// let num2=65

// add(num1,num2)

// function outer(a,b){
//     b(a)
// }

// function inner(){
//     console.log("Hey there...!");
// }

// outer("Naveen",(n1)=>{
//     console.log("Hey there...!", "I am", n1);
// })


const fs = require("fs")

fs.readFile("./text1.txt","utf-8",(err,data)=>{
    if(err){
        return console.log(err);
    }
    console.log(data);
})

// fs.readFile("./text.txt",{encoding:"utf-8"}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

async function readingFile(){
    try{
        const data=await fs.readFile("./text.txt",{encoding:"utf-8"})
        console.log(data);
        
    }
    catch(err){
        console.log(err);
    }
}

readingFile()

// console.log(1);
// console.log(2);


// setTimeout(()=>{
//     console.log(123);
// },3000)

// fs.writeFile("text1.txt","Hello","utf-8",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// function getUserDetail(cb) {
//     setTimeout(() => {
//         console.log("User data Retrived");
//         cb()
//     }, 1000)
// }

// function getUserPost(cb) {
//     setTimeout(() => {
//         console.log("User Post Retrived");
//         cb()
//     }, 2000)
// }

// function getPostDetail(cb) {
//     setTimeout(() => {
//         console.log("Post Details Retrived");
//         cb()
//     }, 500)
// }

// getUserDetail(
//     () => {
//         getUserPost(() => {
//             getPostDetail(() => {
//                 console.log("Done");
//             })
//         })
//     }
// )
// getUserPost()
// getPostDetail()