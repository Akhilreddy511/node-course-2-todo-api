var Mongoclient = require('mongodb').MongoClient;

Mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err){
    console.log("unable to connect to data base" );
}else{
    console.log('Connected to MongoDB server');
}
const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//     text: 'Somthing to do',
//     completed:false
// },(err,result)=>{
//  if(err){
//      console.log('unable to insert', err);
//  }else{
//     console.log(JSON.stringify(result.ops,undefined,2));
//  }
// })

db.collection('Users').insertOne({
   
    name:'shiva',
    age:29,
    location:'Nalgonda '    
},(err,res)=>{
    if(err){
        console.log('unable to insert to DataBase',err);
    }else{
        console.log(res.ops[0]._id.getTimestamp());
    }
})
client.close();
});