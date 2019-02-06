var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('unable to connect to DataBase',err)
    }
    console.log('successfully connected to db');
    const db = client.db('TodoApp');

    // db.collection('Users').deleteOne({name:'akhil'}).then((result)=>{
    //     console.log(result);
    // })
    // client.close();

    // db.collection('Users').deleteMany({name:'akhil'}).then((result)=>{
    //         console.log(result);
    //     })
    //     client.close();
});