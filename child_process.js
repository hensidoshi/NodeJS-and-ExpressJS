const {exec}=require('child_process');
console.log("Server started 3000 for Student");
exec('node child_process_2',(err,out)=>{
    if(err){
        console.log(err);
        return
    }
        console.log(out);
});