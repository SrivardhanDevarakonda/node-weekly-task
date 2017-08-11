const router = require('./routerSample.js')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

let myLogger = function(req,res,next){
    res.send(req.params)
    next()
}

function dbMiddleware (req, res, next) {
  getFromDb(req.params) 
  .then(()=>{console.log('database.....')})
  .catch(next)
}

function getFromDb(roll){
    console.log(roll)
    return false
}

app.use(bodyParser.json())

app.use('/api',router)

// error middleware
app.use(function (err,req,res,next) {
    console.log('error : ',err.message)
    // res.status(500).end('error :',err.message) 
  })

app.use('/my/:id/:name',myLogger,dbMiddleware)

app.listen(3000,function(req,res){
    console.log('now started vardhan...')
})
