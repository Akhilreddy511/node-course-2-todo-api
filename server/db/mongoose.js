var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp').then(()=>{
    console.log('connected to db');
});

module.exports ={mongoose};