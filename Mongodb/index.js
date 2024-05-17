const express=require('express');
const mongoose=require('mongoose');
const student=require('./model');
const app=express();

//mongoose.connect("mongodb+srv://hensidoshi711:12345@cluster0.he52sfz.mongodb.net/Student?retryWrites=true&w=majority")
mongoose.connect("mongodb://localhost:27017/D2D").then(()=>{

    app.get('/student',async(req,res)=>{
        const data=await student.find();
        res.send(data);
    });

    app.get('/student/:id',async(req,res)=>{
        const data=await student.findOne();
        res.send(req.params.id);
    });

    app.delete('/student/:id',async(req,res)=>{
        const data=await student.delete();
        res.send(data);
    });

    app.post('/student',async(req,res)=>{
        const st=new student(req.body);
        await st.save();
    });

    app.patch('/student/:id',async(req,res)=>{
        const data=await student.findOneAndUpdate({id:req.params.id},req.body);
    });

});
app.listen(3000,()=>{
    console.log('Server started');
});