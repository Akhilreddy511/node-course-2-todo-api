var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('unable to connect to DataBase',err)
    }
    console.log('successfully connected to db');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({_id: new ObjectId('5c5a6ff265028110fc3d43a9')},
    {$set:{
        name:'munna reddy'
    },
    $inc:{
        age:1
    }
}).then((res)=>{
        console.log('updated successfully');
    })
}); 