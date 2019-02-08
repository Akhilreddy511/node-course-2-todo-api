var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        minlength:1,
        require:true,
        trim:true
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

module.exports = {Todo};