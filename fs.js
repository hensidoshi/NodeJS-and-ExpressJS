const fs=require('fs');

fs.writeFile('example.txt','Hello world',function(err)
{
    if(err) throw err;
    console.log('Saved!');
});

fs.readFile('example.txt','utf-8',(err,dataRead) => {
    if(err)
    {
        console.error('Error reading from file : ',err);
    }
    else{
        console.log('File content : ',dataRead);
    }
});

fs.appendFile('example.txt','This is my text',function(err)
{
    if (err) throw err;
    console.log('Updated!');
});

fs.unlink('example.txt',function(err)
{
    if (err) throw err;
    console.log('File deleted!');
});

fs.rename('example.txt','newfile.txt',function(err)
{
    if (err) throw err;
    console.log('File Renamed!');
});