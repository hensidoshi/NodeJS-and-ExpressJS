const express=require('express');
const app = express()
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
function midleware(req,res,next){
    const{flag}=req.body;
    if(flag!="12345")
    {
        res.json({Number:"data is not valid"});
    }
    else{
        next();
    }

}
var data=[
    {id:1,name:"darshan"},
    {id:2,name:"university"}
]


app.post("/",midleware,(req,res)=>{
    console.log("post method");
    res.json(data);
})


app.listen(3000,()=>{
    console.log("Server started");
})