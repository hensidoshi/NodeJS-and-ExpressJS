const bodyparser=require('body-parser');
const express=require('express');
const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
var data=[
    {id:1,name:"Item 1"},
    {id:2,name:"Item 2"},
]

app.post("/try",(req,res)=>{
    const {item,name}=req.body;
    res.json({item,name});  
});

app.listen(3000,()=>{
    console.log("Server Started!!")
});