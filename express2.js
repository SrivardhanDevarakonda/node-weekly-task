const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser())

app.get('/', function (req, res) {
	res.sendFile('calculator.html',{root : path.join(__dirname, '/homework')})
})

app.post('/', function(req,res){
	let a = parseInt(req.body.t1);
	let b = parseInt(req.body.t2);
	const op = req.body.t3;
	let result=0;
	switch(op){
		case 'add' : result = a+b; break;
		case 'sub' : result = a-b; break;
		case 'mul' : result = a*b; break;
		case 'div' : result = a/b; break;
	}
	res.end(result.toString());
	
	//res.end(JSON.stringify(req.body));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


