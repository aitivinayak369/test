const {mongoose}=require('./../server/db/mongoose');
const {ObjectID}=require('mongodb')
const {User}=require('./../server/models/users');
var id='59eb6f10b0eaa4d423fbc6b8';
// User.find({_id:id}).then((docs)=>{
//     console.log('docs',docs);
// })
// User.findOne({_id:id}).then((doc)=>{
// console.log('doc',doc);
// });
if(ObjectID.isValid(id))
{
    console.log('exists');
}
else{
    console.log('invalid')
}
User.findById(id).then((doc)=>{
    if(doc==null)
    {
        console.log('id not found')
    }
 
}).catch((e)=>{
    console.log(e)
});