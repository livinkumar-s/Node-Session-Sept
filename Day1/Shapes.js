let square={
    length:56,
    area: 56*56
}

let rect={
    length:45,
    birth:54,
    area:45*54
}
//  let {length,birth,area}=rect
//  console.log(length);
 

function greet(){
    setTimeout(()=>{
        console.log("Hello");
    },2000)
}



module.exports={
    square,
    rect,
    greet
}