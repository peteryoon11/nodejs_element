const file=require('fs');
var data=file.readFileSync('data.txt',{encoding:"utf8"});
console.log(data);
console.log("--------------");
var data2=file.readFile('data.txt',{encoding:"utf8"},(err,data)=>{
   console.log(3);
    console.log(err,data);
});
console.log(4);
console.log(data2);

const http = require('http');
const port=1234;
http.createServer().listen(port,'127.0.0.1',()=>{
    console.log('Server running at http:// ${port}');
});
