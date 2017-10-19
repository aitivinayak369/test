const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/data',(err,db)=>{
    if(err)
    {
       
    }
    console.log('success');
db.collection('student').findOneAndUpdate({name:'sunny1'},{$inc:{
    age:2}},{returnOriginal:false}).then((result)=>{
    console.log(result);
})
db.close();
});