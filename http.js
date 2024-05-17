const http=require('http');
const fs=require('fs');

const server= http.createServer((req,res) => {
if(req.url==="/" || req.url==="/home")
{
    try
    {
        const data=fs.readFileSync('home.html','utf8');
        res.send('Home Page');
    } 
    catch(err)
    {
        res.end();
    }
}
else 
{
    res.end('Not Found') ; 
}

if(req.url==="/" || req.url==="/about")
{
    try
    {
        const data=fs.readFileSync('about.html','utf8');
        res.send('About Page');
    } 
    catch(err)
    {
        res.end();
    }
}
else 
{
    res.end('Not Found') ; 
}

if(req.url==="/" || req.url==="/contact")
{
    try
    {
        const data=fs.readFileSync('contact.html','utf8');
        res.send('Contact Page');
    } 
    catch(err)
    {
        res.end();
    }
}
else 
{
    res.end('Not Found') ; 

}

}).listen(3000,()=>{
    console.log("server started");
});