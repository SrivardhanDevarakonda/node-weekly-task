var http=require('http');

var fs=require('fs');
    fs.readFile('assignment.txt',(err,content)=>{
        if(err)throw err;

var hostname='localhost';

var port=4000;
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write(content);
    res.end('ending....');
}).listen(port,hostname);
console.log('hello srivardhan!!');
   
 });
