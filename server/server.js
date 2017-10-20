var express=require('express');
var bodyparser=require('body-parser');
var {mongoose}=require('./db/mongoose.js');

var {Todo}=require('./models/todos.js');
var {User}=require('./models/users.js');
 var app=express();
 app.use(bodyparser.json());
 app.post('/todos',(req,res)=>{
     console.log(req.body.email);
var user=new User({email:req.body.email})
user.save().then((doc)=>{
    res.send(doc);
},(e)=>{
    res.status(400).send(e);
});
 });
 app.listen(3000,()=>{
     console.log(`listening to port 3000` );
 })