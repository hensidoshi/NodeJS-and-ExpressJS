const express=require('express');
const app=express();
var data=[
    {id:1,name:"Item 1"},
    {id:2,name:"Item 2"},
]

app.get('/data',(req,res)=>
{
    res.json(data);
});

app.get('/data/:id',(req,res)=>
{
    console.log(req.params);
    res.json(req.params.id);
});

app.post('/data/:name',(req,res)=>
{
    const name=req.params.name;
    const id=data.length+1;
    const newdata={id,name};
    data.push(newdata);
    res.json(data);
});

app.delete('/data/:id',(req,res)=>
{
    const id=req.params.id;
    const item=data.find(item=>item.id==id);
    if(item)
    {
        data=data.filter(item=>item.id!=id);
        res.json(data);
    }
    else{
        res.send("Data not found");
    }
});

app.put('/data/:id/:name',(req,res)=>
{
    const id=req.params.id;
    const name=req.params.name;
    const item=data.find(item=>item.id==id);
    if(item)
    {
        item.name=name;
        res.json(data);
    }
    else{
        res.send("Data not found");
    }
});

app.listen(3000,()=>{
    console.log("Server Started!!")
});
