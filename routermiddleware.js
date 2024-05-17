const express=require('express');
const app=express();
const facultyrouter=require('./facultyrouter');
const studentrouter=require('./studentrouter');
app.use('/faculty',facultyrouter);
app.use('/student',studentrouter);
app.listen(3000,()=>{
    console.log('server started');
});