var express = require('express')
var app = express()

 var myLogger= function  (req, res, next) {
  console.log('LOGGED')
  res.send('LOGGED started......')
  next()
}
//app.use(myLogger)

var timeLogger= function  (req, res, next) {
  console.log(Date())
  // res.send('ended.....')
}
//app.use(timeLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/time',myLogger,timeLogger, function (req, res) {
  res.send('time related api!')
    // res.send('time logger ')
})

app.listen(3000)