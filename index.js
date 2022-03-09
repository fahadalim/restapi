const express= require("express")

const app = express();

app.get("/books",allBooks,function(req,res){
    res.send ("Fetching all books");
});

app.get("/book/:name",singlebook,function(req,res){
    return res.send({BookName:req.name})
})

function singlebook(req,res,next){
    req.name=req.params.name
    console.log(req)
    next()
}

function allBooks(req,res,next){
    next()
}

app.listen(5001,()=>{
    console.log("listning")
})