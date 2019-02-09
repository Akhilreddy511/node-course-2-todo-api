var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email:{
        type:String,
        minlength:1,
        trim:true,
        required:true 
    }
});

// var saveFile = new User({
//     email:'    akhilreddy@gmail.com   '
// });

// saveFile.save().then((doc)=>{
//     console.log(doc);
// },(e)=>{
//     console.log(e);
// })


module.exports=User;