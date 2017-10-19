const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/data',(err,db)=>{
    if(err)
    {
       
    }
    console.log('success');
db.collection('student').findOneAndDelete({name:'sunny'}).then((result)=>{
    console.log(result);
})
db.close();
});