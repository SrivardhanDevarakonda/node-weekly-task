var http=require('http')
var fs=require('fs')
var path='homework'

fs.readdir(path,(err,files)=>{
if(err)throw err;
console.log(files);
console.log();
for(i=0;i<files.length;i++){
    var p=path+'/'+files[i];
    console.log(files[i]);
    fs.readFile(p,'utf8',(err,data)=>{
        if(err)console.log(err);
        console.log(data);
        console.log();
    });

}
});


/*http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('files printed..');
}).listen(4500,'localhost');

console.log('server running on http://localhost:4500');*/