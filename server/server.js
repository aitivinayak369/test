var express=require('express');
var bodyparser=require('body-parser');

const {ObjectID}=require('mongodb')
var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/todos.js');
var {User}=require('./models/users.js');
 var app=express();
 const port=process.env.PORT||3000;
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
 app.get('/todos',(req,res)=>{
     User.find().then((docs)=>{

     res.send({docs});
     },(e)=>{res.status(400).send(e)})
 })
 app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }
    User.findById(id).then((doc)=>{
        if(!doc)
        {
            return res.status(404).send();
        }
        res.send({doc})
    }).catch((e)=>{
        res.status(400).send();
    });
 });
 app.listen(port,()=>{
     console.log(`listening to port ${port}` );
 })
 module.exports={app};