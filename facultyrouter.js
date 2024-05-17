const express=require('express');
const router=express.Router();
router.get('/attendance',(req,res)=>{
    console.log("done")
    res.send('Faculty attendance');
});

router.get('/lecture',(req,res)=>{
    res.send('Faculty lecture');
});

router.get('/salary',(req,res)=>{
    res.send('Faculty salary');
});

router.get('/experience',(req,res)=>{
    res.send('Faculty experience');
});

router.get('/contact',(req,res)=>{
    res.send('Faculty contact');
});
module.exports=router;