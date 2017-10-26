const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {User}=require('./../server/models/users');
const {Todo}=require('./../server/models/todos');

// User.remove({}).then((result)=>{
//     console.log(result);
// })
User.findByIdAndRemove('59f090bc1a4c4a01aa2aa0d1').then((doc)=>{
console.log(doc);
})