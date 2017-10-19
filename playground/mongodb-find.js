const {MongoClient}=require('mongodb');
const {ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/data',(err,db)=>{
    if(err)
    {
        
    }
    console.log('success');
    db.collection('student').find({_id:new ObjectID('59e8b24173f5e9adebf6dd31')}).count().then((docs)=>{
        console.log(JSON.stringify(docs));
    }
    );
db.close();
});