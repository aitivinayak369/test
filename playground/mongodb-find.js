const {MongoClient}=require('mongodb');
const {ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/data',(err,db)=>{
    if(err)
    {
        
    }
    console.log('success');
    db.collection('student').find().toArray().then((docs)=>{
        console.log(JSON.stringify(docs));
    }
    );
db.close();
});