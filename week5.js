const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.sendFile('/file.html',{root:path.join(__dirname)})
})

app.use(bodyParser())

app.post('/append',function(req,res,next){
    let text = req.body.p1
     fs.appendFile('appendpopopFile.txt',text,'utf8',function(err,data){
          if(err) next(err)
              //res.sendFile('/appendFile.txt',{root:path.join(__dirname)})
     }) 
})

// error middleware
app.use(function (err,req,res,next) {
    console.log('error : ',err.message)
     res.send('page not found') 
  })

app.listen(3000)
