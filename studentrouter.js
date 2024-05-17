const express=require('express');
const router=express.Router();
router.get('/student/attendance',(req,res)=>{
    res.send('student attendance');
});

router.get('/student/LMS',(req,res)=>{
    res.send('student LMS');
});

router.get('/student/contact',(req,res)=>{
    res.send('student contact');
});
module.exports=router;