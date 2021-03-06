var express = require('express');
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;

 var mongoose = require('./db/mongoose');
var Todo = require('./models/todo');
var User = require('./models/user');

var app = express();

app.use(bodyParser.json())

app.post('/todos',(req,res)=>{

    console.log(req.body);
debugger;
    var todo = new Todo({
        text:req.body.text
    });
debugger;
    todo.save().then((doc)=>{
        res.send(doc)
    },(e)=>{
        res.status(400).send(e)
    });
});

app.get('/todos',(req,res)=>{
    // console.log()
    User.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    })
})
app.get('/todos:id',(req,res)=>{
    console.log(req.params);
    var id = req.params.id;

    if(ObjectID.isValid(id)){
        console.log('entered valid id')
    }else{
        res.status(404).send();
    }

     User.findById(id).then((doc)=>{
         console.log(doc);
         res.send(doc);
     },(e)=>{
         res.send({message:'unable to fetech data'});
     })

})
app.listen('3000',()=>{
    console.log('am listing at port number 3000');
})

