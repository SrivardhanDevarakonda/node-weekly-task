const express = require('express')
const route = express.Router()

i = 1

route.get('/',function(req,res){
    console.log(i++,'get')
    res.send('{type : GET}')
})

route.post('/',function(req,res){
    res.send({type : 'POST',
               name : req.body.name,
               id : req.body.id
            })
})

route.put('/:name',function(req,res){
    res.send('{type : PUT}')
})

route.delete('/:name',function(req,res){
    res.send('{type : DELETE}')
})

module.exports = route