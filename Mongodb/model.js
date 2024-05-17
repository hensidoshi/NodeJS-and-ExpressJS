const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    student_id:String,
    student_name:String
});
module.exports=mongoose.model('Student',schema);