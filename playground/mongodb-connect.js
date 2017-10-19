const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/data',(err,db)=>{
    if(err)
    {
       
    }
    console.log('success');
db.collection('student').insert([{name:'vivek'},{name:'sun'}],(err,result)=>
{
    console.log(result.ops[1]._id.getTimestamp().getDate());
});
db.close();
});