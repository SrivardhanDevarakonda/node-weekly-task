var express = require('express')
//console.log(typeof express)
//console.log('first : ',express)
var path = require('path')
console.log(path)
var app = express() //creates an express application
//console.log(typeof app)
//console.log('second : ',app)
var bodyParser = require('body-parser')
console.log(bodyParser)
console.log(__dirname)

app.use(bodyParser());

app.use('/srivi', express.static(__dirname + '/homework'))
//console.log(root)
app.get('/', function (req, res) {

  res.sendFile('calculator.html',{ root : path.join(__dirname, '/homework')})

})
app.post('/', function(req, res){

let a = parseInt(req.body.t1);
let b = parseInt(req.body.t2);
let op= req.body.t3;
let result = 0;

  if(op === 'add'){
    result = a+b;
  }
  else if(op === 'sub'){
    result = a-b;
  }
  else if(op === 'mul'){
    result=a*b;
  }
  else if(op === 'div'){
    result = a/b;
  }
  res.end(result.toString());
})

var server = app.listen(3000 , function(){
  var add = server.address().address
  var port = server.address().port
  console.log("express example is running on http://%s:%s",add,port)
})


