// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/TodoApp').then(()=>{
//     console.log('connected to db');
// });
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

// var saveFile = new Todo({
//     text:'testing to save todo'
// });

// saveFile.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(e);
// })

 module.exports = Todo;