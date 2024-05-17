const path = require('path');
const file1="E:/WT-DU/div1.html"
const file2="E:/WT-DU/div2.html"
console.log(path.basename(file1));

const obj={
    dir:"/darshan university",
    base:"B.Tech CSE"
}
console.log(path.format(obj))

var ext=path.extname("E:/NODE/path.js")
console.log(ext)

var x=path.join('file1','file2')
console.log(x)

console.log(path.isAbsolute("E:/NODE/path.js"))
console.log(path.relative("E:/WT-DU/div1.html","E:/WT-DU/div2.html"))

var directories = path.dirname("E:/NODE/path.js")
console.log(directories)

var x = path.normalize("Users/Refsnes/../Jackson")
console.log(x)

var path1=path.parse("E:/WT-DU/div1.html")
console.log(path1)