var express = require('express')
var moment = require('moment')

var app = express('')

app.get('/:string',(req,res) => {
  var str = req.params.string

  if(/^\d+$/.test(str)){
    var uxTime = str
    var natTime = moment.unix(str).format('LL')
  }

  else if(moment(str).isValid()){
    var natTime = moment(str).format('LL')
    var uxTime = moment(natTime).unix() 
  }
  else{
     uxTime = null
     natTime = null
  //   console.log("I'm not valid");
   }
//if string is in unix time, convert to natural language time

    res.json({"unix" : uxTime ,"natural" : natTime})
})

app.listen(3000)
