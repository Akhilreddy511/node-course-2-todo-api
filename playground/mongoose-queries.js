
var ObjectID = require('mongodb').ObjectID;

var mongoose = require('./../server/db/mongoose');
var Todos = require('./../server/models/user');
var User = require('../server/models/user');

 var id = 'c5e640541f8a732e8d57c6c';

if(!ObjectID.isValid(id)){
    console.log('Id is not vaild');
}

// Todos.find().then((todo)=>{
//     console.log(todo);
// },(e)=>{
//     console.log('unable to find the data');
// })

User.findById(id).then((user)=>{
    console.log(user);
},(e)=>{
    console.log('unable to find data')
}).catch((e)=> console.log(e));