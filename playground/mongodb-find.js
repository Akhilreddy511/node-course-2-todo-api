var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        console.log('unable to connect to DataBase',err)
    }
    console.log('successfully connected to db');
    const db = client.db('TodoApp');

    // db.collection('Users').find({_id:new ObjectId('')}).toArray().then((doc)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(doc,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch data',err);
    // })

    db.collection('Users').find({name:'akhil'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    })
    client.close();
})